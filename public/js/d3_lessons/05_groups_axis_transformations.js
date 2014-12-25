var dataArr = [20, 40, 50, 60];
var width = 500, height = 500;

var widthScale = d3.scale.linear()
  .domain([0, Math.max.apply(NaN, dataArr)])
  .range([0, width-20]); // ниже мы сдвигаем на 20
var colorScale = d3.scale.linear()
  .domain([0, Math.max.apply(NaN, dataArr)])
  .range(["#f00", "#0f0"]);

var canvas = d3.select("body")
  .append('svg')
  .attr("width", width)
  .attr("height", height)
  .append("g") // g = group
  .attr("transform", "translate(20, 0)");
  

var bars = canvas.selectAll("rect") // Внутри первой группы
  .data(dataArr)
  .enter()
    .append("rect")
    .attr("width", function(d){ return widthScale(d); })
    .attr("height", 50)
    .attr("fill", function(d){ return colorScale(d); })
    .attr("y", function(d, i){ return i * 100; })


var axis = d3.svg.axis()
  .scale(widthScale) // задаём т.о. ширину и размерность шкалы
  .ticks(5); // Кол-во делений

canvas.append("g") // Внутри второй группы
  .attr("transform", "translate(0, 400)")
  .call(axis);