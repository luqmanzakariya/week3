function dataHandling (input) {
    var id =[];
    var nama = [];
    var ttl = [];
    var hobi = [];
    
    for (var i=0; i<input.length; i++){
        id.push(input[i][0]);
        nama.push(input[i][1]);
        ttl.push(input[i][2]+" "+input[i][3]);
        hobi.push(input[i][4]);
    }

    for (var j=0; j<input.length; j++){
        console.log("Nomor ID: "+ id[j]);
        console.log("Nama Lengkap: "+nama[j]);
        console.log("TTL: "+ttl[j]);
        console.log("Hobi: "+hobi[j]);
        console.log("");
    }
}

//contoh input
var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]

dataHandling(input);

/*contoh output
Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca

Nomor ID:  0002
Nama Lengkap:  Dika Sembiring
TTL:  Medan 10/10/1992
Hobi:  Bermain Gitar

Nomor ID:  0003
Nama Lengkap:  Winona
TTL:  Ambon 25/12/1965
Hobi:  Memasak

Nomor ID:  0004
Nama Lengkap:  Bintang Senjaya
TTL:  Martapura 6/4/1970
Hobi:  Berkebun
*/