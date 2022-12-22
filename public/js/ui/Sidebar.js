
/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    const burgerButton = document.querySelector('.sidebar-toggle');
    const sideBarMini = document.querySelector('.sidebar-mini');
    burgerButton.addEventListener('click', (event) => {
      sideBarMini.classList.toggle('sidebar-open','sidebar-collapse');
    });
    /* const sideBarMini = document.querySelector('.sidebar-mini');
const burgerButton = document.querySelector('.sidebar-toggle');
burgerButton.addEventListener('click', () => {
sideBarMini.classList.toggle('sidebar-open');
sideBarMini.classList.toggle('sidebar-collapse');
});*/
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    const registerBtn = document.querySelector('.menu-item_register');
    registerBtn.addEventListener('click', (event) => {
      //debugger;
      event.preventDefault();
      App.getModal('register').open(); //  почему в первом случае с App, а во втором без Modal вызов; почему не открывает по modal-register???
    });
    const loginBtn = document.querySelector('.menu-item_login');
    loginBtn.addEventListener('click', (event) => {
      event.preventDefault();
      App.getModal('login').open();
    });


    // НЕ ВИЖУ КНОПКИ ВЫЙТИ!!!???вслепую
    //ПРОВЕРИТЬ, ПОСМОТРЕТЬ КАК РАБОТАЕТ
    const logoutBtn = document.querySelector('.menu-item_logout');
    logoutBtn.addEventListener('click', (event) => {
      // event.preventDefault();//нужен нет?
      User.logout(callback); //из папки USER static logout(callback) 
      function callback(response) {
        if (response.success) {
          App.setState('init');
        }
      }

    });
  }
}