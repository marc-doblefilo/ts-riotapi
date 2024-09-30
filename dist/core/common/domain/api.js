"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiotApi = void 0;
const GetAccountV1Factory_1 = require("../../account-v1/application/GetAccountV1Factory");
const AccountV1Repository_1 = require("../../account-v1/infrastructure/AccountV1Repository");
class RiotApi {
    constructor(apiKey) {
        this.accountV1Repository = new AccountV1Repository_1.AccountV1Repository(apiKey);
    }
    AccountV1() {
        return new GetAccountV1Factory_1.GetAccountV1Factory(this.accountV1Repository);
    }
}
exports.RiotApi = RiotApi;
