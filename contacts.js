angular.module( "authentiKaited")
.component('contacts', {
  templateUrl: 'contacts.html',
  bindings:{
  	cheese: '@'
  },
  controller: contactsController
});

function contactsController(){

	let ctrl = this;

	ctrl.greeting = 'hiya contacts';

	ctrl.getCheese = function( y ){

		this;

		return y;
	}


}

