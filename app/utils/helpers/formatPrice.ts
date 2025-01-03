export const formatPrice = (amount: number) => {
  console.log("amount", amount);
  const cat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "narrowSymbol",
  }).format(amount);

  console.log("cat", cat);

  return cat;
};
