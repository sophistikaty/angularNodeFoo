
app.controller( 'fun', ['$scope', function($scope) {

  $scope.night = {
    food: "tacos",
    movie: "star wars"

  };

  var auth0 = new Auth0({
    domain:       'YOUR_AUTH0_DOMAIN',
    clientID:     'YOUR_CLIENT_ID',
    callbackURL:  '{YOUR APP URL}',
    responseType: 'token'
  });

}]);

app.controller( 'soFun', ['$scope', function($scope) {

  $scope.night = {
    food: "wings",
    movie: "extra star wars"

  };

}]);