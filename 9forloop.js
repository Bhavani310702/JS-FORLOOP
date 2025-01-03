let arr = ["ramya", "ram", "bhumi", "bhavya","kavya"];
for (i=0;i<=arr.length-1;i++)
     {
  let str = ""
 for (j = arr[i].length-1; j >= 0; j--)
     {
      str += arr[i][j];
    }
   arr[i] = str;
}
console.log(arr);


let arr1 = ["hello", "welcome", "to", "javascript"];
for (i = 0; i <= arr1.length - 1; i++) {
  let str1 = "";
  if (i % 2 == 0) {
    for (k= arr1[i].length - 1; k >= 0; k--) {
      str1 += arr1[i][k];
    }
  } else str1 += arr1[i];
  arr1[i] = str1;
}
console.log(arr1);

