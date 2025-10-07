// 3-й пукт задания
// Класс Калькулятор
class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b !== 0) {
            return (a / b).toFixed(1);
        } else {
            throw new Error("Деление на 0 невозможно");
        }
    }
}

const calc = new Calculator();
alert("Калькулятор: Сложение = " + calc.add(4, 3) +
      ", Вычитание = " + calc.subtract(4, 3) +
      ", Умножение = " + calc.multiply(4, 3) +
      ", Деление = " + calc.divide(4, 3));
