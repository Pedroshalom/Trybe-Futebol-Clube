import { Request, Response } from 'express';
import MatcheService from '../services/MetcheService';

class MatcheController {
  constructor(private matcheService = new MatcheService()) {}

  public async getAll(req: Request, res: Response): Promise<Response | void> {
    const { inProgress } = req.query;
    const matches = await this.matcheService.getAll(inProgress);
    res.status(200).json(matches);
  }

  async closedMathes(req: Request, res: Response): Promise<Response | void> {
    const { id } = req.params;
    await this.matcheService.closedMatches(Number(id));
    res.status(200).json({ message: 'Finished' });
  }

  async updateMatches(req: Request, res: Response): Promise<Response | void> {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    await this.matcheService.updateMatches(Number(id), homeTeamGoals, awayTeamGoals);
    res.status(200).json({ message: 'Placar Alterado' });
  }
}

export default MatcheController;
