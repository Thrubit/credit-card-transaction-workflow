exports.handler = async (event) => {
  const tx = event;

  let score = 0;

  if (tx.amount > 5000) {
    score += 60;
  }

  if (tx.channel === "CARD_NOT_PRESENT") {
    score += 25;
  }

  if (tx.merchantCategory === "CRYPTO_EXCHANGE") {
    score += 40;
  }

  const isFraudulent = score >= 70;

  return {
    isFraudulent,
    score,
    reason: isFraudulent
      ? "Risk score above threshold"
      : "Risk score below threshold",
    transactionId: tx.transactionId
  };
};
