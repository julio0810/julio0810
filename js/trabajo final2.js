const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
  const formData = new FormData(form);
  
  fetch('/enviar-correo', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      alert('El correo ha sido enviado exitosamente!');
      form.reset();
    } else {
      alert('Hubo un error al enviar el correo. Por favor, inténtalo de nuevo más tarde.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Hubo un error al enviar el correo. Por favor, inténtalo de nuevo más tarde.');
  });
});
