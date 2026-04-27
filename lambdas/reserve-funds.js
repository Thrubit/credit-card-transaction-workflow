exports.handler = async (event) => {
  const { accountId, amount, currency, transactionId } = event;

  const reservationId = `RES-${transactionId || Date.now()}`;

  await new Promise((resolve) => {
    setTimeout(() => {
      console.log(
        `Reserving funds for transaction ${transactionId}: Amount ${amount} ${currency}, reservation ID ${reservationId}`
      );
      resolve();
    }, 2000);
  });

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
