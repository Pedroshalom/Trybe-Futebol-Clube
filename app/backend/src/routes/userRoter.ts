import { Router, Request, Response } from 'express';
import UserService from '../services/UserService';
import UserController from '../controllers/UserControler';
import validateLogin from '../middleware/validateLogin';

const routerUser = Router();

const userService = new UserService();
const userController = new UserController(userService);

routerUser.post(
  '/',
  validateLogin,
  (req: Request, res: Response) => userController.login(req, res),
);

export default routerUser;