/**
 * Класс Account наследуется от Entity.
 * Управляет счетами пользователя.
 * Имеет свойство URL со значением '/account'
 * */
class Account extends Entity {
  /**
   * Получает информацию о счёте
   * */
  static URL = '/account'; // или просто '/account'
  // было равно убрала, зачем равно???
  static get(id = '', callback) {
    createRequest({
      url: `${this.URL}/${id}`,
      method: 'GET',
      // data, //нужна???
      callback: callback,
    });

  }
}

/* Пример получения определённого счёта: `/account/2`*/