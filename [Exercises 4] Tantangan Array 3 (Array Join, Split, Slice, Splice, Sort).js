function dataHandling2 (input) {
    input.splice(1,1, input[1]+" Elsharawy")
    input.splice(2,1,"Provinsi "+input[2]);
    input.splice(4,1,"Pria", "SMA Internasional Metro");
    console.log(input);

    var date = [];
    date = input[3].split("/");
    switch (parseInt(date[1])){
        case 01: {console.log("Januari")} break;
        case 02: {console.log("Februari")} break;
        case 03: {console.log("Maret")} break;
        case 04: {console.log("April")} break;
        case 05: {console.log("Mei")} break;
        case 06: {console.log("Juni")} break;
        case 07: {console.log("Juli")} break;
        case 08: {console.log("Agustus")} break;
        case 09: {console.log("September")} break;
        case 10: {console.log("Oktober")} break;
        case 11: {console.log("November")} break;
        case 12: {console.log("Desember")} break;
    }
    
    date.sort(function(a,b){return (b-a)});
    console.log(date);

    date = input[3].split('/');
    var join = date.join('-');
    console.log(join);

    if (input[1].length > 15){
        var char = '';
        char = input[1].slice(0,16);
        console.log(char);
    }

}


/*Contoh Input
["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]
*/

/* Array Baru
["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
*/

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */