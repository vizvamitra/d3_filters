var width = 500, height = 500;
var canvas = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height);
canvas.append("rect")
  .attr("width", width)
  .attr("height", height)
  .attr("fill","rgba(0,0,0,0)")
  .attr("stroke", "black");

var data = [
  {x: 10, y: 20},
  {x: 40, y: 60},
  {x: 50, y: 70},
  {x: 80, y: 30}
]

var group = canvas.append("g")
  .attr("transform", "translate(100, 100)");

var line = d3.svg.line() // создаём path generator линий
  .x(function(d){ return d.x; })
  .y(function(d){ return d.y; });

group.selectAll("path")
  .data([data])
  .enter()
    .append("path")
    .attr("d", line)
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 5);