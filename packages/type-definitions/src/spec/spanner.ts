import type { OverrideVersionedType } from '@polkadot/types/types';
// todo: AccountInfo hardcoded for Substrate v3.0.0 https://github.com/polkadot-js/api/issues/3641
const versioned: OverrideVersionedType[] = [
  {
    minmax: [undefined, undefined],
    types: { AccountInfo: 'AccountInfoWithDualRefCount' }
  },
  {
    minmax: [105, undefined],
    types: {
      DpoInfo: {
        index: 'DpoIndex',
        name: 'Text',
        token_id: 'CurrencyId',
        manager: 'AccountId',
        target: 'Target',
        target_maturity: 'BlockNumber',
        target_amount: 'Balance',
        target_yield_estimate: 'Balance',
        target_bonus_estimate: 'Balance',
        issued_shares: 'Balance',
        share_rate: '(Balance, Balance)',
        fifo: 'Vec<Buyer>',
        base_fee: 'u32',
        fee: 'u32',
        fee_slashed: 'bool',
        vault_deposit: 'Balance',
        vault_withdraw: 'Balance',
        vault_yield: 'Balance',
        vault_bonus: 'Balance',
        total_fund: 'Balance',
        total_yield_received: 'Balance',
        total_bonus_received: 'Balance',
        total_milestone_received: 'Balance',
        blk_of_last_yield: 'Option<BlockNumber>',
        blk_of_dpo_filled: 'Option<BlockNumber>',
        expiry_blk: 'BlockNumber',
        state: 'DpoState',
        referrer: 'Option<AccountId>',
        fare_withdrawn: 'bool',
        direct_referral_rate: 'u32'
      },
      Target: {
        _enum: {
          Dpo: '(DpoIndex, Balance)',
          TravelCabin: 'TravelCabinIndex'
        }
      },
      DpoMemberInfo: {
        buyer: 'Buyer',
        share: 'Balance',
        referrer: 'Referrer'
      },
      TravelCabinBuyerInfo: {
        buyer: 'Buyer',
        purchase_blk: 'BlockNumber',
        yield_withdrawn: 'Balance',
        fare_withdrawn: 'bool'
      }
    }
  }
];

export default versioned;
