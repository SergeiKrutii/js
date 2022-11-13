// const age = 10;
// const totalPrice = 200.74;
// const userName = "Chelsy";
// const message = "Добро пожаловать!";
// const isOpen = true;
// const shouldConfirm = false;



// const type = typeof age;
// console.log(type);


// const shouldRenew = confirm("pay again?");
// console.log(shouldRenew);

// let quantity = prompt("Введите количество!");
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

// let elementWidth = "50px";
// elementWidth = Number.parseInt(elementWidth);
// console.log("elementWidth:", elementWidth);
// const result = Number.parseInt(elementWidth);
// console.log(result);

// let zp = 1100.334456;
// zp = Number(zp.toFixed(3));
// console.log(zp);
 

// let brand = 'SamSUng';
// console.log(brand[4]);
// console.log(brand.slice(1).toLowerCase());
// brand = brand[0] + brand.slice(1).toLowerCase();
// console.log(brand);

// let day = 1;
// let item;
// swith (day) {
//     case 1 : item = "even"; break;
//     case 2 : item = "odd"; break;
//     default: "set number";
// }


// ЗАДАЧА 1
// баланс пользователя храниться в переменной balance
// сумма покупки храниться в переменной payment

// перед проверкой вывести сообщение: "Общая стоимость заказа [число] кредитов.
// Проверяем кол-во доступное средств на счету"

//если сумма покупки не превышает баланс :
    //Вычесть из баланса сумма покупки
    //Вывести сообщение "Нас счету осталось [число] кредитов"
//Если сумма покупки превышает баланс
    //вывести сообщение "На счету недостаточно средств для проведения операции!"
//Вывести сообщение "Операция завершена"

// let balance = 1000;
// const payment = 111;

// console.log(`Общая стоимость заказа ${payment} кредитов`);
// console.log(`Доступное число кредитов ${balance}`);

// if (payment <= balance) {
//     balance -= payment;
//     console.log(`На счету осталось ${balance} кредитов`);
// }   else {
//         console.log("На счету недостаточно средств для проведения операции!");
//     }
//     console.log("Операция завершена")




    // console.log(balance - payment);
    // console.log("На счету осталось" + " " (balance - payment) + " " + "кредитов");
    // let =let.Number(balance - payment) ;
    // console.log("Нас счету осталось" + " " + payment + " " + "кредитов");


// ЗАДАЧА 2
//Общая сумма потраченного храниться в переменной totalSpent
//Сумма текущего платежа храниться в переменной payment
//скидка храниться в переменной discount

//Если потрачено от [100 до 1000] - бронзовый партнер, - скидка 2%
//Если потрачено от [1000 до 5000] - серебрянный партнер, - скидка 5%
//Если потрачено [больше 5000] - золотой партнер, - скидка 10%
//Если потрачено [меньше 100] - не партнер, - скидка 0%
//
//в результате вывести сообщение
// "Оформляем заказ на сумму [сумма] со скидкой [скидка %]"


// const totalSpent = 999;
// let payment = 500;
// let discount ;

// if (totalSpent < 100) {
//     discount = '0%';
// } else if (totalSpent >= 100 && totalSpent < 1000) {
//     discount = '2%';
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//     discount = '5%';
// } else { (totalSpent > 5000 )
//     discount = '10%';
// }

// console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount}`)
// console.log(typeof discount);

// let cost;
// const subsciption = 'premium';

// switch (subsciption) {
//     case "free" :
//     cost = 0;
//     break;

//     case 'pro':
//     cost = 100;
//     break;

//     case 'premium' :
//     cost = 500;
//     break;

//     default:
//         console.log('Invalid subscription type');
// }
// console.log(cost);


// let counter = 0;

// while (counter < 111) {
//     console.log('counter: ', counter) ;
//     counter += 3;
// }

// let clientsCounter = 12 ;
// const maxClients = 25 ;

// while (clientsCounter < maxClients) {
//     console.log(clientsCounter) ;
//     clientsCounter += 1 ;
// }


// let password = '' ;
 
// do {
//     password = prompt('Введите пароль длиннее 4-х символов');
//     } while (password.length < 5) ;
//     console.log('Ввели пароль: ', password);


// for (let i = 0; i <= 20; i +=5) {
//     console.log(i);
// }

// const target = 3;
// let sum = 0 ;
// for (let i = 0; i <= target; i +=1) {
//     sum += i;
// }
// console.log(sum);


// const x = 16;
// const y = 3;
// console.log(x % y);

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// for (let i = 0; i <=5; i += 1) {
//     console.log(i);

//     if (i === 3) {
//         console.log("Нашли число 3, прерываем выполнение цикла");
//         break;
//     }
// }
// console.log('after cicle');

// const number = 10;

// for (let i = 0; i < number ; i += 1) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log('Nechetnoe i: ', i);
// }

// ВРЕМЯ НА 2 УРОКЕ 31:20

// ЗАДАЧА 1

// напиши скрипт который посчитывает общую сумму зарплат работников
// кол-во работников храниться в переменной employees
// зарплата каждого работника это случайное число от 500 до 5000
// записать сумму в переменную totalSalary и вывести в консоль

// const employees = 5;
// let totalSalary = 0;
// const minSalary = 500;
// const maxSalary = 5000;

// for (let i = 0; i < 5; i += 1) {
//     const salary = Math.round (
//         Math.random() * (maxSalary - minSalary) + minSalary,
//     );
//     console.log(`ЗП работника номер ${i} - ${salary}`)
//     totalSalary += salary;
//     console.log(`Сумма ЗП всех работников ` , totalSalary)
// }


    // console.log((Math.round.Math.random(totalSalary)* max - min + 1));
    // totalSalary += zpEm;
// console.log(totalSalary);


// console.log((Math.random(zpEm)*5000 - 1 + 1).toFixed(0));



//
// ЗАДАЧА 2
//
// написать скрипт который подсчитывает сумму всех четных чисел
// которые входят в диапазон чисел и переменных от min до  max
// например если min=0 и max=5 то диапазон 0-5 и в нем два четных числа 2 и 4 - их сумма 6
//

// let summ = 0;
// const min = 3;
// const max = 44;

// for (let i = min; i <= max; i += 1) {
//     if (i % 2 === 0){
//         console.log(i);
//     }
    

// }


// const x = 3;
// const y = 5;
// let str ;
// str = x < y;
// console.log(str)


///необходимо запрашивать у пользоветля числа до тех пор пока
///пользователь не нажмет отмену и в конце показать общую сумму
///всех введенных чисел


// const numbersCount = 5;
// let counter = 1;
// let sum = 0;

// while (counter <= numbersCount) {
//     const userAnsware = prompt(`Enter number ${counter} of ${numbersCount}`);
//     if (userAnsware === null) {
//         alert('Close window');
//         counter -= 1;
//         break;
//     }
//     const userNumber = sum += Number(userAnsware);
//     if (Number.isNaN(userNumber)){
//         alert(`${userNumber} try again`);
//         continue;
//     }
//     // sum += Number(userAnsware);
//     counter += 1;
// }
// alert(`Total sum is ${sum}`);
    //////////////////////////////////////////////////////////////
// let x = prompt();
//  console.log(typeof x);

// const value = prompt("Please enter a number!");
// console.log(typeof value); // "string"
// console.log(value); // "5"554


// // Change code below this line
// function add(a, b, c) {
//     const result = a + b + c;
//      console.log(`Addition result equals ${result}`);
   
//      // Change code above this line
     
//    }
//    add(5, 10, 15);
//    add(10, 20, 30);
//    add(15, 27, 10);


// let message;
// function checkAge(age) {
//   if (age >= 18){
//   console.log(message = `${age} You are an adult`);
//   }else {
//  console.log(message = `${age} You are a minor`);
//   }
// }

// checkAge(20);
// checkAge(8);
// checkAge(14);
// checkAge(38);

// function checkStorage(available, ordered) {
//   let message ;
// 	if (available < ordered ) {
// 		console.log(message = 'Not enough goods in stock!') ;
//     }else {
//     	console.log(message = 'Order is processed, our manager will contact you.');
//     }
  
// 	return message;
// }

// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(200, 20);
// checkStorage(150, 180);

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   let totalPrice = pricePerDroid * orderedQuantity;
//   if (customerCredits < totalPrice){
//   	console.log(message = 'Insufficient funds!');
//   }else {
//     customerCredits -= totalPrice;
//       console.log(message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left!`);
//   }
//   return message;
// }
// makeTransaction(3000, 5, 23000);
// makeTransaction(1000, 3, 15000);
// makeTransaction(5000, 10, 8000);
// makeTransaction(2000, 8, 10000);
// makeTransaction(500, 10, 5000);

// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line

//   return substring;
// }
// getSubstring("Hello world", 3);
// getSubstring("Hello world", 6);
// getSubstring("Hello world", 8);
// getSubstring("Hello world", 11);
// getSubstring("Hello world", 0);


// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
// 	if (message.length <= maxLength) {
//     	result = message;
//     }else {
//     	result = message.slice(0, maxLength) + '...';
//     }
//   /// Change code above this line
//   return result;
// }
// formatMessage("Curabitur ligula sapien", 16);
// formatMessage("Curabitur ligula sapien", 23);
// formatMessage("Vestibulum facilisis purus nec", 20);
// formatMessage("Vestibulum facilisis purus nec", 30);
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 15);

// function checkForName(fullName, name) {
//  const result = fullName.toLowerCase().includes(name.toLowerCase());
//   console.log(result);
// }
// checkForName("Egor Kolbasov", "Egor");
// checkForName("Egor Kolbasov", "egor");
// checkForName("Egor Kolbasov", "egOr");
// checkForName("Egor Kolbasov", "Zhenya");
// checkForName("Vadim Nekrasov", "Vadim");
// checkForName("Vadim Nekrasov", "vadim");
// checkForName("Vadim Nekrasov", "Dima");

// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   let normalizedMessage = message.toLowerCase();
// 	if (normalizedMessage.includes('spam') || normalizedMessage.includes( 'sale')){
//     	result = true;
//     }else {
//     	result = false;
//     }
//   // Change code above this line
//   return result;
// }
// checkForSpam("Latest technology news");
// checkForSpam("JavaScript weekly newsletter");
// checkForSpam("Get best sale offers now!");
// checkForSpam("Amazing SalE, only tonight!");
// checkForSpam("Trust me, this is not a spam message");
// checkForSpam("Get rid of sPaM emails. Our book in on sale!");
// checkForSpam("[SPAM] How to earn fast money?");


// const message = 'Get rid of sPaM emails. Our book in on sale!';
// console.log(message.toLowerCase());


// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const a = ["Mango"];
// // Так как a это массив, в b записывается ссылка на уже существующий
// // массив в памяти. Теперь a и b указывают на один и тот же массив.
// const b = a;
// console.log(a); // ["Mango"]
// console.log(b); // ["Mango"]

// // Изменим массив, добавив еще один элемент, используя указатель из a
// a.push("Poly");
// console.log(a); // ["Mango", "Poly"]

// // b также изменилось, потому что b, как и a,
// // просто содержит ссылку на одно и то же место в памяти
// console.log(b); // ["Mango", "Poly"]

// // Результат повторяется
// b.push("Ajax");
// console.log(a); // ["Mango", "Poly", "Ajax"]
// console.log(b); // ["Mango", "Poly", "Ajax"]

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]

// Перебор массива
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);
// const lastIndex = friends.length - 1;

// for (let i = 0; i <= lastIndex; i += 1) {
// //  или for (let i = 0; i < friend.length; i += 1)
//     friends[i] += '-1';
    
// }
// console.table(friends);

// const cart = [54, 28, 105, 70, 92, 17, 120];
// // сделать переменную total
// let total = 0;
// // перебрать массив
// for (let i = 0; i < cart.length; i += 1){
//     // или
//     // for (const value of cart) {
//     // total += value;
//     // }
//     console.log(cart[i]);
// // каждый элемент приплюсовать к total
//     total += cart[i];
// }
// console.log('Total - ', total);
//
//
//
// в случае когда надо имзменить каждый элемент массива, пример
// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;
// for (let i = 0; i < cart.length; i += 1) {
//     cart[i] = Math.round(cart[i] * 1.1);
    
// }
// console.log(cart);


// написать скрипт поиска самого большого числа в массиве пи условии что
// числа уникальные (не повторяются)
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let bigestNumber = numbers[0];

// for (const number of numbers) {
//     if (bigestNumber < number) {
//         bigestNumber = number;
//         console.log(bigestNumber);
//     }
// }
// const cards = ['Карточка-1', 'Карточка-2', 'Карточка-3', 'Карточка-4', 'Карточка-5'];
// const cardToupdate = 'Карточка-3';
// const index = cards.indexOf(cardToupdate);
// console.log(index);

// cards.splice(index, 1, 'Обновленная карточка-4');
// console.table(cards);



///////////////////////////// перепор пороля на схождение через ф-цию

// const logins = ['m4ngoDoge', 'kiwidab3st', 'polyiscute', 'aj4xth3m4n'];
// const findLogin = function (allLogins, loginToFind) {
//     for (const login of allLogins) {
//         if (login === loginToFind) {
//             return `Пользователь ${loginToFind} найден`;
//         }
//     }
//     return `Пользователь ${loginToFind} не найден`;

    // тернанрное выполнение
    // const findLogin = function (allLogins, loginToFind){
    // return allLogins.includes(loginToFind) 
    // ? `Пользователь ${ loginToFind } найден` 
    // : `Пользователь ${loginToFind} не найден`
    // }
    // 
    // 
// }

// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'kiwidab3st'));
// console.log(findLogin(logins, 'jam4l'));
// console.log(findLogin(logins, 'polyiscute'));

// Задача №8 не прошла проверку
// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length -1;
// console.log(lastElementIndex);
// const lastElement = fruits[lastElementIndex];
// console.log(lastElement);

// function getExtremeElements(array) {
//   // Change code below this line
// 	console.log([array[0], array[array.length -1]]);

//   // Change code above this line
// }
// getExtremeElements([1, 2, 3, 4, 5]);
// getExtremeElements(["Earth", "Mars", "Venus"]);
// getExtremeElements(["apple", "peach", "pear", "banana"]);

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//     let value = message.split(' ');
//     let totalSum = value.length * pricePerWord;
//     console.log(totalSum);
  
	

//    // Change code above this line
// }
// calculateEngravingPrice("JavaScript is in my blood", 10);
// calculateEngravingPrice("JavaScript is in my blood", 20);
// calculateEngravingPrice("Web-development is creative work", 40);
// calculateEngravingPrice("Web-development is creative work", 20);


// function slugify(title) {
//   // Change code below this line
//     const slug = title.toLowerCase().split(' ').join('-');

// 	console.log(slug);
//   // Change code above this line
// }
// slugify("Arrays for begginers");
// slugify("English for developer");
// slugify("Ten secrets of JavaScript");
// slugify("How to become a JUNIOR developer in TWO WEEKS");

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//     let	newArray = firstArray.concat(secondArray);
//   if (newArray.length >= maxLength){
//   	console.log(newArray = newArray.slice(0, maxLength));
//     }

//     // Change code above this line
//   }
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);

// function calculateTotal(number) {
//  // Change code below this line
//   let summ = 0;
//     for (let i = 1; i <= number; i += 1) {
//         summ += i ;  
//     };
//     console.log(summ);

//   // Change code above this line
// }
// // calculateTotal(1);
// // calculateTotal(3);
// // calculateTotal(7);
// // calculateTotal(18);
// calculateTotal(24);

// const fruits = ['apple', 'plum', 'pear', 'orange'];
// console.log(fruits.length);

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// 	for (let i = 0; i < order.length; i += 1){
//         total += order[i];
//         // console.log(total);
//     }
//   // Change code above this line
//   console.log(total);
// }
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);

// function findLongestWord(string) {
//     // Change code below this line
//     const arrayFromString = string.split(' ');
//     let largestWord = arrayFromString[0];
//     for (let i = 0; i < arrayFromString.length; i += 1) {
//         let word = arrayFromString[i];
//         if (largestWord.length < word.length) {
//             largestWord = word;
//             // continue;
//         }

        
        
//     }
//     // console.log(word);
//     console.log(largestWord);
//     return largestWord;
// }
   

        
  // Change code above this line

// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("Google do a roll");
// findLongestWord("May the force be with you");


// function createArrayOfNumbers(min, max) {
//   let numbers = [];
//   // Change code below this line
// for (let i = min; i <= max; i += 1){
    
//     numbers.push(i);
//     console.log(numbers);
// }
//   // Change code above this line

// }
// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(14, 17);
// createArrayOfNumbers(29, 34);


// function filterArray(numbers, value) {
//    // Change code below this line
//     let newArray = [];

//     for (let i = 0; i < numbers.length; i += 1){
//         if (numbers[i] > value) {
//         newArray.push(numbers[i]); 
//         }
//     }
//     console.log(newArray);

//   // Change code above this line
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   console.log(fruits.includes(fruit)); // Change this line
// }
// checkFruit("plum");
// checkFruit("mandarin");
// checkFruit("pear");
// checkFruit("Pear");
// checkFruit("apple")


//////////////// НЕ ПРОШЛА ПРОВЕРКУ ДЗ 25

// function getCommonElements(array1, array2) {
//   // Change code below this line
//     const equalArray = [];
//     for (let i = 0; i < array1.length; i += 1){
        
//         if (array2.includes(array1[i])) {
//             equalArray.push(array1[i]);
        

//         }
//         // return equalArray;
//     }
//     console.log(equalArray);

//  // Change code above this line
// }
// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// getCommonElements([1, 2, 3], [10, 20, 30])


// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (const number of numbers) {
   

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);


// function findNumber(start, end, divisor) {
//   // Change code below this line


//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }

 
// }
// function includes(array, value) {
//   // Change code below this line

// 	for (const key of array) {
//     	if (key === value) {
//             // console.log(true);
//             return true;
//         }
        
//     }
//     // console.log(key);
//     return false; 
// }
///////////////////////////////////////
// function includes(array, value) {
//   // Change code below this line
// for (const key of array) {
//     if (key === value) {
//             console.log(true);
//         	return true;
//         }
      	 
//     }
//     console.log(false);
//   return false;
  // Change code above this line
// }
///////////////////////////////////////

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter");
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus");
// includes(["apple", "plum", "pear", "orange"], "plum");
// includes(["apple", "plum", "pear", "orange"], "kiwi");
  
// const rgb = [200, 100];

// const [red, green, blue, alfa = 0.3] = rgb;

// console.log(`R:${red},G:${green},B:${blue},Alfa:${alfa}`); // "R:200,G:100,B:255,Alfa:0.3"

// const palylist = {
//     name: 'my playlist',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,
// };
// console.log(palylist);
// const { rating, tracks, name, trackCount, autor = 'nosignal' } = palylist;
// console.log(autor);
// console.log(palylist);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.pageCount = 836;
// book.originalLanguage = "en";
// book.translations = ["ua", "ru"];

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // 'en'
// console.log(book); // ['ua', 'ru']

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смешного человека",
//     author: "Федор Достоевский",
//     rating: 7.75,
//   },
// ];
// for (const book of books) {
// //   Объект книги
//   console.log(book);
// //   Название
//   console.log(book.title);
//   // Автор
//   console.log(book.author);
//   // Рейтинг
//   console.log(book.rating);
// }

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     rating: 8.51,
//   },
// ];

// for (const book of books) {
//   const { title, author, rating } = book;

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// const worker = 'plumber';
// const salary = 15000;
// const yearsKey = 'experience';
// const shiftKey = 'shift';
// const shiftValue = 'day';


// const user = {
//     newWorker: worker, 
//     salary, 
//     [yearsKey]: 5,
//     [shiftKey]: shiftValue,
// }

// console.log(user);


// const coffee = {
//     name: 'Late',
//     price: 3,
//     size: 'Medium',
//     sort: 'Arabika',
//     isMilk: true,
//     caloriesL: 135, 
//     coffeine: true,
//     syrop: ['caramel','chocolate','cherry'],
// }
// const getData = function (obj, key) {
//     return obj[key];
// }

// const value = getData(coffee, 'name');
// console.log(value);
// console.log(getData(coffee, 'sort'));
// console.log(getData(coffee, 'price'));
// console.log(getData(coffee, 'age'));


// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
// }

// const vipUser = Object.create(user);

// vipUser.premium = true;
// vipUser.days = 320;
// vipUser.hobby = 'JavaScript';
// console.log(vipUser);

// for (const key in vipUser) {
//     if (vipUser.hasOwnProperty(key)) {
//         console.log(`${key}: ${vipUser[key]}`);
//     }
// }
///////////////////////// АНАЛОГИЧНО 
// const keys = Object.keys(vipUser);

// for (const key of keys) {
//     console.log(`${key}: ${vipUser[key]}`);
// }

// function isObjectEmpty(obj) {
//     const keys = Object.keys(obj);
//     if (keys.length === 0) {
//         return true;
//     } else {
//         return false;
//     }
//     /////////////////// ИЛИ ВАРИАНТ 2
//     // return keys.length === 0 ? true : false;

//     /////////////////// ИЛИ ВАРИАНТ 3
//     // return keys.length === 0;
// }

// console.log(isObjectEmpty({}));
// console.log(isObjectEmpty({a:1}));

// const hotel = {
//     hotelName: 'Resort Hotel',
//     stars: 5,
//     array: [1,2,3],
//     capacity: {
//         smallBuilding: 50,
//         mainBuilding: 100,
//     }
// }
// // const { hotelName, stars } = hotel;
// const { hotelName: newName,
//     stars = 4,
//     hasPool = false,
//     array: [first, second, third = 44],
//     capacity: hotelSize = {},
//     capacity: { smallBuilding, mainBuilding: mainCapacity= 80},} = hotel;
//  console.log(newName); 
//  console.log(stars);
//  console.log(hasPool);
//  console.log(hotelSize);
//  console.log(smallBuilding);
//  console.log(mainCapacity);
//  console.log(first);
//  console.log(second);
//  console.log(third);

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
// 	if (apartment.hasOwnProperty(key))
//   keys.push(key);
//   values.push(apartment[key]);

//   // Change code above this line
// }
// console.log(values);

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// console.log(keys);
// for (const key of keys) {
//   console.log(key)
// 	values.push(apartment[key]);
// }

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   let keys = Object.keys(object);
//   console.log(keys);
//   for (const key of keys) {
//      {
//       propCount += 1;
//     }
//   }
//   console.log(propCount);
//   // return propCount;
//   // Change code above this line
// }
// // countProps({})
// countProps({ name: "Mango", age: 2 })
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   // console.log(color);
//   hexColors.push(color.hex);
//   console.log(hexColors);
//   rgbColors.push(color.rgb);
//   // console.log(rgbColors);
// }

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this lin
//   for (const product of products) {
//   	if (productName === product.name){
//       console.log(product.name)
//     }
    
//   }
//   return null
// }
// getProductPrice("Radar")
// getProductPrice("Grip")
// getProductPrice("Scanner")
// getProductPrice("Droid")
// getProductPrice("Engine")

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // const key = Object.values(products);
//   const arr = [];
//   for (const product of products) { 
//     if (product.hasOwnProperty(propName)) {
//       arr.push(product[propName])
//       console.log(arr)
//     }
//   }

// }
// getAllPropValues("name")
// getAllPropValues("quantity")

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
// let totalSum = 0;
//   for (const product of products) {
//   	if (product.name === productName) {
//     	totalSum = product.price * product.quantity;
//     }
//     console.log(totalSum)
//   }


//   // Пиши код выше этой строки
// }
// calculateTotalPrice("Blaster")
// calculateTotalPrice("Radar")
// calculateTotalPrice("Droid")
// calculateTotalPrice("Grip")

// const book = {
//   title: "Последнее королевство",
//   author: "Бернард Корнуэлл",
//   genres: ["историческая проза", "приключения"],
//   publicc: true,
//   rating: 8.38,
// };

// // Деструктуризируем
// const { title, author, publicc, rating, coverImage } = book;
// console.log(coverImage); // undefined

// const accessType = publicc ? "публичном" : "закрытом";
// const message = `Книга ${title} автора ${author} с рейтингом ${rating} находится в ${accessType} доступе.`;
// console.log(`Книга ${title} автора ${author} с рейтингом ${rating} находится в ${accessType} доступе.`)



// return { ...{ category, priority, completed }, ...data }; -----> аналог
// return {
//       completed,
//       category,
//       priority,
//       ...data,
//     }


// Change code below this line
// function findMatches(firstArr, ...secondArr) {
//   const matches = []; // Don't change this line
//   for (const secnumb of secondArr) {
//     if (firstArr.includes(secnumb)) {
//       matches.push(secnumb);
//     }

//     // // console.log(secnumb)
//     // for (const firnumb of firstArr) { 
//     //   if (secnumb === firnumb) { 
//     //     matches.push(secnumb);
//     //   }
      
//     // }
    
//   }
//   console.log(matches)
//   // Change code above this line
//   // return matches;
// }
// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line
// 	const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);
	
// 	return this.books;
//     // Change code above this line
//   },
  
// };
// bookShelf.updateBook("Haze", "Dungeon chronicles")

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     const potionIndex = this.potions.indexOf(potionName);
//     console.log(potionIndex)
//     this.potions.splice(potionIndex, 1);
//     // Change code above this line
//     // console.log(this.potions)
//   },
// };
// atTheOldToad.removePotion("Dragon breath")


// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//  for (let i = 0; i < this.potions.length; i += 1){
//  	if (this.potions[i] === oldName ) {
//     	this.potions[i] = newName;
//     }
//  }
//     // Change code above this line
//   },
// };


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
  
//   getPotions() {
//     return this.potions;
//   },
//   //   addPotion(newPotion) {
//   //     for (const potion of this.potions) {
//   //       console.log(potion);
//   //       if (potion.name === newPotion.name) {
//   //         console.log(`Error! Potion ${newPotion.name} is already in your inventory!`);
//   //         return;
//   //       }
      
//   //     }
//   //     this.potions.push(newPotion);
//   //     console.table(this.potions)
//   //   },
  
//   // }

//   //   removePotion(potionName) {

//   //     const { potions } = this;

//   //     for (let i = 0; i < potions.length; i += 1) {

//   //       const { name } = potions[i];

//   //       if (potionName === name) {
        
//   //         potions.splice(i, 1)
//   //         console.log(potions)
//   //         return `Potion ${potionName} is not in inventory!`;
          
//   //       }
//   //       console.log('nety takogo')
//   //     }
      
      
//   // },
    
//   // }

//   updatePotionName(oldName, newName) {
//     // const { potions } = this;
//     for (let i = 0; i < this.potions.length; i += 1){
//  	if (this.potions[i].name === oldName ) {
//       this.potions[i].name = newName;
//       return `Potion ${oldName} is not in inventory!`;
//     }
//     }
//     // console.log(this.potions)
//     }

    
//   }

// atTheOldToad.addPotion({ name: "Invisibility", price: 620 })
// atTheOldToad.addPotion({ name: "Power potion", price: 270 })
// atTheOldToad.addPotion({ name: "Dragon breath", price: 700 })
// atTheOldToad.addPotion({ name: "Stone skin", price: 240 })

// atTheOldToad.removePotion("Dragon breath")
// atTheOldToad.removePotion("Speed potion")
// atTheOldToad.removePotion("Speed potions")

// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth')
// atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion')

// const numbers = [1, 9, 6, 2, 3];
// // // number.sort();
// // // console.log(numbers)

// // const letters = ['b', 'B', 'a', 'A'];
// // // letters.sort()
// // // console.log(letters)

// // numbers.sort((curEl, nextEl) => {
// //     return curEl - nextEl;
// // })
// // console.log(numbers)

// const descSortedNumbers = [...numbers].sort((a, b) => b - a);
// console.log(descSortedNumbers)
// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//     { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

// const sortByBestPlayers = [...players].sort((prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayed

// );

// console.table(sortByBestPlayers)
/////////////////////////////////////////////////////////////////////////////////////
// const numbers = [1, 5, 2, 4, 3];
// const greaterThenTwo = numbers.filter(num => num > 2);
// console.log(greaterThenTwo)
// const multByThree = greaterThenTwo.map(num => num * 3);
// const sorted = multByThree.map((a, b) => a - b);

// /// краткая запись через цепочку вызовов
// const sortedd = numbers
//     .filter(num => num > 2)
//     .map(num => num * 3)
//     .sort((a, b) => a - b);


// const names = ['John', 'Mary', 'Kate'];

// names.forEach((name, idx) => {
//     console.log(`${idx + 1}: ${name}`);
// })

let arr = [5, 6, 7, 8, 9];

// const sum = arr.map(num => num * num)
//     .filter(square => square > 40)
//     .reduce((total, number) => total + number);

// // const sum = arr.reduce((total, item) => {
// //     const square = item * item;
// //     return square > 40 ? total + square : total;
// //     // if (square > 40) {
// //     //     return total + square;
// //     // }
// //     // return total;
// // }, 0)
// console.log(0 || "" || 2 || undefined || true || falsе)

// let a = 1*(5 - 1) * 2;

// console.log(null === undefined);

// let arr = [1, 2, 3];
// arr.something = 5;

// alert(arr.something);

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return console.log(callback());
// }

// makeMessage("Royal Grand", makePizza)
// // makeMessage("Ultracheese", deliverPizza)
// function makePizza(pizzaName, callback) {
// //   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//     console.log(pizzaName)
//   console.log(`Eating pizza ${pizzaName}`);
// });
// makePizza("Ultracheese")

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   orderedItems.forEach(function (number) {
//    console.log(number)
//    totalPrice += number;
   
//  });

//   // Change code above this line
//   console.log(totalPrice)
//   return totalPrice;
// }
// // console.log(totalPrice)
// calculateTotalPrice([12, 85, 37, 4])


// function changeEven(numbers, value) {
//   // Change code below this line
//   let newArr = [];
//   numbers.forEach(item => {
//     if (item % 2 === 0) {
//       newArr.push(item + value);
//     } else {

//       newArr.push(item);
//     }
//     console.log(newArr)
//   });
//   return newArr;
  
//   // Change code above this line
// }
// changeEven([2, 8, 3, 7, 4, 6], 10)
// changeEven([1, 2, 3, 4, 5], 10)
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets.map(planet => planet.length);


// console.log(planetsLengths)

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39
  }
]

// const getUsersWithFriend = (users, friendName) => {
//     let userName = [];
//     const userFriend = users.filter(user => user.friends.includes(friendName));
//     console.table(userFriend)
//     // userName.push(userFriend.name)
//     // console.table(userName)
//   return userFriend;
// };

// getUsersWithFriend(users, "Briana Decker")


// const getFriends = (users) => {
//     let allUserFriends = users.flatMap(user => user.friends);
//     console.log(allUserFriends)
//   let uniqueFriends = allUserFriends.filter((user, index, array) => array.indexOf(user)
//       === index);
//     console.log(uniqueFriends)
//   return uniqueFriends;
// };

// getFriends(users)

// const isAnyUserActive = users => {
  
//     const boolean = users.some(user => user.isActive === true)
//     console.log(boolean)
// };
// isAnyUserActive(users)
// задача 35
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {

//   return acc + player.playtime / player.gamesPlayed;
// },0);

// const calculateTotalBalance = users => users.reduce((summ, user) => {
//   return console.log(summ + user.balance);
// },0)


// calculateTotalBalance(users)
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books]
//   .filter((number) => number.rating > MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .sort((a,b) => a.localeCompare(b));

// class User {
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }

//   // Метод getEmail
//   getEmail() {
//     return this.email;
//   }

//   // Метод changeEmail
//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }
// User.getEmail("asdasd")
// const calc = {
//   value: 5,

//   method(param) {
//     return {
//       value: param,
//       multiply: () => {
//         return this.value * 2;
//       }
//     }
//   }
// }

// const result = calc.method(20);
// console.log(result.multiply());

// class Client {
//   login;
//   #email;
//   constructor({ login, email }) {
//     this.login = login;
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(value) {
//     this.#email = value;
//   }

//   #isEmailValid(email) {
//     return email.includes("@") && email.includes(".")
    
//     // this.#emai = value;
//   }
// }


// const mango = new Client({
//   login: 'Mango',
//   email: 'mango@dog.woof',
// }
// )


// console.log("mango", mango)
// // console.log(mango.login)

// mango.email = 'gods'
// console.log(mango.email)
// console.log(mango.login)




// class Notes {
//   static PRIORITY = {
//     LOW: 'low',
//     NORMAL: 'normal',
//     HIGH: 'high',
//   }
//   static #statistics = {
//     users: 0,
//     notes: 0,
//   };
//   static getStatistics() {
//     const average = this.#findAverage();
//     const { users, notes } = this.#statistics;
//     return `We have ${users} users, they made ${notes} notes.
//     Each user made approxamitely ${average} notes`

//   }
//   static #findAverage() {
//     const { users, notes } = this.#statistics;
//   return notes / users;
// }
//   constructor(notes) {
//     this.notes = notes;
//     Notes.#statistics.users += 1;
//     Notes.#statistics.notes += notes.length;
//   }
//   addNote(note) {
//     this.notes = [...this.notes, note];
//     Notes.#statistics.users += 1;
//   }
  
// }

// // console.log(Notes.PRIORITY)


// const userMangoNotes = new Notes([33]);
// // const userPolyNotes = new Notes([22]);

// userMangoNotes.addNote({
//   text: 'My first note',
//   priority: Notes.PRIORITY.LOW,
// })

// console.log(userMangoNotes.notes)
// console.dir(Notes)
// console.log(Notes.getStatistics())



// class Storage{
//   constructor(items){
//     this.items = items;
//   }
//   getItems(){
//     return this.items;
//   };
//   addItem(newItem){
//     this.items.push(newItem);
//   };
//   removeItem(itemToRemove){
//     // this.items.filter(item => item !== itemToRemove);
//     const index = this.items.indexOf(itemToRemove);
//     console.log(index)
    
//       this.items.splice(index, 1);
    
//   };

// };


// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]



// class StringBuilder{
//   constructor(initialValue){
//     this.value = initialValue;
//   }
  
//   getValue(){
//     return this.value;
//   };
//   padStart(str){
//     this.value = str + this.value;
//   };
//   padEnd(str) {
//     this.value += str;
//   };
//   padBoth(str){
//     // this.value = str + this.value + str;
//     this.padStart(str);
//     this.padEnd(str);
//   };
// }

// // Change code above this line
// const builder = new StringBuilder(".");


// // console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="


// class Car {
//   // Change code below this line
//  static MAX_PRICE = 50000;
//   #_price;
  
//   constructor({ price }) {
//     this.#_price = price;
//   }

//   get price() {
//     return this.#_price;
//   }

//   set price(newPrice) {
    
//     // console.log(this.MAX_PRICE)
//     if (newPrice < Car.MAX_PRICE){
//       this.#_price = newPrice;
//     };
//   };
//   // Change code above this line
// };

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000
// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//   static checkPrice(price) {
//     if(price > Car.#MAX_PRICE){
//       return "Error! Price exceeds the maximum";
//     }
//     return "Success! Price is within acceptable limits";
//   }
//   // get MAX_PRICE(){
//   //   return Car.#_MAX_PRICE;
//   // }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
// let blacklistedEmails = [];


// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line
  
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = [];
//   }
  
//   blacklist(email) {
//   this.blacklistedEmails.push(email);
//   };
//   isBlacklisted (email) {
//     console.log(this.blacklistedEmails.includes(email));
//     console.log(this)
//     // console.log(email)
//     // console.log(this.blacklistedEmails)
//   }
//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// // console.log(mango.email); // "mango@mail.com"
// // console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// // console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true
