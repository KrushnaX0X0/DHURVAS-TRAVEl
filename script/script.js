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


  








window.addEventListener('load',()=>{
     console.log("HEY WELCOME:\n<<<<< DURAV'S WORLD TRAVELS AND EXPLORE>>>")
})

