alert(" Olá!, seja Bem-Vindo Calendário TI104");

var nome = prompt(" Pode me digitar seu nome?");
var x;
var r = confirm(nome + " Nosso site coleta alguns dados para melhorias constantes \n Você aceita compartilhar com conosco ?");
if (r == true) {

    x = nome + " você pressionou OK!";
    alert(nome + " Obrigado, pode avançar")
} else {
    x = " você pressionou Cancelar!";
    alert(nome + " Tudo bem,entendemos sua decisão. Porém a página não será carregada")
}

alert(nome + " ATENÇÃO aos MESES: \n 1 = Janeiro \n 2 = Fevereiro \n 3 = Março \n 4 = Abril \n 5 = Maio \n 6 = Junho \n 7 = Julho \n 8 = Agosto \n 9 = Setembro \n 10 = Outubro \n 11 = Novembro \n 12 = Dezembro ")
let codigo = parseInt(prompt(nome + " \n ATENÇÃO Digite a opção desejada do mês númericamente: \n EXEMPLO:\n 1 \n 2"))
switch (codigo) {

    case 1:

        alert(nome + " O mês digitado foi 1 que é equivalente a " + " Janeiro")
        break

    case 2:
        alert(nome + " O mês digitado foi 2 que é equivalente a " + " Feveiro")
        break

    case 3:
        alert(nome + "O mês digitado foi 3 que é equivalente a " + " Março")
        break

    case 4:
        alert(nome + " O mês digitado foi 4 que é equivalente a " + " Abril")
        break

    case 5:
        alert(nome + " O mês digitado foi 5 que é equivalente a " + " Maio")
        break

    case 6:
        alert(nome + " O mês digitado foi 6 que é equivalente a " + " Junho")
        break

    case 7:
        alert(nome + " O mês digitado foi 7 que é equivalente a " + " Julho")
        break

    case 8:
        alert(nome + " O mês digitado foi 8 que é equivalente a " + " Agosto")
        break

    case 9:
        alert(nome + " O mês digitado foi 9 que é equivalente a " + " Setembro")
        break

    case 10:
        alert(nome + " O mês digitado foi  10 que é equivalente a " + " Outubro")
        break

    case 11:
        alert(nome + " O mês digitado foi 11 que é equivalente a " + " Novembro")
        break

    case 12:
        alert(nome + " O mês digitado foi 12 que é equivalente a " + " Dezembro")
        break

    default:
        alert(nome + " O Mês digitado é inválido, por favor informe o número do mês correto. ")
}