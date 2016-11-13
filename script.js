var banyakData = document.querySelector("#banyakData");
var kolomData = document.querySelector("#kolomData");
var data = document.querySelector("#data");
var hasil = document.querySelector("#hasil");
var rumusnya = document.querySelector("#rumusnya");
var jumlahData;
var buttonMasukan = document.querySelector("#masukanBanyakData");
var buttonProses = document.querySelector("#prosesData");
var buttonCariY = document.querySelector("#cariY");
var nilaiX = [];
var nilaiY = [];
var nilaiXkuadrat = [];
var nilaiYkuadrat = [];
var nilaiXkaliY = [];
var jumlahNilaiX = 0;
var jumlahNilaiY = 0;
var jumlahNilaiXkuadrat = 0;
var jumlahNilaiYKuadrat = 0;
var jumlahNilaiXkaliY = 0;
var a;
var b;
var y;

//hasil
var xNumber = document.querySelector("#Xnumber");
var buttonCariY = document.querySelector("#cariY");
var hasilY = document.querySelector("#hasilY");
var hasilTable = document.querySelector("#hasilTable");

buttonCariY.addEventListener("click", function() {
    y = a + (b * Number(xNumber.value));
    hasilY.innerHTML = y.toFixed(2);
});


// rumus Y = a + bX;



buttonMasukan.addEventListener("click", function() {
    hasil.style.display = "none";
    kolomData.style.display = "block";

    jumlahData = Number(banyakData.value);
    var textsnya = "";
    var no = 0;
    for (var i = 0; i < jumlahData; i++) {
        no++;
        textsnya += '<p>' + no + ' <input class="x" type="number"> <input class="y" type="number"><\p>';
    }
    data.innerHTML = textsnya;
});



buttonProses.addEventListener("click", function() {
    for (var i = 0; i < jumlahData; i++) {
        // loop lakukan perhitungan dan pengambilan x2, y2, x * y
        nilaiX[i] = Number(document.querySelectorAll(".x")[i].value);
        nilaiXkuadrat[i] = Math.pow(nilaiX[i], 2);
        nilaiY[i] = Number(document.querySelectorAll(".y")[i].value);
        nilaiYkuadrat[i] = Math.pow(nilaiY[i], 2);
        nilaiXkaliY[i] = nilaiX[i] * nilaiY[i];
    }
    // lakukan pencarian nilai jumlah tiap varible arraay

    ambilJumlahNilai();
    pecahkanRumus();
    cetakTableHasil();
});


function penumlahanNilai(data) {
    return data.reduce(function(a, b) {
        return a + b;
    });
}

function hitungA() {
    a = (jumlahNilaiY * jumlahNilaiXkuadrat) - (jumlahNilaiX * jumlahNilaiXkaliY);
    return Number((a / ((jumlahData * jumlahNilaiXkuadrat) - Math.pow(jumlahNilaiX, 2))).toFixed(2));
}

function hitungB() {
    var b = (jumlahData * jumlahNilaiXkaliY) - (jumlahNilaiX * jumlahNilaiY);
    return Number((b / ((jumlahData * jumlahNilaiXkuadrat) - (Math.pow(jumlahNilaiX, 2)))).toFixed(2));
}

function pecahkanRumus() {
    hasil.style.display = "block";
    rumusnya.textContent = "Y = " + a + " + " + b + " * X ";

}

function ambilJumlahNilai() {
    jumlahNilaiX = penumlahanNilai(nilaiX);
    jumlahNilaiY = penumlahanNilai(nilaiY);
    jumlahNilaiXkaliY = penumlahanNilai(nilaiXkaliY);
    jumlahNilaiXkuadrat = penumlahanNilai(nilaiXkuadrat);
    jumlahNilaiYKuadrat = penumlahanNilai(nilaiYkuadrat);
    a = hitungA();
    b = hitungB();
}

function cetakTableHasil() {
    jumlahData = Number(banyakData.value);
    var textsnya = "";
    var no = 0;
    for (var i = 0; i < jumlahData; i++) {
        no++;
        textsnya += '<p>' + no + ' <input class="x" type="number" value="' + nilaiX[i] +
            '" readonly="readonly"> <input class="y" type="number"  value="' + nilaiY[i] +
            '"readonly="readonly"> <input class="x2" type="number"  value="' + nilaiXkuadrat[i] +
            '"readonly="readonly"> <input class="x2" type="number"  value="' + nilaiYkuadrat[i] +
            '"readonly="readonly"> <input class="xkaliy" type="number"  value="' + nilaiXkaliY[i] +
            '"readonly="readonly"> <\p>';
    }
    textsnya += '<p> <input class="ex" type="text" value="Ex = ' + jumlahNilaiX +
        '" readonly="readonly"> <input class="ey" type="text"  value="Ey = ' + jumlahNilaiY +
        '"readonly="readonly"> <input class="ex2" type="text"  value="Ex2 = ' + jumlahNilaiXkuadrat +
        '"readonly="readonly"> <input class="ex2" type="text"  value="Ey2 = ' + jumlahNilaiYKuadrat +
        '"readonly="readonly"> <input class="exkaliy" type="text"  value="Ex*y = ' + jumlahNilaiXkaliY +
        '"readonly="readonly"> <\p>';


    hasilTable.innerHTML = textsnya;

}