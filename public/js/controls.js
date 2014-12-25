window.Controls = {
  init: function(){
    $('form').submit(this._handleConfigChange);
    this._setInputValues(App.config);
  },

  _handleConfigChange: function(e){
    e.preventDefault();
    
    var config = Controls._getConfig();
    Controls._setInputValues(config);
    Generator.setup(config);
    
    App.redraw();
    return false;
  },

  _getConfig: function(){
    var freq = parseInt($('#freq').val()) || 2000;
    var interval = parseInt($('#interval').val()) || 3;
    var outSize = parseInt($('#out-size').val()) || 200;
    return {freq: freq, interval: interval, outSize: outSize};
  },

  _setInputValues: function(config){
    $('#freq').val(config.freq);
    $('#interval').val(config.interval);
    $('#out-size').val(config.outSize);
  }
}