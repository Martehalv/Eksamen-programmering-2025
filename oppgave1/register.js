// Datastruktur for stillinger
const stillinger = {
  rektor: "Rektor",
  dekan: "Dekan",
  professor: "Professor",
  vaktmester: "Vaktmester",
  lektor: "Lektor",
};

// Datastruktur for ansatte på hiof
const ansatte = [
  {
    navn: "Lars-Petter Jelsness-Jørgensen",
    stilling: stillinger.rektor, // Henter verdien fra stillinger datastrukturen
    kontor: "M-408(1) og A3-001(1)",
    epost: "lars.p.jelsness-jorgensen@hiof.no",
    kursansvar: [], // Tomme array fordi de ikke har ansvar for noen kurs
  },
  {
    navn: "Randi Magnus Sommerfelt",
    stilling: stillinger.dekan,
    kontor: "A3-004(2) og M-404",
    epost: "randi.sommerfelt@hiof.no",
    kursansvar: [],
  },
  {
    navn: "Ann-Chatrin Linqvist Leonardsen",
    stilling: stillinger.dekan,
    kontor: "M-405",
    epost: "ann.c.leonardsen@hiof.no",
    kursansvar: [],
  },
  {
    navn: "Per Johansen",
    stilling: stillinger.vaktmester,
    kontor: "V001",
    epost: "per.johansen@hiof.no",
    kursansvar: [],
  },
  {
    navn: "Khalid Ali",
    stilling: stillinger.vaktmester,
    kontor: "V002",
    epost: "khalid.ali@hiof.no",
    kursansvar: [],
  },
  {
    navn: "Siri Hansen",
    stilling: stillinger.vaktmester,
    kontor: "V003",
    epost: "siri.hansen@hiof.no",
    kursansvar: [],
  },
  {
    navn: "Hilde Wågsås Afdal",
    stilling: stillinger.professor,
    kontor: "E1-054(2)",
    epost: "hilde.afdal@hiof.no",
    kursansvar: [
      "Grunnskolelærerutdanning for trinn 5 - 10",
      "Master i mangfold og integrering",
      "PhD kurs: Education in the Digital Socety",
    ],
  },
  {
    navn: "Cecilia Alvstad",
    stilling: stillinger.professor,
    kontor: "A3-106(2)",
    epost: "cecilia.alvstad@hiof.no",
    kursansvar: [
      "Språklig Variasjon",
      "Spansk språkvitenskap I: Ord",
      "Spansk språkvitenskap III: Tekst",
    ],
  },
  {
    navn: "Mona Jerndahl Fineide",
    stilling: stillinger.professor,
    kontor: "A-336",
    epost: "mona.j.fineide@hiof.no",
    kursansvar: ["Samfunnsvitenskap"],
  },
  {
    navn: "Anders Dechsling",
    stilling: stillinger.professor,
    kontor: "F1-083",
    epost: "anders.dechsling@hiof.no",
    kursansvar: [
      "Sosiale og emosjonelle vansker",
      "Rådgiving, veiledning og innovasjon i spesialpedagogisk virksomhet",
    ],
  },
  {
    navn: "Lilliana Andrea Del Busso",
    stilling: stillinger.professor,
    kontor: "A-303",
    epost: "lilliana.a.busso@hiof.no",
    kursansvar: [
      "Health, Quality of Life and Digitalisation",
      "Research Methods",
    ],
  },
  {
    navn: "Tore Marius Akerbæk",
    stilling: stillinger.lektor,
    kontor: "D1-016",
    epost: "tore.m.akerbak@hiof.no",
    kursansvar: [
      "Utvikling av interaktive nettsteder",
      "Grafisk design",
      "Kommunikasjonsdesign",
      "Innføring i programmering",
    ],
  },
  {
    navn: "Hege Hedlund Andersen",
    stilling: stillinger.lektor,
    kontor: "A-201",
    epost: "hege.h.andersen@hiof.no",
    kursansvar: [
      "Bachelorstudium i barnevern",
      "Barn i offentlig omsorg - barnevernfaglig oppfølgingsarbeid",
      "Innføring i barnevern for andre studieretninger",
    ],
  },
  {
    navn: "Petter André Høntorp Arvesen",
    stilling: stillinger.lektor,
    kontor: "A-335",
    epost: "petter.a.arvesen@hiof.no",
    kursansvar: [
      "Tverrfaglig videreutdanning i psykososialt arbeid med barn og unge",
      "Bachelorstudium i barnevern",
    ],
  },
  {
    navn: "Fred Rune Bjordal",
    stilling: stillinger.lektor,
    kontor: "E1-054(5)",
    epost: "fred.r.bjordal@hiof.no",
    kursansvar: [
      "Grunnskolelærerutdanning for trinn 5-10",
      "Grunnskolelærerutdanning for trinn 1-7",
    ],
  },
  {
    navn: "Therese Westreng Borgland",
    stilling: stillinger.lektor,
    kontor: "C2-038",
    epost: "therese.w.borgland@hiof.no",
    kursansvar: [
      "Barns utvikling, lek og læring 2",
      "Småbarnspedagogikk fordypning",
    ],
  },
  {
    navn: "Rolf-Einar Grini Bryggfjell",
    stilling: stillinger.lektor,
    kontor: "S-407",
    epost: "rolf.e.bryggfjell@hiof.no",
    kursansvar: ["Matematikk for Tress og Y-veien, del II"],
  },
  {
    navn: "Siri Ellen Adelaide Brynhildsen",
    stilling: stillinger.lektor,
    kontor: "N-321",
    epost: "siri.e.brynhildsen@hiof.no",
    kursansvar: [
      "Bachelor i sykepleie",
      "Sykepleie- helse, sykdom og lidelse I",
    ],
  },
  {
    navn: "Veronica Eidesgaard",
    stilling: stillinger.lektor,
    kontor: "A-230(2)",
    epost: "veronica.eidesgaard@hiof.no",
    kursansvar: ["Faglig ledelse, samhandling og pasientsikkerhet"],
  },
  {
    navn: "Silje Marie Engen",
    stilling: stillinger.lektor,
    kontor: "N-226",
    epost: "silje.m.engen@hiof.no",
    kursansvar: ["Psykisk helsearbeid", "Grunnleggende sykepleie"],
  },
  {
    navn: "Marius Geitle",
    stilling: stillinger.lektor,
    kontor: "D1-012",
    epost: "marius.geitle@hiof.no",
    kursansvar: ["Big Data: Lagring og Bearbeiding - emneansvarlig"],
  },
];
