let heroInfos = []
heroInfos.push(JSON.parse(localStorage.getItem("heroInfo")))
console.log(heroInfos);
let heroName = document.getElementById("heroName")
let heroJob = document.getElementById("heroJob")
let heroImg = document.getElementById("heroImg")
function render(){
    heroName.textContent = `Hello I'm ${heroInfos[0].name}`
    heroJob.textContent = `I'm a ${heroInfos[0].job}`
    heroImg.src = heroInfos[0].imgURL
}
render()