class Karyawan {
    constructor(nama = "Tidak Ada Nama", gaji = 0) {
        this.nama = nama;
        this.gaji = gaji;
    }

    // Getter untuk nama
    getNama() {
        return this.nama;
    }

    // Getter untuk gaji
    getGaji() {
        return this.gaji;
    }

    // Method untuk menaikkan gaji sebesar 10%
    naikGaji(idElemen) {
        const kenaikan = 0.1 * this.gaji;
        this.gaji += kenaikan;
        const infoNaikGaji = `Gaji ${this.nama} telah dinaikkan 10% menjadi Rp. ${this.gaji},00\n`; // Menggunakan \n untuk baris baru
        console.log(`\n${infoNaikGaji}`);
        this.tampilkanInfoNaikGaji(infoNaikGaji, idElemen);
    }
    
    // Method untuk menampilkan informasi naik gaji
    tampilkanInfoNaikGaji(info, idElemen) {
        document.getElementById(idElemen).textContent = info;
    }
}

// Membuat objek karyawan
const karyawanList = [
    new Karyawan("Rey", 2050000.0),
    new Karyawan("Nabil", 1900000.0),
    new Karyawan("Duta", 2250000.0),
    new Karyawan("Deri", 2350000.0)
];

// Menampilkan informasi sebelum kenaikan gaji dan melakukan kenaikan gaji
karyawanList.forEach((karyawan, index) => {
    const idNama = `nama-karyawan${index + 1}`;
    const idGaji = `gaji-karyawan${index + 1}`;
    document.getElementById(idNama).textContent = karyawan.getNama();
    document.getElementById(idGaji).textContent = `Rp. ${karyawan.getGaji()},00`;
    const idInfoNaikGaji = `info-naik-gaji${index + 1}`;
    karyawan.naikGaji(idInfoNaikGaji);
});


const toggleBtn = document.querySelector('.toggle_btn')
        const toggleBtnIcon = document.querySelector('.toggle_btn i')
        const dropDownMenu = document.querySelector('.dropdown_menu')

        toggleBtn.onclick = function () {
            dropDownMenu.classList.toggle('open')
            const isOpen = dropDownMenu.classList.contains('open')

            toggleBtnIcon.classList = isOpen
                ? 'fa-solid fa-xmark'
                : 'fa-solid fa-bars'
        }
