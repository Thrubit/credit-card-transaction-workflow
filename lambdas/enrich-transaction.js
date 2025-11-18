exports.handler = async (event) => {
  const validationPayload = event.validation?.Payload || {};
  const tx = validationPayload.originalTransaction || event.transaction || event;

  const accountId = tx.accountId || "ACC-123456";
  const customerId = tx.customerId || "CUST-98765";

  const enriched = {
    transactionId: tx.transactionId,
    amount: tx.amount,
    currency: tx.currency || "USD",
    cardNumberLast4: String(tx.cardNumber).slice(-4),
    merchantId: tx.merchantId,
    merchantCategory: tx.merchantCategory || "RETAIL",
    channel: tx.channel || "CARD_PRESENT",
    timestamp: tx.timestamp || new Date().toISOString(),
    accountId,
    customerId,
    riskSegment: "STANDARD"
  };

  return enriched;
};
