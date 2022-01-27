//This middleware is used to check before create user
import { RequestHandler } from 'express';
import {check, validationResult} from 'express-validator';
import { getRepository } from 'typeorm';
import { User } from '../entity/User';



export const checkErrorsForRegister:RequestHandler = async(req, res, next) => {

    //This array is used to store errors which get from validation result
    const errors: Array<String> = validationResult(req).array().map(error => error.msg)
    
    //Check the username is already exist?
    if(await getRepository(User).findOne({userName: req.body.userName})){
        errors.push('Username already exist')   
    }
   
    //If there is error go again register page, if not go next 
    errors.length > 0 ? res.render('register', {errors}) : next()
}

//This is used to check errors for register process
export const registrationValidation = [
    check("firstName", "First name is required.").notEmpty(),
    check("lastName", "Last name is required.").notEmpty(),
    check("userName", "Username is required.").notEmpty().isLength({min:3}).withMessage("Username must be at least 3 characters long."),
    check("password", "Password is required.").notEmpty().isLength({min:3}).withMessage("Password must be at least 3 characters long."),
    //This custom function is used to check if password and confirmpassword are match or not.
    check("password2").custom((value, {req}) => {
        if(value != req.body.password){
            throw new Error("Passwords do not match");
        }
        return true;
    })

]



