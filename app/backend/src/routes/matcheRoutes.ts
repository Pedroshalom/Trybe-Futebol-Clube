import { Router, Request, Response } from 'express';
import MatcheController from '../controllers/MatcheController';

const matcheController = new MatcheController();

const matcheRouter = Router();

matcheRouter.get('/', (req: Request, res: Response) => matcheController.getAll(req, res));

export default matcheRouter;
