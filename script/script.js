// home page animation code ......

const data = [
    {
        imgUrl: "shimla1.gif",
        name: "Shimla",
        info: 'Experience the Cold'
    },

    {
        imgUrl: "mathura.jpg",
        name: "Mathura",
        info: "explore beauty of Mathura"
    },

    {
        imgUrl: "kerla.jpg",
        name: "Kerla",
        info: "Explore the Heart of India"
    },

    {
        imgUrl: "bhutan 1.jpg",
        name: "Bhutan",
        info: "Where History comes Alive"
    }

]


let i = 0;
const changeImage = (index) => {
    let img = document.querySelector('#img-container img')
    let headingTxt = document.querySelector("#info-div h2")
    let infoTxt = document.querySelector("#info-div h3")


    img.src = `./images/${data[index].imgUrl}`
    headingTxt.innerText = `${data[index].name}`
    infoTxt.innerText = `${data[index].info}`
    //console.log(infoTxt)

    gsap.from(img, {
        opacity: 0,
        //duration:5,
        ease: 'none'
    })

    gsap.from(headingTxt, {
        opacity: 0,
        // duration:5,
        ease: 'none'
    })

    gsap.from(infoTxt, {
        opacity: 0,
        // duration:5,
        ease: 'none'
    })


}

setInterval(function h() {
    if (i >= data.length) {
        i = 0;
        h()
    } else {
        changeImage(i)
        ++i
        //console.log(i)
    }
}, 6000);



/// add new add routus by fetching our dashboard web-api...

const url = `https://travel-t0sy.onrender.com/api/routs`;

fetch(url).then((responce) => {
    return responce.json()
}).then((result) => {

    // send fetced data to add in web site by dynamically
    //console.log(result)
    addNewRouts(result)

}).catch((err) => {
    console.log(err)
})

let NewCreatedRouts = ""

function addNewRouts(Routs) {

    if (Routs.length == 0) {

        NewCreatedRouts = `<h3>We are plan new Trips </h3>`

    } else {

        Routs.forEach((rout) => {

            let link = rout.placeName.replaceAll(" ", "_")

            NewCreatedRouts += `<div class="packege-body">
                    <div class="dest-img">
                          <img src="${rout.placeImage}" alt="">
                    </div>
                    <div class="des-info">
                         <span class="extra-name">${rout.placeName}<i class="ri-map-pin-2-fill"></i></span>
                    </div>
                    <div class="cost-info">
                         <span class="days">${rout.travelTime}</span>
                         <span class="prise"><i class="ri-money-rupee-circle-line"></i> RS ${rout.cost}</span>
                    </div>
                         <span class="date days">Starting at :${rout.date}</span>
                    <button class="btn-des-1" onclick="getContact('${link}')">Know More</button>
                </div>`

        })

    }

    document.querySelector("#new-added-cover").innerHTML = NewCreatedRouts
}


/// nav bar animation ..

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

// handing button events...

const getContact = (tour) => {
    window.open(`https://wa.me/+917738910772/?text=hello_i_want_to_know_more_about_${tour}_tour`)
}


//fetching gallary data using backend api...



//open the contact info...




 function wp(){
    window.open(`https://wa.me/+917738910772/?text=hello_I_want_Know_about_Tours`)
 }

 function insta(){
     window.open(`https://instagram.com/durvasworldtravel`)
 }

 function mail(){
    window.open(`mailto:durvaworldoftravel@gmail.com?subject=knowAboutTours&body=Hello!`)
 }


let loder = document.querySelector("#loder")
let lodingTag = ["hey welcome...", "checking connection...", "loading images", "loading tickets...", "loding gallary..", "wait it is done now..."]
let j = 0
setInterval(function loderLen() {

    if (j > lodingTag.length) {
        j = 0;
        loderLen()
    } else {
        document.querySelector('#loder h3').innerText = lodingTag[i];
    }
}, 1000 / 5);

window.addEventListener('load', () => {
    loder.style.display = "none"
    console.log("HEY WELCOME:\n<<< DURAV'S WORLD TRAVELS AND EXPLORE>>>")
})

