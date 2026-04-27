exports.handler = async (event) => {
  const tx = event.transaction || event;

  console.log("Validating transaction:", tx);

  const missingFields = [];
  if (!tx.transactionId) missingFields.push("transactionId");
  if (!tx.amount || typeof tx.amount !== "number") missingFields.push("amount");
  if (!tx.currency) missingFields.push("currency");
  if (!tx.cardNumber) missingFields.push("cardNumber");
  if (!tx.merchantId) missingFields.push("merchantId");

  const isValid = missingFields.length === 0;

  await new Promise((resolve) => {
    setTimeout(() => {
      console.log(
        `Validation result for transaction ${tx.transactionId || "N/A"}: ${
          isValid ? "VALID" : "INVALID"
        }${!isValid ? `, missing fields: ${missingFields.join(", ")}` : ""}`
      );
      resolve();
    }, 2000);
  });

  return {
    isValid,
    missingFields,
    message: isValid
      ? "Transaction is valid"
      : `Missing or invalid fields: ${missingFields.join(", ")}`,
    originalTransaction: tx
  };
};
