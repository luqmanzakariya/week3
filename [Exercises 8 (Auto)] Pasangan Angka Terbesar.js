function pasanganTerbesar(num) {
  // you can only write your code here!
  var str = num.toString();
  var temp = [];

  for (var i=0; i<str.length; i++){
      temp[i] = str.substr(i,2);
  }

  temp.sort(function (a,b) {return b-a})
  var result = Number(temp[0]);
  return result;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
