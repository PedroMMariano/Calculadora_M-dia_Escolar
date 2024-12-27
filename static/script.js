function calcularMedia() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    const soma = nota1 + nota2 + nota3;
    const media = (soma / 3).toFixed(1);

    let mensagem = ('A sua média é:<br>' + media);
    mensagem += media >= 7 ? '<br>APROVADO<br>' : '<br>REPROVADO<br>';

    document.getElementById('resultado').innerHTML = mensagem;
}