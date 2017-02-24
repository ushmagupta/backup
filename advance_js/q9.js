
function highest_occurence()
{
var input="aaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbcccccccc";
var Count = {};
var max = '';
for(var i = 0; i < input.length; i++)
{
    var key = input[i];
    if(!Count[key]){
     Count[key] = 0;
    }
    Count[key]++;
    if(max == '' || Count[key] > Count[max]){
        max = key;
    }
}
document.getElementById("demo").innerHTML = max;

}
