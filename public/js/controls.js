window.Controls = {
  init: function(){
    $('form').submit(this._handleConfigChange);
  },

  _handleConfigChange: function(e){
    e.preventDefault();
    var freq = parseInt($('#freq').val()) || 2000;
    var interval = parseInt($('#interval').val()) || 3;
    var outSize = parseInt($('#out-size').val()) || 200;

    Generator.setup({freq: freq, interval: interval, outSize: outSize});
    Visualizer.clear();
    App.draw();
    return false;
  }
}