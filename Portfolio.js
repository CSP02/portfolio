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
wrapper.addEventListener('scroll', (scroll) => {
    if (wrapper.scrollTop >= aboutMe.offsetHeight - 205) {
        nav.style.backgroundColor = 'rgba(47, 47, 47, 0.8)';
        nav.style.backdropFilter = 'blur(24px)'
        cspLi.style.opacity = 1;
    }
    else {
        nav.style.backgroundColor = 'transparent';
        nav.style.backdropFilter = 'blur(0px)'
        cspLi.style.opacity = 0;
    }
})
const contacts = [...document.getElementsByClassName("fa-brands")]
const mailSvg = document.getElementById("mail")
const randomX = Math.random() * 10 * 2 * Math.PI
const randomY = Math.random() * 30 * 2 * Math.PI
mailSvg.style.transform = `translateX(${randomX.toFixed()}px) translateY(${randomY.toFixed()}px)`
contacts.forEach(contact => {
    const randomX = Math.random() * 10 * 2 * Math.PI
    const randomY = Math.random() * 30 * 2 * Math.PI
    contact.style.transform = `translateX(${randomX.toFixed()}px) translateY(${randomY.toFixed()}px)`
})
