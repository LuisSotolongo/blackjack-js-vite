
  export const puntosHTML = document.querySelectorAll('small'),
    divCartasJugadores = document.querySelectorAll('.divCartas');

export const crearCarta = (carta, turno) => {
  const imgCarta = document.createElement('img');

  imgCarta.src = `assets/cartas/${carta}.png`;
  imgCarta.classList.add('cartas');
  divCartasJugadores[turno].append(imgCarta);
  console.log(' divCartas turno', turno, divCartasJugadores[turno]);
};
