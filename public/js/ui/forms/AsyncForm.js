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
    if (element) {
      this.element = element;
      this.registerEvents();
    } else {
      throw new Error('Ошибка! Элемент не существует!');
    }
  }

  /**
   * Необходимо запретить отправку формы и в момент отправки
   * вызывает метод submit()
   * */

  registerEvents(event) {
    if (event) {
      event.preventDefault();
      this.element.addEventListener('submit', () => {
        this.submit();
        console.log('регистер ивент из асинкформ');
      });
      //можно просто element? не this.element?
    }
    //this.addEventListener('submit',)
  }
  /**
   * Преобразует данные формы в объект вида
   * {
   *  'название поля формы 1': 'значение поля формы 1',
   *  'название поля формы 2': 'значение поля формы 2'
   * }
   * */
  getData() {
    const formData = new FormData(this.element);
    const entries = formData.entries();
    let data = {};
    for (let item of entries) {
      const key = item[0];
      const value = item[1];
      data[key] = value; ///
      console.log( data );
    }
    return data;
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