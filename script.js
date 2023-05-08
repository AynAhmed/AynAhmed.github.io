
function myGreeting() {
    console.log(`${this.name} is a ${this.breed} and he stars in a TV show called ${this.famousShow}.`);
    if (this.canTalk === true) {
        console.log(`${this.name} can talk!`);
    } else {
        console.log(`${this.name} cannot talk.`);
    }
}

function Dog(name, breed, famousShow, canTalk) {
    this.name = name;
    this.breed = breed;
    this.famousShow = famousShow;
    this.canTalk = canTalk;
}

const barney = new Dog("Barney", "Old English Sheepdog", "Barney", true);
const bingo = new Dog("Bingo", "Pug", "Puppy Dog Pals", false);

for (const property in bingo) {
    console.log(`${property}: ${bingo[property]}`);
}
