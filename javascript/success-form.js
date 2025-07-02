// Seleccionamos el formulario por su ID
const form = document.getElementById('form');

// Seleccionamos el div del mensaje de éxito
const successMessage = document.getElementById('success-message');

// Añadimos un event listener al formulario para cuando se envíe (submit)
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevenimos que se recargue la página al enviar el formulario

  form.style.display = 'none'; // Ocultamos el formulario

  successMessage.style.display = 'block'; // Mostramos el mensaje de éxito

  setTimeout(() => { // Esperamos 3 segundos (3000 milisegundos)
    successMessage.style.display = 'none'; // Ocultamos el mensaje de éxito
    form.style.display = 'block'; // Volvemos a mostrar el formulario
    form.reset(); // (Opcional) Limpiamos los campos del formulario
  }, 3000);
});
