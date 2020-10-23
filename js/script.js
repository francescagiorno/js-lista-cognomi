var cognomeUtente = prompt("Qual'è il tuo cognome?");
var surname = ["bianchi", "rossi", "duzioni", "balsano", "verdi"];

//step2
surname.push(cognomeUtente);

//arrey arrivo
var cognomiordinati = [];

surname.sort();
 //step 3
var olEL = document.getElementById("surnameList");
var i = 0;
var posizione = 0;
while( i < surname.length){
  olEL.innerHTML += "<li>" + surname[i] + "</li>";
   i++;
   if (cognomeUtente==surname[i]) {
     posizione = 1;

   }
   document.getElementById("risultato").innerHTML+=(posizione +1);
}
