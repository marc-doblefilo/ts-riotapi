import { Regions } from '../../common/domain/Regions';
import { AccountV1 } from '../domain/AccountV1';
export declare class AccountV1Repository {
    private readonly apiKey;
    private readonly baseUrl;
    constructor(apiKey: string);
    getAccountV1ByRiotId(query: {
        gameName: string;
        tagLine: string;
        region: Regions;
    }): Promise<AccountV1>;
}
