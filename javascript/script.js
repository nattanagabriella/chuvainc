const viewMore = document.getElementById("view-more")
const btn = document.querySelector('#view-more')
const container = document.querySelector('#text')
const sucess = document.querySelector('#sucess')
const form = document.querySelector('#form')
const presentation = document.querySelector('#presentation')
const hidden = document.querySelector('#hidden')
const answer = document.querySelector('#answer')
const btnTopico = document.querySelector('#topic-button')
const btnEnviar = document.querySelector('#btnEnviar')
const btnNovoTopico = document.querySelector('#btnNovoTopico')
const btnMostrarResposta = document.querySelector('#resp')
const like = document.querySelector('#like')
const btnMostrarMenu = document.querySelector('#menu-hamburguer')
const normalMenu = document.querySelector('#menu-mobile')
const validador = 1

container.style.display = 'none'
sucess.style.display = 'none'
form.style.display = 'none'
presentation.style.display = 'none'
hidden.style.display = 'none'
answer.style.display = 'none'
presentation.style.display = 'block'
sucess.style.display = 'none'

btn.addEventListener('click', function(){
    if(container.style.display === 'none'){
        container.style.display = 'block'
        viewMore.style.display = 'none'
    }else{
        container.style.display = 'none'       
    }
})

btnTopico.addEventListener('click', function(){
    if(form.style.display === 'none'){
        form.style.display = 'block'
        presentation.style.display = 'none'
    }
})

btnEnviar.addEventListener('click', function(){
    if(sucess.style.display === 'none'){
        sucess.style.display = 'block'
        hidden.style.display = 'block'
        form.style.display = 'none'
    }
})

btnNovoTopico.addEventListener('click', function(){
    if(form.style.display === 'none'){
        form.style.display = 'block'
        hidden.style.display = 'none'
        sucess.style.display = 'none'
    }
})

btnMostrarResposta.addEventListener('click', function(){
    if(answer.style.display === 'none'){
        answer.style.display = 'block'
        btnMostrarResposta.innerHTML='4 respostas'
        like.innerHTML='4 likes'
    }else{
        answer.style.display = 'none'
        btnMostrarResposta.innerHTML='1 resposta'
        like.innerHTML='1 like'
    }
}) 

btnMostrarMenu.addEventListener('click', function(){
    if(validador === 1){
        normalMenu.style.display = 'block'
        validador = 0
    }else{
        normalMenu.style.display = 'none'
        validador = 1
    }
}) 

document.body.onresize = function() {
    if (document.body.clientWidth > 769) {
        normalMenu.style.display = 'none'
    }
};




