/*-----------------------------toggle style switcher-------------------------*/
let switcher = document.querySelector(".style-switcher-toggler");
switcher.addEventListener("click",() => { 
    document.querySelector(".style-switcher").classList.toggle('open');
})
// hide style switcher on scroll 
window.addEventListener("scroll",() => { 
    if (document.querySelector(".style-switcher").classList.contains('open')) { 
    document.querySelector(".style-switcher").classList.remove('open');
    }
})







/*-----------------------------theme colors -------------------------------*/
let changeColore = document.querySelectorAll(".change-style");
function setStyle (color) { 
changeColore.forEach((style) => { 
    if (color === style.getAttribute("title")) { 
        style.removeAttribute("disabled");
    }
    else { 
        style.setAttribute("disabled", "true");
    }
})
}




/*-----------------------------theme dark mode -------------------------------*/
let night = document.querySelector(".day-night");
let hideBoxShadwo = document.querySelectorAll(".btn");
let serviceItem = document.querySelectorAll(".service .service-item .service-item-inner");
console.log(serviceItem)
night.addEventListener("click", () => { 
    night.querySelector("i").classList.toggle("fa-sun");
    night.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
    for (let i = 0; i< hideBoxShadwo.length; i++) { 
        hideBoxShadwo[i].classList.toggle("change");
    }
    for (let i = 0 ; i< serviceItem.length; i++) { 
        serviceItem[i].classList.toggle("sun");
    }

})
window.addEventListener('load',() => { 
    if (document.body.classList.contains('dark')) { 
        night.querySelector("i").classList.add("fa-sun");
    }
    else  { 
        night.querySelector("i").classList.add("fa-moon");
    }
})

/*-------------------typing----------------------- */
let typ = new Typed(".typing", { 
    strings:["","Engineer Software", "Web Developer", "Back-End Laravel"],
    typeSpeed:80,
    backSpeed:60,
    loop: true
})


/*-------------------aside----------------------- */
let nav = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalNav = navList.length,
allSection = document.querySelectorAll(".section"),
totalSec = allSection.length;

for (let i = 0; i < totalNav; i++) { 
    let a = navList[i].querySelector("a");
   a.addEventListener("click", function () { 

    for (let i = 0 ; i<totalSec; i++) { 
        allSection[i].classList.remove("back-section");
    }

       for (let j = 0; j < totalNav; j++) { 
           if(navList[j].querySelector("a").classList.contains("active")) { 
               allSection[j].classList.add("back-section");
           }
           navList[j].querySelector("a").classList.remove("active");
       }

      this.classList.add("active");
      showSection(this);
      if (window.innerWidth < 1200) { 
        asideShwo();
      }
   })
}

function showSection(el) { 
    for (let i = 0 ; i<totalSec; i++) { 
        allSection[i].classList.remove("active");
    }
  let target = el.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}


let navBtn = document.querySelector(".nav-toggler"),
aside = document.querySelector(".aside");
navBtn.addEventListener("click",() => { 
    asideShwo();
})
function asideShwo() { 
    aside.classList.toggle("open");
    navBtn.classList.toggle("open");
    for (let i = 0 ; i < totalSec; i++) { 
        allSection[i].classList.toggle("open");
    }

};
