import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-button/vaadin-button.js';
import '@polymer/iron-icons/iron-icons.js';

import './time-field-styles.js';

/**
 * `time-field-input`
 *
 * A very simple number input based on the `vaadin-text-field`.
 */
class TimeNumberInput extends PolymerElement {
  static get template() {
    return html`
      <style include="time-field-styles">
        :host {
          display: flex;
          min-width: 0;
        }

        [part="time-input"] {
          min-width: 0;
        }

        [part="decrease"],
        [part="increase"] {
          margin: 0;
          padding: 0;
          color: var(--lumo-body-text-color);
        }
      </style>

      <vaadin-text-field
        part="time-input"
        value="{{value}}"
        pattern="[0-9]{0,2}"
        on-blur="_checkValue"
        prevent-invalid-input>

        <vaadin-button part="decrease" theme="icon tertiary" slot="prefix" on-click="_decreaseValue">
          <iron-icon icon="icons:remove"></iron-icon>
        </vaadin-button>

        <vaadin-button part="increase" theme="icon tertiary" slot="suffix" on-click="_increaseValue">
          <iron-icon icon="icons:add"></iron-icon>
        </vaadin-button>

      </vaadin-text-field>
    `;
  }
  static get properties() {
    return {
      value: {
        type: String,
        notify: true
      },

      min: {
        type: Number,
        value: 0
      },

      max: {
        type: Number,
        value: 0
      },
    };
  }

  _checkValue() {
    if(!this.value) {
      return;
    }

    let intValue = parseInt(this.value, 10);

    if (isNaN(intValue)) {
      intValue = this.min;
    }

    if (intValue < this.min) {
      intValue = this.min;
    } else if(intValue > this.max) {
      intValue = this.max;
    }

    this.value = this._zeroPadValue(intValue);
  }

  _decreaseValue() {
    const intValue = parseInt(this.value, 10);
    const newValue = isNaN(intValue) || intValue <= this.min ? this.max : intValue - 1;
    this.value = this._zeroPadValue(newValue);
  }

  _increaseValue() {
    const intValue = parseInt(this.value, 10);
    const newValue = isNaN(intValue) || intValue >= this.max ? this.min : intValue + 1;
    this.value = this._zeroPadValue(newValue);
  }

  _zeroPadValue(intValue) {
    return intValue < 10 ? '0' + intValue : intValue.toString();
  }
}

window.customElements.define('time-field-input', TimeNumberInput);
