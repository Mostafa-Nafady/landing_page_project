/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections=document.querySelectorAll('section')
const navBar=document.getElementById('navbar__list');
const list=document.createElement('li');
const fragList=document.createDocumentFragment();
let activeSection;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Build menu 
/* start build the nav*/

for(const currentElement of sections) {
   const secName= currentElement.getAttribute('data-nav')
   const secId=currentElement.getAttribute('id')
    const link=document.createElement('a');
     link.textContent=`     ${secName}`;
     link.setAttribute("href",`#${secId}`)
     list.append(link);
     fragList.appendChild(list); 
}

navBar.append(fragList) // append list to ul
document.querySelector("li").classList.add("menu__link") // add menu__link class to li to apper it`s style
/* end of build the nav*/
/*end of build the nav*/

// Scroll to anchor ID using scrollTO event
// scroll event 
/*start of scroll event  */
/*start of scroll event  */

document.addEventListener("scroll", () => {
    for(const section of sections){
        const secDimension=section.getBoundingClientRect();// get the dimension of the appered section on viewport
          /*select the section on the viewport */
          // Add class 'active' to section when near top of viewport
        if(secDimension.top<=480 && secDimension.bottom>=400){
            const links=  document.querySelectorAll("a" )

            // to remove active class from all sections
            for(let section of sections){
                section.classList.remove ("your-active-class")
                section.removeAttribute("class","your-active-class")
            }
            // to add active class only to the appered section
            // Scroll to section on link click
            // Set sections as active
                section.classList.add("your-active-class")
                activeSection="#"+section.getAttribute("id")// catch active section 
              for(let link of links){
            // to remove active class from all navbar link
            link.removeAttribute("class","your-active-class")
            // to add active class only to the appered navbar link
             if(link.getAttribute("href")===activeSection)
                  link.setAttribute("class","your-active-class")
                                   }
                    }
    }
    
}


)

/*end of scroll event  */
/*end of scroll event  */
/*end of scroll event  */


//event click 
// don`t iterate inside eventlistner using for of 
/*start of click event  */
/*start of click event  */
/*start of click event  */
const links=document.querySelectorAll("a")
links.forEach( link =>{
link.addEventListener("click",(event)=>{
    event.preventDefault() // prevent the default scroll behavior
    const selectedLink=link.getAttribute("href"); // catch clicked link
        /*determine related section */
    sections.forEach(section =>{
        const secFlag="#"+section.getAttribute("id");
        /*to get the clicked section */
        if(secFlag===selectedLink)
        section.scrollIntoView({behavior:"smooth", block:"center"})
    })
})
})

/*end of click event  */
/*end of click event  */
/*end of click event  */










