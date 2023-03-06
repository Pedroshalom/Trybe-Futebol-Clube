import { Request, Response } from 'express';
import MatcheService from '../services/MetcheService';

class MatcheController {
  constructor(private matcheService = new MatcheService()) {}

  public async getAll(req: Request, res: Response): Promise<Response | void> {
    const { inProgress } = req.query;
    const matches = await this.matcheService.getAll(inProgress);
    res.status(200).json(matches);
  }
}

export default MatcheController;
