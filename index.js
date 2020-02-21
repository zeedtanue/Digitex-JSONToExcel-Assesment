const csvjson = require('csvjson');
const readFile = require('fs').readFile;
const writeFile = require('fs').writeFile;

//access and read file
readFile('./json-data.json', 'utf-8', (err, fileContent) => {
    if (err) {
        console.log(err); 
        throw new Error(err);
    }
    const csvData = csvjson.toCSV(fileContent, {
        headers: 'key'
    });

    //writing and saving the file 
    writeFile('./JSONToExcel.csv', csvData, (err) => {
        if(err) {
            console.log(err); 
            throw new Error(err);
        }
        console.log('Success! File is saved.');
    });
});