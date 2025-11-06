/// <reference path="../controllers/myProfileController.js" />
var appMyProfile = angular.module("myProfile", ['ngAnimate','ui.bootstrap']);

//appMyProfile.directive('modalDialog', function () {
//    return {
//        restrict: 'E',
//        scope: {
//            show: '='
//        },
//        transclude: true, // Insert custom content inside the directive
//        link: function (scope, element, attrs) {
           
//            console.log('attrs: ' , attrs);
//            scope.dialogStyle = {};
//            if (attrs.boxWidth) {
//                scope.dialogStyle.width = attrs.boxWidth;
//            }
//            if (attrs.boxHeight) {
//                scope.dialogStyle.height = attrs.boxHeight;
//            }
//            scope.hideModal = function() {
//                scope.show = false;
//            };
            
//        },
//        templateUrl: 'module/yourTemplate.html'
//    };
//});
appMyProfile.directive('modal', function () {
    return {
        restrict: 'EA',
        scope: {
            title: '=modalTitle',
            header: '=modalHeader',
            body: '=modalBody',
            footer: '=modalFooter',
            callbackbuttonleft: '&ngClickLeftButton',
            callbackbuttonright: '&ngClickRightButton',
            handler: '=lolo'
        },
        templateUrl: 'controllers/modalDialog.html',
        transclude: true,
        controller: function ($scope) {
            $scope.handler = 'pop'; 
        },
    };
});
appMyProfile.directive('carouselControls', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            scope.goNext = function() {
                element.isolateScope().next();
            };
            scope.goPrev = function() {
                element.isolateScope().prev();
            };
      
        }
    };
});