var width = 500, height = 500;
var canvas = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height);
canvas.append("rect")
  .attr("width", width)
  .attr("height", height)
  .attr("fill","rgba(0,0,0,0)")
  .attr("stroke", "black");

var group = canvas.append("g")
  .attr("transform", "translate(100, 100)");

var r = 100;
var p = Math.PI * 2;

var arc = d3.svg.arc() // создаём path generator арок
  .innerRadius(r-20)
  .outerRadius(r)
  .startAngle(0)
  .endAngle(p-1)

group.append("path")
  .attr("d", arc)
  .attr("fill", "red")