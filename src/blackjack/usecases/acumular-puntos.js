import { valorCarta } from './valor-carta';
import { puntosHTML } from './crear-carta';

  //Acumular puntos jugador
  //turno 0 = primer jugador y el ultimo siempre el ordenador
   export const acumularPuntos = (carta, turno, puntosJugadores) => {
    console.log(carta);
    puntosJugadores[turno] += valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    console.table({ puntosJugadores });
    return puntosJugadores[turno];
  };
