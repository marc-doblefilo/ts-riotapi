import { IRiotApiService } from '../../common/domain/IRiotApiService';
import { Regions } from '../../common/domain/Regions';
import { AccountV1 } from '../domain/AccountV1';

export class GetAccountV1Factory {
  constructor(private readonly riotApiService: IRiotApiService) {}

  public async getAccountV1ByRiotId(query: {
    gameName: string;
    tagLine: string;
    region: Regions;
  }): Promise<AccountV1> {
    return await this.riotApiService.getAccountByRiotId(query);
  }

  public async getAccountV1ByPuuid(query: {
    puuid: string;
    region: Regions;
  }): Promise<AccountV1> {
    return await this.riotApiService.getAccountByPuuid(query);
  }
}
