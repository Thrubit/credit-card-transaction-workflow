exports.handler = async (event) => {
  const { accountId, amount, currency, transactionId } = event;

  const reservationId = `RES-${transactionId || Date.now()}`;

  return {
    reservationId,
    accountId,
    amount,
    currency,
    transactionId,
    status: "RESERVED",
    reservedAt: new Date().toISOString()
  };
};
