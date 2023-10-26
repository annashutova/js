// 1. Write a JavaScript program to create a class called "Person" with properties for name, age and country. 
// Include a method to display the person's details. 
// Create two instances of the 'Person' class and display their details.

class Person {
    constructor (name, age, country) {
        this.name = name,
        this.age = age,
        this.contry = country
    }

    get age() {
        return this._age
    }

    set age(value) {
        if (value <= 0) {
            throw new Error('Age cannot be less than 0.')
        }
        this._age = value
    }
}

let pers1 = new Person('name1', 3, 'country')
let pers2 = new Person('name2', 10, 'country')
console.log(pers1.name, pers2.age)


// 2. Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. 
// Include two methods to calculate rectangle area and perimeter. 
// Create an instance of the 'Rectangle' class and calculate its area and perimeter.
class Rectangle {
    constructor(width, height) {
        this.width = width,
        this.height = height
    }

    get width() {
        return this._width
    }

    set width(value) {
        if (value <= 0) {
            throw new Error('Width cannot be less than 0.')
        }
        this._width = value
    }

    get height() {
        return this._height
    }

    set height(value) {
        if (value <= 0) {
            throw new Error('Height cannot be less than 0.')
        }
        this._height = value
    }

    calcArea() {
        return this.width * this.height
    }

    calcPerimeter() {
        return 2 * (this.width + this.height)
    }
}

let rectangle = new Rectangle(10, 5)
console.log(rectangle.calcArea(), rectangle.calcPerimeter())

// 3. Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. 
// Include a method to display vehicle details. 
// Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. 
// Override the display method to include the number of doors.
class Vehicle {
    constructor(manufacturer, model, year) {
        this.manufacturer = manufacturer,
        this.model = model,
        this.year = year
    }

    displayDetail() {
        console.log(`Manufacturer: ${this.manufacturer}, model: ${this.model}, year: ${this.year}`)
    }
}

class Car extends Vehicle {
    constructor(manufacturer, model, year, numberDoors) {
        super(manufacturer, model, year)
        this.numberDoors = numberDoors
    }

    get numberDoors() {
        return this._numberDoors
    }

    set numberDoors(value) {
        if (value <= 0) {
            throw new Error('Number of doors cannot be less than 0.')
        }
        this._numberDoors = value
    }

    get year() {
        return this._year
    }

    set year(value) {
        if (value < 1885) {
            throw new Error('There weren`t any cars before 1885...')
        }
        this._year = value
    }

    displayDetail() {
        console.log(`Manufacturer: ${this.manufacturer}, model: ${this.model}, year: ${this.year}, doors: ${this.numberDoors}`)
    }
}

let car = new Car('Lexus', 'IS 500 F Sport', 2019, 4)
car.displayDetail()

// 6. Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. 
// Include a method to calculate annual salary. 
// Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. 
// Override the annual salary calculation method to include bonuses for managers. 
// Create two instances of the 'Manager' class and calculate their annual salary.

class Employee {
    constructor(name, salary) {
        this.name = name,
        this.salary = salary
    }

    get salary() {
        return this._salary
    }

    set salary(value) {
        if (value < 0) {
            throw Error('Salary cannot be less than 0.')
        }
        this._salary = value
    }

    calcAnnualSalary() {
        return this.salary * 12
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary)
        this.department = department
    }

    calcAnnualSalary(bonus) {
        return (this.salary + bonus) * 12
    }
}

let manager1 = new Manager('Mark', 100, 'HR')
let manager2 = new Manager('Tom', 50, 'Sales')
console.log(`${manager1.name} annual salary: ${manager1.calcAnnualSalary(10)}`)
console.log(`${manager2.name} annual salary: ${manager2.calcAnnualSalary(45)}`)


// 11. Write a JavaScript program that creates a class called BankAccount with properties for account number, account holder name, and balance. 
// Include methods to deposit, withdraw, and transfer money between accounts. 
// Create multiple instances of the BankAccount class and perform operations such as depositing, withdrawing, and transferring money.
class BankAccount {
    constructor(number, holderName, balance) {
        this.number = number,
        this.holderName = holderName,
        this.balance = balance
    }

    deposite(amount) {
        if (amount <= 0) {
            alert('You cannot deposite amount that is less than 0')
            return
        }
        this.balance += amount
    }

    withdraw(amount) {
        if (amount <= 0) {
            alert('You cannot withdraw amount that is less than 0')
            return
        }
        this.balance -= amount
    }

    transferTo(otherAccount, amount) {
        if (otherAccount.prototype !== BankAccount) {
            throw new Error('Instance must be BankAccount.')
        }
        if (amount <= 0) {
            throw new Error('Amount cannot be less than 0')
        }
        this.withdraw(amount)
        otherAccount.deposite(amount)
    }
}

// let account1 = new BankAccount('12345', 'Anna', 120)
// let account2 = new BankAccount('83748', 'Olga', 560)
// console.log(`${account1.holderName}: ${account1.balance}`)
// console.log(`${account2.holderName}: ${account2.balance}`)
// account1.transferTo(account2, 10)
// console.log(`${account1.holderName}: ${account1.balance}`)
// console.log(`${account2.holderName}: ${account2.balance}`)
