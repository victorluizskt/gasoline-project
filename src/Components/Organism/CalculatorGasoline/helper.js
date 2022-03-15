export const calculateTotal = (kilometerLiter, priceGasoline, totalRoad) => {
  if(kilometerLiter, priceGasoline, totalRoad) {
    const totalLiter = totalRoad / kilometerLiter;
    return totalLiter * priceGasoline;
  }

  return "Values invalid";
}