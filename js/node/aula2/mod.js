module.exports = (x, y) => x * y;

module.exports = class Dog {
    constructor(dog) {
        this.dog = dog;
    }

    latir() {
        console.log(`${this.dog} esta fazendo au au`);
    }
}