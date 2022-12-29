/**
 * Класс UserWidget отвечает за
 * отображение информации о имени пользователя
 * после авторизации или его выхода из системы
 * */

class UserWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor(element){
if (element) {
  this.element = element; 
} else {
  throw new Error('Ошибка! Элемент не существует!');
}
  }

  /**
   * Получает информацию о текущем пользователе
   * с помощью User.current()
   * Если пользователь авторизован,
   * в элемент .user-name устанавливает имя
   * авторизованного пользователя
   * */
  update(element){
    const userName = document.querySelector('.user-name');
    console.log(User.current('user'));//{name: 'ivan', email: 'ivan@ivan', password: 'ivan', id: 'k4g18sslbzkxwps'}
    console.log(User.current(element));//{name: 'ivan', email: 'ivan@ivan', password: 'ivan', id: 'k4g18sslbzkxwps'}
    console.log(User.current(element).name);// ivan
    userName.textContent = User.current(element).name;

  }
}
