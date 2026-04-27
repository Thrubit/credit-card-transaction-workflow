exports.handler = async (event) => {
  const { transaction, reservation } = event;

  const ledgerId = `LEDGER-${transaction.transactionId || Date.now()}`;

  await new Promise((resolve) => {
    setTimeout(() => {
      console.log(
        `Posting transaction ${transaction.transactionId}: Amount ${transaction.amount} ${transaction.currency}, reservation ${reservation.reservationId}, ledger entry ${ledgerId}`
      );
      resolve();
    }, 2000);
  });

  return {
    status: "POSTED",
    ledgerId,
    transactionId: transaction.transactionId,
    reservationId: reservation.reservationId,
    postedAmount: transaction.amount,
    currency: transaction.currency,
    postedAt: new Date().toISOString()
  };
};
