function targetTerdekat(arr) {
  // you can only write your code here!
  var indexO = arr.indexOf('o');
  var penghitung = 0;
  var terdekat = arr.length;
  if (arr.indexOf('x') == -1){
      return 0;
  } 
  else {
      for (var i=0; i<arr.length; i++){
          if(arr[i] == 'x'){
              penghitung = Math.abs(indexO - i);
              if (terdekat > penghitung){
                  terdekat = penghitung;
              }
          }
      }
      return terdekat;
  }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2