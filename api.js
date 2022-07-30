const express = require('express');
const http = require('http')
const app = express();
const fs = require("fs"); // node filesystem
const PORT = 80;

app.use(express.json()) //Middleware -> parse data into json


const animal = {
    "animal3": {
        "id" : 2,
        "name" : "Tiger",
        "weight": 80,
        "sPower": "bite",
        "eDate": "10.09.2022"
    }
}


var server = app.listen(
    PORT,
    () => console.log(`Server listen on http://localhost:${PORT}`)   
)





// get an all existing entries
app.get('/', (req, res) => {
    fs.readFile( __dirname + "/" + "animals.json", 'utf8', function (err, data) {
        if(err) throw err;
        //res.send(data);
        obj = JSON.parse(data);
        console.log(data);
        
        res.end(data);
        
    })
    /*
    for (i=0; i<obj["animals"].length; i++){
        console.log(i)
    }
    
    //res.send(obj["animals"][0]["name"])
    */
    
});

// create new entry
app.post('/addAnimal', (req, res) => {

   fs.readFile( __dirname + "/" + "animals.json", 'utf8', function (err, data) {
    data = JSON.parse( data );
    data["animal3"] = animal["animal3"];
    console.log( data );
    res.end( JSON.stringify(data));
    });
});

// update entry
app.post('/updateAnimal', (req, res) => {

    fs.readFile( __dirname + "/" + "animals.json", 'utf8', function (err, data) {
     data = JSON.parse( data );
     data["animal3"] = animal["animal3"];
     console.log( data );
     res.end( JSON.stringify(data));
     });
 });


// delete an existing entry
app.delete('/deleteAnimal/:id', (req, res) => {
    const {id} = req.params
    fs.readFile( __dirname + "/" + "animals.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        delete data["animal" + id];
         
        console.log( data );
        res.end( JSON.stringify(data));
     });
     
});
