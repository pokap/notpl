/**
 * this file is part of the noTpl package.
 *
 * (c) Florent Denis <florentdenisp@gmail.com>
 *
 * for the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

!function ($) {

  /**
   * @param {jQuery}                container Container html
   * @param {Array|String|Function} config    List of element
   */
  function createRender(container, config) {
    var self;

    if (typeof config === "string") {
      self = config;
    }
    else if ($.isFunction(config)) {
      self = config();
    }
    else {
      self = createElement(config);
    }

    container.append(self);
  }

  /**
   * @param {Array} config
   *
   * @return {jQuery}
   */
  function createElement(config) {
    var self = $(document.createElement(config[0]));

    // container in container
    if (1 in config && !!config[1]) {
      if (typeof config[1] == "string") {
        self.text(config[1]);
      }
      // is array
      else if ($.isArray(config[1])) {
        NoTpl(self, config[1]);
      }
      else if ($.isFunction(config[1])) {
        config[1](self);
      }
    }

    // attributes
    if (2 in config && !!config[2]) {
      self.attr(config[2]);
    }

    // post-creation
    if (3 in config && !!config[3]) {
      config[3](self);
    }

    return self;
  }

  /**
   * Example : Template.migrate($(), [["div", [["h1", "hello world"]], {"class":"test"}]]);
   *
   * @param {Array} configs
   *
   * @return {jQuery}
   */
  $.fn.noTpl = function (configs) {
    if (!this.length) {
      return createElement(configs[0]);
    }

    this.each(function () {
      var $this = $(this);

      for (var i = 0; i < configs.length; i++) {
        createRender($this, configs[i]);
      }
    });

    return this;
  };

}(window.jQuery);