'use strict';

const afternoonGirls = ['Estela', 'Gemma', 'María Vedia', 'Anita', 'Rita', 'Elena'];

console.log(afternoonGirls);

const morningGirls = afternoonGirls;

console.log(morningGirls, afternoonGirls);

// morningGirls[3] = 'María Luena';
console.log(morningGirls);
console.log(afternoonGirls);

const noonGirls = afternoonGirls.slice();
console.log(noonGirls);
console.log(afternoonGirls);

noonGirls[3] = 'María Luena';
console.log(noonGirls);
console.log(afternoonGirls);


const eveningGirls = [].concat(afternoonGirls);
console.log(eveningGirls);

const nightGirls = [...afternoonGirls];
console.log(nightGirls);
nightGirls[2] = 'Teresa';
console.log(nightGirls);

const myUkulele = {
    name: 'Hygge',
    color: 'sparkling blue'
}

console.log(myUkulele);

// const myBanjo = myUkulele;
// myBanjo.strings = 5;
console.log(myUkulele);

const myBeautifulBanjo = Object.assign({}, myUkulele, { name: 'David Price Polansky', color: 'shinning brown', strings: 5 });
console.log(myBeautifulBanjo);
console.log(myUkulele);


const ele = {
    name: 'Elena',
    age: 'NaN',
    social: {
        twitter: 'ele_hopper',
        gitHub: 'ElenaCerezoSwing'
    }
};

const elena = Object.assign({}, ele);
elena.hogwarts = 'Hufflepuff';
console.log(elena);

const elenita = JSON.parse(JSON.stringify(ele));
elenita.social.twitter = 'little_grasshopper';
console.log(elenita);
console.log(ele);

