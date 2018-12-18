
const map = require('./artificial.json');

const fs = require('fs');

var mapObj = {};

function find( obj ){
    mapObj[obj.name] = obj._id;

    if( obj.children ){
        for(let p in obj.children){
            find( obj.children[p] );
        }
    }
}

find( map )

fs.writeFile('map.json', JSON.stringify(mapObj));





