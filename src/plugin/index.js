const plugin = (Vue) => {
    Number.prototype.format = function(){
        if(this==0) return 0;
      
        var reg = /(^[+-]?\d+)(\d{3})/;
        var n = (this + '');
      
        while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');
      
        return n;
      };
      
    String.prototype.format = function(){
        var num = parseFloat(this);
        if( isNaN(num) ) return "0";
      
        return num.format();
      };
    Vue.prototype.$format = function(t){
  
        if(t==0) return 0;
      
        var reg = /(^[+-]?\d+)(\d{3})/;
        var n = (t + '');
      
        while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');
      
        return n;
      };     
}

export default plugin;