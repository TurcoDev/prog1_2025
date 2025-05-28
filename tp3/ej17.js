let list1 = [2, 4, 6, 8, 10];
let list2 = [8, 6, 4, 10, 11];

for (let posList1 = 0; posList1 < list1.length; posList1++) {
  for (let posList2 = 0; posList2 < list2.length; posList2++) {
    if (list1[posList1] == list2[posList2]) {
      console.log(`El número ${list1[posList1]} se encuentra en ambas listas.`);
    }
  }1
}
