function removeDuplicateFromArray(arr) {
  if (!Array.isArray(arr)) {
    console.log("Dữ liệu đầu vào không hợp lệ!!!");
  } else {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (!newArr.includes(arr[i])) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
}

//Test case
console.log(removeDuplicateFromArray([1, 1, -1, 3, 5, 10]));
console.log(removeDuplicateFromArray([true, 3, "hello", false, "hello", true]));
console.log(removeDuplicateFromArray("a", "b", "c", "d", "d", "c", "a"));
console.log(removeDuplicateFromArray("Hello"));
