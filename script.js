const menuToggle = document.querySelector("#menu-toggle");
const activeElements = document.querySelectorAll(".active-element");

const activation = () => {
     for(let activated = 0; activated < activeElements.length; activated++){
          activeElements[activated].classList.toggle("active");
     }
}

menuToggle.addEventListener("click", activation);