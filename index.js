const farmAnimals = {
  cow: 'moo',
  horse: 'neigh',
  sheep: 'baa',
  pig: 'oink',
  chicken: 'cluck'
};
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

const animalSounds = ['cow', 'horse', 'sheep', 'pig', 'chicken'];
const [moo, neigh, baa, oink, cluck] = animalSounds;

const Animals = ["cow", "horse", "sheep", "pig", "chicken"];
const [bessie, , dolly, babe, little] = Animals;

const animals = {
    blackAndWhite: "cow",
    black: "sheep",
    pink: "pig"
}
const {blackAndWhite, black, pink} = animals


const Rainbowcolors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [red, orange, yellow, green, blue, indigo, violet] = colors;
const [r, o, y, g, b, indg, v] = colors;

const { muppetName, color, song, job, partner } = muppet;

const {
  album: {
    theMuppetMovie: { song2, song4 }
  },
  nestedJob,
  nestedPartner
} = nestedMuppet;