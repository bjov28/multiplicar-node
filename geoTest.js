let localizations = {
    "data": [
        {
            "id": 3,
            "city": "CITY",
            "building_name": "Building 3",
            "building_address": "Address 456",
            "latitude": "35.7054508",
            "longitude": "16.9366140"
        },
        {
            "id": 1,
            "city": "CITY",
            "building_name": "Building 1",
            "building_address": "Address 123",
            "latitude": "57.7052809",
            "longitude": "16.9367817"
        },
        {
            "id": 2,
            "city": "CITY",
            "building_name": "Building 2",
            "building_address": "Address 456",
            "latitude": "35.7054509",
            "longitude": "16.9366141"
        }
        
    ]
}

let getStores = (data) => {


    let userCoordinates = {
        latitude: 35.7053509,
        longitude: 16.9362301
    }

    var keys = Object.entries(data.data).map(([inst, key]) => key);
    var returnedBuilding =
        keys.reduce((prevCord, thing) => {
            console.log("prevCord:",prevCord);
            console.log("thing:", thing);

            var dist = getDistance(userCoordinates.latitude, userCoordinates.longitude, thing.latitude, thing.longitude);
            var prevDist = getDistance(userCoordinates.latitude, userCoordinates.longitude, prevCord.latitude, prevCord.longitude);
            return dist < prevDist ? thing : prevCord;
        }, keys[0]);

        return returnedBuilding;
}

function getDistance(lat1, lon1, lat2, lon2) {
    var R = 6371; // km
    var dLat = toRad(lat2 - lat1);
    var dLon = toRad(lon2 - lon1);
    var lat1 = toRad(lat1);
    var lat2 = toRad(lat2);

    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    console.log(d);
    return d;
    
}

// Converts numeric degrees to radians
function toRad(Value) {
    return Value * Math.PI / 180;
}

console.log(getStores(localizations));

let suma = (num1,num2) => {
    return num1 + num2;
}
