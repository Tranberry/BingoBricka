// get the for static boards
const BRICKA1 = document.getElementById('bricka1');
const BRICKA2 = document.getElementById('bricka2');
const BRICKA3 = document.getElementById('bricka3');
const BRICKA4 = document.getElementById('bricka4');

// BRICKA2.appendChild(test);

// alien code
function shuffle (array) {
  let unshuffled = array.length;
  let copy;
  let remaining;

  // While there are unshuffled elements
  while (unshuffled) {
    // Get one that hasn't been replaced yet
    remaining = Math.floor(Math.random() * unshuffled--);
    // And replace it with the unshuffled element
    copy = array[unshuffled];
    array[unshuffled] = array[remaining];
    array[remaining] = copy;
  }

  return array;
}

// // trying to make the columns
// // all numbars elegible for first column shuffled
// const tempArray = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// // storing 3 for the 1st column
// const colum1 = tempArray.slice(0, 3);

// // adding the 0 for all consecutive columns and shuffling
// tempArray.push(0);
// shuffle(tempArray);

// // storing 3 for the 2nd column
// for (let index = 0; index < tempArray.length; index++) {
//   tempArray[index] += 10;
// }
// shuffle(tempArray);
// const colum2 = tempArray.slice(0, 3);

// // storing 3 for the 3rd column
// for (let index = 0; index < tempArray.length; index++) {
//   tempArray[index] += 10;
// }
// shuffle(tempArray);
// const colum3 = tempArray.slice(0, 3);

// // storing 3 for the 4th column
// for (let index = 0; index < tempArray.length; index++) {
//   tempArray[index] += 10;
// }
// shuffle(tempArray);
// const colum4 = tempArray.slice(0, 3);

// // storing 3 for the 5th column
// for (let index = 0; index < tempArray.length; index++) {
//   tempArray[index] += 10;
// }
// shuffle(tempArray);
// const colum5 = tempArray.slice(0, 3);

// // storing 3 for the 6th column
// for (let index = 0; index < tempArray.length; index++) {
//   tempArray[index] += 10;
// }
// shuffle(tempArray);
// const colum6 = tempArray.slice(0, 3);

// // storing 3 for the 7th column
// for (let index = 0; index < tempArray.length; index++) {
//   tempArray[index] += 10;
// }
// shuffle(tempArray);
// const colum7 = tempArray.slice(0, 3);

// // storing 3 for the 8th column
// for (let index = 0; index < tempArray.length; index++) {
//   tempArray[index] += 10;
// }
// shuffle(tempArray);
// const colum8 = tempArray.slice(0, 3);

// // storing 3 for the 9th column
// for (let index = 0; index < tempArray.length; index++) {
//   tempArray[index] += 10;
// }
// tempArray.push(90);
// shuffle(tempArray);
// const colum9 = tempArray.slice(0, 3);

// break in nr generation

/// ////////////////////////////////////////////////////////////////////////////
// merge (concat) into one dragin-array
/// ////////////////////////////////////////////////////////////////////////////
// const fullBoard = colum1.concat(
//   colum2,
//   colum3,
//   colum4,
//   colum5,
//   colum6,
//   colum7,
//   colum8,
//   colum9
// );

// testing adding elements to the html doc

// fullBoard.forEach(element => {
//   const random = document.createElement('div');
//   BRICKA2.append(random);
//   random.className = 'rutor';
//   random.innerHTML = element;
// });

/// ////////////////////////////////////////////////////////////////////////////
// cycy wrote a thing
/// ////////////////////////////////////////////////////////////////////////////
// const bingo = Array(3 * 9).fill(0).reduce((a, _c, i) => {
//   const col = i % 9;

//   const max =
//     (col + 1) * /* 1-based column number */
//     10 - /* times 10 to get upper limmit */
//     (col === 8 ? 0 : 1); /* subtract 1 from upper limit unless its the last column */

//   const min =
//     col * /* 0-indexed column number works, because we're going down by 10. Could also subtract 10 later, buh this is ezier */
//     10 +
//     (col === 0 ? 1 : 0); /* add 1 to lower limit if its the first column */

//   let rand;
//   while (
//     rand = Math.floor(Math.random() * (max - min + 1) + min), /* textbook example from MDN. +1 inside is to account for exclusive max */
//     a.includes(rand) /* whether the array already includes the generated number. if yes, generate again */
//   ) { /* no-op */ }

//   a.push(rand);
//   return a;
// }, []);
// console.log(bingo);
// console.log(fullBoard);
/// ////////////////////////////////////////////////////////////////////////////
// end o cycy
/// ////////////////////////////////////////////////////////////////////////////

function genBoard (params) {
  const bingo = Array(3 * 9).fill(0).reduce((array, _c, i) => {
    const col = i % 9;

    const max =
    (col + 1) *
    10 -
    (col === 8 ? 0 : 1);

    const min =
    col *
    10 +
    (col === 0 ? 1 : 0);

    let random;
    while (
      // eslint-disable-next-line no-sequences
      random = Math.floor(Math.random() * (max - min + 1) + min),
      array.includes(random)
    ) { /* no-op */ }

    array.push(random);
    return array;
  }, []);
  return bingo;
}

genBoard().forEach(element => {
  const random = document.createElement('div');
  BRICKA1.append(random);
  random.className = 'rutor';
  random.innerHTML = element;
});
genBoard().forEach(element => {
  const random = document.createElement('div');
  BRICKA2.append(random);
  random.className = 'rutor';
  random.innerHTML = element;
});
genBoard().forEach(element => {
  const random = document.createElement('div');
  BRICKA3.append(random);
  random.className = 'rutor';
  random.innerHTML = element;
});
genBoard().forEach(element => {
  const random = document.createElement('div');
  BRICKA4.append(random);
  random.className = 'rutor';
  random.innerHTML = element;
});

// console.log(genBoard());

// cull div
const RUTOR1 = BRICKA1.children;
const RUTOR2 = BRICKA2.children;
const RUTOR3 = BRICKA3.children;
const RUTOR4 = BRICKA4.children;

function CullingNumber () {
  const culling = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const tempCulling = culling.slice(0, 4);
  return tempCulling;
}
function Culling (bricka) {
  CullingNumber().forEach(element => {
    bricka[element].innerHTML = '';
    bricka[element].classList.add('clear');
  });
  CullingNumber().forEach(element => {
    bricka[element + 9].innerHTML = '';
    bricka[element + 9].classList.add('clear');
  });
  CullingNumber().forEach(element => {
    bricka[element + 18].innerHTML = '';
    bricka[element + 18].classList.add('clear');
  });
}
Culling(RUTOR1);
Culling(RUTOR2);
Culling(RUTOR3);
Culling(RUTOR4);
