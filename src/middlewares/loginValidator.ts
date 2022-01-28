import { RequestHandler } from 'express';
import {check, validationResult} from 'express-validator';

//This is used to check errors for login process
export const loginValidation = [
    check("userName", "Username is required.").trim().notEmpty(),
    check("password", "Password is required.").trim().notEmpty()
]


export const  checkErrorsForLogin:RequestHandler = (req, res, next) => {

    //This array is used to store errors which get from validation result 
    const errors: Array<String> = validationResult(req).array().map(error => error.msg)
    // If errors are exist, go again login page, if not go next
    errors.length > 0 ? res.render('login', {errors}) : next()

}






