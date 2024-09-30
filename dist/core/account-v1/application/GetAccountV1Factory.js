"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAccountV1Factory = void 0;
class GetAccountV1Factory {
    constructor(repository) {
        this.repository = repository;
    }
    async getAccountV1ByRiotId(query) {
        return await this.repository.getAccountV1ByRiotId(query);
    }
}
exports.GetAccountV1Factory = GetAccountV1Factory;
