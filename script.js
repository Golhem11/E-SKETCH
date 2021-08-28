var x = prompt("Enter the grid size : ")
function createGrid(x){
    var container = document.createElement("div")
    container.setAttribute("id","container")
   
    for(let i = 1; i<=x*x; i++){
        var grid = document.createElement("div")
        grid.setAttribute("id","grid")
        grid.style.height=100/x +"%"
        grid.style.width=100/x +"%"
        grid.addEventListener("mouseover", function(){
            
            this.style.backgroundColor="#" + ((1<<24)*Math.random() | 0).toString(16)
        })
        container.appendChild(grid)
    }


var body = document.getElementsByTagName("body")
body[0].appendChild(container)

}
createGrid(x)








