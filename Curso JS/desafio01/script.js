function verificar() {
    var date = new Date();
    var ano = date.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');
  
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';

        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (fsex[0].checked) {
            genero = "Homem";
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'homem-crianca.webp');
            } else if (idade < 21) {
                img.setAttribute('src', 'homem-jovem.webp');
            } else if (idade < 50) {
                img.setAttribute('src', 'homem-adulto.webp');
            } else {
                img.setAttribute('src', 'homem-velho.jpeg');
            }
        } else if (fsex[1].checked) {
            genero = "Mulher";
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'mulher-crianca.jpg');
            } else if (idade < 21) {
                img.setAttribute('src', 'mulher-jovem.webp');
            } else if (idade < 50) {
                img.setAttribute('src', 'mulher-adulta.jpeg');
            } else {
                img.setAttribute('src', 'mulher-velha.jpeg');
            }
        }

        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}
