import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

import './time-field-input.js';

/**
 * `time-field`
 * A time field input element
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class TimeField extends PolymerElement {
  static get template() {
    return html`
      <style>
        * {
          --time-field-default-color: hsla(214, 40%, 16%, 0.94);
          --time-field-input-default-color: var(--time-field-default-color);
          --time-field-controls-default-color: var(--time-field-default-color);
          --time-field-separator-default-color: var(--time-field-default-color);
          --time-field-disabled-default-color: hsla(214, 50%, 22%, 0.26);
        }

        :host {
          display: block;
        }

        :host([disabled]) [part="separator"] {
          color: var(--time-field-disabled-color, var(--time-field-disabled-default-color));
        }

        [part="value"] {
          display: flex;
          align-items: center;
        }

        [part="separator"] {
          flex-shrink: 0;
          text-align: center;
          font-weight: bold;
          width: 1em;
          color: var(--time-field-separator-color, var(--time-field-separator-default-color));
        }

        [part="input"] {
          width: calc(50% - calc(var(--separator-width) / 2));
        }
      </style>

      <div part="value">
        <time-field-input
          part="input"
          disabled="[[disabled]]"
          min="0"
          max="23"
          value="{{_hours}}">
        </time-field-input>

        <div part="separator">:</div>

        <time-field-input
          part="input"
          disabled="[[disabled]]"
          min="0"
          max="59"
          value="{{_minutes}}">
        </time-field-input>
      </div>
    `;
  }
  static get properties() {
    return {
      _hours: String,

      _minutes: String,

      value: {
        type: String,
        observer: '_valueObserver'
      },

      disabled: {
        type: Boolean,
        reflectToAttribute: true
      }
    };
  }

  static get observers() {
    return ['_valueTimeObserver(_hours, _minutes)'];
  }

  _valueObserver(value) {
    if (!value) {
      return;
    }

    this._hours = value.split(':')[0];
    this._minutes = value.split(':')[1];
  }

  _valueTimeObserver(hours, minutes) {
    this.value = hours && minutes ? `${hours}:${minutes}` : '';
  }
}

window.customElements.define('time-field', TimeField);
