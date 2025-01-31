export function onChangeWebColors(bgColor, txtColor) {
    document.getElementById("body").style.backgroundColor = bgColor;
    var all = document.getElementsByTagName("*");

    for (var i = 0, max = all.length; i < max; i++) {
        all[i].style.color = txtColor;
    }
}
export function onInsertDataOfUserPref(email, txtColor, bgColor, age, birthDate, birthTime) {
    const elForm = document.querySelector('.user-pref form')
    const elInputs = elForm.querySelectorAll('input')
    elInputs[0].value = email
    elInputs[1].value = age
    elInputs[2].value = bgColor
    elInputs[3].value = txtColor
    elInputs[4].value = birthDate
    elInputs[5].value = birthTime
}
export function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return JSON.parse(val)
}