
export const mensaje = (puntosOrdenador, puntosJugador) => {
  setTimeout(() => {
    if (puntosOrdenador > 21) {
      alert('Jugador Gana');
    } else if (puntosJugador === puntosOrdenador) {
      alert('Empate, nadie gana');
    } else if (puntosJugador > 21) {
      alert('Ordenador Gana');
    } else {
      alert('Perdiste');
    }
  }, 100);
};