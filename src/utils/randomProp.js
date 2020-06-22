export const randomProp = (array, prop) => {

  const randomPantone = Math.floor((Math.random() * array.length) + 1);
  const randomColor = array[randomPantone][prop];

  return randomColor;

};
