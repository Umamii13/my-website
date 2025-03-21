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

//gpt code langues
document.addEventListener("DOMContentLoaded", function () {
  let currentLang = localStorage.getItem("selectedLang") || "en"; // โหลดค่าจาก Local Storage หรือใช้ค่าเริ่มต้น

  function loadLanguage(lang) {
    fetch(`${lang}.json`) // โหลดไฟล์ JSON ตามภาษาที่เลือก
      .then(response => response.json())
      .then(data => {
        document.getElementById("title").textContent = data.title;
        document.getElementById("logo").textContent = data.header.logo;
        document.getElementById("menu-home").textContent = data.header.menu.home;
        document.getElementById("menu-aboutme").textContent = data.header.menu.aboutme;
        document.getElementById("menu-projects").textContent = data.header.menu.projects;
        document.getElementById("welcome").textContent = data.home.welcome;
        document.getElementById("role").textContent = data.home.role;
        document.getElementById("description").textContent = data.home.description;
        document.getElementById("contact").textContent = data.home.contact;
      })
      .catch(error => console.error("Error loading language:", error));
  }

  document.getElementById("languageSelector").value = currentLang; // ตั้งค่า Dropdown ให้ตรงกับภาษาที่เลือก
  document.getElementById("languageSelector").addEventListener("change", function () {
    currentLang = this.value;
    localStorage.setItem("selectedLang", currentLang); // บันทึกค่าภาษา
    loadLanguage(currentLang);
  });

  loadLanguage(currentLang); // โหลดภาษาที่เลือกไว้ตอนเริ่มต้น
});

