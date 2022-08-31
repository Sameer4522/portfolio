/* about section */

( () => {
    const aboutSection = document.querySelector(".about-section");
    const tabsContainer = document.querySelector(".about-tabs")
    
    tabsContainer.addEventListener("click" , (e) => {
        if(e.target.classList.contains("tab-items") && !e.target.classList.contains("active")){
            const target = e.target.getAttribute("data-target");
            console.log(target);
            /* deactivate existing active 'tab-items' */
            tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");
            /* activate new 'tab-items' */
            e.target.classList.add("active", "outer-shadow");
            /* deactivate existing active 'tab-content' */ 
            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            /* activate new "tab-content" */
            aboutSection.querySelector(target).classList.add("active"); 
        }
    })

})();