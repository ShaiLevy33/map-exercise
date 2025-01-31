import { userPrefService } from './services/user.service.js'
import { placeService } from './services/place.service.js'

window.app = {
	onInit,
	onShowNumRange,
	onShowUserPrefSec,
	onShowMapSec,
	onSaveUserPref,
	initMap
}
const user = {

	email: '',
	txtColor: '',
	bgColor: '',
	age: '',
	birthDate: '',
	birthTime: ''

}

let gMarkers = []
let gMap = null
let gNewLocation = null

function onInit() {
	// userPrefService.getUserPref()
	onShowNumRange()
	renderUserPref()
	onInitMap()
}
function renderUserPref() {
	const userPref = userPrefService.getUserPref()
	userPrefService.onChangeWebColorsUserBegining(userPref.email, userPref.age, userPref.bgColor, userPref.txtColor,
		userPref.birthDate, userPref.birthTime)


}
//* Map sections function
function onInitMap() {
    initMap()
    // renderPlaces()
}
let map;
//* Initialize and add the map
async function initMap() {
    const location = placeService.getLocation()
    const elMap = document.querySelector('.map')
    await _connectGoogleApi()
    gMap = new google.maps.Map(
        elMap, {
        center: location,
        zoom: 10
    })

    gMap.addListener('click', (ev) => {
        // console.log('ev:', ev)
        gNewLocation = {
            lat: ev.latLng.lat(),
            lng: ev.latLng.lng(),
        }
        // openModal()
    })

    // renderLocationBtn()
    // renderMarkers()
}
function onShowNumRange() {
	var result = document.getElementById("result")
	var mine = document.getElementById("rangeInput")
	result.innerText = mine.value

}
function onShowUserPrefSec() {
	var mapSec = document.querySelector('.map')
	mapSec.hidden = true
	var userPrefSec = document.querySelector('.user-pref')
	userPrefSec.hidden = false

}
function onShowMapSec() {
	var mapSec = document.querySelector('.map')
	mapSec.hidden = false
	var userPrefSec = document.querySelector('.user-pref')
	userPrefSec.hidden = true

}
function onSaveUserPref() {
	const elForm = document.querySelector('.user-pref form')
	const elInputs = elForm.querySelectorAll('input')
	user.email = elInputs[0].value
	user.age = elInputs[1].value
	user.bgColor = elInputs[2].value
	user.txtColor = elInputs[3].value
	user.birthDate = elInputs[4].value
	user.birthTime = elInputs[5].value
	if (user) {
		//  userPrefService.updateUserPref( user.email, user.age, user.bgColor, user.txtColor, user.birthDate, user.birthTime)
		//  }
		// 	// user = null
		//  else {
		userPrefService.saveUser(user.email, user.age, user.bgColor, user.txtColor, user.birthDate, user.birthTime)
	}
	flashMsg(`user Prefernces Saved (email: ${user.email})`)
	// prmSavedUserPref.
	// then(savedUser => {
	// 	elForm.reset()

	// 	// renderCars()
	//     flashMsg(`user Prefernces Saved (email: ${savedUser.email})`)

	// })
	// localStorage.setItem("key",user.email, user.age, user.bgColor, user.txtColor, user.birthDate, user.birthTime);	

}
function _connectGoogleApi() {
    if (window.google) return Promise.resolve()
    // *: Enter your API Key
    const API_KEY = 'AIzaSyAO1xJp_MDsieo32ezyWyOmwsWz20SlHHI'

    const elGoogleApi = document.createElement('script')
    elGoogleApi.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`
    elGoogleApi.async = true
    document.body.append(elGoogleApi)

    return new Promise((resolve, reject) => {
        elGoogleApi.onload = resolve
        elGoogleApi.onerror = () => reject('GoogleMaps script failed to load')
    })
}

// UI

function flashMsg(msg) {
	const el = document.querySelector('.user-msg')

	el.innerText = msg
	el.classList.add('open')
	setTimeout(() =>
		el.classList.remove('open'), 3000)
}