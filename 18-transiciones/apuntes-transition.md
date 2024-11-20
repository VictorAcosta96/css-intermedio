# Transition

Las transiciones se crean en base a cuatro propiedades:

- transition-property: Se usa para definir los nombres de las propiedades CSS en las que el efecto de la transición debe aplicarse, el valor por defecto es `all` pero no se recomienda usarlo nunca por temas de rendimiento.

- transition-duration: Establece el tiempo que debe tardar una animación de transición en completarse, este valor es obligatorio ya que el navegador necesita una duración para poder calcular la transición. Podemos establecer el valor en "s" o "ms"

- transition-delay: Especifica la cantidad de tiempo a esperar desde que se dispara el cambio de estado y el comienzo del efecto de transicion. Podemos establecer el valor en "s" o "ms"

- transition-timing-function: Permite establecer una curva de aceleración para que la velocidad de la transición pueda variar a lo largo de su duración, tenemos varios valores disponibles.

  - ease: Las animaciones comienzan a una velocidad media y se desaceleran hacia el final.
  - ease-in: Las animaciones comienzan lentamente y se aceleran al final.
  - ease-out: Las animaciones comienzan rápido y se frenan al final.
  - ease-in-out: Las animaciones comienzan y terminan lentamente, pero se mueven rápidamente en el centro.
  - linear: Las animaciones cambian a una velocidad constante.
  - steps(n): Las animaciones se reproducen en el número de pasos que establezcamos.
  - cubic-bezier(): Permite hacer animaciones avanzadas personalizando toda la curva de animación.

  Interfaz para crear funciones cubic-bezier: https://cubic-bezier.com

  Artículo sobre cubic-bezier(): https://css-tricks.com/advanced-css-animation-using-cubic-bezier/

## Transition shorthand

Es muy habitual usar `transition` con el shorthand, las propiedades se pueden escribir en cualquier orden, pero es importante que si utilizáis `transtion-delay`, el valor aparezca después de `transition-duration`.
Por norma general se suele usar un orden por convención para que todo el mundo lo escriba igual.

```
  transition: transition-property transition-duration transtion-delay transition-timing-function

  transition: transition-property transition-duration transition-timing-function transtion-delay
```

## Animar varias propiedades

Para animar varias propiedades las pondremos dentro del valor `transition-property` separadas por comas, y en los valores de `transition-duration` y `transition-delay` si sólo ponemos un valor se aplicará a todas las propiedades y si queremos distintos tiempos los separaremos por comas en el mismo orden que las declaramos en `transition-property`

```
  transition-property: transform, color;
  transition-duration: 1s, 2s;

  transition-delay: 2s, 1s

  <!-- Shorthand -->
  transition: transform 1s 2s, color 2s 1s
```

## Eventos de transición en JavaScript

Para tener mayor control sobre las transiciones a través de JavaScript tenemos cuatro eventos que se lanzan.

- transitionrun: Este evento se lanza cuando se crea la transición, ignora el delay

- transitionstart: Este evento se lanza cuando empieza a transicionar el elemento, respeta el delay

- transitionend: Este evento se lanza al terminar la transición.

- transitioncancel: Este evento se lanza cuando se cancela la transición.

El evento que más veces se suele utilizar es `transitionend`, ya que lo podemos utilizar para lanzar una acción cuando termine la transición.
