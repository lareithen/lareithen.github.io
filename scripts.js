function key_press_func(e){
    var keynum;

    if(window.event) { // IE                  
        keynum = e.keyCode;
    } else if(e.which){ // Netscape/Firefox/Opera                 
        keynum = e.which;
    }

    document.getElementById('input').innerHTML += String.fromCharCode(keynum)
}

window.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key === "Backspace") {
        let str = document.getElementById('input')
        str.innerHTML = str.innerText.slice(0, -1)
    }
});