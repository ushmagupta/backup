

function first_capital() {

var str= " hi my name IS aman";

  str = str.toLowerCase().split(' ');

  for (var i = 0; i < str.length; i++) {

    first_letter = str[i].charAt(0).toUpperCase();
    str[i]= first_letter + str[i].slice(1);

  }
   document.getElementById("demo").innerHTML = str.join(' ') ;
}
