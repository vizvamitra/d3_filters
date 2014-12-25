var canvas = d3.select("body")
  .append('svg')
  .attr("width", 500)
  .attr("height", 500);

var head = canvas.append("circle")
  .attr("cx", 250)
  .attr("cy", 100)
  .attr("r", 50)
  .attr("fill", "red");

var body = canvas.append("rect")
  .attr("width", 100)
  .attr("height", 150)
  .attr("x", 200)
  .attr("y", 150);

var left_arm = canvas.append("line")
  .attr("x1", 150)
  .attr("y1", 250)
  .attr("x2", 200)
  .attr("y2", 170)
  .attr("stroke", "green")
  .attr("stroke-width", 4);

var right_arm = canvas.append("line")
  .attr("x1", 300)
  .attr("y1", 170)
  .attr("x2", 350)
  .attr("y2", 250)
  .attr("stroke", "green")
  .attr("stroke-width", 4);