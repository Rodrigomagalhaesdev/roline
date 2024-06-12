// Hide effect
const myObserver = new IntersectionObserver((entries) => {
  console.log(entries);

  for (let entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  }
});

const elements = document.querySelectorAll(".hidden");

elements.forEach((element) => myObserver.observe(element));


document.addEventListener("DOMContentLoaded", () => {
  const typewriterElements = document.querySelectorAll(".text-2");

  function typeWriter(element, text) {
    return new Promise((resolve) => {
      let i = 0;
      element.textContent = "";
      element.style.visibility = "visible"; // Mostrar o elemento quando começar a escrever

      function type() {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
          setTimeout(type, 90);
        } else {
          resolve();
        }
      }

      type();
    });
  }

  async function startTyping() {
    for (const element of typewriterElements) {
      const text = element.textContent;
      element.style.visibility = "hidden"; // Esconder o elemento inicialmente
    }

    for (const element of typewriterElements) {
      const text = element.textContent;
      await typeWriter(element, text);
    }
  }

  startTyping();
});



var swiper = new Swiper(".swiper", {
  cssMode:true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  keyboard: true,
});
