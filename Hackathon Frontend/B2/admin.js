let tableList = JSON.parse(localStorage.getItem("projects"))
let tbody = document.getElementById("tbody")
function render(){
    let myProject = tableList.map(function(projects, index){
        return `
            <tr>
                <td>${index + 1}</td>
                <td>${projects.projectName}</td>
                <td>${projects.imgUrl}</td>
                <td>${projects.links}</td>
                <td>${projects.tags}</td>
                <td>
                    <button type="button" class="btn btn-danger deletebtn">Delete</button>
                    <button type="button" class="btn btn-success deletebtn">Update</button>
                </td>
            </tr>`;
    })
    tbody.innerHTML = myProject.join("")
}
render();
let addTable = []
