function carregar() {
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    if (minuto < 10) {
        minuto = '0' + minuto
    }
    var hora_atual = window.document.getElementById('hora_atual')
    var img_hora = window.document.getElementById('imagem')

    hora_atual.innerHTML = `Agora são ${hora}:${minuto}`

    if (hora > 0 && hora < 5) {
        imagem.src = 'imagens/img-madrugada.png'
        window.document.body.style.background = "#5c5abf"
    } else if (hora >= 5 && hora < 12) {
        imagem.src = 'imagens/img-manha.png'
        window.document.body.style.background = "#fedead"
    } else if (hora >= 12 && hora < 18) {
        imagem.src = 'imagens/img-tarde.png'
        window.document.body.style.background = "#3fc6fe"
    } else if (hora >= 18 && hora <= 23) {
        imagem.src = 'imagens/img-noite.png'
        window.document.body.style.background = '#8c456f'
    }

}