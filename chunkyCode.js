createGrid("#gridContainer","grid-",256);

let isMouseDown;
let sliderValue = 16;
const bodyElement = document.querySelector("body");
let gridElement = document.querySelectorAll(".gridChild");
let pickedColor;
let customColor;

addGridListeners(".gridChild");
addBtnListeners();

//One time event listeners > no need to refresh them
bodyElement.addEventListener("mousedown",function(e) {
        isMouseDown = true;})

bodyElement.addEventListener("mouseup",function(e) {
        isMouseDown = false;})

document.getElementById("slider").addEventListener("input",function(e){
        document.getElementById("gridSizeNumber").textContent = e.target.value+' x '+e.target.value;
        sliderValue = e.target.value;})

document.getElementById("slideBtn").addEventListener("click",function(e){//Remove and rebuild grid
        cleanGrid(gridElement,"gridChild")
        removeGrid("gridContainer");
        createGrid("#gridContainer","grid-",sliderValue*sliderValue);
        addGridListeners(".gridChild")
        document.getElementById("gridContainer").style.gridTemplateColumns = 'repeat('+sliderValue+',1fr)'
        document.getElementById("gridContainer").style.gridTemplateRows = 'repeat('+sliderValue+',1fr)'})

document.getElementById("cleanBtn").addEventListener("click",function(e){//Remove and rebuild grid
                //gridElement.forEach(element => element.setAttribute("class","gridChild"))
                cleanGrid(gridElement,"gridChild")
 })


//Functions>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function createGrid(containerName,gridName,size){
        let container = document.querySelector(containerName);
        for(let i=1;i<=size;i++){
        let newGrid = document.createElement("div");
        newGrid.setAttribute("id",gridName+i);
        newGrid.setAttribute("class","gridChild");
        container.appendChild(newGrid);
    }
    }
    function removeGrid(containerID){
            let container = document.getElementById(containerID);
            let child = container.lastElementChild;
            while (child){
                    container.removeChild(child);
                    child=container.lastElementChild;
            }
    }
    function addGridListeners(myClass){
            gridElement = document.querySelectorAll(myClass);
            gridElement.forEach(element => element.addEventListener("mouseover",function(e) {
                    element.classList.add("gridHover")}))//add class on hover
            gridElement.forEach(element => element.addEventListener("mouseout",function(e) {
                    element.classList.remove("gridHover")}))//remove class on hover exit
            gridElement.forEach(element => element.addEventListener("mousemove",function(e) {
                    if (isMouseDown){ //draws while mouse is down
                    colorSetter(element);
                }
                }))
            gridElement.forEach(element => element.addEventListener("click",function(e) {
                colorSetter(element);
                    }))//draws on click
    }

function cleanGrid(nodeElement,newClass){
        nodeElement.forEach(element => element.setAttribute("class",newClass))
        nodeElement.forEach(element => element.setAttribute("style","background-color: white"))
}

function addBtnListeners(){
        let btns = document.querySelectorAll(".colorBtns");
        let rainbowBtn = document.getElementById("rainbowColor");
        btns.forEach(element => element.addEventListener("click",function(e){
                        if (e.target.id == "babyBlueBtn")
                                pickedColor = "babyBlue";
                                if (e.target.id == "softOrange")
                                        pickedColor = "softOrange";
                                        if (e.target.id == "weakGreen")
                                                pickedColor = "weakGreen";
                                                if (e.target.id == "faintRed")
                                                        pickedColor = "faintRed";
                                                        if (e.target.id == "sleepyPurple")
                                                                pickedColor = "sleepyPurple";
                                                                if (e.target.id == "eraser")
                                                                pickedColor = "eraser";
                        //.gridAnimation

        }))

        rainbowBtn.addEventListener("input",function(e){
                console.log(e.target.value);
                document.getElementById("rainbowColorLabel").setAttribute("style","background:linear-gradient(45deg,"+e.target.value+','+e.target.value+")");
                pickedColor = "custom";
                customColor = e.target.value;
        })
}

function colorSetter(yourElement)
{
        if (pickedColor == "babyBlue")
        yourElement.setAttribute("style","background-color: rgb(186,225,255)");
       else if (pickedColor == "softOrange")
       yourElement.setAttribute("style","background-color: rgb(255,223,186)");
        else if (pickedColor == "weakGreen")
        yourElement.setAttribute("style","background-color: rgb(186,255,201)");
        else if (pickedColor == "faintRed")
        yourElement.setAttribute("style","background-color: rgb(255,179,186)");
        else if (pickedColor == "sleepyPurple")
        yourElement.setAttribute("style","background-color: rgb(195, 177, 225)");
        else if (pickedColor == "eraser")
        yourElement.setAttribute("style","background-color: white");
        else if (pickedColor == "custom")
        yourElement.setAttribute("style","background-color:"+customColor);
        else
        yourElement.setAttribute("style","background-color: rgb(254, 200, 216)");
}
    //Functions>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>