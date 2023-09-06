let name, lastname, color, message, output;

output = document.getElementById('output');

name = prompt('Inserisci il tuo nome');
lastname = prompt('Inserisci il tuo cognome');
color = prompt('Inserisci il tuo colore preferito');

message = name+lastname+color+'23';

output.innerHTML = message;