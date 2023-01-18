import { render } from "react-dom";

import App from "../App";

const H5P = (window as any).H5P || {};
const H5PEditor = (window as any).H5PEditor || {};

H5PEditor.widgets.serloPoC = H5PEditor.SerloPoC = (function ($) {
  /**
   * Creates color selector.
   *
   * @class H5PEditor.ColorSelector
   *
   * @param {Object} parent
   * @param {Object} field
   * @param {string} params
   * @param {H5PEditor.SetParameters} setValue
   */
  function C(parent, field, params, setValue) {
    this.parent = parent;
    this.field = field;
    this.params = params;
    this.setValue = setValue;
  }
  /**
   * Append the field to the wrapper.
   *
   * @param {H5P.jQuery} $wrapper
   */
  C.prototype.appendTo = function ($wrapper) {
    const id = Math.round(Math.random() * 1000000).toString();
    $wrapper.append(`<div id="${id}"></div>`);

    const self = this;
    const update = (val) => {
      self.params = val;
      self.setValue(self.field, val);
    };

    render(
      <App update={update} value={self.params} />,
      document.getElementById(id)
    );
  };
  /**
   * Validate the current values.
   *
   * @returns {boolean}
   */
  C.prototype.validate = function () {
    return true;
  };
  /**
   * Remove the current field
   */
  C.prototype.remove = function () {};
  return C;
})(H5P.jQuery);
