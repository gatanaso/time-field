import { } from '@polymer/polymer/lib/elements/dom-module.js';

const styleMod = document.createElement('dom-module');

styleMod.setAttribute('id', 'vaadin-text-field-theme');
styleMod.setAttribute('theme-for', 'vaadin-text-field');

styleMod.innerHTML = `
  <template>
    <style>
      :host [part="value"] {
        text-align: center;
        color: var(--time-field-input-color, var(--time-field-input-default-color));
      }
    </style>
  </template>
`;

styleMod.register('time-field-styles');
