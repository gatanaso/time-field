import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

import './time-field-input.js';

/**
 * `time-field`
 * A simple time field input element
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class TimeField extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
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
        }

        [part="input"] {
          width: calc(50% - calc(var(--separator-width) / 2));
        }
      </style>

      <div part="value">
        <time-field-input part="input" min="0" max="23" value="{{_hours}}"></time-field-input>
        <div part="separator">:</div>
        <time-field-input part="input" min="0" max="59" value="{{_minutes}}"></time-field-input>
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
