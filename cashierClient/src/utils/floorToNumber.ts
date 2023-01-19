export const floorToNumber = (number: number, floorNumber: number) => {
  return number % floorNumber
    ? number + floorNumber - (number % floorNumber)
    : number;
};
