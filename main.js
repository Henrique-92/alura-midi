

function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if(elemento != null && elemento.localName === 'audio'){
        elemento.play();
    } else{
        console.log('Elemento não encontrado');
    }
    
}


const listaDeTeclas = document.querySelectorAll('.tecla');


for(let contador =0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];

    // instrutmento = tecla_clap ou tecla_pom
    const instrumento = tecla.classList[1];

    // idAudio = `#som_${tecla_clap}`
    const idAudio = `#som_${instrumento}`
    //console.log(idAudio);

    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){


        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
    //console.log(contador);
}
