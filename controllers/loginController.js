angular.module("myApp")
    .controller("loginController", function ($scope) {

        $scope.userCredidentials = {
            "username": "",
            "password": "",
            "disabled": false
        };
        let attempt = 3;
        $scope.validate = () => {
            //check if username and password match
        	if ($scope.userCredidentials.username.toLowerCase() == "skydream" && $scope.userCredidentials.password.toLowerCase() == "skydreamweb") { 
        	    location.assign("#/rooms");
        	} else {
        	    attempt--; // decrementing by one for every tried login
        	    // disabling all input fields after 3 attempts
                let userNotice;
                if (attempt == 0) {
                    userNotice = "You ran out of login attempts. Reload page and try again.";
                    $scope.userCredidentials.disabled = true;
        	    } else {
                    userNotice = "You have " + attempt + " attempts left!";
                }
                alert(userNotice);
        	}
        };
    });
