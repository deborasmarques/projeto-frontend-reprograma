let primeiro = int(input('Primeiro numero: '))
let segundo  = int(input('Segundo numero : '))
let terceiro = int(input('Terceiro numero: '))

    //Achando o maior número

    maior = primeiro

    if (segundo > maior){
        maior = segundo
    }
    if (terceiro > maior){
        maior = terceiro
    }
    { print('Maior: ',maior)

    }
    //Achando o menor número

    menor = primeiro

    if (segundo < menor){
        menor = segundo
    }
    if (terceiro < menor){
        menor = terceiro
    }
    {print('Menor: ',menor)
    
    }      