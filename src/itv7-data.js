const sketch = require('sketch');
const { DataSupplier, UI } = sketch
const util = require('util');
// const json = require('json-loader');

export function onStartUp() {
  DataSupplier.registerDataSupplier('public.text', 'Entrants', 'SupplyEntrants');
}

export function onShutDown() {
  DataSupplier.deregisterDataSupplier();
}



// Entrants
export function onSupplyEntrants(context) {
  const key = context.data.key;
  const count = context.data.requestedCount;
  const items = context.data.items;
  const data = require('../assets/entrants.json');
  shuffle(data);

  data.forEach((item, i) => {
    DataSupplier.supplyDataAtIndex(key, data[i], i);
  })
}



// Shuffle Function
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}