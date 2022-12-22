class RegisterForm extends AsyncForm {
  /**
   * Производит регистрацию с помощью User.register
   * После успешной регистрации устанавливает
   * состояние App.setState( 'user-logged' )
   * и закрывает окно, в котором находится форма
   * */
   onSubmit(data) {


    User.register(data, (err, response) => {
      console.log(data);
      const controlForms = [...document.querySelectorAll('.form-control')];
      console.log(controlForms);


      if (response && response.success) {
        console.log(response + 'регистерформ ');

        controlForms.forEach((e) => {
          e.value = "";
        });

        App.setState('user-logged');
        App.getModal('register').close();

      } else {
        err = new Error('Ошибка регистрации');
        console.log(ошибка + 'регистерформ ');
      }

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

/*  onSubmit(data) {


    User.register(data, (err, response) => {
      console.log(data);
      const controlForms = [...document.querySelectorAll('.form-control')];
      console.log(controlForms);


      if (response && response.success) {
        console.log(response);

        controlForms.forEach((e) => {
          e.value = "";
        });

        App.setState('user-logged');
        App.getModal('register').close();

      } else {
        err = new Error('Ошибка регистрации');
      }

    });




  }*/
