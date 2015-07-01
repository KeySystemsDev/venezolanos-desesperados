angular.module('starter.services', [])

.factory("Giras", function ($resource) {
    return $resource("http://venezolanosdesesperados.com.ve/giras/gira.php", //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: "GET", isArray: true }
    })
})

.factory("Actores", function ($resource) {
    return $resource("http://venezolanosdesesperados.com.ve/giras/actores.php", //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: "GET", isArray: true }
    })
});