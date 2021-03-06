fetch('https://baza-filmova.herokuapp.com/filmovi/ ')
    .then(res => res.json())
    .then(data => {

        let sablon = '';

        // ispisivanje svih objekata
        for (let i = 0; i < data.length; i++) {
            sablon += `<div class='okvirFilma'>
 <h4>${data[i].naziv}</h4>
 <h5>${data[i].godina}</h5>
 <img src='${data[i].slika}' class="slika" >
 </div>`;
        }

        document.getElementById('filmovi').innerHTML = sablon;
        // pretraga filma po nazivu
        document.addEventListener('keyup', function () {

            let pretraga = '';


            let rezultat = document.getElementById('pretraga').value;







            for (let i = 0; i < data.length; i++) {

                let velikaSlova = data[i].naziv.toUpperCase();
                rezultat = rezultat.toUpperCase();
                if (velikaSlova.includes(rezultat)) {
                    pretraga += `<div class="okvirFilma">
 <h4>${data[i].naziv}</h4>
 <h5>${data[i].godina}</h5>
 <img src='${data[i].slika}' class="slika">
 </div>`;
                    console.log(pretraga)
                }
            }
            document.getElementById('filmovi').innerHTML = pretraga;
        });


        // pretraga po godini 
        var dugme = document.getElementById("god");
        dugme.addEventListener('click', function () {

            let pretraga = '';


            for (i = 0; i < data.length; i++) {
                let godinaFilma = data[i].godina;
                let godinaP = document.getElementById("godina").value;


                if (godinaFilma == godinaP) {

                    pretraga += `<div class="okvirFilma">
        <h4>${data[i].naziv}</h4>
        <h5>${data[i].godina}</h5>
        <img src='${data[i].slika}' class="slika">
        </div>`;


                }
            }
            document.getElementById('filmovi').innerHTML = pretraga;
        });
        // sortiranje od najstarijeg
        const levi = document.getElementById("levi")
        levi.addEventListener("click", function () {

            const godine = [];

            for (i = 0; i < data.length; i++) {
                godine.push(data[i]);
            }

            function compare(a, b) {
                if (a.godina < b.godina)
                    return -1;
                if (a.godina > b.godina)
                    return 1;
                return 0;
            }

            godine.sort(compare);

            let sablon1 = '';

            for (let i = 0; i < godine.length; i++) {
                sablon1 += `<div class='okvirFilma'>
 <h4>${godine[i].naziv}</h4>
 <h5>${godine[i].godina}</h5>
 <img src='${godine[i].slika}' class="slika" >
 
 </div>`;
            }

            document.getElementById('filmovi').innerHTML = sablon1;
        })

        // sortiranje od najnovijeg

        const desni = document.getElementById("desni")
        desni.addEventListener('click', function () {

            const godine = [];

            for (i = 0; i < data.length; i++) {
                godine.push(data[i]);
            }

            function compare(a, b) {
                if (a.godina < b.godina)
                    return -1;
                if (a.godina > b.godina)
                    return 1;
                return 0;
            }

            godine.sort(compare);

            let sablon = '';

            for (let i = godine.length - 1; i >= 0; i--) {
                sablon += `<div class='okvirFilma'>
 <h4>${godine[i].naziv}</h4>
 <h5>${godine[i].godina}</h5>
 <img src='${godine[i].slika}' class="slika">
 </div>`;
            }

            document.getElementById('filmovi').innerHTML = sablon;
        })








    })

