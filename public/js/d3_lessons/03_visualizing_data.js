var canvas = d3.select("body")
  .append('svg')
  .attr("width", 500)
  .attr("height", 200);

var dataArr = [10, 20, 70];

var border = canvas.append("rect")
  .attr("width", 500)
  .attr("height", 200)
  .attr("stroke", "#8888ff")
  .attr("stroke-width", 2)
  .attr("fill", 'rgba(0,0,0,0)');

var bars = canvas.selectAll("rect.data") //Возвр. колл-ию элементов
  .data(dataArr)  //Биндит данные к элементам
  .enter()  //Вып. дальнейшее для кажд. данного, для кот. нет элемента
    .append("rect")
    .attr("class", "data")
    .attr("height", function(val){ return 2*val; })
    .attr("width", 50)
    .attr("y", function(val){ return 200 - 2*val - 1; })
    .attr("x", function(val,i){return i*60+10})
    .attr("fill", "#eeeeff")
    .attr("stroke", "#8888ff");