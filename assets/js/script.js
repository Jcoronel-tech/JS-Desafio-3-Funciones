// first part of the changeborder //

function changeborder1() {
    const border = document.getElementById('border1');
    
    if(border.style.border === "") {
        border.style.border = "solid 10px #000000";
    }
    else {
        border.style.border = "";
    }
    
}

function changeborder2() {
    const border = document.getElementById('border2');
    
    if(border.style.border === "") {
        border.style.border = "solid 10px #000000";
    }
    else {
        border.style.border = "";
    }
    
}

function changeborder3() {
    const border = document.getElementById('border3');
    
    if(border.style.border === "") {
        border.style.border = "solid 10px #000000";
    }
    else {
        border.style.border = "";
    }
    
}

function changeborder4() {
    const border = document.getElementById('border4');
    
    if(border.style.border === "") {
        border.style.border = "solid 10px #000000";
    }
    else {
        border.style.border = "";
    }
    
}


// part of the color //

let color = '';

document.addEventListener('keydown', function (event) {

    switch (event.key.toLowerCase()) {
        
        case 'a':
            color = 'red'
            break;
        case 's':
            color = 'blue'
            break;
        case 'd':
            color = 'yellow'
            break;
        case 'f':
            color = 'orange'
            break;
        default:
            color = ''
            break;
    }
})

const change1 = document.getElementById('changeColor1')
const change2 = document.getElementById('changeColor2')
const change3 = document.getElementById('changeColor3')
const change4 = document.getElementById('changeColor4')


change1.addEventListener("click", () => change1.style.backgroundColor = color)
change2.addEventListener("click", () => change2.style.backgroundColor = color)
change3.addEventListener("click", () => change3.style.backgroundColor = color)
change4.addEventListener("click", () => change4.style.backgroundColor = color)