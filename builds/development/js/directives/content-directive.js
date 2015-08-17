angular
  .module('myApp')
  .directive('contentDirective',contentDirective);

function contentDirective(){
  return{
    restrict:'A',
    replace:true,
    scope:{
      myContent:'@',
      myClass:'@'
    },
    template:'<button class="{{myClass}}">{{myContent}}</button>'
  }
}
