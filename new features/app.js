// //iterator example
// function nameIterator(names) {
//     let nextIndex = 0;

//     return {
//         next: function () {
//             return nextIndex < name.length ?
//                 { value: names[nextIndex++] } :
//                 { done: true }
//         }
//     }
// }

// // create un array of name
// const namesArr = ['Aliou', 'Pape', 'fatou'];
// //init iterator and pass  in the names arrzy
// const names = nameIterator(namesArr);


// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
//===============================================
// //Generator Exampl
// function* sayNames() {
//     yield "Aly";
//     yield "fatou";
//     yield "papa";

// }

// const name = sayNames();
// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);

//===============================================

//ID creator
function* createIds(){
    let index = 0;
    while(true){
        yield index++;
    }
}
const gen = createIds();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);