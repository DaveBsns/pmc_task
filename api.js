const express = require('express');
const http = require('http')
const app = express();
const fs = require("fs"); // node filesystem
const { callbackify } = require('util');
const PORT = 8080;

app.use(express.json()) //Middleware -> parse data into json


const animal = {
    "animal": {
        "id" : 0,
        "name" : "string",
        "weight": 0,
        "sPower": "string",
        "eDate": "string"
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
    if(err){
        console.log(err)
    } else {
        data = JSON.parse( data );
        const data_len = Object.keys(data).length
        animal["animal"]["id"] = data_len;
        animal["animal"]["name"] = "";
        animal["animal"]["weight"] = 0;
        animal["animal"]["sPower"] = "";
        animal["animal"]["eDate"] = "";
        data["animal"+data_len] = animal["animal"];
        //json_obj = JSON.stringify(data)
        //console.log(json_obj)
        fs.writeFile(__dirname + "/" + "animals.json", JSON.stringify(data), 'utf8', callbackify)
    }
    
    res.end(JSON.stringify(data));
    
    
    });
});

// update entry
app.post('/updateAnimal', (req, res) => {

    fs.readFile( __dirname + "/" + "animals.json", 'utf8', function (err, data) {
     data = JSON.parse( data );
     data["animal3"] = animal["animal"];
     console.log(Object.keys(data).length);
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
