import { describe, expect, it } from 'vitest';
import { AccountV1Repository } from '../../../src/core/account-v1/infrastructure/AccountV1Repository';
import { Regions } from '../../../src/core/common/domain/Regions';

const accountV1Repository = new AccountV1Repository(
  process.env.RIOT_DEVELOPMENT_KEY || '',
);

describe('AccountV1Repository', () => {
  describe('getAccountV1ByRiotId', () => {
    it('return AccountV1', async () => {
      const accountV1 = await accountV1Repository.getAccountV1ByRiotId({
        gameName: 'D0NATELL0',
        tagLine: 'MDK',
        region: Regions.EUROPE,
      });

      expect(accountV1).toBeDefined();
      expect(accountV1.gameName).toBe('D0NATELL0');
      expect(accountV1.tagLine).toBe('MDK');
    });
  });
});
