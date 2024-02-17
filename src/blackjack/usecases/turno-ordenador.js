import { pedirCarta } from './pedir-carta';
import { mensaje } from './mensaje';
import { crearCarta } from './crear-carta';
import { acumularPuntos } from './acumular-puntos';

export const turnoOrdenador = (puntosMinimos, deck, puntosJugadores) => {
  let puntosOrdenador = 0;

  do {
    const carta = pedirCarta(deck);
    puntosOrdenador = acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores);
    crearCarta(carta, puntosJugadores.length - 1);
  } while (puntosOrdenador < puntosMinimos && puntosMinimos <= 21);

  mensaje(puntosOrdenador, puntosMinimos);
};
