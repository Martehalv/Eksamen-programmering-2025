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
  const alle = document.getElementById("");
  alle.innerHTML = "";

  for (let i = 0; i < ansatte.length; i++) {
    // Loop som starter på 0, så 1, så plusser den på 1 etter hver gang til det ikke er fler igjen i ansatte arrayet
    alle.innerHTML = alle.innerHTML + ansattArtikler(i); // Bruker alle ansatte i arrayet (i).
  }
}

alleAnsatte(); // Lister ut alle ansatte

// Funksjon 3 - Ta imot og filtrere
