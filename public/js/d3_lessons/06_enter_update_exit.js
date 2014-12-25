var dataArr = [20];
var width = 500, height = 500;

var canvas = d3.select("body")
  .append('svg')
  .attr("width", width)
  .attr("height", height)

var circle1 = canvas.append("circle")
    .attr("cx", 50)
    .attr("cy", 100)
    .attr("r", 25);
var circle2 = canvas.append("circle")
    .attr("cx", 100)
    .attr("cy", 100)
    .attr("r", 25); 

var circles = canvas.selectAll("circle")
  .data(dataArr)
  .attr("fill", "blue") // update. Применится только к существующим кругам, привязанным к данным (circle1)
  .exit() // exit. применится к существующим кругам, на которые данных не хватило
    .attr("cx", 50)
    .attr("cy", 50)
    .attr("r", 25)
    .attr("fill", "green");