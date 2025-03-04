/*gpt code aboutme */
function openTab(event, tabName) {
    let i, tabContent, tabLinks;
  
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
  
    tabLinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].classList.remove("active");
    }
  
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".tab-link").click();
  });
  
  /*video play control */

  
  document.addEventListener("DOMContentLoaded", function () {
    let projectBlocks = document.querySelectorAll(".project-card");
    
    projectBlocks.forEach((block) => {
      let video = block.querySelector(".video");

    video.addEventListener("mouseenter", function () {
        video.play();
    });

    video.addEventListener("mouseleave", function () {
        video.pause();
        video.currentTime = 0;
    });
  });
});
