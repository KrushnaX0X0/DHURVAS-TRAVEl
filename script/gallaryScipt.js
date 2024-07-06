

// nav-bar animation...


let openIcon = document.querySelector("#nav-opener img");
let closeIcon = document.querySelector("#close i")
let navInfoPage = document.querySelector("#mob-nav")

let navTimelien = gsap.timeline();

//console.log(openIcon , closeIcon, navInfoPage)

navTimelien.from(navInfoPage, {
    left: "100%",
    duration: 0.4
})

navTimelien.from('#mob-nav ul li ', {
    x: 100,
    opacity: 0,
    stagger: 0.3,
})

navTimelien.pause()

openIcon.addEventListener("click", () => {
    navTimelien.play()
})

closeIcon.addEventListener("click", () => {
    navTimelien.reverse()
})


let mobNavLinks = document.querySelectorAll("#mob-nav ul li")
mobNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navTimelien.reverse()
    })
})




const GallaryImagesUrl = `https://travel-t0sy.onrender.com/api/gallary`;

fetch(GallaryImagesUrl).then((Responce) => {
    return Responce.json()
}).then((result) => {
    console.log(result)
    addToGallary(result)
}).catch((error) => {
    console.log(error)
})


let GallaryHtml = ""

function addToGallary(pictues) {

    pictues.forEach((picture) => {
        GallaryHtml += `<div class="gallary-image">
                          <img src="${picture.travelImage}" alt="">
                          <div class="img-info">
                               ${picture.info}
                          </div>
                      </div>`
    })
    document.querySelector("#gallary-img-container").innerHTML = GallaryHtml
}


let loder = document.querySelector("#loder")
let lodingTag = ["hey welcome...", "checking connection...", "loading images", "loading tickets...", "loding gallary..", "wait it is done now..."]
let j = 0
setInterval(function loderLen() {

    if (j > lodingTag.length) {
        j = 0;
        loderLen()
    } else {
        document.querySelector('#loder h5').innerText = lodingTag[j];
    }
}, 1000 / 5);

window.addEventListener('load', () => {
    loder.style.display = "none"
    console.log("HEY WELCOME:\n<<< DURAV'S WORLD TRAVELS AND EXPLORE>>>")
})


setTimeout(()=>{
    loder.style.display = "none"
   },3000)