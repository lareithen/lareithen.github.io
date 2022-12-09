window.onload = function hello_world(){
    const today = new Date();
    const birthday = new Date(2005, 12, 9);
    document.getElementById('age').innerHTML = Math.round(Math.abs((today - birthday) / (24 * 60 * 60 * 1000)));
};

function key_press_func(e){
    var keynum;

    if(window.event) {         
        keynum = e.keyCode;
    } else if(e.which){
        keynum = e.which;
    }

    document.getElementById('input').innerHTML += String.fromCharCode(keynum);
};

window.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key === "Backspace") {
        let str = document.getElementById('input');
        str.innerHTML = str.innerText.slice(0, -1);
    }
});
