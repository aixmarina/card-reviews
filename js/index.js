// local reviews data
const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
            "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
            "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];

// elements 
const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')

// buttons
const prev_btn = document.querySelector(".prev-btn")
const next_btn = document.querySelector(".next-btn")
const random_btn = document.querySelector(".random-btn")

//value of the first item
let current_item = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
    changeInfo(current_item)
})

// function to change the info

function changeInfo() {
    const item = reviews[current_item]

    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
}

// next button

next_btn.addEventListener("click", function () {
    current_item++
    if (current_item > reviews.length - 1) {
        current_item = 0
    }

    changeInfo()
})

// prev button

prev_btn.addEventListener("click", function () {
    current_item--
    if (current_item < 0) {
        current_item = reviews.length - 1
    }
    changeInfo()
})

// surprise button
random_btn.addEventListener("click", function () {
    current_item = getRandomNumber()
    changeInfo()
})

// function to get a random number between 0 and 3
function getRandomNumber() {
    return Math.floor(Math.random() * reviews.length);
}
