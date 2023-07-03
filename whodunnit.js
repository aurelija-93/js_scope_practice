// Episode 1
const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Library',
    weapon: 'Rope'
};

const declareMurderer = function() {
return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// log will return 'The murderer is Miss Scarlet'
// because 'Miss Scarlet' is the value of the scenario.murderer

// Episode 2
const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// log will return 'The murderer is Mrs. Peacock'
// because calling changeMurderer will change murderer from 'Professor Plum'
// the above is incorrect - line 19 is trying to reassign a constant...

// Episode 3
let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

// log will return:
// 'First Verdict: The murderer is Mrs. Peacock'
// 'Second Verdict: The murderer is Professor Plum'
// because secondVerdict only sees the 'murderer' value which is in global scope

// Episode 4
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

// log will return:
// 'The suspects are Miss Scarlet, Professor Plum, Colonel Mustard.'
// 'Suspect three is Mrs. Peacock.'
// because 'Colonel Mustard' will only be seen in the case of declareAllSuspects being called
// while 'Mrs. Peacock' is in global scope

// Episode 5
const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Kitchen',
    weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
scenario.weapon = newWeapon;
}

const declareWeapon = function() {
return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);

// log will return 'The weapon is the Revolver'
// because changeWeapon will be called successfully
// as the function is only modifying const scenario, not reassigning

// Episode 6
let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// log will return 'The murderer is Mrs. White'
// because both changeMurderer and plotTwist will be called successfully
// and murderer reassignment without a keyword will give it global scope

// Episode 7
let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// log will return 'The murderer is Professor Plum'
// because changeMurderer doesn't actually return anything
// oops...incorrect. I guess it doesn't need to return the value, just change it.
// Mr. Green makes sense though, since plotTwist gets called last and only changes murderer in block scope

// Episode 8
const scenario = {
    murderer: 'Mrs. Peacock',
    room: 'Conservatory',
    weapon: 'Lead Pipe'
};

const changeScenario = function() {
scenario.murderer = 'Mrs. Peacock';
scenario.room = 'Dining Room';

const plotTwist = function(room) {
    if (scenario.room === room) {
    scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
    if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
    }
    }

    unexpectedOutcome('Colonel Mustard');
}

plotTwist('Dining Room');
}

const declareWeapon = function() {
return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);

// log will return 'The weapon is Lead Pipe'
// because unexpectedOutcome will not change the weapon
// because the murderer will still be Mrs. Peacock when unexpectedOutcome is called
// because plotTwist will not change the murderer
// because plotTwist is called before changeScenario when scenario.room is still 'conservatory'
// I didn't notice that changeScenario included all subsequent functions and thought it was a standalone function :///

// Episode 9
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// log will return 'The murderer is Professor Plum'
// because murderer is only reassigned inside the if statement