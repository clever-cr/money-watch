import { check, validationResult} from "express-validator";
import Response from "../helpers/response";

class Validator {

    static newAccountSignUpRules(){
        return [
            check("email", "invalid email").isEmail(),
            check("firstName", "first name must not contain special character").isAlpha(),
            check("lastName", " last name must not contain special character ").isAlpha(),
            check("password"," You need a string password").isStrongPassword(),
            check("gender", "gender should be male or female").isIn(["male","female"]),
            check("role","role should be admin or user").isIn(["admin","user"]),
            //check("address", "Address must not contain special character").isAlpha(),
            check("phoneNumber", "Phone number must be number").isNumeric(),


        ];
    }

    static newLoginRules(){
        return [
            check("email","invalid email").isEmail(),
            check("password", "password must contain 8 characters").isStrongPassword(),
        ];
    }
    static validateInput = (req, res, next) =>{
        const errors = validationResult(req);
         if (!errors.isEmpty()){

            const errormessage = errors.errors.map(e=> e.msg);
            return Response.errorMessage(res, errormessage, 400);
         }
         return next();
    }
}
export default Validator;