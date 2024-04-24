const priceCalculator = (baseDistance, fixPrice, kmPrice, totalDistance) => {
  console.log("\n");
  console.log("Base Distance : ", baseDistance);
  console.log("Fixed Price : ", fixPrice);
  console.log("Price for Kilometer : ", kmPrice);
  console.log("Total Distance : ", totalDistance);

  const basePriceInCents = fixPrice * 100;
  const extraDistance = totalDistance - baseDistance;
  console.log("Extra Distance : ", extraDistance);

  const extraPriceInCents =
    extraDistance > 0 ? extraDistance * kmPrice * 100 : 0;
  console.log("Extra Price : ", extraPriceInCents / 100);

  const totalPrice = (basePriceInCents + extraPriceInCents) / 100;
  console.log("\nTotal Price : ", totalPrice);

  return totalPrice;
};

module.exports = priceCalculator;
