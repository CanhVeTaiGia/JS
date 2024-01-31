let personalDetails = []
personalDetails.push(JSON.parse(localStorage.getItem("personalDetail")))
console.log(personalDetails);
let dateOfBirth = document.getElementById("dateOfBirth")
let languages = document.getElementById("languages")
let nationality = document.getElementById("nationality")
let interest = document.getElementById("interest")
function render(){
    dateOfBirth.textContent = personalDetails[0].dob
    nationality.textContent = personalDetails[0].nationality
    languages.textContent = personalDetails[0].spokenLanguages.join(" - ")
    interest.textContent = personalDetails[0].interest.join(", ")
}
render();