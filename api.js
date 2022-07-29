const express = require('express');
const http = require('http')
const app = express();
const fs = require("fs"); // node filesystem
const PORT = 80;

app.use(express.json()) //Middleware -> parse data into json

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('index.html', function(err, data) {
        if(err) {
            res.writeHead(404)
            res.write('Error: File Not Founde')
        } else{
            res.write(data)
        }
        res.end()
    })
})


server.listen(
    PORT,
    () => console.log(`Server listen on http://localhost:${PORT}`)
    
)
/*
fs.readFile( __dirname + "/" + "animals.json", 'utf8', function (err, data) {
    if(err) throw err;
    //res.send(data);
    obj = JSON.parse(data)
    
    //res.end(data);
    
})


// get an existing entry
app.get('/', (req, res) => {
    for (i=0; i<obj["animals"].length; i++){
        console.log(i)
    }
    
    res.send(obj["animals"][0]["name"])
    
});



// create new entry
app.post('/:id/:name/:weight', (req, res) => {

    const {id} = req.params;
    const {name} = req.params;
    const {weight} = req.params;

    if(!id || !name || !weight){
        res.status(418).send({ message: 'We need a logo!'})
    }
    fs.writeFile(__dirname + "/" + "animals.json", 'utf8', function (err, data) {
        res.send(id);


    })

    res.send({
        
    })


});

// modify an entry
app.put('/animal/:id', (req, res) => {
    
});

// delete an existing entry
app.delete('/animal/:id', (req, res) => {
    
});


app.route('index.html')
*/