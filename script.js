function colorName(){
    const str = "0123456789ABCDEF";
    let code = "#";

    for(let i = 0; i<6; i++){
        code += str[Math.floor(Math.random() * 16)];
    }

    // console.log(code);
    return code;
}

let change;

const start = document.querySelector('#start');
const stop = document.querySelector('#stop')

const changeTheme = () => {
    change = setInterval(()=> {
        let color = colorName();
        document.body.style.backgroundColor = color;
    }, 100);
}

const stopChange = () => {
    clearInterval(change);
    change = null;
}

start.addEventListener('click', changeTheme);
stop.addEventListener('click', stopChange);