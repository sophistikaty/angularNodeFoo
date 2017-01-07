
// Controllers

authK.controller('authKCtrl', function() {

    let ctrl = this;

    ctrl.check = 'hey there';

    ctrl.isAuth = false;

    ctrl.auth0 = new Auth0({
        domain:       'YOUR_AUTH0_DOMAIN',
        clientID:     'YOUR_CLIENT_ID',
        callbackURL:  '{YOUR APP URL}',
        responseType: 'token'
      });


});

authK.controller( 'fun', function() {

  let fun = this;

  fun.night = {
    food: "tacos",
    movie: "star wars"

  };

});

authK.controller( 'soFun', function() {

  let soFun = this;

  soFun.night = {
    food: "pizza",
    movie: "gremlins"

  };

});