# Класс Popup

Класс используется для создания всплывающих окон с формами.

---

## Структура класса

1. constructor(popupObj)
2. createEl(typeEl, classEl, contentEl = null)
3. init()
4. createButtonBlock(type, obj)
5. createForm()


## Описание методов

1. **constructor(popupObj)** - метод-конструктор класса. Принимает объект всплывающего окна вида:

```javascript

const popupObj = {
    classForm: 'Отличительный класс формы',
    title: 'Заголовок формы',
    inputArr: [
      {
        type: 'Тип input',
        placeholder: 'Атрибут placeholder input',
        description: 'Подпись снизу от поля ввода',
      },
      {
        type: 'Если тип checkbox, то вместо placeholder label',
        label: 'Подпись справа от checkbox'
      },
    ],
    buttonForm: {
        typeButton: 'Тип кнопки',
        contentButton: 'Заголовок кнопки',
        dopElType: 'Тип доп.элемента с input в блоке',
        dopElClass: 'Класс дополнительного элемента',
        dopElContent: 'Подпись дополнительного элемента',
        dopElPosition: 'Позиция элемента относительно кнопки',
        border: true // наличие нижней границы у блока
      },
    buttonPopup: {
        typeButton: 'Тип кнопки',
        contentButton: 'Заголовок кнопки',
        dopElType: 'Тип доп.элемента с input в блоке',
        dopElClass: 'Класс дополнительного элемента',
        dopElContent: 'Подпись дополнительного элемента',
        dopElPosition: 'Позиция элемента относительно кнопки',
      }

  }

```

Пояснения к свойствам объекта:
* classForm - отличительный класс формы, отвечающий за ее тип. Например: login - форма входа в аккаунт, password-recovery - форма восстановления пароля, registration - форма регистрации

* title - заголово формы во всплывающем окошке

* inputArr - массив объектов, характеризующие поля ввода. Объекты содержат ключи:
  * type - тип input в соответствии со стандартом. Например: text, tel, mail и т.д.
  * placeholder - атрибут placeholder у поля ввода input
  * description - элемент подписи под полем ввода
  * label - если тип input соответсвтует checkbox, то выданный код будет следующего вида:

  ```html
    <input type="checkbox" id='' class="form__checkbox">
      <label for="checkbox-input" ыclass="form__label-checkbox label-checkbox">
        Текст в соответствии с obj.label
      </label>
  ```
  вместо стандартного:

  ```html
     <label class="form__label label-input">
        <input type="type" class="form__input" placeholder="placeholder">
      </label>
  ```

* buttonForm - объект, описывающий структуру блока с кнопками у формы. Объект содержит следующие ключи:
  * typeButton - содержит тип кнопок. Например: flooded - закрашенная кнопка, gray - серая кнопка, colored - серая кнопка с цветной надписью
  * contentButton - подпись, которая отобразиться внутри кнопки
  * dopElType - если вместе с кнопкой в блоке находится еще какой-то элемент, то необходимо указать его тип, например span или h2
  * dopElClass - класс дополнительного элемента
  * dopElContent - подпись, которая будет внутри дополнительного элемента
  * dopElPosition: позиция дополнительного элемента относительно основной кнопки. Может быть after или before
  * border - может принимать два значения true/false. Если true - то у блока с кнопками будет нижняя граница в виде тонкой серой полосы

* buttonPopup - структура таже, что и у  объекта для кнопок формы

2. **createEl(typeEl, classEl, contentEl = null)** - метод создания DOM-элементов типа typeEl с классом classEl и контентом contentEl, если он должен быть

3. **init()** - возвращает всплывающее окно с формой вида:

```html

  <div class="popup-container">
        <div class="popup">
          <button class="popup__button-close"></button>

          <!--Содержание формы соответствует объекту, переданному в классс-->
          <form class="popup__form form form-registration"></form>

          <!--Наличие данного блока, а также его содержание, соответствует переданному объекту-->
          <div class="popup__block-button"></div>

        </div>
      </div>

```
4. **createButtonBlock(type, obj)** - принимает на вход тип блока, т.е. где будет находиться блок с кнопками в форме (form) или во всплывающем окне (popup), а также объект блока кнопок вида:

```javascript

  {
    typeButton: 'Тип кнопки',
    contentButton: 'Заголовок кнопки',
    dopElType: 'Тип доп.элемента с input в блоке',
    dopElClass: 'Класс дополнительного элемента',
    dopElContent: 'Подпись дополнительного элемента',
    dopElPosition: 'Позиция элемента относительно кнопки',
    border: true // наличие нижней границы у блока
  }

```

возвращает блок кнопок соответствующей объекту конфигурации.


5. **createForm()** - возвращает форму в соответствии с объектом формы, переданной в класс
