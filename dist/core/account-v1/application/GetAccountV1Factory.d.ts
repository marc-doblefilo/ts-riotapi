import { Regions } from '../../common/domain/Regions';
import { AccountV1 } from '../domain/AccountV1';
import { AccountV1Repository } from '../infrastructure/AccountV1Repository';
export declare class GetAccountV1Factory {
    private readonly repository;
    constructor(repository: AccountV1Repository);
    getAccountV1ByRiotId(query: {
        gameName: string;
        tagLine: string;
        region: Regions;
    }): Promise<AccountV1>;
}
