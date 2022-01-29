import { RequestHandler } from 'express';
import {check, validationResult} from 'express-validator';

//This is used to check errors for login process
export const editValidation = [
    check("firstName", "First name is required.").trim().notEmpty(),
    check("lastName", "Last name is required.").trim().notEmpty(),
    check("userName", "Username is required.").trim().notEmpty().isLength({min:3}).withMessage("Username must be at least 3 characters long."),
]


export const  checkErrorsForEdit:RequestHandler = (req, res, next) => {

    //This array is used to store errors which get from validation result 
    const errors: Array<String> = validationResult(req).array().map(error => error.msg)
    // If errors are exist, go again login page, if not go next
    errors.length > 0 ? res.render('edit', {errors}) : next()

}
