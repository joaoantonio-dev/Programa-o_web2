qtd_homens = 0
qtd_mulheres = 0
soma_altura_homens = 0

for i in range(1, 16):
    altura = float(input("Digite a altura: "))
    genero = input("Digite o gênero digite M se for mulher e digite H se for homem:")
    if i == 1:
        maior_altura = altura
        menor_altura = altura
    else:
        if altura > maior_altura:
            maior_altura = altura

        if altura < menor_altura:
            menor_altura = altura

    if genero == "H":
        soma_altura_homens = soma_altura_homens + altura
        qtd_homens = qtd_homens + 1

    elif genero == "M":
        qtd_mulheres = qtd_mulheres + 1

if qtd_homens > 0:
    media_homens = soma_altura_homens / qtd_homens
else:
    media_homens = 0

print("Maior altura:{maior_altura:..2f}")
print("Menor altura:{menor_altura:..2f}")
print("Média das alturas dos homens: {media_homens}")
print("Total de mulheres: {qtd_mulheres}")
