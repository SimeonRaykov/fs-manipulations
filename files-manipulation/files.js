const express = require('express')
const app = express()
const port = 3000
const testFolder = './';
const fs = require('fs');

app.listen(port, () => console.log(`Server started on http://localhost:${port}`));
app.get('/', (req, res) => {
    fs.readdir(testFolder, (err, files) => {
        files.forEach(file => {
            if(!file.endsWith('.js') && !file.endsWith('.json')){
                console.log(file);
            }
            
        });
    });
})




