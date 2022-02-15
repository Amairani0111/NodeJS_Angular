//Define el http
const { Console } = require('console');
const http = require('http');

//Arreglo JSON
const libros = [
    {'titulo': 'El universo de lo sencillo', 'autor': 'Pablo Arribas'},
    {'titulo': 'Soñando Despierta', 'autor': 'Carla Medina'},
    {'titulo': 'Si, si es contigo', 'autor': 'Calle y Poche'},
]

//Crear servidor
const server = http.createServer(( request, response) => {
    
    //--Imprime request que envía el cliente
    //console.log(request);
//----------------------------------------------------------------
    //--Imprimir propiedades del request (header, url y metodo)
    //const { headers, url, method } = request;
    //console.log(headers, url, method);
//----------------------------------------------------------------
    //--Texto tipo plano
    //response.setHeader('Content-Type', 'text/plain')
    //--Imprimir texto
    //response.write('<h1>Hola mundo</h1>');
//----------------------------------------------------------------
    //--Texto tipo html 
    //response.setHeader('Content-Type', 'text/html')
    //--Imprimir texto
    //response.write('<h1>Hola mundo</h1>');
//----------------------------------------------------------------
    //--Imprimir texto
    //response.write('<h1>Hola mundo</h1>');
//----------------------------------------------------------------
    //--Texto tipo JSON 
    //response.setHeader('Content-Type', 'application/json')

    //--Devuelve el response al cliente
    /*response.end(
        JSON.stringify({data: libros})
    );*/  
//----------------------------------------------------------------
    //Estatus
    //response.statusCode = 404; //Error
    
    //response.setHeader('Content-Type', 'application/json')

    /*response.end(
        JSON.stringify( {data: null})
    )*/
//----------------------------------------------------------------
    
    /*response.writeHead(404, {
        'Content-Type': 'application/json'
    });

    response.end(
        JSON.stringify( {data: null})
    )*/

//----------------------------------------------------------------   
    /*response.writeHead(404, {
        'Content-Type': 'application/json'
    });    

    //Imprime el valor de authorization del header
    console.log(request.headers.authorization);

    response.end(
        JSON.stringify({ data: null})
    )*/

//----------------------------------------------------------------  
    response.writeHead(200, {
        'Content-Type': 'application/json'
    });    

    let body = [];
    
    //Imprimir data que se envía en el body desde postman
    request.on('data', dataCliente => {
        body.push(dataCliente)
    })

    .on('end', () => {
        //Convierte los valores a string
        body = Buffer.concat(body).toString();
        console.log(body);
    })

    response.end(
        JSON.stringify({ data: libros})
    )
});

//Puerto en donde el servidor se va a levantar
const PORT = 5000;

//Levantar el servidor
server.listen(PORT, () => console.log('El servidor se está ejecutando'));

