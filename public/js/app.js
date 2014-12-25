var config = {
  freq: 1000,
  outSize: 300,
  interval: 2
};

Visualizer.init();
Generator.setup(config);

var input = Generator.generate();
var output = Filter.filter(input);

Visualizer.drawSignal(0, input);
Visualizer.drawSignal(1, output);