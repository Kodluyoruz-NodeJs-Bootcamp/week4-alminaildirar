import { RequestHandler } from "express";


//This is used to if the user is already logged in to prevent it from being able to go to login page via url.
export const alreadyLogin: RequestHandler = (req, res, next) => {
  try {
    if (req.session.userID) {
      return res.redirect("/");
    }
    next();
  } catch (Error) {
    throw new Error();
  }
};
