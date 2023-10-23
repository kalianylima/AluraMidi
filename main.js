function tocaSom(idElementoAudio){
   const elemento=document.querySelector(seletorAudio);
   if(elemento!=null && elemento.localName ==='audio'){
    elemento.play();
   }else{
    alert('Elemento não incontrado ou seltor inválido')
   }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    
        tecla.onclick = function (){
            tocaSom(idAudio);
        }
        tecla.onkeydawn = function(evento){
         if(evento.code=== 'Space'|| evento.code ==='Enter'){
tecla.classList.add('ativa')
         }
        }
        tecla.onkeyup= function(){
            tecla.classiList.remove('ativa');
        }
}



