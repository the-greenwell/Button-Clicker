var buttonHandle = (e) => {
    switch(e.className){
        case 'likes': 
            likesAlert()
            break;
        case 'login':
            logHandler(e)
            break;
        case 'logout':
            logHandler(e)
            break;
        case 'add':
            addHandler(e)
            break;
        default:
            break;
    }
}

var likesAlert = () => {
    window.alert('Ninja was liked')
}

var logHandler = (e) => {
    let inner = e.innerText;
    switch(inner){
        case 'Login': 
            e.innerText = 'Logout'
            break;
        case 'Logout': 
            e.innerText = 'Login'
            break;
    }
}

var addHandler = (e) => {
    e.style.visibility  = 'hidden';
}