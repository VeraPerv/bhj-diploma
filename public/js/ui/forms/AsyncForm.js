/**
 * Класс AsyncForm управляет всеми формами
 * приложения, которые не должны быть отправлены с
 * перезагрузкой страницы. Вместо этого данные
 * с таких форм собираются и передаются в метод onSubmit
 * для последующей обработки
 * */
class AsyncForm {
  /**
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * Сохраняет переданный элемент и регистрирует события
   * через registerEvents()
   * */
  constructor(element) {
    /*if (element) {
      this.element = element;
      this.registerEvents();
    } else {
      throw new Error('Ошибка! Элемент не существует!');
    }
  }*/
    if (JSON.stringify(element) === '{}') {
      throw new Error("Нет переданного элемента");
    } else {
      this.element = element;
    }
    this.registerEvents();
  }

  /**
   * Необходимо запретить отправку формы и в момент отправки
   * вызывает метод submit()
   * */
  registerEvents() {
    this.element.addEventListener('submit', (event) => {
      if (this.element.checkValidity()) {
        console.log('Данные полностью загружены');
        event.preventDefault();
        this.submit();
      }

    });

  }

  getData() {
    return new FormData(this.element);
  }


  onSubmit(options) {

  }

  /**
   * Вызывает метод onSubmit и передаёт туда
   * данные, полученные из метода getData()
   * */
  submit() {
    this.onSubmit(this.getData());
  }

}

//Вывод значений FormData
/* Чтобы проверить, какие данные в себе содержит переменная типа FormData, можно использовать метод .entries(), он выведет список с данными, как в примере ниже.
console.log(Array.from(data.entries()))
[
  ['name', 'Alex'],
  ['email', 'example@test.com'],
  ['age', '24'],
  ['specialization', 'engineer'],
  ['photo', File],
]

*/
/*const form = document.querySelector('#user-form') id формы
const data = new FormData(form)

for (let [key, value] of data) {
  console.log(`${key} - ${value}`)
}
// 'name - Аня'
// 'language - JavaScript'
 */