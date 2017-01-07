var fun = function( $scope ) {

  $scope.night = {
    food: "tacos",
    movie: "star wars"

  };

  const auth0 = new Auth0({
    domain:       'YOUR_AUTH0_DOMAIN',
    clientID:     'YOUR_CLIENT_ID',
    callbackURL:  '{YOUR APP URL}',
    responseType: 'token'
  });

};

var soFun = function($scope) {

  $scope.night = {
    food: "wings",
    movie: "extra star wars"

  };

};

authK.controller( 'fun', ['$scope', fun ]);
authK.controller( 'soFun', ['$scope', soFun ]);