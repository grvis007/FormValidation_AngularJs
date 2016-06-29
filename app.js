/**
 * Created by grvis on 5/29/2016.
 */
angular.module('validation',[])
    .controller('myController',['$scope',function($scope) {
        $scope.submit = function(item) {
            if(item) {
                alert("Our form is amazing");
            }
        }
    }])
    .directive('myDirective',function() {
        return {
            restrict:'A',
            require:'ngModel',
            link: function(scope,element,attrs,ctrl) {
                ctrl.$parsers.unshift(checkIt);
                ctrl.$formatters.unshift(checkIt);
                
                function checkIt(handlePassword) {
                    console.log(handlePassword);
                    var specialCharacters = "^(?=.*\d).{4,8}$";
                    if(specialCharacters) {
                        ctrl.$setValidity('myDirectiveRequired',true);
                    } else {
                        ctrl.$setValidity('myDirectiveRequired',false);
                    }

                   return handlePassword;
                }
            }
        }
    });