// get the for static boards
const BRICKA1 = document.getElementById('bricka1');
const BRICKA2 = document.getElementById('bricka2');
const BRICKA3 = document.getElementById('bricka3');
const BRICKA4 = document.getElementById('bricka4');
const BRICKA5 = document.getElementById('bricka5');
const BRICKA6 = document.getElementById('bricka6');
const BRICKA7 = document.getElementById('bricka7');
const BRICKA8 = document.getElementById('bricka8');

const RUTOR1 = BRICKA1.children;
const RUTOR2 = BRICKA2.children;
const RUTOR3 = BRICKA3.children;
const RUTOR4 = BRICKA4.children;
const RUTOR5 = BRICKA5.children;
const RUTOR6 = BRICKA6.children;
const RUTOR7 = BRICKA7.children;
const RUTOR8 = BRICKA8.children;

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

function genBoard (params) {
  /// //////////////////////////////////////////////////////////////////////////
  // cycy wrote a thing https://github.com/cyrusfirheir/
  /// //////////////////////////////////////////////////////////////////////////
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
    /// ////////////////////////////////////////////////////////////////////////
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
genBoard().forEach(element => {
  const random = document.createElement('div');
  BRICKA5.append(random);
  random.className = 'rutor';
  random.innerHTML = element;
});
genBoard().forEach(element => {
  const random = document.createElement('div');
  BRICKA6.append(random);
  random.className = 'rutor';
  random.innerHTML = element;
});
genBoard().forEach(element => {
  const random = document.createElement('div');
  BRICKA7.append(random);
  random.className = 'rutor';
  random.innerHTML = element;
});
genBoard().forEach(element => {
  const random = document.createElement('div');
  BRICKA8.append(random);
  random.className = 'rutor';
  random.innerHTML = element;
});

// cull div
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
Culling(RUTOR5);
Culling(RUTOR6);
Culling(RUTOR7);
Culling(RUTOR8);
