document.getElementById("myform").addEventListener("submit", function(event){
  event.preventDefault();

  let imie = document.getElementById("imie").value;
  let nazwisko = document.getElementById("nazwisko").value;
  let klasa = document.getElementById("kl").value;
  let stanowisko = document.getElementById("stan").value;

  let Dane = {
    imie: imie,
    nazwisko: nazwisko,
    klasa: klasa,
    stanowisko: stanowisko
  };

  let DaneJSON = JSON.stringify(Dane);
  sessionStorage.setItem("Dane", DaneJSON);
  let Seconddane = sessionStorage.getItem("Dane");
  console.log("Dane usera: ", JSON.parse(Seconddane));
    document.getElementById("myform").reset(); 
});
