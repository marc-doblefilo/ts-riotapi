"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountV1 = void 0;
class AccountV1 {
    constructor(query) {
        this.gameName = query.gameName;
        this.tagLine = query.tagLine;
    }
}
exports.AccountV1 = AccountV1;
