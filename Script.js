
const section = document.getElementById("Recipes");
const DataItem = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneer-Tikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fish-Tacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
];
  
const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")
let users=[] ;

// for appending the data

users = DataItem.map(user => {
    const card = userCardTemplate.content.cloneNode(true).children[0]
    card.className = "card";
    card.innerHTML = `<img src="${user.imageSrc}">
    <p>${user.type}</p>
    <div class="card-head">
        <span class="head">${user.name}</span>
        <span class="rating"><img src="./images/Star.png">${user.rating}</span>
    </div>
    <div class="card-base">
        <span class="duration">${user.time}</span>
        <span class="fav-and-comm">
            <i class="fa-regular fa-heart fa-lg" onclick="like(this)"></i>
            <i class="fa-regular fa-comment fa-lg"></i>
        </span>
    </div>`;
    section.appendChild(card);
    return { name: user.name,imageSrc:user.imageSrc,type:user.type,isLiked:user.isLiked,rating:user.rating,time:user.time, element: card }
  })

 
// serch bar

  searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    users.forEach(user => {
      const isVisible =
        user.name.toLowerCase().includes(value) 
      user.element.classList.toggle("hide", !isVisible)
    })
  })

//   liked Item

function like(item){
    let parent=item.parentNode
    if(parent.isLiked){
        item.style.color = "#191919";
        parent.isLiked = false;
    }
    else {
        item.style.color = "#ec4b4b";
        parent.isLiked = true;
    }
}

// fillter by rating

const rating = document.querySelectorAll("input[type=checkbox]");
for (let item of rating) {
    item.addEventListener("change", () => {
        if (item.checked) {
            const recipes = document.getElementById("Recipes");
            while (recipes.hasChildNodes()) {
                recipes.removeChild(recipes.firstChild);
            }
            if (item.value == "above4") {
                for (let i of users) {
                    if (i.rating >= 4) {
                        
                        section.appendChild(i.element);
                    }
                }
            }
            if (item.value == "below4") {
                for (let i of users) {
                    if (i.rating < 4) {
                       
                        section.appendChild(i.element);
                    }
                }
            }
        }
        if(item.checked==false){
            const recipes = document.getElementById("Recipes");
            
            while (recipes.hasChildNodes()) {
                recipes.removeChild(recipes.firstChild);
            }
            for (let i of users) {
                section.appendChild(i.element);
            }
        }
    })
}

// filter by veg non-veg

const filter = document.getElementsByClassName("filter");
for (let item of filter) {
    item.addEventListener("click", (event) => {
        const recipes = document.getElementById("Recipes");
        while (recipes.hasChildNodes()) {
            recipes.removeChild(recipes.firstChild);
        }
        
        if (item.id == "show-all-recipes") {
            console.log("all recipes");
            for (let i of users) {
                section.appendChild(i.element);
            }
        }
        else if (item.id == "show-veg-recipes") {
            for (let i of users) {
                if (i.type == "veg") {   
                    section.appendChild(i.element);
                }
            }
        }
        else if (item.id == "show-non-veg-recipes") {
            for (let i of users) {
                if (i.type == "non-veg") {
                    section.appendChild(i.element);
                }
            }
        }
    })
}


// drawer

const drawer=document.getElementById("drawer-icon");
drawer.addEventListener("click",()=>{
    
    const show_drawer=document.querySelector("#drawer-menu");
    const icon=document.getElementById("drawer");
    const menu=document.getElementById("menu");
    const dummy=document.getElementById("dummy");
    dummy.style.display="inline";
    show_drawer.style.display="flex";
    
    icon.style.display="none";
    menu.style.display="none";
    
    console.log("drawer");
})