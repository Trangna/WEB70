function countVowels(str) {
  const vowels = ["e", "u", "o", "a", "i"];
  let count = 0;
  if (typeof str !== "string") {
    console.log("Dữ liệu đầu vào không hợp lệ!!!");
  } else {
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        count++;
      }
    }

    return count;
  }
}

//Test case
console.log(countVowels("anhyeuem"));
console.log(countVowels("Viet Nam vo dich. Malaysia tuoi gi :))"));
console.log(countVowels(""));
console.log(countVowels("Javascript is a beautiful programming language"));
console.log(countVowels(123));
