angular.module('starter.services', [])

	.factory('Chats', function() {
	  	
	  	var chats = [
		  	{
			    id: 0,
			    estado: 'Puerto Ordaz',
			    img: 'img/giras/17-05-puerto-ordaz.jpg',
		      	lugar: 'Colegio Loyola',
		      	fecha: '17 de Mayo de 2015',
		      	hora: '9:00 pm',
		      	tickera: 'Libería Latina (Orinokia Mall), Tiendas Cibus (C.C Costa Atrántica), Quick Express (Alta Vista), Taquillas del Colegio.',
		  	}, {
			    id: 1,
			    estado: 'Barinas',
			    img: 'img/giras/26-06-barinas.jpg',
		      	lugar: "Salón Quero's",
		      	fecha: '26 de Junio de 2015',
		      	hora: '8:00 pm',
		      	tickera: 'Staff Style Peluquería (C.C Divina Pastora), Garzon (C.C El Dorado), Stand Venezolanos Desesperados (C.C Cima).' ,
		  	},{
			    id: 2,
			    estado: 'San Antonio',
			    img: 'img/giras/27-06-san-antonio.jpg',
		      	lugar: 'Salón Milli Rossi',
		      	fecha: '27 de Junio de 2015',
		      	hora: '8:00 pm',
		      	tickera: 'Little Joe (C.C La Casona - C.C Los Altos),  Oficinas del Salon.',
		  	}, {
			    id: 3,
			    estado: 'Caracas',
			    img: 'img/giras/10-07-caracas.jpg',
		      	lugar: 'Magnum City Club',
		      	fecha: '10 de Julio de 2015',
		      	hora: '7:00 pm',
		      	tickera: 'www.ticketmundo.com',
		  	}, {
			    id: 4,
			    estado: 'Maracaibo',
			    img: 'img/giras/15-07-maracaibo.jpg',
		      	lugar: 'Aula Magna URU',
		      	fecha: '15 de Julio de 2015',
		      	hora: '9:00 pm',
		      	tickera: 'www.miticket.com, Libreria Europa, Gardo, Acuario, Grenners.',
		  	}, {
			    id: 5,
			    estado: 'Caracas',
			    img: 'img/giras/16-07-caracas.jpg',
		      	lugar: 'Centro Cultural B.O.D',
		      	fecha: '16 y 17 de Julio de 2015',
		      	hora: '8:00 pm',
		      	tickera: 'www.ticketmundo.com',
		  	}, {
			    id: 6,
			    estado: 'Caracas',
			    img: 'img/giras/16-07-caracas.jpg',
		      	lugar: 'Centro Cultural B.O.D',
		      	fecha: '18 y 19 de Julio de 2015',
		      	hora: '6:00 pm',
		      	tickera: 'www.ticketmundo.com',
		  	}, {
			    id: 7,
			    estado: 'Miami',
			    img: 'img/giras/25-07-miami.jpg',
		      	lugar: 'Bank United Center',
		      	fecha: '25 de Julio de 2015',
		      	hora: '8:00 pm',
		      	tickera: 'www.ticketmaster.com',
		  	}, {
			    id: 8,
			    estado: 'Panama',
			    img: 'img/giras/29-08-panama.jpg',
		      	lugar: 'Por Confirmar',
		      	fecha: '29 de Agosto de 2015',
		      	hora: '---',
		      	tickera: 'hispanomedios@gmail.com',
		  	}, {
			    id: 9,
			    estado: 'Maracaibo',
			    img: 'img/giras/13-09-barquisimeto.jpg',
		      	lugar: 'Palacio de Eventos',
		      	fecha: '12 de Septiembre de 2015',
		      	hora: '8:00 pm	',
		      	tickera: 'www.miticket.com, Libreria Europa, Gardo, Acuario, Grenners.',
		  	}, {
			    id: 10,
			    estado: 'Barquisimeto',
			    img: 'img/giras/13-09-barquisimeto.jpg',
		      	lugar: 'Teatro Juares',
		      	fecha: '13 de Septiembre de 2015',
		      	hora: '6:00 pm	',
		      	tickera: 'www.mdticket.com',
		  	}, {
			    id: 11,
			    estado: 'Valencia',
			    img: 'img/giras/26-09-valencia.jpg',
		      	lugar: 'Teatro Municipal de Valencia',
		      	fecha: '26 de Septiembre de 2015',
		      	hora: '3:00 pm	',
		      	tickera: 'www.tuticket.com',
		  	}, {
			    id: 12,
			    estado: 'Valencia',
			    img: 'img/giras/26-09-valencia.jpg',
		      	lugar: 'Teatro Municipal de Valencia',
		      	fecha: '26 de Septiembre de 2015',
		      	hora: '5:00 pm	',
		      	tickera: 'www.tuticket.com',
		  	}, {
			    id: 13,
			    estado: 'Valencia',
			    img: 'img/giras/26-09-valencia.jpg',
		      	lugar: 'Teatro Municipal de Valencia',
		      	fecha: '26 de Septiembre de 2015',
		      	hora: '7:00 pm	',
		      	tickera: 'www.tuticket.com',
		  	}     
	  	];

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
});