// homework1 Подсчитать апельсин, чтоб ввел код do...while
// let i = 0;
// do {
//     let orange = prompt();
//     if (orange == 'orange') {  //если слова равным таким, то выводит значения))))
//         i += 1;
//     } else {
//         break;
//     }
// } while (true); 
// console.log(i);

// homework2 Сначала угадать число чтоб быть равным рандомам и его код бесконечно до 15 числа с помощью while
// let iGuess = Number(prompt());
// let random = Math.round(Math.random() * 5) + 5; //рандо от 5 до 10
// while (random == iGuess) {
//     let random2 = Math.round(Math.random() * 15); //рандом до 15 будет бесконечный цикл, ааааааа..... 
//     console.log(random2)
// }

// homework3  Вывести код 5 раз Hello и Bye с помощью for
// 1 вариант там иногда не могут понять, что в консоле вывел примеры: 5 Hello, 5 Bye
// let count = 0
// for (let i = 0; i < 5; i++) {
//     console.log('Hello')
// }
// console.log(String(count) + ' раз Hello')
// let count2 = 0
// for (let i = 0; i < 5; i++) {
//     console.log('Bye')
// }
// console.log(String(count2) + ' раз Bye')

// 2 вариант мне удобно так вывести каждый раз один из них. Примеры: Hello, bye, hello, bye
// let count = 0
// for (let i = 0; i < 5; i++) {
//     console.log('Hello')
//     console.log('Bye')
//     count += 1
// }
// console.log(String(count) + ' раз Hello и Bye')