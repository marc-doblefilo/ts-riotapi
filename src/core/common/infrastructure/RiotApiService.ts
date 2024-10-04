import { AccountV1 } from '../../account-v1/domain/AccountV1';
import { IRiotApiService } from '../domain/IRiotApiService';
import { Regions } from '../domain/Regions';

export class RiotApiService implements IRiotApiService {
  private readonly baseUrl = 'api.riotgames.com/riot/account';

  constructor(private readonly apiKey: string) {}

  private getBaseUrlByRegion(region: Regions): string {
    return `https://${region}.${this.baseUrl}`;
  }

  public async getAccountByRiotId(query: {
    gameName: string;
    tagLine: string;
    region: Regions;
  }): Promise<AccountV1> {
    const { region, gameName, tagLine } = query;

    const url = `${this.getBaseUrlByRegion(region)}/v1/accounts/by-riot-id/${gameName}/${tagLine}?api_key=${this.apiKey}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Failed to get account by riot id: ${response.statusText}`,
      );
    }

    const responseData = await response.json();

    return new AccountV1({ ...responseData });
  }
}
