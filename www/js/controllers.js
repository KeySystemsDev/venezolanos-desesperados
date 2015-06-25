angular.module('starter.controllers', [])

.controller('ActoresCtrl', function($scope , Chats) {
    $scope.chats = Chats.all();
})

.controller('GiraCtrl', function($scope, Chats, $ionicScrollDelegate, $ionicScrollDelegate) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  $scope.chats = Chats.all();

  var Cards = (function() {
  
  var view  = $('.view');
  var vw    = view.innerWidth();
  var vh    = view.innerHeight();
  var vo    = view.offset();
  var card  = $('.card__item');
  var cardfull = $('.card__full');
  var cardfulltop = cardfull.find('.card__full-top');
  var arrow = cardfulltop.find('i');
  var cardnum = cardfulltop.find('.card__full-num');
  var cardhandle = cardfull.find('.card__full-handle');
  var cardinfo = cardfull.find('.card__full-info');
  var w     = $(window);
  
  var data = [
    {
      num: 9,
      handle: '@tonyromo',
      info: 'This is some info about the player and sports.'
    },
    {
      num: 18,
      handle: '@tombrady',
      info: 'This is some info about the player and sports.'
    },
    {
      num: 12,
      handle: '@aaronrogers',
      info: 'This is some info about the player and sports.'
    },
    {
      num: 7,
      handle: '@benroethlisberger',
      info: 'This is some info about the player and sports.'
    },
    {
      num: 9,
      handle: '@drewbrees',
      info: 'This is some info about the player and sports.'
    },
    {
      num: 18,
      handle: '@peytonmanning',
      info: 'This is some info about the player and sports.'
    }
  ];
  
  var moveCard = function() {
    var self = $(this);
    var selfIndex = self.index();
    var selfO = self.offset();
    var ty = w.innerHeight()/2 - selfO.top -4;
    
    var color = self.css('border-top-color');
    cardfulltop.css('background-color', color);
    cardhandle.css('color', color);
    
    updateData(selfIndex);
    
    self.css({
      'transform': 'translateY(' + ty + 'px)'
    });
        
    self.on('transitionend', function() {
      cardfull.addClass('active');
      self.off('transitionend');
    });
    
    return false;
  };
  
  var closeCard = function() {
    cardfull.removeClass('active');
    cardnum.hide();
    cardinfo.hide();
    cardhandle.hide();
    cardfull.on('transitionend', function() {
      card.removeAttr('style');
      cardnum.show();
      cardinfo.show();
      cardhandle.show();
      cardfull.off('transitionend');
    });
  };
  
  var updateData = function(index) {
    cardnum.text(data[index].num);
    cardhandle.text(data[index].handle);
    cardinfo.text(data[index].info);
  };
  
  var bindActions = function() {
    card.on('click', moveCard);
    arrow.on('click', closeCard);
  };
  
  var init = function() {
    bindActions();
  };
  
  return {
    init: init
  };
  
}());

Cards.init();

  $scope.top = function() {
        $ionicScrollDelegate.scrollTop();
        
    };

})

.controller('GiraDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
