var width = 500, height = 500;
var canvas = d3.select("body")
  .append('svg')
  .attr("width", width)
  .attr("height", height);

var circle = canvas.append("circle")
    .attr("cx", 50)
    .attr("cy", 100)
    .attr("r", 25);

circle.transition()
  .duration(1000) // default 500мс
  .delay(500)
  .attr("cx", 150)
  .transition()
  .attr("cy", 200)
  .transition()
  .attr("cx", 50)
  //.each("end", function(){ // Разные колбэки
  .each("start", function(){ // Разные колбэки
    d3.select(this).attr("fill", "green")
  });