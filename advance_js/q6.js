var count=0;
var id = setInterval(myTimer, 1000);

function myTimer() {
	  count++;
    var d = new Date();
	  document.getElementById("message").innerHTML = d.toLocaleTimeString();

    if(count>=7200){
     clearTimeout(id);
	   alert("Your service has completed");
	 }
}
