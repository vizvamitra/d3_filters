window.Visualizer = {
  width: 0,
  height: 0,
  canvas: undefined,
  groups: [],

  init: function(){
    this.width = $('#canvas').width();
    this.height = $('#canvas').height();
    this.canvas = d3.select("#canvas").append("svg")
      .attr("width", this.width)
      .attr("height", this.height);
    this._createGroups();
  },

  clear: function(){
    for(var i=0; i<this.groups.length; i++){
      this.groups[i].remove();
    }
    this._createGroups();
  },

  drawSignal: function(num, data){
    var group = this.groups[num];
    var tScale = this._getScale(data, 't', [0, this.width-60]);
    var yScale = this._getScale(data, 'y', [200, 0]);
    var color = ['green', 'blue'][num];
    var line = this._getLine(tScale, yScale);

    this._drawPath(data, group, line, color);
    this._drawAxes(group, tScale, yScale)
  },

  _createGroups: function(){
    this.groups[0] = this.canvas.append("g")
      .attr("transform", "translate(60,10)");
    this.groups[1] = this.canvas.append("g")
      .attr("transform", "translate(60, "+(this.height/2+10)+")");
  },

  _getLine: function(tScale, yScale){
    return d3.svg.line()
      .x(function(d){ return tScale(d.t); })
      .y(function(d){ return yScale(d.y); });
  },

  _getScale: function(data, attr, range){
    if (attr === 't'){
      var min = d3.min(data, function(d){ return d[attr]; });
      var max = d3.max(data, function(d){ return d[attr]; });
    } else if (attr === 'y') {
      var min = -0x7fff;
      var max = 0x7fff;
    }

    return d3.scale.linear()
      .domain([min, max])
      .range(range);
  },

  _getAxis: function(scale, ticks){
    return d3.svg.axis()
      .scale(scale)
      .ticks(ticks);
  },

  _drawPath: function(data, group, line, color){
    group.append("g")
      .selectAll("path")
      .data([data])
      .enter()
        .append("path")
        .attr("d", line)
        .attr("fill", "none")
        .attr("stroke", color)
        .attr("stroke-width", 3);
  },

  _drawAxes: function(group, tScale, yScale){
    var tAxis = this._getAxis(tScale, 20);
    var yAxis = this._getAxis(yScale, 5)
      .orient("left");
    var style = {'stroke-width': "1px", fill: "none", stroke: "black"};
    group.append("g")
      .style(style)
      .call(tAxis)
      .attr('transform', 'translate(0, 202)');
    group.append("g")
      .style(style)
      .call(yAxis);
  }
}