import { Regions } from '../../common/domain/Regions';
import { AccountV1 } from '../domain/AccountV1';
import { AccountV1Repository } from '../infrastructure/AccountV1Repository';

export class GetAccountV1Factory {
  constructor(private readonly repository: AccountV1Repository) {}

  public async getAccountV1ByRiotId(query: {
    gameName: string;
    tagLine: string;
    region: Regions;
  }): Promise<AccountV1> {
    return await this.repository.getAccountV1ByRiotId(query);
  }
}
