'use strict';

angular.module('etsyProfitCalculatorApp')
  .controller('MainCtrl', function ($scope) {

    //set constants
    //=====================================
    var etsyPercentage = 3.5,
    	listingFee = 0.20;
    	// paypalLocal = 2.3,
    	// paypalInternational = 3.4,
    	// directChecoutLocal = 3.5,
    	// directCheckoutInternational = 4.0;

    var paymentOptions = {
    	paypal : {
    		local : 2.3,
    		international : 3.4
    	},
    	direct : {
    		local: 3.5,
    		international: 4.0
    	}
    };


	// initialise view properties
	//=====================================
	$scope.salesPrice = 0;
	$scope.shipLocation = "";
	$scope.payMethod = "";
	$scope.profit = 0;
	
	// Production costs
	$scope.printCosts = 0;
	$scope.postageCosts= 0;

	// Fees
	$scope.etsyFee = 0;
	$scope.paymentFee = 0;
	$scope.totalCosts = 0;

	
	// App functions
	//=====================================
	setPaymentFee = function(location, payMethod) {
		// if ( location === "local" && payMethod === "paypal" ) {
		// 	$scope.paymentFee = $scope.salesPrice / paymentOptions.paypal.local;
		// } else if ( location === "local" && payMethod === "direct" ) {
		// 	$scope.paymentFee = $scope.salesPrice / paymentOptions.direct.local;
		// } else if ( location === "international" && payMethod === "paypal" ) {
		// 	$scope.paymentFee = $scope.salesPrice / paymentOptions.paypal.international;
		// } else if ( location === "international" && payMethod === "direct" ) {
		// 	$scope.paymentFee = $scope.salesPrice / paymentOptions.direct.international;
		// }
		$scope.paymentFee = $scope.salesPrice / paymentOptions. + payMethod + . + location;
	};

	// getPaymentFee = function() {
	// 	$scope.paymentFee
	// };

	getTotalCosts = function() {
		$scope.totalCosts = $scope.printCosts + $scope.postageCosts + $scope.etsyFee + listingFee + $scope.paymentFee;
	};

	calcProfit = function() {
		$scope.profit = $scope.salesPrice - $scope.totalCosts;
	};

	// on change, update totalCosts and recalculate profit

  });
