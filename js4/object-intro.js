let start = {
key1: 'white',
key2: 'black'
};

let person = {
firstName: 'Джаггернаут',
lastName: 'Гром',
city: 'Грозный',
age: 15,
height: 150, // в сантиметрах
height: 1.5, // в метрах
born: 2010,
haveCar: true,
carName: 'Lada',
haveSkill: false,
level: 3,
mobilePhone: {
    model: 'Redmi Note 14',
    Price: 16500,
    carrier: 'Beeline',
    manufacturer: 'Xiaomi',
}
};

// console.log(start);
// console.log(person);

let galaxy = {
    name: "Млечный Путь",             
    diameter: 105700,                 
    age: 13.6,                        
    spiral: true,                     
    numberOfStars: 250000000000,     
    containsPlanetarySystems: true,   
    commonPlanets: ["Земля", "Марс", "Юпитер"], 
    hasSupermassiveBlackHole: true,   
    supermassiveBlackHoleMass: 4.1,   
    lastExplored: null,               
    nearbyGalaxies: {                 
        andromeda: {
            name: "Андромеда",
            distance: 2.537,         
            mergerProbability: 0.8    
        },
        triangulum: {
            name: "Треугольник",
            distance: 3.0             
        }
    }
};

// console.log(galaxy);

delete galaxy.age;

// console.log(galaxy);

let student = {
    firstName: "Русалим",
    lastName: "Дутханов",
    city: 'Grozny',
    speciality: "Приподования языка..."
};

student.age = 19;

// console.log(student);