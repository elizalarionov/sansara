function setLanguage(lang) {
  localStorage.setItem("sansaraLang", lang);
  alert(`Limba selectată: ${lang.toUpperCase()}`);
}

document.getElementById("dateForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const day = document.getElementById("day").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;

  const key = `${day}-${month}`;

  const events = {
    "8-11": [
      "1847 – S-a născut Bram Stoker, autorul romanului Dracula.",
      "1935 – S-a născut Alain Delon, actor francez.",
      "1884 – S-a născut Hermann Rorschach, inventatorul testului psihologic cu pete de cerneală."
    ],
    "25-12": [
      "1989 – Execuția lui Nicolae și Elena Ceaușescu.",
      "1991 – Dizolvarea oficială a URSS."
    ]
  };

  const results = document.getElementById("results");
  results.innerHTML = "";

  if (events[key]) {
    events[key].forEach(event => {
      const p = document.createElement("p");
      p.textContent = event;
      results.appendChild(p);
    });
  } else {
    results.innerHTML = "<p>Nu am găsit evenimente pentru această dată. În curând vom adăuga mai multe!</p>";
  }
});