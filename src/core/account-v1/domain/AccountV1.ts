export class AccountV1 {
  public readonly puuid: string;
  public readonly gameName: string;
  public readonly tagLine: string;

  constructor(query: { puuid: string; gameName: string; tagLine: string }) {
    this.puuid = query.puuid;
    this.gameName = query.gameName;
    this.tagLine = query.tagLine;
  }
}
