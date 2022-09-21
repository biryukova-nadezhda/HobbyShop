const popupObject = {
  passwordRecovery: {
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
  },
  registration: {
    classForm: 'registration',
    title: 'Регистрация',
    input: [
      {
        type: 'text',
        placeholder: 'Имя',
      },
      {
        type: 'text',
        placeholder: 'Фамилия',
      },
      {
        type: 'text',
        placeholder: 'Отчество',
      },
      {
        type: 'tel',
        placeholder: 'Номер телефона',
      },
      {
        type: 'email',
        placeholder: 'E-mail',
      },
      {
        type: 'password',
        placeholder: 'Придумайте пароль',
      },
      {
        type: 'password',
        placeholder: 'Повторите пароль',
        description: 'Пароль должен содержать от 6 символов',
      },
    ],
    buttonForm: {
      typeButton: 'flooded',
      contentButton: 'Зарегистрироваться',
      border: true,
    },
    buttonPopup: {
      typeButton: 'gray',
      contentButton: 'Войти',
      dopElType: 'span',
      dopElClass: 'popup__button-description',
      dopElContent: 'Есть аккаунт?',
      dopElPosition: 'before',
    },
  },
  login: {
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
  },
};

export default popupObject;
