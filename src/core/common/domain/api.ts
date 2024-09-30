import { GetAccountV1Factory } from '../../account-v1/application/GetAccountV1Factory';
import { AccountV1Repository } from '../../account-v1/infrastructure/AccountV1Repository';

export class RiotApi {
  private readonly accountV1Repository: AccountV1Repository;
  constructor(apiKey: string) {
    this.accountV1Repository = new AccountV1Repository(apiKey);
  }

  public AccountV1(): GetAccountV1Factory {
    return new GetAccountV1Factory(this.accountV1Repository);
  }
}
