// filter array
let filterarray = [];
// gallery array
let galleryarray = [
    {
        id: 1,
        name: "Apple iphone14",
        src:  "./images/iphone14.jpeg",
        desc: " fastest smartphone with better camera"
    },
    {
        id: 2,
        name: "Digital Watch",
        src: "./images/digitalwatch.jpg",
        desc: " track your progress  "

    },
    {
        id: 3,
        name: "Headphones",
        src: "./images/headphone.jpg",
        desc: " headphones with max sound quality "

    },
    {
        id: 4,
        name: "Mobile Cover",
        src: "./images/mobilecover.jpeg",
        desc: " fantastic and good looking "

    },
    {
        id: 5,
        name: "Earphones",
        src: "./images/earphones.jpeg",
        desc: " feel the music in your ears"

    },
    {
        id: 6,
        name: "Samsung Galaxy",
        src: "./images/samsung.jpeg",
        desc: " best camera smart phone's in series "
    },
    {
        id:7,
        name:"Mobile Charger",
        src: "./images/mobilecharger.jpeg",
        desc:" Full charge in 25 minutes "
        
    },
    {
        id:8,
        name:"Apple iphone15",
        src: "./images/iphone15.jpeg",
        desc: "all New smart phone with new features"
    }

]

// create a fumction to show gallery
function showgallery(currarray) {
    document.getElementById("card").innerText="";
    
    for (let i = 0; i < currarray.length; i++) {
        document.getElementById("card").innerHTML += `
        <div class=" col-sm-6 col-md-6 col-lg-3 mt-4 cardbox">
        <div class="card card-box p-4 ">
        <div class=card-image>
          <img src="${currarray[i].src}" class="card-img-top pe-4 ps-4" alt="...">
          </div>
          <div class="card-body">
            <h5 class="card-title card-head ">${currarray[i].name}</h5>
            <p class="card-text text-muted ">${currarray[i].desc}</p>
            <button class="btn buy-btn align-items-center text-align-center"> <iconify-icon icon="mdi:cart" style="color: white;" width="16" height="16" class="cart-icon"></iconify-icon>Add to Cart</button>
          </div>
        </div>
      </div>`
    }
}
// show the initial gallery
showgallery(galleryarray);

// event listener for the search input
let inputtext= document.getElementById("myinput")
inputtext.addEventListener("keyup",function(){
    let text=inputtext.value;

    filterarray= galleryarray.filter(function(a){
        if(a.name.toLowerCase().includes(text.toLowerCase())){
            return a.name
        }
    })
    if(this.value==""){
        showgallery(galleryarray);
    }
    else{
        if(filterarray==""){
            document.getElementById("para").innerHTML="Search Not found !"
            document.getElementById("card").innerHTML=""
        }
        else{
            showgallery(filterarray)
            document.getElementById("para").innerHTML=""
        }
    }
})








