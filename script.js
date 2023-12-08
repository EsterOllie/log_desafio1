console.log("Ano novo chegando");
let nome = "Mariah Carey";

let idade = 54;
let anoAtual = 2023;

let dtNasc = 2023 - 54;
console.log(` Mariah Carey nasceu no ano ${dtNasc}`);

let quartaFeira = true;
console.log(quartaFeira);
console.log(typeof(quartaFeira));

let idadeParticipante = 17;
if(idadeParticipante >= 18){
    console.log("Você é maior de idade, poderá curtir o shoe do roberto Carlos com participação especial de Mariah Carey.");
}
else{
    console.log("Sinto muito, mas assistirá da tv globo");
}

let mesNiver = "Janeiro"
if(mesNiver == "Agosto" || mesNiver == "Dezembro" || mesNiver=="Junho"){
    console.log(`Uma ou mais opções estão corretas. O mês escolhido foi o mês ${mesNiver}`)
}
else{
    console.log(`Algo de errado não está certo, o mês digitado foi  ${mesNiver}`)
}
