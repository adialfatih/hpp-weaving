function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}
function hitung(){
    var b9 = document.getElementById('b9').value;
    var c9 = document.getElementById('c9').value;
    var d9 = document.getElementById('d9').value;
    var e9 = document.getElementById('e9').value;
    var f9alsli = document.getElementById('f9').value;
    var f9 = parseInt(f9alsli) / 100;
    var waste = document.getElementById('f9new').value;
    var hrg1 = document.getElementById('hrgBenang').value;
    var hrg2 = document.getElementById('hrgPick').value;
    var hargaBenang = hrg1.replace(/\./g, '');
    var hargaPick = hrg2.replace(/\./g, '');
    var notif = "";
    var lusi = ((parseFloat(d9) * parseFloat(f9) * 39.37) / parseFloat(b9)) / 1.693;
    var lusiround = roundToTwo(lusi);
    if(lusiround=="NaN"){
        document.getElementById('hasil_lusi').value = '0';
    } else {
        document.getElementById('hasil_lusi').value = ''+lusiround;
    }
    var pakan = (parseFloat(e9) * parseFloat(f9) * 39.37) / parseFloat(c9) / 1.693;
    var pakanround = roundToTwo(pakan);
    if(pakanround=="NaN"){
        document.getElementById('hasil_pakan').value = '0';
    } else {
        document.getElementById('hasil_pakan').value = ''+pakanround;
    }
    var sublusi = ((lusiround * parseFloat(waste)) / 100) + lusiround;
    var sublusiround = roundToTwo(sublusi);
    if(sublusiround=="NaN"){
        document.getElementById('hasil_d9').value = '0';
    } else {
        document.getElementById('hasil_d9').value = ''+sublusiround;
    }
    var subpakan = ((pakanround * parseFloat(waste)) / 100) + pakanround;
    var subpakanround = roundToTwo(subpakan);
    if(subpakanround=="NaN"){
        document.getElementById('hasil_e9').value = '0';
    } else {
        document.getElementById('hasil_e9').value = ''+subpakanround;
    }
    var grandtotal = sublusiround + subpakanround;
    var grandtotalround = roundToTwo(grandtotal);
    if(grandtotalround=="NaN"){
        document.getElementById('hasil_f9').value = '0';
    } else {
        document.getElementById('hasil_f9').value = ''+grandtotalround;
    }
    var mtrperball = 181440 / grandtotalround;
    var mtrperballround = roundToTwo(mtrperball);
    var nilaiHpp = (parseFloat(hargaBenang) / mtrperballround) + (parseFloat(e9) * parseFloat(hargaPick));
    var nilaiHpp2 = roundToTwo(nilaiHpp);
    if(isNaN(nilaiHpp2)){
        document.getElementById('idHpp').innerHTML = 'HPP : <strong>0</strong>';
    } else {
         document.getElementById('idHpp').innerHTML = 'HPP : <strong>'+nilaiHpp2+'</strong>';
    }
    if(mtrperballround=="NaN"){
        document.getElementById('mtrball').innerHTML = ':&nbsp; <strong>0</strong>';
    } else {
        document.getElementById('mtrball').innerHTML = ':&nbsp; <strong>'+mtrperballround+'</strong>';
    }
    if(isNaN(mtrperballround)){
        document.getElementById('mtrball').innerHTML = ':&nbsp; <strong>0</strong>';
    } else {
        //console.log("owek2");
    }
    if(isNaN(grandtotalround)){
        document.getElementById('hasil_f9').value = '0';
    } else {
        //console.log("owek2");
    }
    if(isNaN(subpakanround)){
        document.getElementById('hasil_e9').value = '0';
    } else {
        //console.log("owek2");
    }
    if(isNaN(sublusiround)){
        document.getElementById('hasil_d9').value = '0';
    } else {
        //console.log("owek2");
    }
    if(isNaN(pakanround)){
        document.getElementById('hasil_pakan').value = '0';
    } else {
        //console.log("owek2");
    }
    if(isNaN(lusiround)){
        document.getElementById('hasil_lusi').value = '0';
    } else {
        //console.log("owek2");
    }
}

//lusi//=SUM(D9*F9*39.37)/B9/1.693
//pakan//=SUM(E9*F9*39.37)/C9/1.693
//sublusi//=SUM(G9*I9/100)+G9
//subpakan/=SUM(H9*I9/100)+H9

if ("serviceWorker" in navigator) {
    // Register a service worker hosted at the root of the
    // site using the default scope.
    navigator.serviceWorker.register("serviceWorker.js").then(
      (registration) => {
        console.log("Service worker registration succeeded:", registration);
      },
      (error) => {
        console.error(`Service worker registration failed: ${error}`);
      }
    );
  } else {
    console.error("Service workers are not supported.");
  }

function reset(){
    document.getElementById('b9').value = '';
    document.getElementById('c9').value = '';
    document.getElementById('d9').value = '';
    document.getElementById('e9').value = '';
    document.getElementById('f9').value = '';
    document.getElementById('f9new').value = '10';
    document.getElementById('hrgBenang').value = '';
    document.getElementById("b9").focus();
    hitung();
}

        
        document.getElementById('hrgBenang').addEventListener('input', function() {
            var input = this;
            
            
            // Menghapus semua karakter selain angka
            var angka = input.value.replace(/\D/g, '');
            
            // Menggunakan regular expression untuk memisahkan ribuan dengan koma
            angka = angka.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
            
            // Mengupdate nilai input dengan angka yang sudah diformat
            input.value = angka;

        });

        document.getElementById('hrgPick').addEventListener('input', function() {
            var input = this;
            var angka = input.value.replace(/\D/g, '');
                angka = angka.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
                input.value = angka;
            
        });
        function gantikoma(input){
            input.value = input.value.replace(/,/g, '.');
        }