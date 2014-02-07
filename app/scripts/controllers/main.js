'use strict';

angular.module('etsyProfitCalculatorApp')
  .controller('MainCtrl', function ($scope) {

	//set constants
	//=====================================
	var costs = 0.0,
		fees = 0.0,
		etsyFee = 0.035, // 3.5%
		paypalLocal = 0.023, //2.3%
		paypalOverseas = 0.034, // 3.4%
		directLocal = 0.035, // 3.5%
		directOverseas = 0.040; // 4.0%


	// initialise view properties
	//=====================================
	$scope.salesPrice = 0.0;
	$scope.shippingLocation = 'local';
	$scope.payMethod = 'paypal';

	//Percentages
	$scope.etsyPercentage = etsyFee;
	$scope.paymentPercentage = paypalLocal;

	
	// Production costs
	$scope.productionCosts = 0.0;
	$scope.postageCosts = 0.0;

	// Fees
	$scope.etsyCosts = 0.0;
	$scope.listingCosts = 0.20;
	$scope.paymentCosts = 0.0;

	
	// App functions
	//=====================================
	$scope.calcEtsyFee = function(){
		$scope.etsyCosts = etsyFee *  $scope.salesPrice;
		$scope.etsyPercentage = etsyFee;
	};

	$scope.calcPaymentFee = function() {

		if ( $scope.shippingLocation === 'local' && $scope.payMethod === 'paypal' ) {

			$scope.paymentCosts = paypalLocal * $scope.salesPrice;
			
			$scope.paymentPercentage = paypalLocal;
			
			// console.log('paypal - local (2.3%): ', $scope.paymentPercentage);
		}

		else if ( $scope.shippingLocation === 'overseas' && $scope.payMethod === 'paypal' ) {
			
			$scope.paymentCosts = paypalOverseas * $scope.salesPrice;
			
			$scope.paymentPercentage = paypalOverseas;

			// console.log('paypal - overseas (3.4%): ', $scope.paymentPercentage);
		}

		else if ( $scope.shippingLocation === 'local' && $scope.payMethod === 'direct' ) {
			
			$scope.paymentCosts = directLocal * $scope.salesPrice;
			
			$scope.paymentPercentage = directLocal;
			
			// console.log('direct - local (3.5%): ', $scope.paymentPercentage);
		}

		else if ( $scope.shippingLocation === 'overseas' && $scope.payMethod === 'direct' ) {
			
			$scope.paymentCosts = directOverseas * $scope.salesPrice;
			
			$scope.paymentPercentage = directOverseas;
			
			// console.log('direct - overseas: (4%)', $scope.paymentPercentage);
		}
	};

	$scope.calcFees = function() {
		$scope.calcEtsyFee();
		$scope.calcPaymentFee();
	};

	$scope.fees = function() {
		fees = $scope.etsyCosts + $scope.paymentCosts + $scope.listingCosts;
		return fees;
	};

	$scope.costs = function() {
		costs = $scope.productionCosts + $scope.postageCosts;
		return costs;
	};

	$scope.profit = function() {
		var profit = $scope.salesPrice - (costs + fees);
		return profit;
	};

});