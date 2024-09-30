import { Regions } from '../../common/domain/Regions';
import { AccountV1 } from '../domain/AccountV1';

export class AccountV1Repository {
  private readonly baseUrl = 'api.riotgames.com/riot/account';

  constructor(private readonly apiKey: string) {}

  public async getAccountV1ByRiotId(query: {
    gameName: string;
    tagLine: string;
    region: Regions;
  }): Promise<AccountV1> {
    const response = await fetch(
      `https://${query.region}.${this.baseUrl}/v1/accounts/by-riot-id/${encodeURIComponent(query.gameName)}/${encodeURIComponent(query.tagLine)}?api_key=${encodeURI(this.apiKey)}`,
    );

    if (!response.ok) {
      throw new Error(
        'Failed to fetch account by Riot Id: ' + response.statusText,
      );
    }

    const data = await response.json();

    return new AccountV1({
      puuid: data.puuid,
      gameName: data.gameName,
      tagLine: data.tagLine,
    });
  }
}
