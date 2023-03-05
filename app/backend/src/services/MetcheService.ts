import { ModelStatic } from 'sequelize';
import Matches from '../database/models/Matches';
import Team from '../database/models/Team';

class MatcheService {
  model: ModelStatic<Matches> = Matches;

  async getAll(): Promise<Matches[]> {
    const matches = await this.model.findAll(
      { include: [
        { model: Team, as: 'homeTeam', attributes: ['teamName'] },
        { model: Team, as: 'awayTeam', attributes: ['teamName'] },
      ],
      },
    );
    return matches;
  }
}

export default MatcheService;
