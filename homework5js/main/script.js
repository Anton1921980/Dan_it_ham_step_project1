function createNewUser() {
    let today = new Date();
    let newUser = {
        firstName: prompt("имя пользователя"),
        lastName: prompt("фамилия пользователя"),
        birthday: prompt("дата рождения в формате dd.mm.yyyy"),

        getLogin: function () {
            return (this.firstName[0] + this.lastName).toLowerCase();
        },
        getPassword: function () {
            return (this.firstName[0].toUpperCase() + this.lastName.toLowerCase() + this.birthday.slice(-4));
        },
        getAge: function () { 
            return today.getFullYear() - this.birthday.slice(-4);
        },

    };
    console.log(newUser);
    console.log(newUser.getLogin());
    console.log(newUser.getPassword());
    console.log(newUser.getAge());

}
createNewUser();
  
//  ## Теоретический вопрос

// 1. 
//


// ## Задание

// Дополнить функцию `createNewUser()` методами подсчета возраста пользователя и его паролем.

// #### Технические требования:
// - Возьмите выполненное домашнее задание номер 4 (созданная вами функция `createNewUser()`) и дополните ее следующим функционалом:
//    1. При вызове функция должна спросить у вызывающего дату рождения (текст в формате `dd.mm.yyyy`) и сохранить ее в поле `birthday`.
//    2. Создать метод `getAge()` который будет возвращать сколько пользователю лет.
//    3. Создать метод `getPassword()`, который будет возвращать первую букву имени пользователя в верхнем регистре, соединенную с фамилией (в нижнем регистре) и годом рождения. (например, `Ivan Kravchenko 13.03.1992 → Ikravchenko1992`).
// - Вывести в консоль результат работы функции `createNewUser()`, а также функций `getAge()` и `getPassword()` созданного объекта.

// #### Литература:
// - [Дата и время](https://learn.javascript.ru/datetime)

