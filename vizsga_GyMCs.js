const fromModul = require('./GyMCs_modul')


//1. feladat adattípusok
// karakterlánc (szöveg), számok,      logikai érték,        tömb,              objektum,                                                   speciális
/* const a= 'cica'        let b=10      true v false         const=[1,2,3,]       const example = {name: Feri, age: 10}                       undefined         */

/* 2. feladat const és let közötti különbségek

A const az konstans, állandó, a kezdeti értéke nem változik, míg a let esetén a kezdeti érték változhat

let name= 'Feri'
console.log(name) --> Feri
name = 'Géza'
console.log(name) --> Géza lesz

const age = 25
console.log(age) --> 25
age = 10 --> hiba, mert nem lehet felülírni
*/

/*3. feladat A referencia szerinti és érték szerinti paraméterátadás
Érték szerinti átadás esetén az egyszerű adattípusok érték szerint adódnak át vagyis a függvényben való módosítások nem érintik az eredeti változó értékét.
Referencia szerint átadás esetén pl tömb átadás esetén, ha azon módosítást végzünk, akkor a hívó tömb is módosul.

Érték szerinti paraméterátadásra példa az a és b, míg a referencia szerinti átadás esetére példa a tömb.

*/
console.log('-----------------------3.feladat----------------------------------')

let a = 10;
let history = ['Kossuth', 'Széchenyi', 'Görgey'];

console.log(history)


const example = (b, array) => {
    b = 20;
    console.log('még nem történik semmi', array)
    array.push('Petőfi');
    console.log('fgv-ben', b);
    console.log('fgv-ben', history)
};

example(a, history);

console.log(a);
console.log(history);
console.log()

console.log('-----------------------3.feladat vége----------------------------------')

// 4. feladat containsElement Eldöntés tétele kell itt!

console.log('-----------------------4.feladat----------------------------------')


const containsElement = (arr, element) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true
        }
    }
    return false
}

console.log('Tartalmazza a 8-at', containsElement([1, 2, 45, 8, 11, -20, 5], 8))

console.log('-----------------------4.feladat vége----------------------------------')

// 5. feladat 
console.log('-----------------------5.feladat----------------------------------')


const firstHuman = {
    name: 'Feri',
    age: 20
}

const secondHuman = {
    name: 'Géza',
    age: 25
}


const getOlder = (a,b) => {
    if (a.age > b.age) {
    return a.name
    } else if (a.age < b.age) {
    return b.name 
    } else
    return 'Egykorúak'
    }
    
    console.log(getOlder(firstHuman, secondHuman))



console.log('-----------------------5.feladat vége----------------------------------')


//6. feladat
console.log('-----------------------6.feladat----------------------------------')

// const evensTwo = (num) => {
//   for (let i=0; i<=100; i++) {  
//     if (num %2 === 0 && num >=10 && num < 100) {
//         console.log(i)
//             }
// }
// }

//console.log(evensTwo())

//így nem fgv de kiírja a számokat
for(i=10; i<=100; i++) {
    if (i%2 === 0 && i >=10 && i<100)
    console.log(i)
}

console.log('-----------------------6.feladat vége----------------------------------')


//7. feladat Metszet
console.log('-----------------------7.feladat----------------------------------')

const section = (arr1, arr2) => {
    const segment = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j] && !segment.includes(arr1[i])) {
                segment.push(arr1[i])
            }
        }
    }
    return segment
}

console.log('Metszet:', section([1, 3, 2, 4, -5, 6], [0, -2, 2, 4, 6]))

console.log('-----------------------7.feladat vége----------------------------------')

//8. feladat
console.log('-----------------------8.feladat----------------------------------')


const result8 = fromModul.add(3, 5)
console.log(result8)
const result81 = fromModul.multip(2, 6)
console.log(result81)
const result82 = fromModul.pow(2, 5)
console.log(result82)

console.log('-----------------------8.feladat vége----------------------------------')


//9. feladat

const generate2D = (n, m) => {
        const arr = new Array(n)
        for (let i = 0; i < arr.length; i++) {
            arr[i] = new Array(m)
        }
        return arr;
    }