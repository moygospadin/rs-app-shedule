# Schedule

Schedule - расписание курса RS School.


## Оглавление
 1. [Установка и запуск](#setup)
 2. [Демо](#demo)
 3. [Документация](#docs)
 4. [Описание приложения](#description)
 5. [Используемые технологии](#tech)
 6. [Лицензия](#license)



## <a name="setup">Установка и запуск</a>

Используйте пакетный менеджер [npm](https://www.npmjs.com/get-npm) для установки проекта.

```bash
npm install
```

Запуск приложения в режиме разработчика

```bash
npm start
```

**[к оглавлению](#Оглавление)**

## <a name="demo">Демо</a>

Демо-версия приложения: [![](https://res.cloudinary.com/dmubxrqem/image/upload/v1601772428/ggggggggggggggggggggggggggggggggggggg_nbcxke.png)](https://rs-app-shedule.netlify.app/)

## <a name="docs">Документация</a>

Документация приложения: [![](https://res.cloudinary.com/dmubxrqem/image/upload/v1601772424/fffffffffffffffffffffffffffffffffffffffffffffff_ls3g9a.png)](https://schedule-documentation-team46.netlify.app/)

**[к оглавлению](#Оглавление)**

## <a name="description">Описание приложения</a>

**Расписание содержит:**

- минимум 10 рядов, но может быть расширено до 100-150 рядов
- минимум 5 колонок, но может быть расширено до 10-12 колонок
- значения в ячейках относятся к типам datetime, instant, string, object, integer и соответствуют существующему расписанию курса

Интерактивные функции расписания отличаются для ментора и студента.

**Возможности студента:**


* просмотр расписания в виде таблицы (основная форма расписания), календаря либо списка
* просмотр детальной информации об отдельных заданиях расписания
* возможность оставить оценку и отзыв к заданию

**Дополнительные возможности ментора:**

- редактирование расписания - добавление, удаление и изменение данных
- редактирование страницы задания - добавление, удаление и изменение данных

**Общие возможности**

**Примеры типов данных для ячеек**

* скрывать ненужные, по мнению пользователя, столбцы таблицы
* выбирать темную тему
* фильтровать данные в таблице
* выбирать часовой пояс
* выбирать отображение недель
* менять цвет тегов

- string - отображается как есть, но надо либо ограничить длину строки, либо использовать `text-overflow: ellipsis`
- integer / decimal - числа обычно выравниваются по правой стороне и форматируются с учётом локали (см. `Number.toLocaleString`).
- local datetime - дата и/или время в виде строки.
- instant - время как в `Date.getTime()`
- составные объекты - например, `money: {currency: 'PHP', amount: 7.4}`

  **[к оглавлению](#Оглавление)**

## <a name="tech">Используемые технологии</a>

Список используемых технологий в проекте

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux](https://redux.js.org/basics/usage-with-react)
- [Ant Design of React](https://ant.design/docs/react/introduce)
- [Webpack](https://webpack.js.org/)
- [React-Color](https://github.com/casesandberg/react-color)
- [Less](http://lesscss.org/)
- [Google-maps-react](https://www.npmjs.com/package/google-maps-react)



**[к оглавлению](#Оглавление)**

## <a name="license">Лицензия</a>

[MIT License](https://choosealicense.com/licenses/mit/)

Copyright (c) 2020 RS React group 46
