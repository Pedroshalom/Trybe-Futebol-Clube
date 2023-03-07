import { Router, Request, Response } from 'express';
import MatcheController from '../controllers/MatcheController';
import validateToken from '../middleware/validateToken';

const matcheController = new MatcheController();

const matcheRouter = Router();

matcheRouter.get('/', (req: Request, res: Response) => matcheController.getAll(req, res));
matcheRouter.patch('/:id/finish', validateToken, (req: Request, res: Response) =>
  matcheController.closedMathes(req, res));
matcheRouter.patch('/:id', validateToken, (req: Request, res: Response) =>
  matcheController.updateMatches(req, res));
matcheRouter.post('/', validateToken, (req: Request, res: Response) =>
  matcheController.newMatch(req, res));
export default matcheRouter;
