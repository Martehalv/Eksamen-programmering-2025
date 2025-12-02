// Funksjon 1 - Et ansatt kort skal returneres
// Funksjon til informasjon om artikler artiklene/kortene
function ansattArtikler(i) {
  // i = en ansatt
  const ansatt = ansatte[i]; // Henter ut ansatt i arrayet

  // Her måtte det lages en if for kursansvar delen, slik at den får med alle kusene til hver ansatt (Disse er i array i register.js).
  let Kurs = ""; // Tømmer Kurs først
  if (ansatt.kursansvar.length > 0) {
    // Sjekker om det er minst et kurs i arrayet
    Kurs = ansatt.kursansvar.join(", "); // Join gjør at de kommer etter hverandre med et "," imellom kursene
  } else {
    // De som ikke har ansvar for noe kurs får dette.
    Kurs = "Ingen kursansvar";
  }

  // Lager html koden for et ansatt kort
  const ansattInfo = `
    <article class="ansatt-kort">
      <h3>${ansatt.navn}</h3>
      <p>Stilling: ${ansatt.stilling}</p>
      <p>Kontor: ${ansatt.kontor}</p>
      <p>E-post: ${ansatt.epost}</p>
      <p>Kursansvar: ${Kurs}</p>
      <button onclick="slettAnsatt(${i})">Slett ansatt</button> 
    </article>
  `;

  //Returner html koden
  return ansattInfo;
}

// Funksjon 2 - Alle ansatt kort skal returneres
function alleAnsatteInfo() {
  const alleAnsatte = document.getElementById("ansatte-info");
  alleAnsatte.innerHTML = ""; // TØmmer alleAnsatte

  // Loop som starter på 0, så 1, så plusser den på 1 etter hver gang til det ikke er fler igjen i ansatte arrayet
  for (let i = 0; i < ansatte.length; i++) {
    //Legger inn et kort for hver ansatt
    alleAnsatte.innerHTML = alleAnsatte.innerHTML + ansattArtikler(i); // Bruker alle ansatte i arrayet (i).
  }
}

alleAnsatteInfo(); // Lister ut alle ansatte

// Funksjon 3 - Ta imot og filtrere stilling
function filtrerStilling(stilling) {
  //Henter ansatt listen
  const alleAnsatte = document.getElementById("ansatte-info");
  alleAnsatte.innerHTML = ""; //Gjør ansatt listen tom

  // En loop som går igjennom alle ansatte
  for (let i = 0; i < ansatte.length; i++) {
    // Sjekker om den ansattes stilling matcher den vi søker etter
    if (ansatte[i].stilling === stilling) {
      // Fyller lista med de ansatte som har riktig stilling
      alleAnsatte.innerHTML += ansattArtikler(i);
    }
  }
}

// Funksjon 4 - Lage kurs liste nederst på siden
function kursListe() {
  const kurs = []; //Starter som et nytt tomt array

  // En loop som går gjennom alle ansatte
  for (let i = 0; i < ansatte.length; i++) {
    // En loop som går gjennom kursansvar arrayet til hver ansatt
    for (let j = 0; j < ansatte[i].kursansvar.length; j++) {
      const kursnavn = ansatte[i].kursansvar[j];

      // Sjekker om kurset er i listen (unngår duplikater med !)
      if (!kurs.includes(kursnavn)) {
        kurs.push(kursnavn); // Legger til kurset i det nye kurs arrayet
      }
    }
  }

  // Lager <li> elementene i lista
  let liste = ""; //Tømmer listen først

  for (let i = 0; i < kurs.length; i++) {
    liste += `<li>${kurs[i]}</li>`; //Legger til kurs fra kurs arrayet i lista som <li> elementer
  }

  // Liste id til html
  document.getElementById("kurs-liste").innerHTML = liste;
}

kursListe();

// Funksjon 5 - filtrere undervisere og administrasjon
// Knapp til å vise alle ansatte
function alleAnsatteKnapp() {
  alleAnsatteInfo(); //Kjører denne funksjonen siden jeg har den allerede
}

// Knapp til å vise undervisere
function filtrerUndervisereKnapp() {
  const undervisere = document.getElementById("undervisere");
  undervisere.innerHTML = ""; // Tømmer først

  // Loop for å gå gjennom alle ansatte
  for (let i = 0; i < ansatte.length; i++) {
    // If sjekker om stillingen er Lektor eller Professor
    //.includes(ansatte[i].stilling) sjekker om arrayen inneholder stillingene
    if (["Lektor", "Professor"].includes(ansatte[i].stilling)) {
      //Viser bare ansatte som er undervisere
      undervisere.innerHTML += ansattArtikler(i);
    }
  }
}

// Knapp til å vise administrasjonen (gjør akkurat det samme som på undervisere, bare med administrasjon)
function filtrerAdministrasjonKnapp() {
  const administrasjon = document.getElementById("administrasjon");
  administrasjon.innerHTML = "";

  for (let i = 0; i < ansatte.length; i++) {
    // Sjekker om stillingen er Rektor, Dekan eller Vaktmester
    if (["Rektor", "Dekan", "Vaktmester"].includes(ansatte[i].stilling)) {
      //Viser bare ansatte som er administrasjon
      administrasjon.innerHTML += ansattArtikler(i);
    }
  }
}

// Funksjon 6 - Ta imot paramtere for all informasjon fra ansatt og legge til ansatt i registeret
function leggTilAnsatt(navn, stilling, kontor, epost, kursansvar) {
  // Lager et nytt ansatt kort informasjon
  const nyAnsatt = {
    navn: navn,
    stilling: stilling,
    kontor: kontor,
    epost: epost,
    kursansvar: kursansvar,
  };

  // Legger til den nye ansatte i ansatte arrayet (push)
  ansatte.push(nyAnsatt);

  // Viser alle ansatte inkludert den nye
  alleAnsatteInfo();
}

function hentAnsatt() {
  //Henter verdiene i inputene (skal legge til disse i deloppgave 3).
  const navn = document.getElementById("navn").value;
  const stilling = document.getElementById("stilling").value;
  const kontor = document.getElementById("kontor").value;
  const epost = document.getElementById("epost").value;
  const kurs = document.getElementById("kursansvar").value;

  //Gjør kursansvar til array
  let kursansvar = kurs.split(",").map((k) => k.trim());
  // Gjør infromasjonen fra kursansvar inputen om til et array (.split()), slik som det er i registrer.js
  // .map() går gjennom hvert element i arrayet, her er også .trim() inni som fjerner luft/space rundt teksten

  //Legger til ansatt
  leggTilAnsatt(navn, stilling, kontor, epost, kursansvar);

  // Tømmer inputfeltene etter den er lagt til
  document.getElementById("navn").value = "";
  document.getElementById("stilling").value = "";
  document.getElementById("kontor").value = "";
  document.getElementById("epost").value = "";
  document.getElementById("kursansvar").value = "";
}

// Funksjon 7 - Slett ansatt fra registeret (lagt til knapp i funksjon 1)
function slettAnsatt(i) {
  //sletter en ansatt i (se i funksjon 1)
  ansatte.splice(i, 1); // .splice() gjør at den fjerner ansatt i arrayet

  //Viser den nye lista etter ansatt er slettet
  alleAnsatteInfo();
}
