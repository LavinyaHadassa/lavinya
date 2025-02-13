document.addEventListener('DOMContentLoaded', function() {
    const valorEmReal = document.getElementById('valorEmReal');
    const btnConverter = document.getElementById('btnConverter');
    const btnLimpar = document.getElementById('btnLimpar');
    const resultado = document.getElementById('Resultado');
    const aviso = document.getElementById('aviso');

    const taxasDeCambio = {
        'Dólar': 0.19,
        'Euro': 0.16,
        'Libra': 0.14,
        'Bitcoins': 0.0000032
    };

    valorEmReal.addEventListener('input', function() {
        if (valorEmReal.value > 0) {
            btnConverter.disabled = false;
        } else {
            btnConverter.disabled = true;
        }
    });

    btnConverter.addEventListener('click', function() {
        const moedaEstrangeira = document.querySelector('input[name="moedaEstrangeira"]:checked');
        
        if (!moedaEstrangeira) {
            aviso.textContent = 'Escolha uma moeda!';
            return;
        }

        const valor = parseFloat(valorEmReal.value);
        const taxa = taxasDeCambio[moedaEstrangeira.value];

        const valorConvertido = valor * taxa;

        resultado.textContent = `O valor convertido é ${moedaEstrangeira.value} ${valorConvertido.toFixed(2)}`;
        aviso.textContent = '';
    });

    btnLimpar.addEventListener('click', function() {
        valorEmReal.value = '';
        btnConverter.disabled = true;
        resultado.textContent = '';
        aviso.textContent = 'Digite o valor, escolha a moeda e clique em "Converter"';
    });
});
