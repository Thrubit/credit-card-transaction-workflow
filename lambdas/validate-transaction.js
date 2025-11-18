exports.handler = async (event) => {
  const tx = event.transaction || event;

  const missingFields = [];
  if (!tx.transactionId) missingFields.push("transactionId");
  if (!tx.amount || typeof tx.amount !== "number") missingFields.push("amount");
  if (!tx.currency) missingFields.push("currency");
  if (!tx.cardNumber) missingFields.push("cardNumber");
  if (!tx.merchantId) missingFields.push("merchantId");

  const isValid = missingFields.length === 0;

  return {
    isValid,
    missingFields,
    message: isValid
      ? "Transaction is valid"
      : `Missing or invalid fields: ${missingFields.join(", ")}`,
    originalTransaction: tx
  };
};
