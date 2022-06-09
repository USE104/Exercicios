alert(" Seja Bem-vindo ao Sistema de Folha de Pagamento de Salário")
var nome = prompt (" Prezado Colaborador  digite seu nome ")
var x;
var r = confirm(nome + " ATENÇÃO! \n Detectamos que seus dados estão desatualizados! \n É Obrigário a atualização para dar continuidade");
if (r == true) {

    x = nome + " você pressionou OK!";
    alert(nome + " Obrigado por aceita atualizar \n será exibidos algumas interações para atualização")
} else {
    x = " você pressionou Cancelar!";
    alert(nome + " Tudo bem,entendemos sua decisão. Porém a página não será carregada")
}

var x;
var r = confirm(nome + " Seu salário é o valor de R$ 500,00 ?");
if (r == true) {

    x = nome+ " você pressionou OK!";
    alert(nome+ " Obrigado pela confirmação")
} else {
    x = " você pressionou Cancelar!";
    alert(nome + " Você informou que não. \n Informe ao seu Gerente a situação. Obrigado")
}
var vendas= prompt(nome+ " Por favor Agora Digite o total de vendas efetuadas no mês:")
var salario = 500.00
var vendas = 1230.30*0.15 
var novoSalario = parseFloat(salario) + parseFloat(vendas)
alert(nome+` Seu salário após os absurdos dos descontados é de ${novoSalario.toFixed(2)}`)
