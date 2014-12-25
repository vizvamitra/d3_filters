var dataArr = [5, 20, 40, 50, 60]; // называется "domain"
var width = 500, height = 500;

var widthScale = d3.scale.linear()
  .domain([0, Math.max.apply(NaN, dataArr)])
  .range([0, width]);
var colorScale = d3.scale.linear()
  .domain([0, Math.max.apply(NaN, dataArr)])
  .range(["#f00", "#0f0"]);

var canvas = d3.select("body")
  .append('svg')
  .attr("width", width)
  .attr("height", height);

var bars = canvas.selectAll("rect") //Возвр. колл-ию элементов
  .data(dataArr)  //Биндит данные к элементам
  .enter()  //Вып. дальнейшее для кажд. данного, для кот. нет элемента
    .append("rect")
    .attr("width", function(d){ return widthScale(d); })
    .attr("height", 50)
    .attr("fill", function(d){ return colorScale(d); })
    .attr("y", function(d, i){ return i * 100; })