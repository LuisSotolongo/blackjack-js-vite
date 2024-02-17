import _ from 'underscore';

/**
 * Esta funcion crea un nuevo deckk
 * @param {Array<String>} tiposDeCartas ejemplo ['C', 'D', 'H', 'S']
 * @param {Array<String>} tiposEspeciales ejemplo ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} retorna un deck ya mezclado
 */
//crea una nueva baraja
export const crearDeck = (tiposDeCartas, tiposEspeciales) => {
  let deck = [];

  if (!tiposDeCartas || tiposDeCartas.length === 0)
    throw new Error('TiposDeCartas es obligatorio como un array de string');

  if (!tiposEspeciales || tiposEspeciales.length === 0)
    throw new Error('tiposEspeciales es obligatorio como un array de string');

  deck = [];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCartas) {
      deck.push(i + tipo);
    }
  }
  for (let tipo of tiposDeCartas) {
    for (let carta of tiposEspeciales) {
      deck.push(carta + tipo);
    }
  }
  return _.shuffle(deck);
};
