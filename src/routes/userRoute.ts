const router = require('express').Router()
import {createUser, loginUser,getDashboardPage, logoutUser, getEditPage, editUser, deleteUser} from "../controllers/userController"
import {registrationValidation, checkErrorsForRegister} from "../middlewares/registerValidator"
import {loginValidation, checkErrorsForLogin} from '../middlewares/loginValidator'
import { editValidation, checkErrorsForEdit } from "../middlewares/editValidator"
import { hasAuth } from "../middlewares/auth"

//http://localhost:3000/users/
//Routes for register login POST, get dashboard page and logout process

router.route('/edit').put(editValidation, checkErrorsForEdit, editUser)
router.route('/edit').delete(deleteUser)
router.route('/edit').get(getEditPage)
router.route('/logout').get(logoutUser)
router.route('/register').post(registrationValidation, checkErrorsForRegister, createUser)
router.route('/login').post(loginValidation, checkErrorsForLogin, loginUser)
//Before getting dashboard page check first the user has auth or does not.
router.route('/dashboard').get(hasAuth, getDashboardPage)

const userRouter = router;
export default userRouter;