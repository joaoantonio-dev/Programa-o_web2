var qtd_homens = 0
var qtd_mulheres = 0
var soma_altura_homens = 0

for (let i = 0;i<10;i++){
    var altura = prompt("Digite a altura: ")
    var genero = prompt("Digite o gênero M se for mulher e H se for homem:")

    if (i==1){
        var maior_altura = altura
        var menor_altura = altura 
    } else {
        if (altura>maior_altura){
            maior_altura = altura
        }
        
        if (altura<menor_altura){
            menor_altura = altura
        }

    if (genero =="H"){
        soma_altura_homens += altura 
        qtd_homens += 1
    } else{
        qtd_mulheres += 1
    }
    } 
}

if (qtd_homens>0){
    var media_homens = soma_altura_homens / qtd_homens

} else{
    media_homens = 0
}

alert("A maior altura é (maior_altura)")
