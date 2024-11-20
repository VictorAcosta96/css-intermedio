# ¿Qué es animar una propiedad?

En CSS se entiende animar una propiedad como el cambio de una propiedad en un intervalo de tiempo.

Si pasamos del estado A al estado B pasando por un estado intermedio habremos animado la propiedad, este paso o pasos intermedios podemos calcularlo nosotros o dejar que sea el navegador el que haga el cálculo.

Tanto las animaciones como las transiciones se introdujeron en CSS hace unos 10 años aproximadamente y aún se consideran propiedades experimentales, aunque cuentan con un soporte casi total en los navegadores.

# Propiedades animables y estado por defecto.

No todas las propiedades de CSS se pueden animar, por norma general, todas las propiedades que se puedan representar con valores numéricos son animables, hay algunas excepciones que no son animables directamente con CSS, pero que se pueden animar con la ayuda de JavaScript.

Es importante conocer qué propiedades tienen un estado por defecto y cual no, como el estado de las propiedades iran de A -> B, si tenemos un valor por defecto, scale(1) por ejemplo, no será necesario especificar el punto A, en otras propiedades como background, habrá que especificar el punto A y el B

# Transiciones y animaciones

Aunque puedan parecer lo mismo visualmente, en CSS tenemos dos formas distintas de realizar animaciones, `transition` y `animation`, la principal diferencia es que `transition` necesita un trigger o disparador por parte del usuario (un hover por ejemplo), y las animaciones pueden lanzarse cuando nosotros queramos, otra diferencia importante es que las transiciones suelen ser simples (A -> B) y las animaciones permiten hacer cambios de estado mucho más complejos y con un mayor control.

# Cómo trabaja el navegador

Saber animar correctamente en CSS puede suponer la diferencia entre que tu sitio web se vea fluido o a tirones.

El trabajo que hace el navegador al leer el CSS se divide en 3 fases.

- Layout: Esta es la primera fase en la que el navegador calcula la geometría del sitio web para saber dónde se coloca cada elemento, esta fase es la que más recursos consume del navegador.

- Paint: Una vez que el navegador ha calculado el layout el siguiente paso es dibujar cada uno de los elementos en pantalla, este proceso consume menos recursos que la primera pero también es una tarea costosa para el navegador.

- Composite: La composición es una técnica para separar partes de una página en capas y pintar por separado las capas que deben ir aisladas. Esto se hace para evitar que el navegador tenga que calcular la fase de layout y paint si sucede algún cambio.

No todas las propiedades tienen que realizar este flujo, por eso es recomendable utilizar las propiedades correctas a la hora de animarlas, porque si hacemos animaciones que tengan que pasar por los 3 flujos podemos llegar a saturar la memoria del navegador y que el sitio web funcione a tirones o incluso que se quede bloqueado.

Para saber qué propiedades consumen más o menos recursos tenemos la web https://csstriggers.com/ y un plugin de VSCode con el mismo nombre que se basa en la información de esta web.

No es necesario memorizar nada, todo se puede resumir en: Siempre que necesites animar tamaño, posición o rotación, utiliza transform, visibilidad con opacity, todo lo demás con la propiedad correspondiente.
