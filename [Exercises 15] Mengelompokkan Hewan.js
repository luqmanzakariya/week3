function groupAnimals(animals) {
    // you can only write your code here!
    console.log('===================');
    animals.sort();
    var arr = [[]];
    var j = 0;
    arr[j].push(animals[0]);
    for (var i=1; i<animals.length; i++){
        if (animals[i][0] == arr[j][0][0]){
            arr[j].push(animals[i]);
        }
        else if (animals[i][0] != arr[j][0][0]){
            j++;
            arr.push([animals[i]]);
        }
    }
    return arr;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]