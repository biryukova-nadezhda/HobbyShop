import Popup from '../Popup';

const testObj = {
  classForm: 'login',
  title: 'Войти в личный кабинет',
  input: [
    {
      type: 'tel',
      placeholder: 'Номер телефона',
    },
    {
      type: 'password',
      placeholder: 'Пароль',
    },
    {
      type: 'checkbox',
      label: 'Запомнить меня',
    },
  ],
  buttonForm: {
    typeButton: 'flooded',
    contentButton: 'Войти',
    dopElType: 'span',
    dopElClass: 'form__button-description',
    dopElContent: 'Забыли пароль?',
    dopElPosition: 'after',
    border: true,
  },
  buttonPopup: {
    typeButton: 'gray',
    contentButton: 'Регистрация',
    dopElType: 'h2',
    dopElClass: 'popup__button-title',
    dopElContent: 'Вы еще не зарегистрированы?',
    dopElPosition: 'before',
  },
};

test('should return new object class Popup', () => {
  const expected = {
    popupObj: testObj,
  };
  const result = new Popup(testObj);
  expect(result).toEqual(expected);
});

test('should return new element div with class "container" and content "container"', () => {
  document.body.innerHTML = '<div class="container">Container</div>';

  const expected = document.querySelector('.container');
  const result = new Popup(testObj).createEl('div', 'container', 'Container');
  expect(result).toEqual(expected);
});

test('should return new element div with class "container"', () => {
  document.body.insertAdjacentHTML('afterbegin', '<div class="container"></div>');

  const expected = document.querySelector('.container');
  const result = new Popup(testObj).createEl('div', 'container');
  expect(result).toEqual(expected);
});

test('should return new block button with border', () => {
  const str = '<div class="form__block-button"><button class="form__button button button_flooded">Войти</button><span class="form__button-description">Забыли пароль?</span></div>';
  document.body.insertAdjacentHTML('afterbegin', str);

  const expected = document.querySelector('.form__block-button');
  const popup = new Popup(testObj);

  const result = popup.createButtonBlock('form', testObj.buttonForm);
  expect(result).toEqual(expected);
});

test('should return new block button without border', () => {
  const str = '<div class="form__block-button form__block-button_none-border"><button class="form__button button button_flooded">Отправить</button></div>';
  document.body.insertAdjacentHTML('afterbegin', str);
  const expected = document.querySelector('.form__block-button');
  const obj = {
    classForm: 'password-recovery',
    title: 'Забыли пароль?',
    input: [
      {
        type: 'email',
        placeholder: 'Введите ваш E-mail',
        description: 'На E-mail придет письмо со ссылкой на смену пароля',
      },
    ],
    buttonForm: {
      typeButton: 'flooded',
      contentButton: 'Отправить',
      border: false,
    },
  };
  const popup = new Popup(obj);

  const result = popup.createButtonBlock('form', obj.buttonForm);
  expect(result).toEqual(expected);
});

test('should return new block button with dop.el before', () => {
  const str = '<div class="popup__block-button popup__block-button_none-border"><span class="popup__button-description">Есть аккаунт?</span><button class="popup__button button button_gray">Войти</button></div>';
  document.body.insertAdjacentHTML('afterbegin', str);

  const expected = document.querySelector('.popup__block-button');
  const obj = {
    classForm: 'registration',
    title: 'Регистрация',
    input: [
      {
        type: 'text',
        placeholder: 'Имя',
      },
    ],
    buttonPopup: {
      typeButton: 'gray',
      contentButton: 'Войти',
      dopElType: 'span',
      dopElClass: 'popup__button-description',
      dopElContent: 'Есть аккаунт?',
      dopElPosition: 'before',
    },
  };
  const popup = new Popup(obj);

  const result = popup.createButtonBlock('popup', obj.buttonPopup);
  expect(result).toEqual(expected);
});

test('should return form with checkbox', () => {
  const str = '<form class="popup__form form form-login"><h1 class="form__title">Войти в личный кабинет</h1><label class="form__label label-input"><input class="form__input" type="tel" placeholder="Номер телефона"></label><label class="form__label label-input"><input class="form__input" type="password" placeholder="Пароль"></label><input class="form__checkbox" type="checkbox" id="checkbox-input"><label class="form__label-checkbox label-checkbox" for="checkbox-input">Запомнить меня</label><div class="form__block-button"><button class="form__button button button_flooded">Войти</button><span class="form__button-description">Забыли пароль?</span></div></form>';
  document.body.insertAdjacentHTML('afterbegin', str);

  const expected = document.querySelector('.popup__form');
  const result = new Popup(testObj).createForm();

  expect(result).toEqual(expected);
});

test('should return form with description for input', () => {
  const str = '<form class="popup__form form form-login"><h1 class="form__title">Войти в личный кабинет</h1><input class="form__checkbox" type="checkbox" id="checkbox-input"><label class="form__label-checkbox label-checkbox" for="checkbox-input">Запомнить меня</label><label class="form__label label-input"><input class="form__input" type="password" placeholder="Повторите пароль"><p class="form__input-description">Пароль должен содержать от 6 символов</p></label></form>';
  document.body.insertAdjacentHTML('afterbegin', str);

  const expected = document.querySelector('.popup__form');

  const obj = {
    classForm: 'login',
    title: 'Войти в личный кабинет',
    input: [
      {
        type: 'checkbox',
        label: 'Запомнить меня',
      },
      {
        type: 'password',
        placeholder: 'Повторите пароль',
        description: 'Пароль должен содержать от 6 символов',
      },
    ],
  };
  const result = new Popup(obj).createForm();

  expect(result).toEqual(expected);
});

test('should return block popup with form', () => {
  const str = '<div class="popup-container"><div class="popup"><button class="popup__button-close"></button><form class="popup__form form form-password-recovery"><h1 class="form__title">Забыли пароль?</h1><label class="form__label label-input"><input class="form__input" type="email" placeholder="Введите ваш E-mail"><p class="form__input-description">На E-mail придет письмо со ссылкой на смену пароля</p></label><div class="form__block-button form__block-button_none-border"><button class="form__button button button_flooded">Отправить</button></div></form><div class="popup__block-button popup__block-button_none-border"><h2 class="popup__button-title">Вы еще не зарегистрированы?</h2><button class="popup__button button button_gray">Регистрация</button></div></div></div>';
  document.body.insertAdjacentHTML('afterbegin', str);

  const expected = document.querySelector('.popup-container');

  const obj = {
    classForm: 'password-recovery',
    title: 'Забыли пароль?',
    input: [
      {
        type: 'email',
        placeholder: 'Введите ваш E-mail',
        description: 'На E-mail придет письмо со ссылкой на смену пароля',
      },
    ],
    buttonForm: {
      typeButton: 'flooded',
      contentButton: 'Отправить',
      border: false,
    },
    buttonPopup: {
      typeButton: 'gray',
      contentButton: 'Регистрация',
      dopElType: 'h2',
      dopElClass: 'popup__button-title',
      dopElContent: 'Вы еще не зарегистрированы?',
      dopElPosition: 'before',
    },
  };
  const result = new Popup(obj).init();

  expect(result).toEqual(expected);
});
