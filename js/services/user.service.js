//  import { storageService } from './util.service.js'
 import { onChangeWebColors, onInsertDataOfUserPref } from './util.service.js'
export const userPrefService = {
    getUserPref,
    saveUser,
    updateUserPref,
    onChangeWebColorsUserBegining
}

const STORAGE_KEY = 'user'
function getUserPref() {
    var entityFromLocalStorage = localStorage.getItem(STORAGE_KEY)
    var entityUserPref = JSON.parse(entityFromLocalStorage)

    return entityUserPref
}

function saveUser(email, age, bgColor, txtColor, birthDate, birthTime) {
    localStorage.setItem(STORAGE_KEY,JSON.stringify({ email, age, bgColor, txtColor, birthDate, birthTime }));
    onChangeWebColors(bgColor,txtColor)
    // return storageService.post(STORAGE_KEY, { email, age, bgColor, txtColor, birthDate, birthTime })
}
function updateUserPref( email, age, bgColor, txtColor, birthDate, birthTime) {
    return storageService.put(STORAGE_KEY, { email: email, age, bgColor, txtColor, birthDate, birthTime })
}
function onChangeWebColorsUserBegining(email, age, bgColor, txtColor, birthDate, birthTime)
{
    onChangeWebColors(bgColor,txtColor)
    onInsertDataOfUserPref(email, age, bgColor, txtColor, birthDate, birthTime)
}