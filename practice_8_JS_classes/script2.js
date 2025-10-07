// 2-й пукт задания
// класс Студент
class Student {
    #name;
    #age;
    #averageGrade;

    constructor(name, age, averageGrade) {
        this.#name = name;
        this.#age = age;
        this.#averageGrade = averageGrade;
    }

    getName() {
        return this.#name;
    }

    setName(name) {
        this.#name = name;
    }

    getAge() {
        return this.#age;
    }

    setAge(age) {
        if (age > 0) {
            this.#age = age;
        } else {
            console.log("Возраст должен быть больше 0");
        }
    }

    getAverageGrade() {
        return this.#averageGrade;
    }

    setAverageGrade(grade) {
        if (grade >= 0 && grade <= 5) {
            this.#averageGrade = grade;
        } else {
            console.log("Средний балл должен быть от 0 до 5");
        }
    }
}

const student = new Student("Иван", 20, 4.5);
alert("Студент Имя: " + student.getName() +
      ", Возраст: " + student.getAge() +
      ", Средний балл: " + student.getAverageGrade());
