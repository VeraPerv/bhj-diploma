/**
 * Класс LoginForm управляет формой
 * входа в портал
 * */
class LoginForm extends AsyncForm {
  /**
   * Производит авторизацию с помощью User.login
   * После успешной авторизации, сбрасывает форму,
   * устанавливает состояние App.setState( 'user-logged' ) и
   * закрывает окно, в котором находится форма
   * */
  onSubmit(options) {
    User.login(options, (err, response) => {
      //debugger;
      const controlForms = [...document.querySelectorAll('.form-control')];
      console.log(controlForms);
      console.log(options);

      if (response && response.success) {
        console.log(response + 'логинформ ');

        controlForms.forEach((e) => {
          e.value = '';
        });
        App.setState('user-logged'); //При успешной регистрации задаёт состояние *App.setState( 'user-logged' )Т.е. после успешной регистрации, сразу авторизуем
        App.getModal('login').close(); // Находит окно, в котором находится форма и закрывает его (через метод *Modal.close*), App.getModal из файла App

      } else {
        err = new Error('Ошибка авторизации');
        console.log('ошибка авторизации в логинформ onSubmit');
      }

    });
  }
}