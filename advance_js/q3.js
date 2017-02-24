
function add() {

    var num = 0;
    var say = function() { document.getElementById('demo').innerHTML=num;
    num++;}
    return say;
}
var count=add();
