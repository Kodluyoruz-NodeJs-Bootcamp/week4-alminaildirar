import { RequestHandler } from "express";
import * as jwt from "jsonwebtoken";

//This function is used to check auth permissions(session and jwt informations)
export const hasAuth: RequestHandler = async (req, res, next) => {
  //Get token from cookie
  const token = req.cookies.jwt;

  try {
    //If token is not found redirect login page
    if (!token) return res.render("login", { errors });
    //Verify token and decode jwt 
    jwt.verify(token, 'hush-hush', (err, decoded) => {
      if (decoded.userID && decoded.browserInfo) {
        // browser information and userID received from both session and jwt were compared with each other.
        if (
          req.session.userID === decoded.userID &&
          decoded.browserInfo === req.session.browserInfo
        ) {
          next();
        } else {
          res.render("login", { errors });
        }
      } else {
        res.render("login", { errors });
      }
    });
  } catch (err) {
    throw err;
  }
};

const errors: Array<String> = [];
