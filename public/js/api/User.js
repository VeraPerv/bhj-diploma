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
  constructor(URL) {
    this.URL = '/user';
  }

  static setCurrent(user) {
    console.log(user);
    localStorage.setItem('user', JSON.stringify(user)); //сохр в хранилище
    console.log(localStorage.user);

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
    // const current = JSON.parse(localStorage.getItem('user'));
    //console.log(current);
    // return current;
    return JSON.parse(localStorage.getItem('user')); // c парсом выдавало ошибку
  }

  /**
   * Получает информацию о текущем
   * авторизованном пользователе. //см current()
   * */
  static fetch(callback) {
    //let data = this.current(); // User.current -> id name
    //убрала =
    createRequest({
      url: '/user/current', //this.URL + '/current', //по формату *URL + '/current'
      method: 'GET', //
      responseType: 'json',

      callback: (err, response) => {
        if (response && response.success) { //success???
          this.setCurrent(); //(response.user) <-надо в скобки? если есть отв. обновл текущего пользователя setCurrent
          console.log('сеткаррент в юзер');
        } else {
          err = new Error('Необходима авторизация');
          this.unsetCurrent(); // удалить запись об авторизации //(для этого вызывайте метод *unsetCurrent*):
          console.log('фетч из юзер, неудачная авторизация, анкаррент');
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
    console.log(data + 'дата в юзер логин');
    createRequest({
      url: '/user/login', //this.URL + '/login',//
      method: 'POST',
      responseType: 'json',
      data,
      callback: (err, response) => {
        if (response && response.success) {
          console.log(response);
          this.setCurrent(response.user);
        } else {
          err = new Error('Ошибка входа');
          console.log('ошибка входа User login');
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
    //debugger;
    console.log(data + 'дата в регистер');
    createRequest({
      url: '/user/register', //this.URL + '/register',
      method: 'POST',
      responseType: 'json',
      data,
      callback: (err, response) => {
        if (response && response.success) {
          console.log(response);
          // debugger;
          this.setCurrent(response.user);
          console.log(response + 'из регистер юзер');
        } else {
          err = new Error('Ошибка регистрации');
          console.log('Ошибка регистрации из юзер регистер');
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

      callback: (err, response) => {
        if (response.success) {
          console.log(response.success);
          this.unsetCurrent();
        }

        callback(err, response);
      }
    });
  }
} /*поставила response, т.к. в логин response.Зачем здесь респонс?, если есть response.success */