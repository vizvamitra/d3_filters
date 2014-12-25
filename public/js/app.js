window.App = {
  init: function(config){
    Visualizer.init();
    Controls.init();
    Generator.setup(config);
  },

  draw: function(){
    var input = Generator.generate();
    var output = Filter.filter(input);

    Visualizer.drawSignal(0, input);
    Visualizer.drawSignal(1, output);
  }
}

var config = {freq: 2000,
  outSize: 200,
  interval: 3
};

App.init(config);
App.draw();