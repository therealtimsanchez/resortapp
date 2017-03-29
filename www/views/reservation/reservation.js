angular.module('App')
.controller('ReservationController', function ($scope) {
  $scope.reservation = {
    checkin: new Date(),
    checkout: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    room: 123,
    rate: 99,
    wifi: 'FlordiaResortWifi'
  };
});
