// Perform sorting of an array in descending order.
const sortArrayWithDescending = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  const sortedLeft = sortArrayWithDescending(left);
  const sortedRight = sortArrayWithDescending(right);

  return [...sortedLeft, pivot, ...sortedRight];
};

const inputArray = [5, 1, 3, 9, 2, 7];
const sortedArray = sortArrayWithDescending(inputArray);
console.log(sortedArray);
