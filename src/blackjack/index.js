import _ from 'underscore';
import { crearDeck, pedirCarta, valorCarta, crearCarta, puntosHTML, divCartasJugadores, turnoOrdenador, acumularPuntos } from './usecases/index';

const miModulo = (() => {
  ('use strict');

  let deck = [];
  console.log(deck);
  const tipos = ['C', 'D', 'H', 'S'],
    cartasEspeciales = ['A', 'J', 'Q', 'K'];

  let puntosJugadores = [];

  //referencias html

  const btnPedir = document.querySelector('#btnPedir'),
    btnDetener = document.querySelector('#btnDetener'),
    btnNuevoJuego = document.querySelector('#btnNuevoJuego');



  console.log({ divCartasJugadores });

  const inciarJuego = (numJugadores = 2) => {
    deck = crearDeck(tipos, cartasEspeciales);

    puntosJugadores = [];
    for (let i = 0; i < numJugadores; i++) {
      puntosJugadores.push(0);
    }

    puntosHTML.forEach((elemento) => {
      elemento.innerText = 0;
    });
    divCartasJugadores.forEach((elemento) => {
      elemento.innerHTML = '';
    });

    divCartasJugadores[0].innerHTML = '';
    divCartasJugadores[1].innerHTML = '';
    btnPedir.disabled = false;
    btnDetener.disabled = false;
  };


  //eventos
  btnPedir.addEventListener('click', () => {
    const carta = pedirCarta(deck);
    const puntosJugador = acumularPuntos(carta, 0, puntosJugadores);

    crearCarta(carta, 0);

    if (puntosJugador > 21) {
      console.warn('Perdiste');
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoOrdenador(puntosJugador, deck, puntosJugadores);
    } else if (puntosJugador === 21) {
      console.warn('ganaste');
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoOrdenador(puntosJugador, deck, puntosJugadores);
    }
  });

  btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoOrdenador(puntosJugadores[0], deck, puntosJugadores);
  });

  btnNuevoJuego.addEventListener('click', () => {
    inciarJuego();
  });

  return { nuevoJuego: inciarJuego };
})();
