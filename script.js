'use strict'; //пока не совсем врубился зачем это нужно, но ладно

/*alert( 'Привет, мир!' );

  alert('Привет');
  alert('Мир'); //это пример двух инструкций в разных строках и комментария к ним

  /* Пример с двумя сообщениями.
Это - многострочный комментарий.
*/

// alert( 'не выводится' );- однострончный 


/*let message;

message = 'Hello';

alert (message);



message = 'Hello';

alert (message);*/

/*let user = 'Иван';
let age = 25;
let message = 'Hello';


let user = 'Иван',
    age = '25',
    message = 'Hello';*/


const NEWYEAR25 = '31.12.24'; //константу нельзя перезаписать

alert (NEWYEAR25);



let admin, imya;

imya = "Джон"

admin = imya 

alert (admin);



/*
8 типпов данных:

1. number - для любых чисел: целочисленных или чисел или чисел с плавающей точкой;
целочисленные значения ограничены диапазоном ±(2^53-1).
2. string - для строк. Строка может сожержать 0 или больше символов, нет
отдельного символьного типа
3. BigInt(big integer) - для целых чисел произвольной длины
4. Булевый (логический) тип - для true/false
5. null - для неизвестных значений - отдельный тип, имеющий одно значение "null"
6. Значение "undefined" - для неприсвоенных значений - отдельный тип, имеющий одно значение "undefined"
7. object - для сложных структур данных, symbol - для уникальных идентификаторов
8. typeof - позволяет увидеть какой тип данных сохранён в переменной, возвращает строку с именем типа
*/

let namee = 'Alex';
alert (`hello ${namee}`);


//Взаимодействие: alert, prompt, confirm

//alert - понятно, модальное окно с кнопкой "OK"

//promt

let learn = prompt('Сколько ещё учиться?', 'много');

alert(`Тебе ${learn} учиться!`);


//confirm

let nomorefails = confirm("Перестаём ебланить?");

alert( nomorefails );