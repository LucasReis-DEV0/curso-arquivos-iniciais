function tocaSom (seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if (elemento === null){
        //alert('Elemento não encontrado')
        
    }

    if(elemento != null && elemento.localName === 'audio'){
            elemento.play();
    }
    else{
        alert('Elemento não encontrado')
        console.log('elemento não encontrado')
    }

}

const ListaDeTeclas = document.querySelectorAll('.tecla');



//para
for ( let contador =0; contador < ListaDeTeclas.length; contador++) {

        const tecla = ListaDeTeclas[contador];
        const instrumento = tecla.classList[1];

        //console.log(instrumento)

        //template string
        const idAudio = `#som_${instrumento}`;
        //console.log(idAudio);

        tecla.onclick = function(){
            tocaSom(idAudio)
        }

        tecla.onkeydown = function(evento){

            console.log(evento.code == 'Space')

            if (evento.code === 'Space' || evento.code === 'Enter'){ 
                tecla.classList.add('ativa');
            }
 
}
        
        tecla.onkeyup = function(){
            tecla.classList.remove('ativa');
    }

        console.log(contador);

}

//