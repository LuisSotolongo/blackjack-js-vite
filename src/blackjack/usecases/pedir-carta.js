import { crearDeck } from './crear-deck';

/**
 * @param {Array<String>} array de string
 * @returns retorna la ultima carta
 */
export const pedirCarta = (deck) => {
  if (!deck || deck.length === 0) {
    throw 'No hay mas cartas';
  }
  const carta = deck.pop();

  return carta; // carta debe de ser de la baraja
};
