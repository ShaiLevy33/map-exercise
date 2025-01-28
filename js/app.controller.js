import { userPrefService } from './services/user.service.js'

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
function onInit() {
	userPrefService.getUserPref()
	onShowNumRange()
}
let map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'),{
		center: {lat : -34.397, lng: 150.644},
		zoom: 8
	})

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
function onSaveUserPref(){
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

// UI

function flashMsg(msg) {
	const el = document.querySelector('.user-msg')

	el.innerText = msg
	el.classList.add('open')
	setTimeout(() => 
		el.classList.remove('open'), 3000)
}