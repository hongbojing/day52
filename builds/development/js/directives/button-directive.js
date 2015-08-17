angular
.module('myApp')
.directive('blueButtonDirective',blueButtonDirective)
.directive('greenButtonDirective',greenButtonDirective)
.directive('lightBlueButtonDirective',lightBlueButtonDirective)
.directive('orangeButtonDirective',orangeButtonDirective)
.directive('redButtonDirective',redButtonDirective)
.directive('defaultButtonDirective',defaultButtonDirective)
;

function blueButtonDirective(){
  return{
    restrict:'A',
    replace:true,
    scope:{
      blueContent:'@',
      blueClass:'@'
    },
    template:'<button class="{{blueClass}}">{{blueContent}}</button>'
  }
}
function greenButtonDirective(){
  return{
    restrict:'A',
    replace:true,
    scope:{
      greenContent:'@',
      greenClass:'@'
    },
    template:'<button class="{{greenClass}}">{{greenContent}}</button>'
  }
}
function lightBlueButtonDirective(){
  return{
    restrict:'A',
    replace:true,
    scope:{
      lightBlueContent:'@',
      lightBlueClass:'@'
    },
    template:'<button class="{{lightBlueClass}}">{{lightBlueContent}}</button>'
  }
}
function orangeButtonDirective(){
  return{
    restrict:'A',
    replace:true,
    scope:{
      orangeContent:'@',
      orangeClass:'@'
    },
    template:'<button class="{{orangeClass}}">{{orangeContent}}</button>'
  }
}
function redButtonDirective(){
  return{
    restrict:'A',
    replace:true,
    scope:{
      redContent:'@',
      redClass:'@'
    },
    template:'<button class="{{redClass}}">{{redContent}}</button>'
  }
}
function defaultButtonDirective(){
  return{
    restrict:'A',
    replace:true,
    scope:{
      defaultContent:'@',
      defaultClass:'@'
    },
    template:'<button class="{{defaultClass}}">{{defaultContent}}</button>'
  }
}


