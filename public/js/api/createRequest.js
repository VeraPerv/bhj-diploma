const createRequest = (options = {}) => {
   // debugger;
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onload = function () {

        if (xhr.readyState === xhr.DONE && xhr.status === 200) {
            options.callback(null, xhr.response);
            console.log(xhr.response);
            console.log('данные загружены');
        } else {
            options.callback(xhr.statusText, xhr.response);
            console.log(xhr.statusText);
            console.log(xhr.response + 'отрицательный респонс');
        }
    };

    if (options.method === 'GET') {
        options.url += '?';
        for (let i in options.data) {
            options.url += i + '=' + options.data[i] + '&';

        }
        options.url.slice(0, -1); //убр знак вопроса ?
        try {
            xhr.open(options.method, options.url);
            xhr.send();
            console.log('сработал GET');
        } catch (e) {
            callback(e);
        }
    } else {
        formData = new FormData();

        for (let i in options.data) {
            formData.append(i, options.data[i]);
        }

        try {
            xhr.open(options.method, options.url);          // какой здесь адрес??
           // xhr.send(formData);//options.data???// формируется не здесь, а где - то....
           xhr.send(formData);
            console.log('сработал POST или другие');
        } catch (e) {
            callback(e);
        }
    }
};
/*createRequest - общая функция и принимает колбэк из разный сущностей: регистрации, авторизации, создании/редактировании транзакций и т.д. Потому, response уйдет в тот колбэк, откуда вызвана функция createRequest. Там уже можно вывести результат response в консоль и посмотреть, что пришло в ответе. */
/*const createRequest = (options = {}) => {
  
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    const formData = new FormData;
    let url = options.url;


    if (options.data) {
        if (options.method === 'GET') {
            url += '?' + Object.entries(options.data).map(([key, value]) => {
                `${encodeURIComponent(key)} = ${encodeURIComponent(value)}}`
            }).join('&');
           
            console.log('в методе GET')
        } else {
            Object.entries(options.data).forEach(v => formData.append(...v))
            
            console.log('в методе не GET')
            // for (let [key, value] in Object.entries(options.data)) {
            //     formData.append([key, value])
            // }
        }
    };

    xhr.open(options.method, url);

    xhr.send(formData);

    xhr.onload = function (err, response) {
        let resp = null;

        if (xhr.status === 200) {
            const answer = xhr.response;

            if (answer && answer.success) {
                resp = answer;
                console.log(resp);
                console.log(err);

            } else {
                err = answer;
                // console.log(err);
            }
        } else {
            err = new Error('Ошибка соединения');
        }
        options.callback(err, resp);
    }

}


/*const createRequest = (options = {
    url: '',
    data: {},
    method: '',
    callback: (err, response) => {},
}) => {
    
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    let formData = new FormData;

    if (options.method === 'GET') {
        url += '?' + Object.entries(options.data).map(([key, value]) => {
            `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`
        }).join('&');
    } else {
        formData.append(Object.entries(options.data));
    }
    xhr.open(options.method, options.url);
    xhr.send(formData);

    xhr.upload.onload = function (err, response) {
        if (xhr.status === 200 && xhr.readystate === 4) {
            let responseResult = xhr.response;
        } else {
            err = new Error('ошибка');
        }
    };
    options.callback(err,responseResult);
};
/*
 * Основная функция для совершения запросов
 * на сервер.
 * */
/*createRequest = (options = {}) => {
    
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    let formData = new FormData;

    if (options.method === 'GET') {
        url += '?' + Object.entries(options.data).map(([key, value]) => {
            `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`
        }).join('&');
    } else {
        formData.append(Object.entries(options.data));
    }
    xhr.open(options.method, options.url);
    xhr.send(formData);

    xhr.upload.onload = function (err, response) {
        if (xhr.status === 200 && xhr.readystate === 4) {
            let responseResult = xhr.response;
        } else {
            err = new Error('ошибка');
        }
    };
    options.callback(err,responseResult);
}; 
createRequest(options = {
       url: 'http://example.com',
       data: {
           email: 'dm@dm.ru',
         password: 'asdfasdfsdf',
    },
     method: 'GET'});*/
/*const createRequest = (options = {}) => {
    console.log(options);
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    const formData = new FormData;
    let url = options.url;

    if (options.data) {
        if (options.method === 'GET') {
            url += '?' + Object.entries(options.data).map(([key, value]) => {
                `${encodeURIComponent(key)} = ${encodeURIComponent(value)}}`
            }).join('&')
        } else {
            Object.entries(options.data).forEach(v => formData.append(...v))
            // for (let [key, value] in Object.entries(options.data)) {
            //     formData.append([key, value])
            // }
        }
    };

    xhr.open(options.method, url);

    xhr.send(formData);
    // xhr.send();

    xhr.onload = function (err, response) {
        let resp = null;

        if (xhr.status === 200) {
            const answer = xhr.response;

            if (answer && answer.success) {
                resp = answer;
                console.log(resp);
                console.log(err);

            } else {
                err = answer;
                // console.log(err);
            }
        } else {
            err = new Error('Ошибка соединения');
        }
        options.callback(err, resp); 
    }
   
}*/
/**/
/*const createRequest = (options = {
    url: '',
    data: {},
    method: '',
    callback: (err, response) => {},
}) => {
    
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    let formData = new FormData;

    if (options.method === 'GET') {
        url += '?' + Object.entries(options.data).map(([key, value]) => {
            `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`
        }).join('&');
    } else {
        formData.append(Object.entries(options.data));
    }
    xhr.open(options.method, options.url);
    xhr.send(formData);

    xhr.upload.onload = function (err, response) {
        if (xhr.status === 200 && xhr.readystate === 4) {
            let responseResult = xhr.response;
        } else {
            err = new Error('ошибка');
        }
    };
    options.callback(err,responseResult);
};*/
/*createRequest(options = {
       url: 'https://example.com',
       data: {
           email: 'ivan@poseloc.ru',
         password: 'odinidin',
    },
     method: 'GET'});*/


/* Чтобы не дублировать код в if надо только собирать url, который будет подставлен при xhr.open, т.е. первый аргамент будет метод запроса, но берётся он из options.method, второй аргумент url.  xhr.send(); тоже в if не нужен. 
Сейчас он верно написан, но вынеси из проверки.
let formData = new FormData(); - это должно быть глобально, т.к. используется не только при ПОСТ запросе.
В проверке статуса ответа 200 надо ещё проверять полученный ответ, он может быть разный и успешный и ошибка. После этой проверки надо сохранить результаты в options.callback(err, resp); */
/*demo@demo

При открытии страницы срабатывает метод registerEvents() из js/ui/forms/AsyncForm.js, который навешивает слушателей на события браузера submit (это действия кнопок форм - отправка данных на сервер). Т.к. данное событие вызывает перезагрузку страницы, то внутри метода необходимо отменить стандартное поведение браузера. Затем вызывается метод submit().
В методе submit() запускается метод getData() для получения данных с элементов текущей открытой формы.

Нажатие кнопки Войти в модальном окне Вход приводит к запуску  */

//options нужен вообще?
/*const createRequest = (options = {}) => {
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json'; 
    let url = options.url; /*'https://example.com'*/
/*if (options.method === 'GET') {
    xhr.open('GET', url + '?' + Object.entries(options.data).map(([key, value]) => {
        `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`
    }).join('&')); /*перебор всех прар ключ значение Object.entries(), в строку, соединяем & */
/*xhr.send();
   } else if (options.method === 'POST') {
       let formData = new FormData();
       formData.append(Object.entries(options.data));
       /*formData.append('mail', 'ivan@biz.pro');
       formData.append('password', 'odinodin');*/
/*xhr.open('POST', url);
        xhr.send(formData);
    }
    xhr.addEventListener('readystatechange', (err, response) => {
        if (xhr.status === 200 && xhr.readystate === 4) {
            let responseResult = xhr.response;
        } else {
            err = new Error('ошибка');
        }
    });
    options.callback(err,responseResult);
};*/