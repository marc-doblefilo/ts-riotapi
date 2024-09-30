"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountV1Repository = void 0;
const AccountV1_1 = require("../domain/AccountV1");
class AccountV1Repository {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'api.riotgames.com/riot/account';
    }
    async getAccountV1ByRiotId(query) {
        const response = await fetch(`https://${query.region}.${this.baseUrl}/v1/accounts/by-riot-id/${encodeURIComponent(query.gameName)}/${encodeURIComponent(query.tagLine)}?api_key=${encodeURI(this.apiKey)}`);
        if (!response.ok) {
            throw new Error('Failed to fetch account by Riot Id: ' + response.statusText);
        }
        const data = await response.json();
        return new AccountV1_1.AccountV1({
            puuid: data.puuid,
            gameName: data.gameName,
            tagLine: data.tagLine,
        });
    }
}
exports.AccountV1Repository = AccountV1Repository;
