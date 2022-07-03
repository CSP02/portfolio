const firstSvg = [...document.getElementById("background").getElementsByClassName("first")];
const secondSvg = [...document.getElementById("background").getElementsByClassName("second")];
const thirdSvg = [...document.getElementById("background").getElementsByClassName("third")];

document.getElementById("header").addEventListener("mousemove", () => {
    firstSvg.forEach(path => {
        const x = (window.innerWidth - event.pageX * 1) / 90;
        const y = (window.innerHeight - event.pageY * 1) / 90;

        path.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
    secondSvg.forEach(path => {
        const x = (window.innerWidth - event.pageX * 2) / 90;
        const y = (window.innerHeight - event.pageY * 2) / 90;

        path.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
    thirdSvg.forEach(path => {
        const x = (window.innerWidth - event.pageX * 3) / 90;
        const y = (window.innerHeight - event.pageY * 3) / 90;

        path.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
})

const wrapper = document.getElementById('wrapper')
const aboutMe = document.getElementById("aboutMe")
const nav = document.getElementById("navigation")
const cspLi = document.getElementById("hide");
const navUl = document.getElementById('navUl')
wrapper.addEventListener('scroll', () => {
    if (wrapper.scrollTop >= aboutMe.offsetHeight - 205) {
        nav.style.backgroundColor = 'rgba(47, 47, 47, 0.8)';
        navUl.style.backdropColor = 'rgba(47,47,47, 1)';
        nav.style.backdropFilter = 'blur(24px)';
        document.getElementById('down').style.visibility = 'hidden';
        cspLi.style.opacity = 1;
    }
    else {
        nav.style.backgroundColor = 'transparent';
        nav.style.backdropFilter = 'blur(0px)'
        document.getElementById('down').style.visibility = 'visible';
        cspLi.style.opacity = 0;
    }
})

const carret = document.getElementById('carretDown')
carret.addEventListener("click", () => {
    const toggler = new Toggler;
    if (carret.parentElement.style.opacity > 0) {
        toggler.toggleSlide('navUl', 'top', 0.6)
        toggler.toggleClass('carretDown', 'fa-angle-right', 'fa-angle-down')
    }
})

window.onclick = function (click) {
    const toggler = new Toggler;
    if (click.path[0] != carret && navUl.style.marginTop >= '0px') {
        navUl.style.marginTop = '-100vh';
        toggler.Inc()
        toggler.toggleClass('carretDown', 'fa-angle-down', 'fa-angle-right')
    }
}

const loadScreen = document.getElementById('loadScreen');
const vectors = document.getElementById('vectors');
const scoreHolder = document.getElementById('score');
let score = 0;
loadScreen.addEventListener('mousemove', (mouseData) => {
    vectors.style.visibility = 'visible';
    vectors.style.transform = `translateX(${mouseData.x}px) translateY(${mouseData.y}px)`;
    const box1 = document.getElementById('box-1');
    const randomPosX = Math.round(Math.random());
    const randomPosY = Math.round(Math.random());
    const vectorPos = vectors.style.transform.split(' ');
    const boxPos = box1.style.transform.split(' ');
    const VecPosX = parseInt(vectorPos[0].replaceAll(/\D/g, ''), 10);
    const boxPosX = parseInt(boxPos[0].replaceAll(/\D/g, ''), 10);
    const VecPosY = parseInt(vectorPos[1].replaceAll(/\D/g, ''), 10);
    const boxPosY = parseInt(boxPos[1].replaceAll(/\D/g, ''), 10);

    if ((VecPosX >= boxPosX && VecPosX < boxPosX + 50) && (VecPosY >= boxPosY && VecPosY < boxPosY + 50)) {
        loadScreen.removeChild(box1);
        const box = document.createElement('div')
        box.id = 'box-1';
        box.style.transform = `translateX(${loadScreen.offsetWidth / 2 + randomPosX * 100}px) translateY(${loadScreen.offsetHeight / 2 + randomPosY * 100}px)`;
        box.className = 'boxes';
        loadScreen.appendChild(box);
        score++;
        scoreHolder.innerText = `Score: ${score}`;
    }
})
window.onload = function () {
    loadScreen.removeEventListener('mousemove', (mouseData) => {
        console.log('removed')
    })
    loadScreen.innerHTML = `<p>Hurray! you scored ${score} points. Portfolio is loaded</p>`;
    setTimeout(() => {
        setInterval(hide, 10);
        document.body.removeChild(loadScreen);
    }, 1000);

    function hide() {
        opacity = Number(loadScreen.style.opacity);
        console.log(opacity)
        if (opacity > 0) {
            opacity = opacity - 0.1;
            loadScreen.style.opacity = opacity
        }
        else {
            clearInterval();
        }
    }
}