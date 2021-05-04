import { check, validationResult } from "express-validator";
import Response from "../helpers/response";

class Validator {
 
  static validateInput = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errormessage = errors.errors.map((e) => e.msg);
      return Response.errorMessage(res, errormessage, 400);
    }
    return next();
  };
  static newAccountSignUpRules() {
    return [
      check("email", "invalid email").isEmail(),
      check("firstName","first name must not contain special character").isAlpha(),
      check("lastName"," last name must not contain special character ").isAlpha(),
      check("password", " You need a string password").isStrongPassword(),
      check("gender", "gender should be male or female").isIn(["male","female",]),
      check("role", "role should be admin or user").isIn(["admin", "user"]),
      //check("address", "Address must not contain special character").isAlpha(),
      // check("phoneNumber", "Phone number must be number").isNumeric(),
    ];
  }

  static newLoginRules() {
    return [
      check("email", "invalid email").isEmail(),
      check("password","password must contain 8 characters").isStrongPassword(),
    ];
  }

  static newUpdateUserInfo() {
    return [
      check("firstName","first name must not contain special character").isAlpha(),
      check("lastName","last name must not contain special character " ).isAlpha(),
      check("gender", "gender should be male or female").isIn(["male","female",]),
      // check("phoneNumber", "Phone number must be number").isNumeric(),
    ];
  }


  static transactionRules() {
    return [
      check("transactionType","transaction Type  should be income , savings, expense"
      ).isIn(["income", "savings", "expense"]),
      check("amount", "amount should be valid").isNumeric(),
      check("categoryId", "categoryId should be valid mongoId").isMongoId(),
    ];
  }
  
  static validateTransactionType = async (req, res, next) => {
    const transIdFromParams = req.params.id;
    let { transactionType, categoryId } = req.body;

    if (transactionType === "savings") {
      req.body.savingCategoryId = categoryId;
     return next();
    } else if (transactionType === "income") {
      req.body.incomeCategoryId = categoryId;
     return next();
    } else {
      req.body.expenseCategoryId = categoryId;
      return next();
    }
  };

  
}
export default Validator;
