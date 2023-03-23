async function thisAsyncFunction() {
    let myMimpi = [
      "Mencapai target di divisi Finance Schematics",
      "Menjadi admin MCI",
      "Mendapatkan pencapaian KPI di departemen PSDM BIMTS > 90%",
      "Menyelesaikan Buku `1984`, `Zero to One`,dan `Problem solving`",
      "IP tidak turun",
      "Menyelesaikan course google data analytics coursera tepat waktu",
      "Rutin tidur malam lebih cepat",
      "Rutin bangun pagi dan melakukan aktivitas pagi yang bermanfaat"
    ];
  
    let myPromise = (callback) => new Promise(function(myResolve, myReject) {
      setTimeout(() => {
            callback(); 
            myResolve('\nTerima kasih banyak mas/mba buat ilmu dan tugas-tugasnya.\nLuar biasa'); 
        }, 4000);
    });
  
    outputDreams = () => {
        for(var i=0; i<myMimpi.length; i++){
            console.log(`mimpi ke-${i+1} : ${myMimpi[i]}`)
          }
    };
  
    console.log("\nHallo mas/mba, Muhammad Naufal Baihaqi mau berbagi impian-impian di tahun 2023.\nLet's pray for our dreams\n");
  
    setTimeout(() => {
      myPromise(outputDreams).then(function(result){
        console.log(result);
      });
    }, 2000);
  }

  thisAsyncFunction();