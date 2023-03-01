import { Request, Response } from 'express';
import TeamService from '../services/teamService';

class TeamController {
  constructor(private teamService = new TeamService()) {}
  public async getAll(_req: Request, res: Response): Promise<Response | void> {
    const response = await this.teamService.getAll();
    res.status(200).json(response);
  }
}

export default TeamController;
