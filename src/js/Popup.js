export default class Popup {
  constructor(popupObj) {
    this.popupObj = popupObj;
  }

  createEl(typeEl, classEl, contentEl = null) {
    this.methodName = 'createEl';
    const el = document.createElement(typeEl);
    el.className = classEl;

    if (contentEl) {
      el.textContent = contentEl;
    }

    return el;
  }

  init() {
    const popupContainer = this.createEl('div', 'popup-container');
    const popup = this.createEl('div', 'popup');
    const buttonClose = this.createEl('button', 'popup__button-close');
    const form = this.createForm();

    popupContainer.append(popup);
    popup.append(buttonClose);
    popup.append(form);

    if (this.popupObj.buttonPopup) {
      const buttonBlock = this.createButtonBlock('popup', this.popupObj.buttonPopup);
      popup.append(buttonBlock);
    }

    return popupContainer;
  }

  createButtonBlock(type, obj) {
    let buttonBlock;
    if (obj.border) {
      buttonBlock = this.createEl('div', `${type}__block-button`);
    } else {
      buttonBlock = this.createEl('div', `${type}__block-button ${type}__block-button_none-border`);
    }

    const button = this.createEl('button', `${type}__button button button_${obj.typeButton}`, obj.contentButton);
    buttonBlock.append(button);

    if (obj.dopElType) {
      const dop = this.createEl(obj.dopElType, obj.dopElClass, obj.dopElContent);

      if (obj.dopElPosition === 'after') {
        buttonBlock.append(dop);
      } else if (obj.dopElPosition === 'before') {
        buttonBlock.prepend(dop);
      } else {
        return new Error('Проверьте правильность введенного положения');
      }
    }

    return buttonBlock;
  }

  createForm() {
    const form = this.createEl('form', `popup__form form form-${this.popupObj.classForm}`);
    const title = this.createEl('h1', 'form__title', this.popupObj.title);
    form.append(title);

    this.popupObj.input.forEach((el) => {
      if (el.type === 'checkbox') {
        const input = this.createEl('input', 'form__checkbox');
        input.type = el.type;
        input.setAttribute('id', 'checkbox-input');

        const label = this.createEl('label', 'form__label-checkbox label-checkbox', el.label);
        label.setAttribute('for', 'checkbox-input');
        form.append(input);
        form.append(label);
      } else {
        const label = this.createEl('label', 'form__label label-input');
        const input = this.createEl('input', 'form__input');
        input.type = el.type;
        input.placeholder = el.placeholder;
        label.append(input);

        if (el.description) {
          const description = this.createEl('p', 'form__input-description', el.description);
          label.append(description);
        }

        form.append(label);
      }
    });

    if (this.popupObj.buttonForm) {
      const buttonBlock = this.createButtonBlock('form', this.popupObj.buttonForm);
      form.append(buttonBlock);
    }

    return form;
  }
}
