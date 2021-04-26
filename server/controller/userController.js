import userInfo from "../model/userModel";
import bcrypt from "bcrypt";
import Response from "../helpers/response";
import { generateUserToken } from "../helpers/token";

class UserController{

    static SignUp = async(req, res) =>{

        let{
            email,
            password,
        } =req.body;
          
        password = bcrypt.hashSync(password,10);
        req.body.password = password;

        const isEmailExist = await userInfo.findOne({email:email});

        if (isEmailExist){
            return Response.errorMessage(res, "Email is duplicated", 409);
        }

        const data = await userInfo.create(req.body);

        if (!data){
            return Response.errorMessage(res,"Account created failed", 417);
            //console.log(data);
        }
        else{
            let { password, ...dataWithoutPassword } = data._doc;
            //console.log(password);

            return Response.successMessage(res, "Account created successfully", dataWithoutPassword, 201);
             
        }

    };

    static SignIn = async(req,res) => {
        let { email, password } = req.body;

        const isUserExist = await userInfo.findOne({ email:email});

        const is_passwordExist = bcrypt.compareSync(password, isUserExist.password);

        if (!isUserExist){
            return Response.errorMessage(res, "login failed", 401);
        }
        if (is_passwordExist){
            const data =isUserExist;
            const token = generateUserToken({
                id:data.id,
                email: data.email,
                role: data.role,
                passwordChangedTime:data.passwordChangedTime
            });

            let { password, ...dataWithoutPassword } = data._doc;
            
            return Response.successMessage(res, "login successfully",{token, dataWithoutPassword }, 200);
        }
        return Response.errorMessage(res, "password invalid", 401);

        
    };

    static changePassword = async(req, res) =>{

        let{
            oldPassword,
            newPassword,
            confirmPassword
        }= req.body

        const userId = req.body.userId; 
        const userDetails = await userInfo.findById(userId);

        if (bcrypt.compareSync(oldPassword, userDetails.password)){

            if (newPassword === confirmPassword){

                //console.log(userDetails);

                const password = bcrypt.hashSync(newPassword,10);
                const passwordChangedTime = Date.now();
                const userUpdated = await userInfo.findByIdAndUpdate(userId,{

                    password:password,
                    passwordChangedTime: passwordChangedTime
                })

                return Response.successMessage(res, "password has changed", userUpdated, 200)
            }

            return Response.errorMessage(res, "new password and old password don't match", 404)
        }
        return Response.errorMessage ( res, "Old password provided is invalid", 417)
    }

    static updateUser =  async (req, res) =>{
        
        let{
            firstname,
            lastname,
            phonenumber,
            gender
            }
             = req.body;

        const userId = req.body.userId;
        const data =await userInfo.findByIdAndUpdate(userId,{
            firstName:firstname,
            lastName:lastname,
            phoneNumber:phonenumber,
            gender:gender
        });
        //console.log(data);

        if(!data){
            return Response.errorMessage(res,"update failed",417);
            
        }

        const dataUpdated = await userInfo.findById(userId);
        return Response.successMessage(res, "Data updated successfully",dataUpdated, 200)
    };
}
export default { UserController };
