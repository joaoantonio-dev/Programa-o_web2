let qtd_homens = 0;
let qtd_mulheres = 0;
let soma_altura_homens = 0;

for (let i = 1; i <= 11; i++) {

    let altura = parseFloat(prompt("Digite a altura:"));
    let genero = prompt("Digite o gênero (M para mulher, H para homem):");

    if (i === 1) {
        var maior_altura = altura;
        var menor_altura = altura;
    } else {

        if (altura > maior_altura) {
            maior_altura = altura;
        }

        if (altura < menor_altura) {
            menor_altura = altura;
        }
    }

    if (genero === "H") {
        soma_altura_homens += altura;
        qtd_homens++;
    } 
    else if (genero === "M") {
        qtd_mulheres++;
    }
}

let media_homens;

if (qtd_homens > 0) {
    media_homens = soma_altura_homens / qtd_homens;
} else {
    media_homens = 0;
}

alert("Maior altura: " + maior_altura);
alert("Menor altura: " + menor_altura);
alert("Média das alturas dos homens: " + media_homens);
alert("Total de mulheres: " + qtd_mulheres);
