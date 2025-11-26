// Funksjon 1 - Et ansatt kort skal returneres
// Funksjon til informasjon om artikler artiklene/kortene
function ansattArtikler(index) {
  const ansatt = ansatte[index];

  // Her måtte det lages en if og loop for kursansvar delen, slik at den får med alle kusene til hver ansatt (Disse er i array i register.js).
  let kursInfo = "";
  if (ansatt.kursansvar.length > 0) {
    // Sjekker arrayet for kurs
    kursInfo = ansatt.kursansvar.join(", ");
  } else {
    // De som ikke har ansvar for noe kurs får dette.
    kursInfo = "Ingen kursansvar";
  }

  const ansattInfo = `
    <article class="ansatt-kort">
      <h2>${ansatt.navn}</h2>
      <p>Stilling: ${ansatt.stilling}
      <p>Kontor: ${ansatt.kontor}</p>
      <p>E-post: ${ansatt.epost}</p>
      <p>Kursansvar: ${kursInfo}</p>
    </article>
  `;

  return ansattInfo;
}

// Funksjon 2 - Alle ansatt kort skal returneres
function alleAnsatte() {
  const alle = document.getElementById("ansatte-info");
  alle.innerHTML = "";

  for (let i = 0; i < ansatte.length; i++) {
    // Loop som starter på 0, så 1, så plusser den på 1 etter hver gang til det ikke er fler igjen i ansatte arrayet
    alle.innerHTML = alle.innerHTML + ansattArtikler(i); // Bruker alle ansatte i arrayet (i).
  }
}

alleAnsatte(); // Lister ut alle ansatte

// Funksjon 3 - Ta imot og filtrere stilling
function filtrerStilling(stilling) {
  const alle = document.getElementById("ansatte-info");
  alle.innerHTML = "";

  // En loop som går igjennom alle ansatte
  for (let i = 0; i < ansatte.length; i++) {
    // Sjekker om den ansattes stilling matcher den vi søker etter
    if (ansatte[i].stilling === stilling) {
      // Hvis match, legg til kortet
      alle.innerHTML += ansattArtikler(i);
    }
  }
}

// Funksjon 4 - Lage kurs liste nederst på siden
function alleKurs() {
  const kursListe = [];

  // En loop som går gjennom alle ansatte
  for (let i = 0; i < ansatte.length; i++) {
    // Looper gjennom kursansvar-arrayet til hver ansatt
    for (let index = 0; index < ansatte[i].kursansvar.length; index++) {
      const kurs = ansatte[i].kursansvar[index];

      // Sjekker om kurset allerede er i listen (unngår duplikater)
      if (!kursListe.includes(kurs)) {
        kursListe.push(kurs); // Legger til kurset i listen
      }
    }
  }

  // Lager kun <li> elementene
  let liste = "";
  for (let i = 0; i < kursListe.length; i++) {
    liste += `<li>${kursListe[i]}</li>`;
  }

  // Setter inn kun list items i <ul>
  document.getElementById("kurs-ul").innerHTML = liste;
}

alleKurs();

// Funksjon 5 - filtrere undervisere og administrasjon
function filtrerUndervisere() {
  const undervisere = document.getElementById(""); // Fyll inn riktig id
  undervisere.innerHTML = ""; // Tømmer først

  // Looper gjennom alle ansatte
  for (let i = 0; i < ansatte.length; i++) {
    // Sjekker om stillingen er Lektor eller Professor
    if (
      ansatte[i].stilling === "Lektor" ||
      ansatte[i].stilling === "Professor"
    ) {
      undervisere.innerHTML += ansattArtikler(i);
    }
  }
}

function filtrerAdministrasjon() {
  const administrasjon = document.getElementById(""); // Fyll inn riktig id
  administrasjon.innerHTML = ""; // Tømmer først

  // Looper gjennom alle ansatte
  for (let i = 0; i < ansatte.length; i++) {
    // Sjekker om stillingen er Rektor, Dekan eller Vaktmester
    if (
      ansatte[i].stilling === "Rektor" ||
      ansatte[i].stilling === "Dekan" ||
      ansatte[i].stilling === "Vaktmester"
    ) {
      administrasjon.innerHTML += ansattArtikler(i);
    }
  }
}

// Funksjon 6 -
