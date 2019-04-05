function balikString (str) {
    temp = '';
    for (var i=(str.length-1); i>=0; i--) {
        temp += str[i];
    }
    return temp;
}

var input ="Hello World!"
console.log(balikString(input));