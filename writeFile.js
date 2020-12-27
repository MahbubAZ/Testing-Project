const fs = require('fs')

const testObj = {
    name: 'Mahbub',
    email: 'mahbub@gmail.com',
    address: {
        city: 'Feni',
        country: 'BD'
    }
}

const data = JSON.stringify(testObj);

fs.writeFile('test.json', data, (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("File write successfully.");
    }
})