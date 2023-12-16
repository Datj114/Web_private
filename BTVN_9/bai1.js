//person 1
const person1 = {
    fullName: 'Nguyen Van A',
    heigh: 1.59,
    weight: 67,
    calcBMI: function () {
        return this.weight / this.heigh ** 2;
    },
};
//person 2
const person2 = {
    fullName: 'Bui Van Dat',
    heigh: 1.9,
    weight: 67,
    calcBMI: function () {
        return this.weight / this.heigh ** 2;
    },
};
if (person1.calcBMI() > person2.calcBMI()) {
    console.log(`${person1.fullName} co chi so cao hon`);
} else if (person1.calcBMI() < person2.calcBMI()) {
    console.log(`${person2.fullName} co chi so cao hon`);
} else {
    console.log(`${person1.fullName} cung chi so ${person2.fullName}`);
}
