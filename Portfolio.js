const firstSvg = [...document.getElementById("background").getElementsByClassName("first")]
const secondSvg = [...document.getElementById("background").getElementsByClassName("second")]
const thirdSvg = [...document.getElementById("background").getElementsByClassName("third")]

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