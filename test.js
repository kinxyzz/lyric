const lirikDanKecepatan = [
  {
    lirik: "Cinta menyatukan kita yang tak sama",
    kecepatanHuruf: 120,
    kecepatanBaris: 1500,
  },
  {
    lirik: "Aku yang mengadah. dan tangan yang kau genggam",
    kecepatanHuruf: 100,
    kecepatanBaris: 1000,
  },
  {
    lirik: "Berjalan Salah, Berhenti pun tak mudah",
    kecepatanHuruf: 130,
    kecepatanBaris: 800,
  },
  {
    lirik: "Apakah Kita Salah?",
    kecepatanHuruf: 180,
    kecepatanBaris: 900,
  },
];

function cetakLirik(lirikDanKecepatan, indexLirik = 0, indexHuruf = 0) {
  if (indexLirik < lirikDanKecepatan.length) {
    const { lirik, kecepatanHuruf, kecepatanBaris } =
      lirikDanKecepatan[indexLirik];
    if (indexHuruf < lirik.length) {
      const char = lirik[indexHuruf];

      let delay = kecepatanHuruf;

      if (char !== ".") {
        process.stdout.write(char);
      } else {
        delay += 400;
      }

      setTimeout(() => {
        cetakLirik(lirikDanKecepatan, indexLirik, indexHuruf + 1);
      }, delay);
    } else {
      console.log("");
      setTimeout(() => {
        cetakLirik(lirikDanKecepatan, indexLirik + 1);
      }, kecepatanBaris);
    }
  }
}

cetakLirik(lirikDanKecepatan);
