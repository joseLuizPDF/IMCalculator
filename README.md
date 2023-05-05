# IMCalculator
Este código HTML define uma página da web com uma calculadora de Índice de Massa Corporal (IMC).

Na seção head do código, encontramos metatags que definem o conjunto de caracteres usado no documento, bem como a escala de exibição da página.
Também encontramos uma tag title, que define o título da página exibido na aba do navegador.

A seção body contém o conteúdo da página. Começa com uma div com a classe "container", que envolve todo o conteúdo da página.
Dentro desta div, encontramos um cabeçalho (h1) que contém o título da página.

Em seguida, há um formulário (form) com a classe "form". Este formulário tem dois campos de entrada de texto (input) para o peso e a altura do usuário, respectivamente,
bem como um botão (button) para executar o cálculo do IMC.

O resultado do cálculo do IMC é exibido em uma div com o ID "result". Também há uma tabela (table) com a classe "imc-table", que contém as classificações de IMC e 
seus valores correspondentes.

O código CSS define o estilo da página. Ele define o estilo dos elementos HTML usando seletores de classe e de tag. As propriedades CSS definem o tamanho, a cor,
o alinhamento e outras características visuais dos elementos HTML. Por exemplo, as classes "container", "form" e "imc-table" definem a largura máxima dos elementos,
bem como as margens superiores e inferiores, a cor de fundo e as bordas. As classes "imc-table th" e "imc-table td" definem a aparência das células da tabela.

Finalmente, o código JavaScript define a lógica de negócios da calculadora de IMC. Ele define uma função para calcular o IMC com base nos valores de altura e peso
do usuário, uma função para classificar o IMC com base no valor calculado e uma função para limpar a tabela de classificação.
O código também adiciona um evento de envio ao formulário para executar o cálculo do IMC quando o botão de envio for pressionado.
