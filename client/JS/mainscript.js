function changePage(pageName) {
    let containers = document.getElementsByClassName('mainContainer')
    for (i=0; i<containers.length; i++) {
        containers[i].style.display = 'None';
    }
    if (pageName == 'privacy') {
        document.getElementById(pageName).style.display = 'Block';
    } else {
        document.getElementById(pageName).style.display = 'Flex';
    }
}

function callerFunction() {
    changePage('main')
}

document.addEventListener('DOMContentLoaded', callerFunction)