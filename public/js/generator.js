window.Generator = {
  freq: 2000,
  outSize: 200,
  interval: 3,

  setup: function(config){
    this.freq = config.freq || this.freq;
    this.outSize = config.outSize || this.outSize;
    this.interval = config.interval || this.interval;
    return this;
  },

  generate: function(){
    var out = [];
    var t = 0; // current time
    var dt = this.interval/(this.outSize-1); // time delta
    var rads = Math.PI*2; // rads in 360 degrees
    var tpm = this.freq/1000; // changes 0 -> 360 per msec
    var val;

    while(t<=this.interval){
      val = Math.sin((tpm*t) * rads);
      out.push( {t: t, y: Math.round(val * 0x7fff)} );
      t += dt;
    }
    return out;
  }
}