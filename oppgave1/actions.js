// Funksjon 1 - Et ansatt kort skal returneres
// Funksjon til informasjon om artikler artiklene/kortene
function ansattArtikler(index) {
  const ansatt = ansatte[index]; // Henter ut kun en ansatt

  // Her måtte det lages en if og loop for kursansvar delen, slik at den får med alle kusene til hver ansatt (Disse er i array i register.js).
  let Kurs = "";
  if (ansatt.kursansvar.length > 0) {
    Kurs = ansatt.kursansvar.join(", "); // Join gjør at de kommer etter hverandre med et "," imellom kursene
  } else {
    // De som ikke har ansvar for noe kurs får dette.
    Kurs = "Ingen kursansvar";
  }

  const ansattInfo = `
    <article class="ansatt-kort">
      <h2>${ansatt.navn}</h2>
      <p>Stilling: ${ansatt.stilling}
      <p>Kontor: ${ansatt.kontor}</p>
      <p>E-post: ${ansatt.epost}</p>
      <p>Kursansvar: ${Kurs}</p>
      <button onclick="slett-knapp(${slett})">Slett ansatt</button>
    </article>
  `;

  return ansattInfo;
}

// Funksjon 2 - Alle ansatt kort skal returneres
function alleAnsatteInfo() {
  const alleAnsatte = document.getElementById("ansatte-info");
  alleAnsatte.innerHTML = "";

  // Loop som starter på 0, så 1, så plusser den på 1 etter hver gang til det ikke er fler igjen i ansatte arrayet
  for (let i = 0; i < ansatte.length; i++) {
    alleAnsatte.innerHTML = alleAnsatte.innerHTML + ansattArtikler(i); // Bruker alle ansatte i arrayet (i).
  }
}

alleAnsatteInfo(); // Lister ut alle ansatte

// Funksjon 3 - Ta imot og filtrere stilling
function filtrerStilling(stillinger) {
  const alleAnsatte = document.getElementById("ansatte-info");
  alleAnsatte.innerHTML = "";

  // En loop som går igjennom alle ansatte
  for (let i = 0; i < ansatte.length; i++) {
    // Sjekker om den ansattes stilling matcher den vi søker etter
    if (ansatte[i].stilling === stillinger) {
      // Hvis match, legg til kortet
      alleAnsatte.innerHTML += ansattArtikler(i);
    }
  }
}

// Funksjon 4 - Lage kurs liste nederst på siden
function kursListe() {
  const kurs = [];

  // En loop som går gjennom alle ansatte
  for (let i = 0; i < ansatte.length; i++) {
    // Looper gjennom kursansvar-arrayet til hver ansatt
    for (let j = 0; j < ansatte[i].kursansvar.length; j++) {
      const kursnavn = ansatte[i].kursansvar[j];

      // Sjekker om kurset er i listen (unngår duplikater med !)
      if (!kurs.includes(kursnavn)) {
        kurs.push(kursnavn); // Legger til kurset i listen
      }
    }
  }

  // Lager <li> elementene i lista
  let liste = "";
  for (let i = 0; i < kurs.length; i++) {
    liste += `<li>${kurs[i]}</li>`;
  }

  // Setter inn kun list items i <ul>
  document.getElementById("kurs-liste").innerHTML = liste;
}

kursListe();

// Funksjon 5 - filtrere undervisere og administrasjon
// Knapp til å vise alle ansatte
function alleAnsatteKnapp() {
  alleAnsatteInfo();
}

// Knapp til å vise undervisere
function filtrerUndervisereKnapp() {
  const undervisere = document.getElementById("undervisere"); // Fyll inn riktig id
  undervisere.innerHTML = "";

  // Loop for å gå gjennom alle ansatte
  for (let i = 0; i < ansatte.length; i++) {
    // Sjekker om stillingen er Lektor eller Professor
    if (["Lektor", "Professor"].includes(ansatte[i].stilling)) {
      //.includes() sjekker om arrayen inneholder stillingene
      undervisere.innerHTML += ansattArtikler(i);
    }
  }
}

// Knapp til å vise administrasjonen
function filtrerAdministrasjonKnapp() {
  const administrasjon = document.getElementById("administrasjon"); // Fyll inn riktig id
  administrasjon.innerHTML = ""; // Tømmer først

  // Loop for å gå gjennom alle ansatte
  for (let i = 0; i < ansatte.length; i++) {
    // Sjekker om stillingen er Rektor, Dekan eller Vaktmester
    if (["Rektor", "Dekan", "Vaktmester"].includes(ansatte[i].stilling)) {
      //.includes() sjekker om arrayen inneholder stillingene
      administrasjon.innerHTML += ansattArtikler(i);
    }
  }
}

// Funksjon 6 - Ta imot paramtere for all informasjon fra ansatt og legge til ansatt i registeret
function leggTilAnsatt(navn, stilling, kontor, epost, kursansvar) {
  // Lager et nytt ansatt-objekt
  const nyAnsatt = {
    navn: navn,
    stilling: stilling,
    kontor: kontor,
    epost: epost,
    kursansvar: kursansvar,
  };

  // Legger til den nye ansatte i ansatte arrayet
  ansatte.push(nyAnsatt);

  // Viser alle ansatte inkludert den nye
  alleAnsatteInfo();
}

function hentAnsatt() {
  const navn = document.getElementById("navn").value;
  const stilling = document.getElementById("stilling").value;
  const kontor = document.getElementById("kontor").value;
  const epost = document.getElementById("epost").value;
  const kurs = document.getElementById("kursansvar").value;

  // Gjør kursansvar om til et array (split på komma)
  let kursansvar = [];
  if (kurs.trim() !== "") {
    kursansvar = kurs.split(",").map((kurs) => kurs.trim());
  }

  // Kaller funksjonen for å legge til
  leggTilAnsatt(navn, stilling, kontor, epost, kursansvar);

  // Tømmer inputfeltene
  document.getElementById("navn").value = "";
  document.getElementById("stilling").value = "";
  document.getElementById("kontor").value = "";
  document.getElementById("epost").value = "";
  document.getElementById("kursansvar").value = "";
}

// Funksjon 7 - Slett ansatt fra registeret
function slettAnsatt(slett) {
  ansatte.splice(slett, 1);

  alleAnsatte();
}
