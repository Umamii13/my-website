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
        //homepage
        document.getElementById("welcome").textContent = data.home.welcome;
        document.getElementById("role").textContent = data.home.role;
        document.getElementById("description").textContent = data.home.description;
        document.getElementById("contact").textContent = data.home.contact;
        //aboutmepage
        document.getElementById("aboutme-title").textContent = data.aboutme.title;
        document.getElementById("tab-general").textContent = data.aboutme.tabs.general;
        document.getElementById("tab-education").textContent = data.aboutme.tabs.education;
        document.getElementById("tab-skills").textContent = data.aboutme.tabs.skills;
        document.getElementById("tab-language").textContent = data.aboutme.tabs.language;
        //general
        document.getElementById("name").textContent = data.aboutme.general.name;
        document.getElementById("age").textContent = data.aboutme.general.age;
        document.getElementById("gender").textContent = data.aboutme.general.gender;
        document.getElementById("birth").textContent = data.aboutme.general.birth;
        document.getElementById("nationality").textContent = data.aboutme.general.nationality;
        //education
        document.getElementById("university-name").textContent = data.aboutme.education.university.name;
        document.getElementById("education-year").textContent = data.aboutme.education.university.years;
        document.getElementById("faculty").textContent = data.aboutme.education.university.faculty;
        document.getElementById("major").textContent = data.aboutme.education.university.major;
        document.getElementById("gpa").textContent = data.aboutme.education.university.gpa;
        document.getElementById("school-name").textContent = data.aboutme.education.high_school.name;
        document.getElementById("school-year").textContent = data.aboutme.education.high_school.years;
        document.getElementById("stream").textContent = data.aboutme.education.high_school.stream;
        document.getElementById("school-gpa").textContent = data.aboutme.education.high_school.gpa;
        //skill
        document.getElementById("skill-title").textContent = data.aboutme.skills.programming_languages.title;
        document.getElementById("skill-common").textContent = data.aboutme.skills.programming_languages.common;
        document.getElementById("skill-basic").textContent = data.aboutme.skills.programming_languages.basic;
        document.getElementById("software-skill").textContent = data.aboutme.skills.software_skills.title;
        document.getElementById("list").textContent = data.aboutme.skills.software_skills.list.join(", ");
        //language
        document.getElementById("language-title").textContent = data.aboutme.language.title;
        document.getElementById("th").textContent = data.aboutme.language.list.thai;
        document.getElementById("jp").textContent = data.aboutme.language.list.japan;
        document.getElementById("en").textContent = data.aboutme.language.list.english;
        //
        document.getElementById("projects-head").textContent = data.projects.title;
        let container = document.getElementById("projects-container");
        container.innerHTML = "";
        data.projects.list.forEach(project => {
        let div = document.createElement("div");
        div.classList.add("project-card");

        div.innerHTML = `
          <h3>${project.name}</h3>
          <video class="video" src="${project.video}" muted loop></video>
          <p>${project.description}</p>
          <div class="btn-group"> 
          <a href="${project.play_link}" class="btn" target="_blank">${project.play_game}</a>
          <a href="${project.github_link}" class="btn" target="_blank">${project.github}</a>
          </div>
        `;
        if (project.play_link && project.play_game) {
          html += `<a href="${project.play_link}" class="btn" target="_blank">${project.play_game}</a>`;
        }
        
        if (project.github_link && project.github) {
          html += `<a href="${project.github_link}" class="btn" target="_blank">${project.github}</a>`;
        }

        container.appendChild(div);
      })
      Setupvideocontor();
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
  function Setupvideocontor() {
    let projectBlocks = document.querySelectorAll(".project-card");
    
    projectBlocks.forEach((block) => {
      let video = block.querySelector(".video");

    video.addEventListener("mouseenter", function () {
        video.play();
    });

    video.addEventListener("mouseleave", function () {
        video.pause();
    });
  });
};
