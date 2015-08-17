angular
.module('myApp')
.directive('greenAlertDirective',greenAlertDirective)
.directive('lightBlueAlertDirective',lightBlueAlertDirective)
.directive('orangeAlertDirective',orangeAlertDirective)
.directive('redAlertDirective',redAlertDirective)
;


function greenAlertDirective(){
  return{
    restrict:'A',
    replace:true,
    scope:{
      greenContent:'@',
      greenClass:'@'
    },
    template:'<p class="{{greenClass}}">{{greenContent}}</p>'
  }
}
function lightBlueAlertDirective(){
  return{
    restrict:'A',
    replace:true,
    scope:{
      lightBlueContent:'@',
      lightBlueClass:'@'
    },
    template:'<p class="{{lightBlueClass}}">{{lightBlueContent}}</p>'
  }
}
function orangeAlertDirective(){
  return{
    restrict:'A',
    replace:true,
    scope:{
      orangeContent:'@',
      orangeClass:'@'
    },
    template:'<p class="{{orangeClass}}">{{orangeContent}}</p>'
  }
}
function redAlertDirective(){
  return{
    restrict:'A',
    replace:true,
    scope:{
      redContent:'@',
      redClass:'@'
    },
    template:'<p class="{{redClass}}">{{redContent}}</p>'
  }
}


