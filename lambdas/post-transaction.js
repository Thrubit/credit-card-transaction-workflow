exports.handler = async (event) => {
  const { transaction, reservation } = event;

  const ledgerId = `LEDGER-${transaction.transactionId || Date.now()}`;

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
