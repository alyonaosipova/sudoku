const fs = require("fs");
function read() {
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
  const result = fs.readFileSync("./puzzles.txt", "utf-8");
  return result;
}



const arr = read();

function solve(){
  for (let j = 0; j < arr.length; j += 1) {
    element = arr[j].split();
    const newArr = [];
    for (let i = 0; i < element.length; i++) {
      let elem1 = element[i].slice(0, 9);
      newArr.push(elem1);
      console.table(newArr);
    }
  }
}
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
  


function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
