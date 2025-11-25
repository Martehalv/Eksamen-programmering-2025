// Funksjon 1
//Funksjon til informasjon om artikler artiklene/kortene
function ansattArtikler(index) {
  const ansatt = ansatte[index];

  //Her måtte det lages en if og loop for kursansvar delen, slik at den får med alle kusene til hver ansatt (Disse er i array i register.js).
  let kursInfo = "";
  if (ansatt.kursansvar.length > 0) {
    //Sjekker arrayet for kurs
    kursInfo = ansatt.kursansvar.join(", ");
  } else {
    //De som ikke har ansvar for noe kurs får dette.
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

// Her henter jeg inn alle ansatte.
const alle = document.getElementById("alleAnsatte");

for (let i = 0; i < ansatte.length; i++) {
  alle.innerHTML = alle.innerHTML + ansattArtikler(i);
}
