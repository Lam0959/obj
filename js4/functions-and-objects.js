function getName(obj) {
    return [obj.firstName, obj.lastName];
}

const person = {
    firstName: 'Akhmad',
    lastName: 'Kuduzow',
    age: 30
};

// console.log(getName(person));

function concatName(obj, lastname) {
    return obj.firstname + ' ' + lastname;
}

const person1 = {
    firstname: 'Alvi',
    age: 26
};

// console.log(concatName(person1, 'Tsugaev'));

function correctName(obj) {    
    if (obj.fathername === undefined) {
        return obj.firstname;
    } else {
        return `${obj.firstname} ${obj.lastname} ${obj.fathername}`;
    }
}

const firstPerson = {
    firstname: 'Alvi',
    lastname: 'Tsugaev',
    fathername: undefined
};

// console.log(correctName(firstPerson));

const secondPerson = {
    firstname: 'Akhmad',
    lastname: 'Kuduzow',
    fathername: 'Yakubovich'
};

// console.log(correctName(secondPerson)); 