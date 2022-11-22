const btnArray = document.querySelectorAll("button");
const inputArray = document.querySelectorAll("input");
const outputArray = document.querySelectorAll(".output");

for (let i = 0; i < btnArray.length; i++) {
  btnArray[i].onclick = function () {
    inputActive = inputArray[i];
    outputActive = outputArray[i];

    if (!isNaN(inputActive.value)) {
      if (inputActive.value <= 10 && inputActive.value > 0) {
        outputArray[i].innerHTML = "";
        let string = "";

        outputActive.classList.add("border");
        if (this === btnArray[0]) {
          for (let j = 0; j < inputActive.value; j++) {
            string += "*";
            outputActive.innerHTML += string + "<br>";
          }
        } else if (this === btnArray[1]) {
          let count = inputActive.value;
          for (let i = 0; i < inputActive.value; i++) {
            string = "";
            for (let j = 0; j < count; j++) {
              string += "*";
            }
            count--;
            outputActive.innerHTML += string + "<br>";
          }
        } else if (this === btnArray[2]) {
          for (let i = 0; i < inputActive.value; i++) {
            string = "";
            for (let j = 0; j < inputActive.value; j++) {
              string += "*";
            }
            outputActive.innerHTML += string + "<br>";
          }
        }
      } else
        alert(
          "Йоу мэн, внимательно читай условия! В поле № " +
            (i + 1) +
            " Ты ввёл не то что нужно"
        );
    } else {
      console.log(this);
      alert("Вы ввели не цифру в поле № " + (i + 1));
    }
  };
}
