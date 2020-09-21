class Person {
    constructor(name, age, place, family, job, hobbies, horse) {
        this.name = name;
        this.age = age;
        this.place = place;
        this.family = family;
        this.job = job;
        this.hobbies = hobbies;
        this.horse = horse;
    }

    makeHouse() {
        console.log('Ok, I am going to make a house');
    }
}

class Horse {
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }

    eatGrass() {
        console.log('Eating...');
    }

    transportMaterials() {
        console.log('Maybe eat grass before?');
    }
}

const adel = new Horse('Adel', 15, 'brown');

const abdulkareem = new Person('Abdulkareem', 35, 'Riyadh', ['wife', 'child1', 'child2', 'child3'], 'construction worker', ['eat dates', 'smoke water pipe'], adel);
