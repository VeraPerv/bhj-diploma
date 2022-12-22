/**
 * Класс User управляет авторизацией, выходом и
 * регистрацией пользователя из приложения
 * Имеет свойство URL, равное '/user'.
 * */
class User {
  /**
   * Устанавливает текущего пользователя в
   * локальном хранилище.
   * */
  static URL = '/user';

  static setCurrent(user) {
    localStorage.user = JSON.stringify(user); //сохр в хранилище
    //localStorage.id = JSON.stringify(id); //??/ нужен тут 
    //объект { id: 12, name: 'Vlad' } <--id автоматически в объекте user?
  }

  /**
   * Удаляет информацию об авторизованном
   * пользователе из локального хранилища.
   * */
  static unsetCurrent() {
    localStorage.removeItem('user');
  }

  /**
   * Возвращает текущего авторизованного пользователя
   * из локального хранилища
   * ВОЗВРАЩАЕТ - значит return?
   * */
  static current() {
    return localStorage.user;
    /*if ('user') {
      return JSON.parse(localStorage.getItem('user')); //без if? он итак вернет undefined, если иф не будет
    }*/
  }

  /**
   * Получает информацию о текущем
   * авторизованном пользователе. //см current()
   * */
  static fetch(callback) {
    //let data = this.current(); // User.current -> id name
    //убрала =
    createRequest({
      url: this.URL + '/current', //по формату *URL + '/current'
      method: 'GET', //'Метод посылает *GET* 
      data: {},
      callback: (err, response) => {
        if (err === null && response.success) { //success???
          this.setCurrent(response.user); //если есть отв. обновл текущего пользователя setCurrent
        } else {
          this.unsetCurrent(); // удалить           запись об авторизации //(для этого вызывайте метод *unsetCurrent*):

        }
        callback(err, response); //запускает выполнение функции *createRequest*
      }
    });
  }

  /**
   * Производит попытку авторизации.
   * После успешной авторизации необходимо
   * сохранить пользователя через метод
   * User.setCurrent.
   * */
  static login(data, callback) {
    createRequest({
      url: this.URL + '/login',
      method: 'POST',
      responseType: 'json',
      data,
      callback: (err, response) => {
        if (response && response.user) {
          this.setCurrent(response.user);
        }
        callback(err, response);
      }
    });
  }

  /**
   * Производит попытку регистрации пользователя.
   * После успешной авторизации необходимо
   * сохранить пользователя через метод
   * User.setCurrent.
   * */
  static register(data, callback) {

    createRequest({
      url: this.URL + '/register',
      method: 'POST',
      responseType: 'json',
      data: data,
      callback: (err, response) => {
        if (response && response.success) {
          //debugger;
          this.setCurrent(response.user);
          console.log(response);
        } else {
          err = new Error('Ошибка регистрации');
        }
        callback(err, response);
      }
    });
  }
  //Как реализовать ошибку? в случ ошибки получите ответ вида (см ридми)

  /**
   * Производит выход из приложения. После успешного
   * выхода необходимо вызвать метод User.unsetCurrent
   * */
  static logout(callback) {
    createRequest({
      url: this.URL + '/logout',
      method: 'POST',
      responseType: 'json',
      data: {},
      callback: (err, response) => {
        if (err === null && response.success) {
          this.unsetCurrent();
        }
      }
    });
  }
} /*поставила response, т.к. в логин response.Зачем здесь респонс?, если есть response.success */