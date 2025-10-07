// 1-й пукт задания
// класс Фигура
class Figure {
    getArea() {
        throw new Error(
        "Метод getArea() должен быть переопределен");
    }

    getPerimeter() {
        throw new Error(
        "Метод getPerimeter() должен быть переопределен");
    }
}

// класс Прямоугольник
class Rectangle extends Figure {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}

// класс Круг
class Circle extends Figure {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    getArea() {
        return Math.round(
            Math.PI * this.radius ** 2);
    }

    getPerimeter() {
        return Math.round(
            2 * Math.PI * this.radius);
    }
}

const rec = new Rectangle(10, 5);
alert("Прямоугольник: S = " + rec.getArea() +
      ", P = " + rec.getPerimeter());

const cir = new Circle(7);
alert("Круг: S = " + cir.getArea() +
      ", P = " + cir.getPerimeter());
