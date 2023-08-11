function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // - 1 - i is for when each time the highest element in the array gets to the end, it is in the correct spot and be left there
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // swapping elements if the element is greater than the next element
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(sort([1, 4, 7, 2, 6, 3, 5])); // [1,2,3,4,5,6,7]
