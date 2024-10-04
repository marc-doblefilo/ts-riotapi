import { AccountV1 } from '../../account-v1/domain/AccountV1';
import { Regions } from './Regions';

export interface IRiotApiService {
  getAccountByRiotId(query: {
    gameName: string;
    tagLine: string;
    region: Regions;
  }): Promise<AccountV1>;

  getAccountByPuuid(query: {
    puuid: string;
    region: Regions;
  }): Promise<AccountV1>;
}
