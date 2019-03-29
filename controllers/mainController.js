angular.module('myApp')
    .controller('mainController', ["$scope", "$rootScope", function ($scope, $rootScope) {
        // add item to the toBeRepaired list
        function checkUncheck() {
            // DOM iddentifier
            let index = Number(this.getAttribute("data-index"));
            // item in list identifier
            let itemId = this.getAttribute("data-item-id");
            let itemAlreadyFoundAt = null;
            for (let i = 0; i < $rootScope.itemsToBeReplaced.length; i++) {
                if ($rootScope.itemsToBeReplaced[i].id == itemId) {
                    itemAlreadyFoundAt = i;
                }
            }
            if (this.checked === true) {
                // display textarea
                this.parentNode.parentNode.nextElementSibling.style.display = "table-row";
                // check if item is already added
                if (itemAlreadyFoundAt === null) {
                    $rootScope.itemsToBeReplaced.push({
                        "name": $rootScope.items[index].name,
                        "description": $rootScope.items[index].description,
                        "price": $rootScope.items[index].price,
                        "id": $rootScope.items[index].id,
                        "room": $rootScope.pageTitle,
                        "index": index
                    });
                } else {
                    return;
                }
            } else {
                // un-display textarea
                this.parentNode.parentNode.nextElementSibling.style.display = "none";
                // check if item is already added
                if (itemAlreadyFoundAt !== null) {
                    $rootScope.itemsToBeReplaced.splice(itemAlreadyFoundAt, 1);
                }
            }
        }
        // addd comment to the item already in the toBeReplaced list
        function addCommentAddQuantity() {

            let comment = this.parentNode.previousElementSibling.previousElementSibling.children[0].value;
            let quantity = this.parentNode.previousElementSibling.children[0].value;
            if (!quantity) {
                quantity = 1;
            } else {
                quantity = Number(quantity);
            }
            let id = this.getAttribute("data-item-id");
            for (let i = 0; i < $rootScope.itemsToBeReplaced.length; i++) {
                if (id == $rootScope.itemsToBeReplaced[i].id) {
                    $rootScope.itemsToBeReplaced[i].comment = comment;
                    $rootScope.itemsToBeReplaced[i].quantity = quantity;
                    this.parentNode.parentNode.style.display = "none";
                }
            }

        }
        
        setTimeout(() => {
            // checkbox event listeners
            let checkboxes = document.querySelectorAll("input[type='checkbox']");
            if (checkboxes.length) {
                for (let i = 0; i < checkboxes.length; i++) {
                    checkboxes[i].addEventListener("click", checkUncheck);
                }
            }
            setTimeout(() => {
                // textarea event listeners
                let itemCommentBtns = document.querySelectorAll("button.item-comment-btn");
                for (let i = 0; i < itemCommentBtns.length; i++) {
                    itemCommentBtns[i].addEventListener("click", addCommentAddQuantity);
                }
            }, 500);
        }, 500);
    }])
    .directive("completedBtn", ["$rootScope", function ($rootScope) {

        return {

            link: ($scope, element) => {

                element.on("click", () => {

                    location.assign("#/printPage");
                });
            }
        };
    }]);