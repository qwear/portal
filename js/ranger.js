$(document).ready(function(){
(function() {
  var RangeFilter,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  RangeFilter = (function() {
    function RangeFilter(el) {
      this.updateSlider = __bind(this.updateSlider, this);
      this.setInput = __bind(this.setInput, this);
      this.el = $(el);
      this.from = $(".from", this.el);
      this.to = $(".to", this.el);
      this.min = this.from.data("value");
      this.max = this.to.data("value");
      this.slider = $(".init", this.el).ionRangeSlider({
        min: this.min,
        max: this.max,
        from: this.from.val(),
        to: this.to.val(),
        type: 'double',
        prefix: "$",
        maxPostfix: "+",
        prettify: false,
        hasGrid: false,
        gridMargin: 6,
        onChange: this.setInput
      });
    }

    RangeFilter.prototype.setInput = function(slider) {
      this.from.val(slider.fromNumber);
      this.to.val(slider.toNumber);
      this.to.trigger("change");
      return this.from.trigger("change");
    };

    RangeFilter.prototype.updateSlider = function(ev) {
      var opts, target;
      target = $(ev.currentTarget);
      opts = {};
      opts[target.data("direction")] = target.val();
      return this.slider.ionRangeSlider("update", opts);
    };

    return RangeFilter;

  })();

  window.addComponent(RangeFilter, {
    className: "range-filter"
  });

}).call(this);


});