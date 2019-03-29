angular.module("myApp")
    .controller("printController", ["$scope", "$rootScope", function($scope, $rootScope) {

        $scope.entryDate = $rootScope.apartmentInfo.date.toString().split(" ");
        $scope.entryDate = $scope.entryDate[1] + "-" + $scope.entryDate[2] + "-" + $scope.entryDate[3];
        $scope.totalPrice = 0;
        for (let i = 0; i < $rootScope.itemsToBeReplaced.length; i++) {
            if ($rootScope.itemsToBeReplaced[i].quantity !== undefined) {
                $scope.totalPrice += $rootScope.itemsToBeReplaced[i].price * $rootScope.itemsToBeReplaced[i].quantity;
            } else {
                $scope.totalPrice += $rootScope.itemsToBeReplaced[i].price;
            }
        }
    }])
    .directive("pdfBtn", [function ($scope) {

        return {

            link: ($scope, element) => {
                
                element.on("click", () => {
                
                    window.print();
                });
            }
        };
    }]);