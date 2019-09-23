function createNewUser(){
    let newUser = {
          firstName: prompt("имя пользователя"),
          lastName: prompt("фамилия пользователя"),

          getLogin: function () {
              return (this.firstName[0] + this.lastName).toLowerCase();
          }
      };
      console.log(newUser);
      return newUser.getLogin();

  }
  console.log(createNewUser());
 
  