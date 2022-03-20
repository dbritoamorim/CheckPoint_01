

//Opções de alimentos
let Pipoca = 10;
let Macarrão = 8;
let Carne = 15;
let Feijao = 12;
let Brigadeiro = 8;

//Funções
function microondas (opcao, tempo){
    switch(opcao) {
    case"Pipoca" :
            if(tempo <10)
            console.log("Tempo insuficiente");
            else if (tempo >= 10 && tempo <= 19)
            console.log("Bom apetite!")
            else if (tempo >= 20 && tempo <= 29)
            console.log ("Queimou!");
            else
            console.log("Kabumm!");
    break;
    case "Macarrão":
        if (tempo <8)
        console.log("Tempo insuficiente");
        else if (tempo >= 8 && tempo <= 15)
        console.log("Bom Apetite");
        else if (tempo >=16 && tempo <=23)
        console.log("Queimou!");
        else
        console.log("Kabumm!");
    break;  
    case "Carne":
        if (tempo <15)
        console.log("Tempo insuficiente");
        else if (tempo >= 15 && tempo <= 29)
        console.log("Bom Apetite!");
        else if (tempo >= 30 && tempo <= 44)
        console.log("Queimou!")
        else 
        console.log("Kabumm!");
    break;
    case "Feijão":
        if (tempo <12)
        console.log("Tempo insuficiente")
        else if (tempo >= 12 && tempo <= 23)
        console.log("Bom Apetite");
        else if (tempo >=24 && tempo <=35)
        console.log("Queimou!");
        else
        console.log("Kabumm!");
    break
    case "Brigadeiro":
        if(tempo <8)
        console.log("Tempo insuficiente");
        else if (tempo >= 8 && tempo <= 15)
        console.log("Bom Apetite");
        else if (tempo >= 16 && tempo <= 23)
        console.log ("Queimou!");
        else
        console.log("Kabumm!")
    break
    default:
        return console.log ("Prato inexistente!");

    }

} 

//Escolha o valor e o alimento
console.log (microondas("Pipoca", 8));
console.log (microondas("Macarrão", 33));
console.log (microondas("Carne", 22));
console.log (microondas("Feijao", 12));
console.log (microondas("Brigadeiro", 45));
