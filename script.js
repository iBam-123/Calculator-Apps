let currentNumber = '0'

// Memasukkan Angka
const inputNumber = (number) => {
    if (currentNumber === "0"){
        currentNumber = number
    } else {
        currentNumber += number
    }
}

// Menampilkan Kedalam Screen
const screen = document.querySelector('.screen')
const updateScreen = (number) => {
    screen.value = number
}


const number = document.querySelectorAll(".number");
number.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    });
});

const operation = document.querySelectorAll(".operation");
operation.forEach((operation) => {
    operation.addEventListener("click", (event) => {
        inputOperation(event.target.value)
        updateScreen(currentNumber)
    });
});

// Bisa Ditambahkan Fitur Lanjutan
const inputOperation = (operation) => {
    if (currentNumber === '0') {
        return false
    } else {
        currentNumber += operation
    }
}

// Menghapus Keseluruhan Layar
const clearAll = () => {
    currentNumber = '0'
}

const clear = document.querySelector('.clear')
clear.addEventListener("click", () => {
    clearAll()
    updateScreen(currentNumber)
});

// Menghapus Pada Bagian Akhir
const hapusAkhir = () => {
    currentNumber = currentNumber.slice('0', -1);
}

const hapus = document.querySelector('.delete')
hapus.addEventListener("click", () => {
    hapusAkhir()
    updateScreen(currentNumber)
});

// Hasil Kalkulasi (kondisi tidak berjalan pesan Not Valid)
const result = document.querySelector('.equel')
result.addEventListener("click", () =>{
    // if (currentNumber.at(-1) === "*" || "/" || "+" || "-"){
    //     alert("Not Valid")
    // } else {
        equel = eval(currentNumber)
        updateScreen(equel)

    // }
});

// // Positif Negatif (Belum terselesaikan)
// const posNeg = document.querySelector('.pos-neg')
// posNeg.addEventListener("click", () => {
//     if (currentNumber.at(1) === "-"){
//         currentNumber = currentNumber.slice(0)
//     }else {
//         currentNumber = currentNumber.append("-")
//         updateScreen(currentNumber)
//     }
// });

// Membuat Persentase (Belum Sempurna, karena harus persent diawal)
const persen = document.querySelector('.persent')
persen.addEventListener("click", (event) => {
    inputPersen(event.target.value)
    updateScreen(currentNumber)
    });

const inputPersen = (persent) => {
    if (true) {
        currentNumber /= 100
    } else {
        alert("masukkan persent terlebih dahulu")
    }
}
