window.App = {
  config: {
    freq: 4000,
    outSize: 800,
    interval: 3
  },

  init: function(){
    Visualizer.init();
    Controls.init();
    Generator.setup(this.config);
  },

  draw: function(){
    var input = Generator.generate();
    var output = Filter.filter(input);

    Visualizer.drawSignal(0, input);
    Visualizer.drawSignal(1, output);
  },

  redraw: function(){
    Visualizer.clear();
    this.draw();
  }
}

App.init();
App.draw();