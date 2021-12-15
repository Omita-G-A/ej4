const oneLinerJoke = require('one-liner-joke');

const randomJoke = oneLinerJoke.getRandomJokeWithTag('stupid');

console.log(`Un chiste relacionado con estos temas: ${randomJoke.tags}.
Ahí va: ${randomJoke.body}`);