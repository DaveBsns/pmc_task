const express = require('express');
const http = require('http')
const app = express();
const fs = require("fs"); // node filesystem
const cors = require("cors");
const PORT = 8080;

app.use(cors())
app.use(express.json()) //Middleware -> parse data into json
app.use(express.urlencoded({
    extended: true
}))


const animal = {
    "id" : 0,
    "name" : "string",
    "weight": 0,
    "sPower": "string",
    "eDate": "string"
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
});


// create new entry
app.post('/addAnimal', (req, res) => {
   fs.readFile( __dirname + "/" + "animals.json", 'utf8', function (err, file) {
        if(err){
            console.log(err)
        } else {
            let json = JSON.parse( file );
            const data_len = json.data.length
            animal["id"] = data_len;
            animal["name"] = req.body.name;
            animal["weight"] = req.body.weight;
            animal["sPower"] = req.body.sPower;
            animal["eDate"] = req.body.eDate;
            json.data.push(animal);
            //json_obj = JSON.stringify(data)
            //console.log(json_obj)
            fs.writeFile(__dirname + "/" + "animals.json", JSON.stringify(json, null, 4), 'utf8', function(){
                console.log('successfull')
            })
            res.end(JSON.stringify(json));
        }
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

