class RegisterForm extends AsyncForm {
  /**
   * Производит регистрацию с помощью User.register
   * После успешной регистрации устанавливает
   * состояние App.setState( 'user-logged' )
   * и закрывает окно, в котором находится форма
   * */
  onSubmit(options) {
    //debugger;
    User.register(options, (err, response) => {
      // debugger;
      console.log(options); //formdata в консоли пустая
      const controlForms = [...document.querySelectorAll('.form-control')];
      console.log(controlForms);


      if (response && response.success) {
        console.log(response + 'регистерформ ');

        controlForms.forEach((e) => {
          e.value = '';
        });

        App.setState('user-logged'); //При успешной регистрации задаёт состояние *App.setState( 'user-logged' )Т.е. после успешной регистрации, сразу авторизуем
        App.getModal('register').close(); // Находит окно, в котором находится формаи закрывает его (через метод *Modal.close*), App.getModal из файла App

      } else {
        err = new Error('Ошибка регистрации');
        console.log(' ошибка в регистерформ ');
      }
      console.log(options);
    });



  }


}
//class RegisterForm extends AsyncForm {
/**
 * Производит регистрацию с помощью User.register
 * После успешной регистрации устанавливает
 * состояние App.setState( 'user-logged' )
 * и закрывает окно, в котором находится форма
 * */