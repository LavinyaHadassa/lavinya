//quiz 
function iniciarQuiz(){
    let pontuação= 0;

    let resposta1 = prompt("Qual é minha cor favorita?\nA) Rosa\nB) Roxo\nC)Azul\nD)Verde");
    if (resposta1 && resposta1.toLowerCase() === "b")pontuação ++;


    let resposta2 = prompt("Em que dia eu nasci?\nA) 22/07\nB) 22/06\nC)27/06\nD)27/08");
    if (resposta2 && resposta2.toLowerCase() === "b") pontuação ++;

    let resposta3 = prompt("Qual meu gênero musical favorito?\nA)MPB\nB)Forró\nC)funk\nD)Samba");
    if (resposta3 && resposta3.toLowerCase() === "a") pontuação ++;

    let resposta4 = prompt("Qual área quero exercer?nA)Ciências exatas\nB)Ciências humanas\nC)Ciências Biológicas\nD)N.D.A");
    if (resposta4 && resposta4.toLowerCase() === "c") pontuação ++;


    let resposta5 = prompt("Qual é o meu gênero de música favorito?nA)Aventura\nB)Terror\nC)Romance\nD)Comédia");
    if (resposta5 && resposta5.toLowerCase() === "d") pontuação ++;

    document.write("Sua pontuação é: " + pontuação);

}
