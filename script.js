
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 13
    msg.innerHTML = `<b>Agora são ${hora} horas.</b>`

    if(hora >= 0 && hora < 12){
        img.src = "imagens/amanhecer.png"
        document.body.style.background = "#e2cd9f"
    }else if (hora >= 12 && hora < 18){
        img.src = "imagens/tarde.png"
        document.body.style.background = "#b9846f"
    }else{
        img.src = "imagens/noite.png"
        document.body.style.background = "#515154"
    }


}

