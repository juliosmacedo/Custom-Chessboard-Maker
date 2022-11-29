const tablewrapper = document.getElementById('table-wrapper')


function generateChess(x, y) {

 for(let m=0; m<y; m++) {

  let column = document.createElement("div")
  column.className = "column"
  tablewrapper.appendChild(column)

  if (m%2==0) {
    for(let i=0; i<x; i++) {
      if(i%2==0) {
        let box = document.createElement("div")
        box.className = "box white"
        column.appendChild(box)
      }
  
      if(i%2!==0) {
        let box = document.createElement("div")
        box.className = "box black"
        column.appendChild(box)
      }
    }
  }

  if (m%2!==0) {
    for(let i=0; i<x; i++) {
      if(i%2==0) {
        let box = document.createElement("div")
        box.className = "box black"
        column.appendChild(box)
      }
  
      if(i%2!==0) {
        let box = document.createElement("div")
        box.className = "box white"
        column.appendChild(box)
      }
    }
  }
 }
}



const btn = document.getElementById("button");

btn.addEventListener('click', function() {

  tablewrapper.innerHTML = '';


  const userColumns = document.getElementById('userColumns').value
  const userRows = document.getElementById('userRows').value

  generateChess(userColumns, userRows)
})

