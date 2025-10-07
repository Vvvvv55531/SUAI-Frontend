function start() {
    document.getElementById("entry").style.display = "none";
    document.getElementById("area").style.display = "flex";

    const number = Math.floor(Math.random() * 99) + 1;
    sessionStorage.setItem("randomNumber", number);
}

function check() {
    let userNumber = document.getElementById("number").value;
    let gameNumber = sessionStorage.getItem("randomNumber");
    let result = document.getElementById("result");

    if (!userNumber) {
        result.textContent = "Результат: Введите число!";
        return;
    }

    userNumber = parseInt(userNumber);

    if (userNumber < gameNumber) {
        result.textContent = "Результат: Слишком мало! Попробуйте еще раз";
    } else if (userNumber > gameNumber) {
        result.textContent = "Результат: Слишком много! Попробуйте еще раз";
    } else {
        result.textContent = "Результат: Поздравляем! Вы угадали!";
    }
}

function clear() {
    document.getElementById("number").value = "";
    document.getElementById("result").textContent = "Результат:";
}

function reset() {
    clear()
    start()
}

function exit() {
    document.getElementById("entry").style.display = "inline-block";
    document.getElementById("area").style.display = "none";

    clear()
    sessionStorage.removeItem("randomNumber");
}
