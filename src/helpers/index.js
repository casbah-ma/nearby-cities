// get shuffling array

export function shuffle(arr) {
  let i = arr.length;
  while (i) {
    let j = Math.floor(Math.random() * i);
    let t = arr[--i];
    arr[i] = arr[j];
    arr[j] = t;
  }
  return arr;
}

// safe function  to get object

export const getSafe = (fn, defaultVal) => {
  try {
    return fn();
  } catch (e) {
    return defaultVal;
  }
};
