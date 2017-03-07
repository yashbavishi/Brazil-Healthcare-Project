// Define an angular module for the application
var app = angular.module('brazilApp', ['ngRoute'])

app.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
        when('/home', {
          templateUrl: 'view/home.html'
        }).
        when('/brazil', {
          templateUrl: 'view/brazil.html'
        }).
        when('/toxin', {
          templateUrl: 'view/toxin.html'
        }).
        when('/FAQ', {
          templateUrl: 'view/FAQ.html',
          controller:"AlgorithmListCtrl"
        }).
        otherwise({
          redirectTo: '/home'
        });
}]);

/*  
 * Functions for navigation tab click event 
 */ 
$("#tab-home").click(function() {
  $("#user-info-div").attr("class","hide"); // hide user information section 
  switchTabActivation(0);
});
$("#tab-brazil, #brazil-link").click(function() {
  $("#user-info-div").removeAttr("class"); // show user information section 
  resetOptionValue();
  switchTabActivation(1);
});
$("#tab-toxin, #toxin-link").click(function() {
  $("#user-info-div").removeAttr("class"); // show user information section 
  switchTabActivation(2);
});
$("#tab-FAQ").click(function() {
  $("#user-info-div").attr("class","hide"); // hide user information section 
  switchTabActivation(3);
});

/*
 * Browser back/forward button handler
 */
$(window).on('hashchange', function() { // detect URL change
  initiateTabActivation();
});

// Reset the value of id="option" component in the index page
function resetOptionValue() {
  $('#option').val("");
}

function initiateTabActivation() {
  var currentPage = $(location).attr('hash').slice(2);
  switch(currentPage) {
    case "home":
      switchTabActivation(0);
      $("#user-info-div").attr("class","hide");
      break;
    case "antidote":
      switchTabActivation(1);
      $("#user-info-div").removeAttr("class");
      break;
    case "toxin":
      switchTabActivation(2);
      $("#user-info-div").removeAttr("class");
      break;
    case "FAQ":
      switchTabActivation(3);
      $("#user-info-div").attr("class","hide");
      break;
    default: // Home page is default
      switchTabActivation(0); 
      $("#user-info-div").attr("class","hide");
  }
}

function switchTabActivation(tabIndex) {
  $(".main-nav-ul li").each(function() {
    $(this).removeClass("active");
  }); 
  $(".main-nav-ul li:eq(" + tabIndex + ")").addClass("active");
}


