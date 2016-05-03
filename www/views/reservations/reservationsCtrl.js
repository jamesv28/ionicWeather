angular.module('myApp').controller('reservationCtrl',
      function ($scope) {
        $scope.reservation = {
          checkin: new Date(),
          checkout: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
          room: 154,
          rate: 121,
          wifi: 'resortWifi'
        };
      });
