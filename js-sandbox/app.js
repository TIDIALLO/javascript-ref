//create Person Constructor
function Person(name, dob) {
    this.name = name;
    //this.age = age
    this.birthday = new Date(dob);
    this.calculateAge = function () {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 2022);
    }
}

const bob = new Person('Bob', '12-05-1998');
console.log(bob.calculateAge());