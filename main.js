phrases = ["bruh", "skandeeda", "Drk smells like rotten eggs"];
function incrementValue()
{
    
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;

}

function reset(){
    document.getElementById('number').value = 0;
}

