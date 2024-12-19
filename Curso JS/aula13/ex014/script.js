function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} 
    horas.`;

    var hora = 20
    
    if (hora >= 0 && hora < 12) {
        // Bom dia
        img.src = "fotomanha.png";
        console.log("Caminho da imagem:", img.src);
        document.body.style.background = '#FDC240';
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde
        img.src = "fototarde.png";
        console.log("Caminho da imagem:", img.src);
        document.body.style.background = "#D2681C";
    } else {
        // Boa noite
        img.src = "fotonoite.png";
        console.log("Caminho da imagem:", img.src);
        document.body.style.background = "#042A57";
    }
}
