
import mapping from './geojson/map.json';

export default function( name ){
    if(mapping[name]){
        return require(`./geojson/${ mapping[name] }.json`);
    }

    return null;
}