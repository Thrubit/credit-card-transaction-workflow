exports.handler = async (event) => {
  const { reason, transaction } = event;

  return {
    status: "REJECTED",
    reason,
    transactionId: transaction?.transactionId,
    amount: transaction?.amount,
    currency: transaction?.currency,
    rejectedAt: new Date().toISOString()
  };
};
