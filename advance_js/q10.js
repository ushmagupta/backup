
function remove_duplicate()
{
  var input="anaconda";
  var result="";
  for(var i = 0; i < input.length; i++)
  {

      if(result.indexOf(input[i])==-1)
            result+=input[i];
  }
  document.getElementById("demo").innerHTML = result;
}
