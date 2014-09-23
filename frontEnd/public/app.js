angular.module('lateRooms', [
  'ngRoute',
  'lateRooms.domain'
]).

config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider.when('/rooms',     	{ 
		templateUrl: '/domain/room/rooms.html',
    	controller: 'RoomsController' 
    });

    $routeProvider.when('/rooms/new',     	{ 
		templateUrl: '/domain/room/room.html',
    	controller: 'RoomController' 
    });

    $routeProvider.when('/rooms/edit/:id',      { 
        templateUrl: '/domain/room/room.html',
        controller: 'RoomController' 
    });

    $routeProvider.otherwise({ redirectTo: '/rooms' });
    
    $locationProvider.html5Mode(true);
}]);