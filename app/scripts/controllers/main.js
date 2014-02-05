'use strict';

angular.module('etsyProfitCalculatorApp')
  .controller('MainCtrl', function ($scope) {

    //set constants
    //=====================================
    var costs = 0.0,
		paymentOptions = {
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
	$scope.salesPrice = 0.0;
	$scope.shippingLocation = '';
	$scope.payMethod = '';

	//Percentages
	$scope.etsyPercentage = 3.5;
	$scope.paymentPercentage = 0.0;

	
	// Production costs
	$scope.printCosts = 0.0;
	$scope.postageCosts= 0.0;

	// Fees
	$scope.etsyCosts = 0.0;
	$scope.listingCosts = 0.20;
	$scope.paymentCosts = 0.0;

	
	// App functions
	//=====================================
	$scope.calcEtsyFee = function(){
		$scope.etsyCosts = $scope.salesPrice / ($scope.etsyPercentage * 100);
	};

	$scope.calcPaymentFee = function() {

		if ( $scope.shippingLocation === 'local' && $scope.payMethod === 'paypal' ) {

			$scope.paymentCosts = $scope.salesPrice / (paymentOptions.paypal.local * 100);
			
			$scope.paymentPercentage = paymentOptions.paypal.local;
			
			console.log('paypal - local (2.3%): ', $scope.paymentPercentage);
		}

		else if ( $scope.shippingLocation === 'overseas' && $scope.payMethod === 'paypal' ) {
			
			$scope.paymentCosts = $scope.salesPrice / (paymentOptions.paypal.overseas * 100);
			
			$scope.paymentPercentage = paymentOptions.paypal.overseas;

			console.log('paypal - overseas (3.4%): ', $scope.paymentPercentage);
		}

		else if ( $scope.shippingLocation === 'local' && $scope.payMethod === 'direct' ) {
			
			$scope.paymentCosts = $scope.salesPrice / (paymentOptions.direct.local * 100);
			
			$scope.paymentPercentage = paymentOptions.direct.local;
			
			console.log('direct - local (3.5%): ', $scope.paymentPercentage);
		}

		else if ( $scope.shippingLocation === 'overseas' && $scope.payMethod === 'direct' ) {
			
			$scope.paymentCosts = $scope.salesPrice / (paymentOptions.direct.overseas * 100);
			
			$scope.paymentPercentage = paymentOptions.direct.overseas;
			
			console.log('direct - overseas: (4%)', $scope.paymentPercentage);
		}
	};

	$scope.costs = function() {
		costs = $scope.printCosts + $scope.postageCosts + $scope.etsyCosts + $scope.paymentCosts + $scope.listingCosts;
		return costs;
	};

	$scope.profit = function() {
        var profit = $scope.salesPrice - costs;
        return profit;
    };

});