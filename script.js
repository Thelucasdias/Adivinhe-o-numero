var numeroAleatorio = Math.round(Math.random() * 100 ) + 1; 

//for (var i=0; i<numeroAleatorio; i++) {console.log(i)}
var palpites = document.querySelector('.palpites');
var ultimoResultado = document.querySelector('.ultimoResultado');
var baixoOuAlto = document.querySelector('.baixoOuAlto');
var envioPalpite = document.querySelector('.envioPalpite');
var campoPalpite = document.querySelector('.inputPalpite');
var botaoReinicio;
var contagemPalpites = 1;


console.log(numeroAleatorio)

function conferirPalpite() {
    var palpiteUsuario = Number(campoPalpite.value);
    if (contagemPalpites === 1) {
        palpites.textContent = 'Palpites Anteriores: ';
    }
       palpites.textContent += palpiteUsuario + ' '; 
    
    if (palpiteUsuario === numeroAleatorio) {
        ultimoResultado.textContent = 'Parabéns, você acertou!';
        ultimoResultado.style.backgroundColor = 'green';
        baixoOuAlto.textContent = '';
        configFimdejogo();
    } else if (contagemPalpites === 10) {
        ultimoResultado.textContent = 'Fim de jogo! Perdeu mano'
        ultimoResultado.style.backgroundColor = 'red';
        baixoOuAlto.textContent = '';
        configFimdejogo();
    }    
    else {
        ultimoResultado.textContent = 'Errado!'
        ultimoResultado.style.backgroundColor = 'red';
        if (palpiteUsuario < numeroAleatorio) {
            baixoOuAlto.textContent = 'Seu palpite está muito baixo!';
        } 
        else if (palpiteUsuario > numeroAleatorio) {
            baixoOuAlto.textContent = 'Seu palpite está muito alto!';
         }
        }
        contagemPalpites++;
        campoPalpite.value = '';
        campoPalpite.focus();
    } 
    envioPalpite.addEventListener('click', conferirPalpite);

function configFimdejogo () {
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;
    botaoReinicio = document.createElement('button');
    botaoReinicio.textContent = 'Iniciar novo jogo!';
    document.body.appendChild(botaoReinicio);
    botaoReinicio.addEventListener('click', reiniciarjogo);
}

function reiniciarjogo() {
    contagemPalpites = 1;

    var reiniciarParas = document.querySelectorAll('.resultadoParas p');
    for (var i = 0; i < reiniciarParas.length; i++) { reiniciarParas[i].textContent = ''}    
    
    botaoReinicio.parentNode.removeChild(botaoReinicio);
    campoPalpite.disabled = false;
    envioPalpite.disabled = false;
    campoPalpite.value = '';
    campoPalpite.focus();

    ultimoResultado.style.backgroundColor = 'white'

    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}


