/*
* this js file will do:
* 1- build nav
* 2-helight current section
* 3- scroll to sections
* 4- scrol to top
*/

/**
 * Define Global Variables
 *
*/
const sections =document.querySelectorAll('section');
const ul=document.getElementById('navbar__list');
/**
 * End Global Variables
 * Start Helper Functions
 *
*/

//////////////////////////////Task 1: build nav (the sections already in HTML)
const createNavigationBar= () => {
    for(sec of sections){
        let title=sec.getAttribute('class');
        let secID=sec.getAttribute('id');
        let li= document.createElement('li');
        //create <a> for each <li>
        li.innerHTML=`<a class="menu__link" href='#${secID}'>${title}</a>`;

        ul.appendChild(li);
    }
}
//call the function
createNavigationBar();

//////////////////////////////Task 2: add red boarder arround the current section when scroll and make nav elements bolder:
function removeStatus(sec){
  const anchorActive = document.querySelector(`a[href="#${sec.id}"]`);
    sec.classList.remove('your-active-class');
    anchorActive.classList.remove("active");
};

function addStatus(sec){
  const anchorActive = document.querySelector(`a[href="#${sec.id}"]`);
    sec.classList.add('your-active-class');
    anchorActive.classList.add("active");
}

function activeSection(){
    sections.forEach(sec=>{
        const ele=sec.getBoundingClientRect().top;
            removeStatus(sec);
        if(ele < 250 && ele >- 250){
            addStatus(sec);
        }
    });
};
window.addEventListener("scroll",activeSection);


//////////////////////////////Task 3: Scroll to section when I click on them on the navbar
function MovetoLink(){
    const ul=document.querySelectorAll(".navbar ul a");
    ul.forEach(item=>{
        item.addEventListener("click",clickBehaviour)
    });
};

function clickBehaviour(e){
    e.preventDefault();
    const link = this.getAttribute("href");
    const top = document.querySelector(link).offsetTop;
    scroll({
      top: top,
      behavior: "smooth"
    });
}
MovetoLink();

///////////////////////////Task 4: scrol to top:
let btn = document.getElementById("myBtn");

// When the user scrolls down 700px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}
function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}
