//  import { storageService } from './util.service.js'
 import { onChangeWebColors } from './util.service.js'
export const userPrefService = {
    getUserPref,
    saveUser,
    updateUserPref,
}

const STORAGE_KEY = 'user'
function getUserPref() {
    var item = localStorage.getItem(STORAGE_KEY)
    // items = Object.entries(localStorage)
}

function saveUser(email, age, bgColor, txtColor, birthDate, birthTime) {
    localStorage.setItem(STORAGE_KEY,{ email, age, bgColor, txtColor, birthDate, birthTime });
    onChangeWebColors(bgColor,txtColor)
    // return storageService.post(STORAGE_KEY, { email, age, bgColor, txtColor, birthDate, birthTime })
}
function updateUserPref( email, age, bgColor, txtColor, birthDate, birthTime) {
    return storageService.put(STORAGE_KEY, { email: email, age, bgColor, txtColor, birthDate, birthTime })
}