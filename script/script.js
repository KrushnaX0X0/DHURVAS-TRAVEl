// home page animation code ......

const data=[
       {
           imgUrl:"rajstan.jpg",
           name:"Rajasthan",
           info:'Experience the Royal Heritage'
       },

       {
         imgUrl:"kashmir.png",
         name:"Kashmir",
         info:"explore beauty of kashmir"
       },

       {
          imgUrl:"andman.jpg",
          name:"Andaman",
          info:"Explore the another Heart of India"
       },

       {
         imgUrl:"bhutan.jpg",
         name:"Bhutan",
         info:"Where History comes Alive"
       }

]
 

let i = 0 ;
const changeImage =(index)=>{
let img = document.querySelector('#img-container img')
let headingTxt = document.querySelector("#info-div h2")
let infoTxt = document.querySelector("#info-div h3")


   img.src=`./images/${data[index].imgUrl}`
   headingTxt.innerText=`${data[index].name}`
   infoTxt.innerText = `${data[index].info}`
   //console.log(infoTxt)

    gsap.from(img,{
        opacity:0,
        duration:4,
        ease:'none'
    })

    gsap.from(headingTxt,{
        opacity:0,
        duration:4,
        ease:'none'
    })
    
    gsap.from(infoTxt,{
        opacity:0,
        duration:4,
        ease:'none'
    })


  

}
 
setInterval(function h(){
     if(i>=data.length){
        i=0;
        h()
     }else{
         changeImage(i)
         ++i
         //console.log(i)
     }
}, 9000);



/// add new add routus by fetching our dashboard web-api...

const url = `https://travel-t0sy.onrender.com/api/routs`;

 fetch(url).then((responce)=>{
     return responce.json()
 }).then((result)=>{
    
     // send fetced data to add in web site by dynamically
       console.log(result)
      addNewRouts(result)

 }).catch((err)=>{
    console.log(err)
 })

let NewCreatedRouts = ""

 function addNewRouts(Routs) {
 
     if(Routs.length == 0 ){

        NewCreatedRouts = `<h3>We are plan new Trips </h3>`

     }else{

    Routs.forEach((rout)=>{

           NewCreatedRouts += `<div class="packege-body">
                    <div class="dest-img">
                          <img src="${rout.placeImage}" alt="">
                    </div>
                    <div class="des-info">
                         <span class="extra-name">${rout.placeName}<i class="ri-map-pin-2-fill"></i></span>
                    </div>
                    <div class="cost-info">
                         <span class="days">${rout.travelTime}</span>
                         <span class="prise"><i class="ri-money-rupee-circle-line"></i> ${rout.cost} RS</span>
                    </div>
                         <span class="date days">Starting at :${rout.date}</span>
                    <button class="btn-des-1">Know More</button>
                </div>`
          
    })

}
    
    document.querySelector("#new-added-cover").innerHTML= NewCreatedRouts
 }

 



  








window.addEventListener('load',()=>{
     console.log("HEY WELCOME:\n<<<<< DURAV'S WORLD TRAVELS AND EXPLORE>>>")
})

