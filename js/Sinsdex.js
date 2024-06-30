// _________________________
// random imge with bullits 
// _________________________
let slidImg = Array.from(document.querySelectorAll('.contain-img img'));
let slibullet = Array.from(document.querySelectorAll('#ulid li'));

let lengthimg = slidImg.length;
let current = 1;
let backgroundInterval;

function remove(){
    slidImg.forEach((e)=> 
    e.classList.remove('active'));
    // bullet
    slibullet.forEach((e)=>
    e.classList.remove('active'));
}
function check(){
    remove();
    slidImg[current - 1].classList.add('active');
    slibullet[current - 1].classList.add('active');
    if(current == lengthimg){
        current = 1;
    }else{
        current ++;
    }
}
function randomImages () {
    backgroundInterval = setInterval(()=>{
        check()
    } , 3000);
}
randomImages();



// =============== //
//      Boxes      //Crossover .Cookies , Pizza, Pan Cake  , Cup Cake  , Waffel
// =============== //
const menu = [
    {
        id: 1,
        category: "Cake",
        img: "./imgfood/cake.webp",
        Title: "Cake",
        discrip: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, culpa. `
    },
    {
        category: "Cookies",
        img: "./imgfood/cookies.webp",
        Title: "Cookies",
        discrip: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, culpa. `
    },
    {
        id: 3,
        category: "Waffel",
        img: "./imgfood/wa.webp",
        Title: "Waffel",
        discrip: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, culpa. `
    },
    {
        id: 13,
        category: "Cake",
        img: "./imgfood/cake3.webp",
        Title: "Cake",
        discrip: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, culpa. `
    },
    {
        id: 4,
        category: "Waffel",
        img: "./imgfood/wa2.webp",
        Title: "Waffel",
        discrip: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, culpa. `
    },
    {
        id: 5,
        category: "Pizza",
        img: "./imgfood/pizza.webp",
        Title: "Pizza",
        discrip: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, culpa. `
    },
    {
        id: 6,
        category: "PanCake",
        img: "./imgfood/pancake.webp",
        Title: "PanCake ",
        discrip: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, culpa. `
    },
    {
        id: 7,
        category: "CupCake",
        img: "./imgfood/cupcake.webp",
        Title: "CupCake",
        discrip: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, culpa. `
    },
    {
        id: 8,
        category: "Crossover",
        img: "./imgfood/crossover.webp",
        Title: "Crossover",
        discrip: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, culpa. `
    },
    {
        id: 9,
        category: "Pizza",
        img: "./imgfood/pizza2.webp",
        Title: "Pizza",
        discrip: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, culpa. `
    },
    {
        id: 10,
        category: "Cake",
        img: "./imgfood/cake4.webp",
        Title: "Cake",
        discrip: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, culpa. `
    },
    {
        id: 11,
        category: "Cake",
        img: "./imgfood/cake3.webp",
        Title: "Cake",
        discrip: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, culpa. `
    },
    {
        id: 12,
        category: "Cake",
        img: "./imgfood/cake2.webp",
        Title: "Cake",
        discrip: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, culpa. `
    },
    
];
const boxContainer = document.querySelector(".food .Box-container");
const btnContainer = document.querySelector(".food .btn-container");
window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
});

function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `
                <div class="box-image">
                        <img src=${item.img} alt="">
                        <div class="text">
                            <h2>${item.Title}</h2>
                            <p>${item.discrip}</p>
                        </div>
                    </div>
                `;
    });
    displayMenu = displayMenu.join("");
    boxContainer.innerHTML = displayMenu;
}
function displayMenuButtons() {
    const categories = menu.reduce(
    function (values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    },
        ["All"]
    );
    const categoryBtns = categories
        .map(function (category) {
        return `<span class="filter-btn" data-id=${category}>${category}</span>`;
        }) 
        .join("");

    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);

    filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
            return menuItem;
        }
        });
        if (category === "All") {
            diplayMenuItems(menu);
        } else {
            diplayMenuItems(menuCategory);
        }
        });
    });
}

//================
//  Toggle ign Up
//================
const test = document.querySelector("header .signup");
const test1 = document.querySelector("header .popup-container");
test.addEventListener('click', ()=>{
    test1.classList.toggle('show');
})