angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ciudad Bolívar',
    lastText: 'Teatro Las Nieves - 20/06',
    face: 'img/giras/ciudad-bolivar.jpg'
  }, {
    id: 1,
    name: 'Lecheria',
    lastText: 'Hotel Punta Palma - 21/06',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  },{
    id: 2,
    name: 'Barinas',
    lastText: "Salón Quero's - 26/06",
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'San Antonio de los Altos',
    lastText: 'C.C. La Casona II - 27/06',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Caracas',
    lastText: 'Club Magnum - 10/07',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }, {
    id: 5,
    name: 'Caracas',
    lastText: 'Centro Cultural BOD - 16 al 19/07',
    face: 'img/giras/caracas-bod.jpg'
  }, {
    id: 6,
    name: 'Estados Unidos',
    lastText: 'Miami - 24 al 27/07',
    face: 'img/giras/miami.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Gira', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var gira = [{
    id: 0,
    name: 'Ciudad Bolívar',
    lastText: 'Teatro Las Nieves - 20/06',
    face: 'img/giras/ciudad-bolivar.jpg'
  }, {
    id: 1,
    name: 'Lecheria',
    lastText: 'Hotel Punta Palma - 21/06',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  },{
    id: 2,
    name: 'Barinas',
    lastText: "Salón Quero's - 26/06",
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'San Antonio de los Altos',
    lastText: 'C.C. La Casona II - 27/06',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Caracas',
    lastText: 'Club Magnum - 10/07',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }, {
    id: 5,
    name: 'Caracas',
    lastText: 'Centro Cultural BOD - 16 al 19/07',
    face: 'img/giras/caracas-bod.jpg'
  }, {
    id: 6,
    name: 'Estados Unidos',
    lastText: 'Miami - 24 al 27/07',
    face: 'img/giras/miami.jpg'
  }];

  return {
    all: function() {
      return gira;
    }
  };
});;
