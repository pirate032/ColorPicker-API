const seedColor = document.getElementById('seed-color')
const colorScheme = document.getElementById('color-scheme')
const getColor = document.getElementById("get-color")
let newScheme = colorScheme.value

const block1 = document.getElementById("block1")
const block2 = document.getElementById("block2")
const block3 = document.getElementById("block3")
const block4 = document.getElementById("block4")
const block5 = document.getElementById("block5")
const color1 = document.getElementById("color1")
const color2 = document.getElementById("color2")
const color3 = document.getElementById("color3")
const color4 = document.getElementById("color4")
const color5 = document.getElementById("color5")

let newColor
let valueArr = []

seedColor.addEventListener("change", watchColorPicker)

colorScheme.addEventListener("change", function() {
    //capture the new scheme chosen
    newScheme = document.getElementById("color-scheme").value
})

getColor.addEventListener("click", function() {
    //get colors from the API
    fetch(`https://www.thecolorapi.com/scheme?hex=${newColor.slice(1)}&mode=${newScheme}`)
        .then(response => response.json())
        .then(data => {
            //colors are stored in array of objects providing multiple conventions
            let colorArr = data.colors
            colorArr.forEach(function(color){
                //console.log(color.hex)
                //look only at the hex values and set those to a new array
                valueArr.push(color.hex.value)
                //console.log(valueArr)
                //call function to set background color of blocks and text fields
                setColors()
            })
        })
        //reset array in case they change the scheme again
        resetArray()
})


function watchColorPicker(event) {
    //capture the new seed color chosen
    newColor = event.target.value
    //block1.style.backgroundColor = event.target.value
    //color1.innerText = event.target.value
}

function setColors() {
    for (let i=0; i<valueArr.length; i++) {
        block1.style.backgroundColor = valueArr[0]
        block2.style.backgroundColor = valueArr[1]
        block3.style.backgroundColor = valueArr[2]
        block4.style.backgroundColor = valueArr[3]
        block5.style.backgroundColor = valueArr[4]
        
        color1.innerText = valueArr[0]
        color2.innerText = valueArr[1]
        color3.innerText = valueArr[2]
        color4.innerText = valueArr[3]
        color5.innerText = valueArr[4]
    }
}

function resetArray() {
    //reset arrays to blank
    valueArr=[]
}