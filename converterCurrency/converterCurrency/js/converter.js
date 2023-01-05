const RATES = {
  usd: 0.027,
  eur: 0.026,
};

function convert({ uan, currency }) {
  if (!RATES[currency]) {
    return null;
  }

  return uan * RATES[currency];
}
