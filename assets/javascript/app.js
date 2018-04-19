


function countDown(i) {
    var int = setInterval(function() {
        document.getElementById("demo").innerHTML = "Number: " + i;
        i--;
        if (i === -1){
          clearInterval(int), alert("Games Over!");
          handleClick();
      };
    }, 1000);
};

window.onload = function(){countDown(10)};


function handleClick()
      {         
var amountCorrect = 0;          
for(var i = 1; i <= 45; i++) {
  var radios = document.getElementsByName('group'+i);
  for(var j = 0; j < radios.length; j++) {
    var radio = radios[j];
    if(radio.value == "correct" && radio.checked) {
      amountCorrect++;
    }
  }
}
        document.getElementById("demo-2").innerHTML = "You got " + amountCorrect + " Correct";
      }