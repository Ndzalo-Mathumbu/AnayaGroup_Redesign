import "bootstrap-icons/font/bootstrap-icons.css";
const tabBtns = document.querySelector(".tab__btns");
const tabsContainer = document.querySelector(".tabs__container");
const ubuntu = document.querySelector(".__ubuntu");
const education = document.querySelector(".__education");
const sports = document.querySelector(".__sports");
const tabs__containerTextInfo = document.querySelector(
  ".tabs__container--textInfo"
);
const ubuntuIcon = document.querySelector(".bi-ubuntu");
const educationIcon = document.querySelector(".bi-book");
const sportsIcon = document.querySelector(".bi-trophy");
const bookWrapper = document.querySelector(".bi-book-wrapper");
const ubuntuWrapper = document.querySelector(".bi-ubuntu-wrapper");
const trophyWrapper = document.querySelector(".bi-trophy-wrapper");

const tabButtons = [ubuntu, education, sports];

export const tabButtonAnimation = function () {
  tabButtons.forEach((btn, i) => {
    btn.addEventListener("click", function () {
      tabButtons.forEach((b, i) => {
        if (b !== this) {
          b.classList.remove("btn__intab--animation");
          b.classList.add("btn__intab--animationRemove");
        } else {
          b.classList.remove("btn__intab--animationRemove");
          b.classList.add("btn__intab--animation");
        }
      });
    });
  });
};

const markUp = `<p class="text__tab--container--1">
  At the heart of Anaya Group is a <span class="highlight">skilled</span> <span class="highlight">multidisciplinary</span> team with <span class="highlight">expertise</span> in agriculture, engineering, real estate, and development management. Our leadership brings deep local knowledge, a commitment to sustainable progress, and a people-first approach. We: 
   <br>
  <br>
  <ul>
  <li>Understand the terrain and challenges of the DRC</li>
  <li>Champion inclusive, ground-up development</li>
  <li>Uphold ethical practices and client satisfaction</li>
</ul>
 <br>
Each division is powered by dedicated specialists, from agronomists and surveyors to project managers and support staff  —  united in building a better tomorrow, today.
  </p>`;

const markUpSecond = `<p class="text__tab--container--2">
  Our vision is to drive <span class="highlight">positive change</span> in the DRC by providing accessible land, sustainable farming solutions, and quality-built environments. We aim to transform livelihoods, strengthen communities, and create opportunities for lasting growth. Through innovation and ethical practices, we work to ensure that progress benefits all.</p> `;

const markUpThird = `<p class="text__tab--container--3">
  <ul class="__mission-lists">
  <li class="__mission-items"><span class="highlight">Provide</span> affordable and well-documented land for both housing and agriculture</li>
  <li class="__mission-items"><span class="highlight">Distribute</span>  high-quality fertilizers and seeds that improve food production</li>
  <li class="__mission-items"><span class="highlight">Build</span>  infrastructure that supports growth, education, and wellness</li>
  <li class="__mission-items"><span class="highlight">Promote</span> inclusive economic development by empowering locals and supporting job creation</li>
</ul>
</p>`;

export const renderTabTexts = function () {
  tabButtons[0].addEventListener("click", function () {
    tabs__containerTextInfo.innerHTML = "";
    educationIcon.style.display = "none";
    bookWrapper.style.display = "none";
    sportsIcon.style.display = "none";
    trophyWrapper.style.display = "none";

    ubuntuIcon.style.display = "flex";
    ubuntuIcon.style.opacity = 0;
    ubuntuWrapper.style.display = "inline-block";
    ubuntuWrapper.style.opacity = 0;
    tabs__containerTextInfo.style.position = "relative"; // or absolute,
    tabs__containerTextInfo.insertAdjacentHTML("beforeend", markUp);
  });
  tabButtons[1].addEventListener("click", function () {
    tabs__containerTextInfo.innerHTML = "";
    sportsIcon.style.display = "none";
    ubuntuWrapper.style.display = "none";
    bookWrapper.style.display = "inline-block";
    bookWrapper.style.opacity = 0;

    trophyWrapper.style.display = "none";
    ubuntuIcon.style.display = "none";
    educationIcon.style.display = "flex";
    educationIcon.style.opacity = 0;
    tabs__containerTextInfo.style.position = "relative"; // or absolute,
    tabs__containerTextInfo.insertAdjacentHTML("beforeend", markUpSecond);
  });

  tabButtons[2].addEventListener("click", function () {
    tabs__containerTextInfo.innerHTML = "";
    educationIcon.style.display = "none";
    bookWrapper.style.display = "none";
    ubuntuWrapper.style.display = "none";
    ubuntuIcon.style.display = "none";
    trophyWrapper.style.display = "inline-block";
    trophyWrapper.style.opacity = 0;

    sportsIcon.style.display = "flex";
    sportsIcon.style.opacity = 0;
    // tabButtons[1].style.opacity = 1;
    tabs__containerTextInfo.insertAdjacentHTML("beforeend", markUpThird);
  });
};
