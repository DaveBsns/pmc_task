const express = require('express');
const app = express();
const fs = require("fs"); // node filesystem
const cors = require("cors");
const PORT = 8080;

app.use(cors())
app.use(express.json()) //Middleware -> parse data into json
app.use(express.urlencoded({  // for reading the form data in the req body  -> otherwise form data always received as an empty array on server
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
        if(err) {
            console.log(err);
        } else {
        obj = JSON.parse(data);
        //console.log(data);
        res.end(data);  
        } 
    })   
});


// create new entry
app.post('/addAnimal', (req, res) => {
    console.log(req)
   fs.readFile( __dirname + "/" + "animals.json", 'utf8', function (err, file) {
        if(err){
            console.log(err)
        } else {
            let json = JSON.parse( file );
            const data_len = json.data.length
            console.log('test')
            animal["id"] = data_len;
            animal["name"] = req.body.name;
            animal["weight"] = req.body.weight;
            animal["sPower"] = req.body.sPower;
            animal["eDate"] = req.body.eDate;
            json.data.push(animal);
            fs.writeFile(__dirname + "/" + "animals.json", JSON.stringify(json, null, 4), 'utf8', function(){
                console.log('successfull')
            })
            res.end(JSON.stringify(json));
        }
    });
});

// update entry
app.post('/updateAnimal/:id', (req, res) => {
    let { id } = req.params
    console.log(id)
    fs.readFile( __dirname + "/" + "animals.json", 'utf8', function (err, file) {
        if(err){
            console.log(err)
        } else {
            
            let json = JSON.parse( file );
            let findAnimal = json.data.find(x => x.id === parseInt(id));
            findAnimal["name"] = req.body.name
            findAnimal["weight"] = req.body.weight
            findAnimal["sPower"] = req.body.sPower
            findAnimal["eDate"] = req.body.eDate
            fs.writeFile(__dirname + "/" + "animals.json", JSON.stringify(json, null, 4), 'utf8', function(){
                console.log('successfull')
            })
            res.end(JSON.stringify(json));
        }
    });
 });


// delete an existing entry
app.delete('/deleteAnimal/:id', (req, res) => {
    let { id } = req.params
    fs.readFile( __dirname + "/" + "animals.json", 'utf8', function (err, file) {
        let json = JSON.parse( file );
        console.log(json)
        json.data[id].delete
        //delete json.data[id];
        
        console.log(json)
        /*
        for (i=0; i < json.data.length; i++){
            //console.log('check')
            if(json.data[i] === null){
                
            }
            console.log(json);
        

        fs.writeFile(__dirname + "/" + "animals.json", JSON.stringify(json, null, 4), 'utf8', function(){
            console.log('successfull')
        })
        */
        res.end( JSON.stringify(json));
        
     });
    
     
});

