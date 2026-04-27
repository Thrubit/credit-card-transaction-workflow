exports.handler = async (event) => {
  const { reason, transaction } = event;

  await new Promise((resolve) => {
    setTimeout(() => {
      console.log(
        `Rejecting transaction ${transaction?.transactionId}: Amount ${transaction?.amount} ${transaction?.currency}, reason: ${reason}`
      );
      resolve();
    }, 2000);
  });

  return {
    status: "REJECTED",
    reason,
    transactionId: transaction?.transactionId,
    amount: transaction?.amount,
    currency: transaction?.currency,
    rejectedAt: new Date().toISOString()
  };
};
