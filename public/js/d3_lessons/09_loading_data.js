var width = 500, height = 500;

//d3.csv("data/09_data.csv", function(data){  
d3.json("data/09_data.json", function(data){  
  var canvas = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);
  canvas.append("rect")
    .attr("width", width)
    .attr("height", height)
    .attr("fill","rgba(0,0,0,0)")
    .attr("stroke", "black");

  var max_age = d3.max(data, function(d){return d.age})
  var ageScale = d3.scale.linear()
    .domain([0, max_age])
    .range([0, width]);

  canvas.selectAll("rect.data")
    .data(data)
    .enter()
      .append("rect")
      .attr("class", "data")
      .attr("width", function(d){ return ageScale(d.age); })
      .attr("height", 48)
      .attr("y", function(d,i){ return i*50; })
      .attr("fill", "green")

  canvas.selectAll("text")
    .data(data)
    .enter()
      .append("text")
      .attr("fill", "white")
      .style("font-size", 18)
      .attr("x", 2)
      .attr("y", function(d,i){ return i*50 + 30; })
      .text(function(d){ return d.name+" ("+d.age+")"; });
});