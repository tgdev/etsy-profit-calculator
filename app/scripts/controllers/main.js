'use strict';

angular.module('etsyProfitCalculatorApp')
  .controller('MainCtrl', function ($scope) {

    //set constants
    //=====================================
    var paymentOptions = {
		paypal : {
			local : 2.3,
			overseas : 3.4
		},
		direct : {
			local: 3.5,
			overseas: 4.0
		}
	};


	// initialise view properties
	//=====================================
	$scope.salesPrice = 0;
	$scope.shippingLocation = '';
	$scope.payMethod = '';
	$scope.profit = 0;

	//Percentages
	$scope.etsyPercentage = 0.035;
	$scope.paymentPercentage = 0.0;

	
	// Production costs
	$scope.printCosts = 0;
	$scope.postageCosts= 0;

	// Fees
	$scope.etsyCosts = 0;
	$scope.listingCosts = 0.20;
	$scope.paymentCosts = 0;

	$scope.totalCosts = 0;

	
	// App functions
	//=====================================
	var calcPaymentFee = function(sl, pm) {
		if ( sl === 'local' && pm === 'paypal' ) {
			$scope.paymentCosts = $scope.salesPrice / paymentOptions.paypal.local;
			$scope.paymentPercentage = paymentOptions.paypal.local;
		} else if ( sl === 'local' && pm === 'direct' ) {
			$scope.paymentCosts = $scope.salesPrice / paymentOptions.direct.local;
			$scope.paymentPercentage = paymentOptions.direct.local;
		} else if ( sl === 'overseas' && pm === 'paypal' ) {
			$scope.paymentCosts = $scope.salesPrice / paymentOptions.paypal.overseas;
			$scope.paymentPercentage = paymentOptions.paypal.overseas;
		} else if ( sl === 'overseas' && pm === 'direct' ) {
			$scope.paymentCosts = $scope.salesPrice / paymentOptions.direct.overseas;
			$scope.paymentPercentage = paymentOptions.direct.overseas;
		}
	};

	var calcTotalCosts = function() {
		$scope.totalCosts = $scope.printCosts + $scope.postageCosts + $scope.etsyCosts + $scope.paymentCosts + $scope.listingCosts;
	};

	var calcProfit = function() {
		$scope.profit = $scope.salesPrice - $scope.totalCosts;
	};

	// on click, update paymentFee and totalCosts, then recalculate profit.
	$scope.calculate = function() {
		calcPaymentFee($scope.shippingLocation, $scope.payMethod);
		calcTotalCosts();
		calcProfit();
	};

  });
