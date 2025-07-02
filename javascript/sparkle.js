// Seleccionamos todos los elementos que tengan la clase .form__wrapper (pueden ser varios formularios)
document.querySelectorAll('.form__wrapper').forEach(wrapper => {

  // Dentro de cada .form__wrapper, seleccionamos el botón con clase .form__button
  const button = wrapper.querySelector('.form__button');

  // También seleccionamos el contenedor donde aparecerán las chispas (partículas)
  const sparkleContainer = wrapper.querySelector('.form__button--sparkle');

  // Añadimos un evento 'click' al botón
  button.addEventListener('click', (e) => {

    // Obtenemos la posición y tamaño del contenedor para calcular coordenadas relativas
    const rect = sparkleContainer.getBoundingClientRect();

    // Creamos 20 chispas (partículas)
    for (let i = 0; i < 20; i++) {

      // Creamos un nuevo div para cada chispa
      const sparkle = document.createElement('div');

      // Le añadimos la clase .sparkle (debería tener animación CSS asociada)
      sparkle.classList.add('sparkle');

      // Generamos una posición aleatoria en X (-50 a +50 px)
      const x = Math.random() * 100 - 50;

      // Generamos una posición aleatoria en Y (negativa, para que suba)
      const y = Math.random() * -100;

      // Posicionamos la chispa en el punto del click relativo al contenedor
      sparkle.style.left = `${e.clientX - rect.left}px`;
      sparkle.style.top = `${e.clientY - rect.top}px`;

      // Pasamos las variables CSS personalizadas --x y --y (para la animación)
      sparkle.style.setProperty('--x', `${x}px`);
      sparkle.style.setProperty('--y', `${y}px`);

      // Insertamos la chispa en el contenedor
      sparkleContainer.appendChild(sparkle);

      // Después de 800 ms, eliminamos la chispa del DOM
      setTimeout(() => {
        sparkle.remove();
      }, 800);
    }
  });
});
