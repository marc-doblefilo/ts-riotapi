import { EndpointsEnum } from '../../../utils/EndpointEnum';
import { AccountV1 } from '../../account-v1/domain/AccountV1';
import { IRiotApiService } from '../domain/IRiotApiService';
import { Regions } from '../domain/Regions';

export class RiotApiService implements IRiotApiService {
  private readonly baseUrl = 'api.riotgames.com';

  constructor(private readonly apiKey: string) {}

  private getBaseUrlByRegion(region: Regions): string {
    return `https://${region}.${this.baseUrl}`;
  }

  private generateUrl(query: {
    baseUrl: string;
    endpoint: EndpointsEnum;
    params: Record<string, string>;
  }): URL {
    const path = query.endpoint.replace(/\$\{(\w+)\}/g, (_, key) => {
      if (query.params[key] === undefined) {
        throw new Error(`Missing parameter: ${key}`);
      }
      return query.params[key];
    });

    // Construct the full URL using the base URL and the dynamically generated path
    const url = new URL(`/riot/account${path}`, query.baseUrl);
    url.searchParams.append('api_key', this.apiKey);
    return url;
  }

  public async getAccountByRiotId(query: {
    gameName: string;
    tagLine: string;
    region: Regions;
  }): Promise<AccountV1> {
    const { region, gameName, tagLine } = query;

    const url = this.generateUrl({
      baseUrl: this.getBaseUrlByRegion(region),
      endpoint: EndpointsEnum.ACCOUNTV1BYID,
      params: { gameName, tagLine },
    });

    console.info(url);

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
