//this file is modify 2213

(function(){
   var Test = function(){
       var that = this;
       //初始化
       that.options = {};
       that.data =[];
       that.init = function(options,data){
           that.options  = options||{};
           this.data  =  data;
           return new Date();
       }
       this.setData = function(){
            return null;
       }
   } 
 })();
