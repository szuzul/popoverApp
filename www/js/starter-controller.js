/**
 * Created by szuzul on 02/04/2015.
 */

angular.module('starter.controllers', [])

  .controller('CalendarController', CalendarCtrl );

CalendarCtrl.$inject = ["$scope", "$ionicPopover", "$timeout"];

function CalendarCtrl ($scope, $ionicPopover, $timeout) {
    //Menu on the left

    var vm = this;
    this.scope = $scope;
    $scope.item = {
      mail: true,
      sms: false,
      app: false
    }


  $ionicPopover.fromTemplateUrl('templates/popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popoverScheduler = popover;
  });


  $scope.$on("$destroy",function(){
    console.log("removing");
    $scope.popoverScheduler.remove();
  })


  };

CalendarCtrl.prototype.openPopover = function($event, type) {
  this.scope.popoverItems = [{title: "This is popover", items: [{id:1, sub: "this is 1"},{id:2, sub:"this is 2"}]}];


  this.scope.popoverScheduler.show($event);
};
