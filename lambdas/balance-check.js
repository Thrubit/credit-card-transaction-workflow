exports.handler = async (event) => {
  const { accountId, amount, currency } = event;

  const mockBalances = {
    "ACC-123456": 10000,
    "ACC-LOWFUNDS": 50
  };

  const availableBalance =
    mockBalances[accountId] !== undefined ? mockBalances[accountId] : 10000;

  const hasSufficientFunds = availableBalance >= amount;

  await new Promise((resolve) => {
    setTimeout(() => {
      console.log(
        `Balance check for account ${accountId}: Available balance is ${availableBalance} ${currency}, requested amount is ${amount} ${currency}, sufficient funds: ${hasSufficientFunds}`
      );
      resolve();
    }, 2000);
  });

  return {
    accountId,
    currency,
    requestedAmount: amount,
    availableBalance,
    hasSufficientFunds
  };
};
