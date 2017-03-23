app.directive('app-info', function(){
  return{
    restrict: 'E',
    scope: {
      info: '='
    },
 templateUrl: 'js/directives/appInfo.html'
  };
  });