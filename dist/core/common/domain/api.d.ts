import { GetAccountV1Factory } from '../../account-v1/application/GetAccountV1Factory';
export declare class RiotApi {
    private readonly accountV1Repository;
    constructor(apiKey: string);
    AccountV1(): GetAccountV1Factory;
}
