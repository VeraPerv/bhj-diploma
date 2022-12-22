/**
 * Класс Modal отвечает за
 * управление всплывающими окнами.
 * В первую очередь это открытие или
 * закрытие имеющихся окон
 * */

class Modal {
  /**
   * Устанавливает текущий элемент в свойство element
   * Регистрирует обработчики событий с помощью Modal.registerEvents()
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  // что значит если передан пустой элемент, каким образом он м б передан???
  constructor(element) {

    if (element) {
      this.element = element; //// элемент...???
      this.registerEvents();
    } else {
      throw new Error('Ошибка! Элемент не существует!');
    }
  }
  /**
   * При нажатии на элемент с data-dismiss="modal"
   * должен закрыть текущее окно
   * (с помощью метода Modal.onClose)
   * */
  registerEvents(element) {
    const modalClose = this.element.querySelectorAll('[data-dismiss="modal"]');
    for (let i = 0; i < modalClose.length; i++) {
      modalClose[i].onclick = this.onClose;
    }
  }
  /**
   * Срабатывает после нажатия на элементы, закрывающие окно.
   * Закрывает текущее окно (Modal.close())
   * */
  onClose(e) {
    let ModalForClose = e.target.closest('.modal');
    const modalForm = new Modal(ModalForClose);
    modalForm.close();
    }
  /**
   * Открывает окно: устанавливает CSS-свойство display
   * со значением «block»
   * */
  open() {
    this.element.style.display = 'block'; //this.element.style = 'display: block';
  }
  /**
   * Закрывает окно: удаляет CSS-свойство display
   * */
  close() {   
  this.element.style.display = ''; // удаляет все свойство display

  }
}
/* this.element.style = 'display: block'; */
/* this.element.style = 'display: none'*/ /* дисплэй остается, но без значения внутри*/