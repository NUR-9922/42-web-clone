document.addEventListener("mousemove", function moveElement(det) {
    const x = det.clientX;
    const y = det.clientY;
    document.querySelector(".movingElement").style.transform = `translate(${x + 20}%, ${y - 50}%)`;
    document.querySelector(".page-one-mein").addEventListener("mouseleave", function moveElement() {
        document.querySelector(".movingElement").style.transform = `translate(${x}%, ${y}%) scale(0)`;
    });
});


document.querySelector(".movingElement").onclick = function pageOneOverlay() {

    document.querySelector(".page-1-overlay").style.width = "100%"
}

document.querySelector(".crose-inon").onclick = function pageOneOverlay() {
    document.querySelector(".page-1-overlay").style.width = "0%"
}

// gsap part 

const timeline = gsap.timeline();
let name = document.querySelector(".page-1-intro .name ").textContent.split(" ")
let fName = name[0].split("");
let lName = name[1].split("");

fName.forEach(element => {
    let splitName = document.createElement("div");
    splitName.textContent = element;
    document.querySelector(".splitName").appendChild(splitName)

});
lName.forEach(element => {
    let splitName = document.createElement("div");

    splitName.textContent = element;
    document.querySelector(".splitName").appendChild(splitName)


});
document.querySelector(".name").textContent = "";


timeline.to(".page-1-intro .splitName div", {
    opacity: 0,
    delay: 1,
    stagger: 0.1
})
timeline.to(".page-1-intro", {
    opacity: 0,
})




timeline.from('.page-1-heading span', {
    opacity: 0,
    y: 250,
    duration: 1,
    stagger: 0.09
});






const dropDownMenu = document.querySelector(".dropDownMenu");

document.querySelector(".menu").addEventListener('click', function () {

    dropDownMenu.style.opacity = "1"
    dropDownMenu.classList.add("open");

    // GSAP animations
    gsap.from(".dropDownMenu-Left-box", {
        opacity: 0,
        scale: 0,
        duration: 1
    });
    gsap.from(".dropDownMenu-right-box h3, .dropDownMenu-right-box-Btn", {
        opacity: 0,
        y: 200,
        duration: 0.6,
        stagger: 0.2
    });
    gsap.from(".dropDownMenu-bottom, .dropDownMenu-bottom .left, .dropDownMenu-bottom .right ", {
        opacity: 0,
        x: 500,
        duration: 1,
        stagger: 0.2
    });
});

document.querySelector(".close").addEventListener("click", function () {
    closeDropDown();
});

document.addEventListener("click", function (event) {
    const isClickInsideDropdownMenu = event.target.closest('.dropDownMenu');
    if (!isClickInsideDropdownMenu && document.querySelector(".dropDownMenu").offsetHeight === 480) {
        closeDropDown();
    }
});

function closeDropDown() {

    dropDownMenu.style.opacity = "0"
    dropDownMenu.classList.remove("open");


}




gsap.to('.text', {
    opacity: 1,
    marginTop: "0px",
    duration: 1,
    scrollTrigger: {
        trigger: '.page-2',
        start: 'top center',
        end: 'bottom center',
       
    }
});
gsap.to('.text-2', {
    opacity: 1,
    marginTop: "0px",
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: '.page-2',
        start: 'top center',
        end: 'bottom center',
    }
});

gsap.to('.text-3', {
    opacity: 1,
    marginTop: "0px",
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: '.page-3',
        start: 'top center',
        end: 'bottom center',
    }
});