const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const output1 = document.querySelector(".output1");
const output2 = document.querySelector(".output2");
const output3 = document.querySelector(".output3");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");

// Обратный треугольник
btn1.onclick = function () {
  output1.classList.add("border");
  output1.innerHTML = "";
  let value1 = +input1.value;
  if (!isNaN(value1)) {
    if (value1 <= 10 && value1 > 0) {
      let treangle1 = "";
      let linenumb = value1;
      for (let i = 0; i < value1; i++) {
        treangle1 = "";
        for (let j = 0; j < linenumb; j++) {
          treangle1 += "*";
        }
        linenumb--;
        output1.innerHTML += treangle1 + "<br>";
      }
    } else {
      alert("Ваше число в поле №1 не вписывается в условия: не меньше 0 и не больше 10!");
    }
  } else alert("Ойу мэн. У тебя в поле #1 не число!!!");
};

// Треугольник
btn2.onclick = function () {
  output2.classList.add("border");
  output2.innerHTML = "";
  let value2 = +input2.value;
  if (!isNaN(value2)) {
    if (value2 <= 10 && value2 > 0) {
      let treangle2;
      let linenumb = value2;
      for (let i = 0; i < value2; i++) {
        treangle2 = "";
        for (let j = 0; j < linenumb; linenumb--) {
          treangle2 += "*";
          output2.innerHTML += treangle2 + "<br>";
        }
      }
    } else
      alert("Ваше число в поле №2 не вписывается в условия: не меньше 0 и не больше 10!");
  } else {
    alert("Ойу мэн. У тебя в поле #2 не число!!!");
  }
};

// Квадрат
btn3.onclick = function () {
  output3.classList.add("border");
  output3.innerHTML = "";
  let value3 = +input3.value;
  if (!isNaN(value3)) {
    if (value3 <= 10 && value3 > 0) {
      let square = "";
      for (let i = 0; i < value3; i++) {
        square += "*";
      }
      for (let i = 0; i < value3; i++) {
        output3.innerHTML += square + "<br>";
      }
    } else
      alert("Ваше число в поле №3 не вписывается в условия: не меньше 0 и не больше 10!");
  } else {
    alert("Ойу мэн. У тебя в поле #3 не число!!!");
  }
};

function generateTreangle() {
  if (this === btn3) {
    console.log("BTN3");
  } else if (this === btn2) {
    console.log("BTN2");
  } else if (this == btn1) {
    console.log("BTN1");
  }
}