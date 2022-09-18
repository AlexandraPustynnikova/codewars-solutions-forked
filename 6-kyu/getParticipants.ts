/*
* Johnny is a farmer and he annually holds a beet farmers convention "Drop the beet".

Every year he takes photos of farmers handshaking. Johnny knows that no two farmers handshake more than once. He also knows that some of the possible handshake combinations may not happen.

However, Johnny would like to know the minimal amount of people that participated this year just by counting all the handshakes.

Help Johnny by writing a function, that takes the amount of handshakes and returns the minimal amount of people needed to perform these handshakes (a pair of farmers handshake only once).
* */

function getParticipants(handshakes: number): number {
    if (handshakes === 0) return 0;

    const maxHandshakes = Math.floor((Math.sqrt(8 * handshakes + 1) - 1) / 2 + 1);
    const handClone = maxHandshakes * (maxHandshakes - 1) / 2;

    return handClone === handshakes ? maxHandshakes : maxHandshakes + 1;
}

// Test cases
console.log(getParticipants(0)); // 0
console.log(getParticipants(1)); // 2
console.log(getParticipants(3)); // 3
console.log(getParticipants(6)); // 4
console.log(getParticipants(7)); // 5
