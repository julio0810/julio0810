const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const sectionId = link.getAttribute("href");
    const section = document.querySelector(sectionId);

    section.scrollIntoView({ behavior: "smooth" });
  });
});

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  const nombre = document.querySelector("#nombre").value;
  const correo = document.querySelector("#correo").value;
  const mensaje = document.querySelector("#mensaje").value;

  if (!nombre || !correo || !mensaje) {
    event.preventDefault();
    alert("Por favor complete todos los campos del formulario.");
  }
});

const botonDesplegar = document.querySelector("#boton-desplegar");
const seccionHabilidades = document.querySelector("#habilidades");

botonDesplegar.addEventListener("click", () => {
  seccionHabilidades.classList.toggle("oculto");
});


