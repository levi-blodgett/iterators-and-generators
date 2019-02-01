
// Spacers for log formatting
console.log('');
console.log('Iterators below');
console.log('');

// Iterator Example
function nameIterator(names) {
  let nextIndex = 0;
  
  return {
    next: function() {
      return nextIndex < names.length ?
      { value: names[nextIndex++], done: false} :
      { done: true }
    }
  }
}

// Create an array of names
const namesArr = ['Jack', 'Jill', 'John'];
// Init iterator and pass in the names array
const names = nameIterator(namesArr);

console.log(names.next());
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next());


// Spacers for log formatting
console.log('');
console.log('Generators below');
console.log('');


// Generator Example
function* sayNames() {
  yield 'Jack';
  yield 'Jill';
  yield 'John';
}

const name = sayNames();

console.log(name.next());
console.log(name.next());
console.log(name.next().value);
console.log(name.next());


// Spacers for log formatting
console.log('');
console.log('ID Creator below');
console.log('');

// ID Creator
function* createIDs() {
  // Change index based on when you want it to start
  let index = 0;

  while (true) {
    yield index++;
  }
}

const gen = createIDs();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

// I am actually shocked at the usefulness of both of these
// The generator seems specifically very useful for dom manipulation, and extremely powerful I could imagine with node.js, a backend.
// Very excited.