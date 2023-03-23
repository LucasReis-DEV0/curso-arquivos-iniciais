function tocaSom (idElementoAudio){
    document.querySelector(idElementoAudio).play();
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