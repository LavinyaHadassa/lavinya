let numberToFind= 0;
let attemps= 0;

function refresh (){
  //gere um número aleatório
  attemps = 0;
  numberToFind = parseInt(Math.random() * 100);

  document.write(numberToFind)

}

function verityNumber(){
  let element = document.getElementById('bet').value;

  if(bet > 100 || bet < 1)
  {
    document.write("inválido");
    return;
 
  }

  if(bet > numberToFind)
  {
    attemps--;
    document.write("👀 O número a ser adivinhado é MENOR");
  }
 
    else if(bet < numberToFind) { 
      attemps++;
      document.write("👀 O número a ser adivinhado é MAIOR");
  }
    else{

      document.write("🥳 PARABÉNS você acertou!");
      
    }
      
    
}









