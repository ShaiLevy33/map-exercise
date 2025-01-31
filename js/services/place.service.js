import { loadFromStorage } from "./util.service.js"

export const placeService = {
    getPlaces,
    removePlace,
    addPlace,
    getPlaceById,
    // getPlacesAsCSV,
    getLocation
    // saveLocation
}

const STORAGE_KEY_LOCATION = 'location'

function getPlaces() {}
function removePlace(placeId) {}
function addPlace(name, lat, lng, zoom) {}
function getPlaceById(placeId) {}
function _createPlace(name, lat, lng, zoom) {}
function _createPlaces() {}
function getLocation() {
    const defaultLoc = { lat: 32.09247405959365, lng: 34.83273150186857 } //* Location of Tel Aviv
    return loadFromStorage(STORAGE_KEY_LOCATION) || defaultLoc
}
