let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;
let saveElString = "Previous entries: ";
let saveCount = 0;

function increment() {
    count ++;
    countEl.textContent = count;    
}

function save() {
    if(saveCount == 0){
        saveElString += count;
    } else {
        saveElString += " - " + count;
    }  

    saveEl.textContent = saveElString;
    saveCount ++;   
    count = 0; 
    countEl.textContent = count;
}