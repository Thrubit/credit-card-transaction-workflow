exports.handler = async (event) => {
  const { accountId, amount, currency } = event;

  const mockBalances = {
    "ACC-123456": 10000,
    "ACC-LOWFUNDS": 50
  };

  const availableBalance =
    mockBalances[accountId] !== undefined ? mockBalances[accountId] : 2000;

  const hasSufficientFunds = availableBalance >= amount;

  return {
    accountId,
    currency,
    requestedAmount: amount,
    availableBalance,
    hasSufficientFunds
  };
};
