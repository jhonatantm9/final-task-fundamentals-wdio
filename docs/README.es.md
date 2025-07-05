# Tarea Final - Automatización de pruebas en JavaScript con WebdriverIO

Esta es la solución/proyecto que implementé para la tarea final del curso "[Fundamentals] Automated Testing in JavaScript". El proyecto corresponde a una suite de pruebas automatizadas utilizando diferentes herramientas como WebdriverIO, CucumberJS y Allure.

Durante el curso aprendimos muchos conceptos sobre pruebas automatizadas, incluyendo diferentes tipos de pruebas que se pueden automatizar, herramientas utilizadas actualmente para la automatización, y luego nos enfocamos más en pruebas de UI. Profundizamos en el framework WebdriverIO y en Cucumber como nuestras principales herramientas para la automatización de pruebas.

## 🌍 Idiomas | Languages

- 🇪🇸 Español (estás aquí)
- 🇺🇸 [View in English](../README.md)

## Tabla de Contenidos

- [Descripción de la tarea](#descripción-de-la-tarea)
- [Herramientas](#herramientas)
- [Ejecución y estructura del proyecto](#ejecución-y-estructura-del-proyecto)
- [Qué aprendí del proyecto](#qué-aprendí-del-proyecto)
- [Resultados](#resultados)

## Descripción de la tarea

> Nota: Esta no es la descripción literal de la tarea, sino una contextualización de lo que se debía hacer.

Crear tres pruebas automatizadas utilizando la página [https://www.saucedemo.com/](https://www.saucedemo.com/)

### UC-1 Probar el formulario de inicio de sesión con credenciales vacías

**Pasos:**

- Escribir cualquier credencial en los campos "Username" y "Password" (usuario y contraseña).
- Limpiar los campos.
- Hacer clic en el botón "Login".
- Verificar el mensaje de error: "Username is required".

### UC-2 Probar el formulario de inicio de sesión ingresando solo el nombre de usuario

**Pasos:**

- Escribir cualquier nombre de usuario.
- Ingresar una contraseña.
- Limpiar el campo "Password" (contraseña).
- Pulsar el botón "Login".
- Verificar el mensaje de error: "Password is required".

### UC-3 Probar el formulario de inicio de sesión ingresando usuario y contraseña

**Pasos:**

- Escribir un nombre de usuario listado en la sección “Accepted usernames”.
- Ingresar la contraseña "secret_sauce".
- Hacer clic en Login y validar que el título del dashboard sea “Swag Labs”.

**La tarea también indicaba usar selectores *XPath* y un proveedor de datos (data provider).**

## Herramientas

Este proyecto fue desarrollado en JavaScript utilizando las siguientes herramientas/librerías:

- WebdriverIO (v9.16.1)
- Plugin de Cucumber (v9.16.0)
- Plugin Spec reporter (v19.16.0)
- Plugin Allure reporter (v9.16.0)
- Allure commandline (v2.34.1)

## Ejecución y estructura del proyecto

### Estructura de la solución

Como se mencionó anteriormente, este proyecto es una suite de pruebas automatizadas que usa un conjunto de herramientas para crear un framework robusto y escalable.

El proyecto fue desarrollado utilizando el patrón Page Object Model (POM), el cual busca separar la lógica de la interacción con el DOM de los pasos definidos en los distintos escenarios de prueba.

A continuación, un pequeño diagrama para visualizar la jerarquía de carpetas:

```text
project-root/
│
├── src/
|   ├── configs/
|   |   └── wdio.conf.js
|   ├── features/
│   |   └── login.feature
|   ├── po/
|   │   ├── pages/
|   |   |   ├── login.page.js
│   |   |   ├── inventory.page.js
|   |   |   └── ...
|   |   └── index.js
|   └── step-definitions/
|       ├── action-steps.js
|       ├── validation-steps.js
|       └── ...
└── ...
```

### Pasos para ejecutar el proyecto

Para clonar, instalar las dependencias y ejecutar el proyecto, puedes ejecutar los siguientes comandos:

```Shell
git clone https://github.com/jhonatantm9/final-task-fundamentals-wdio.git
cd final-task-fundamentals-wdio
npm install
npm test
```

## Ver los reportes de Allure

Si deseas ver un reporte HTML generado por Allure, puedes ir a la carpeta `artifacts/allure-reports`, donde encontrarás los reportes de cada ejecución. Dentro de cada carpeta puedes encontrar un archivo `index.html` que puedes abrir en un navegador web para revisar los resultados de las pruebas.

Los reportes se generan a través de un hook de WDIO que se ejecuta una vez que se completan todas las pruebas de cada una de las features (funcionalidades).

> Nota: Cada vez que ejecutes el proyecto (con `npm test`), se generará una **nueva** carpeta con un reporte nuevo. Estas carpetas se nombran con la **marca de tiempo** del momento en que se ejecutaron las pruebas.

## Qué aprendí del proyecto

**Esta sección está dividida en dos partes**, una en la que hablaré sobre los conceptos que aprendí en general y otra donde explicaré los mayores desafíos que tuve durante la implementación de la solución y cómo los enfrenté.

### Conceptos aprendidos en este proyecto

Aunque puede sonar obvio, una de las cosas que aprendí al desarrollar esta suite fue cómo trabajar con WebdriverIO y CucumberJS. Las agrupo ya que, para construir las pruebas del proyecto, ambas tecnologías trabajan de la mano.

Sobre Cucumber, adquirí una comprensión de las palabras clave que ofrece, para qué sirven y por qué se utiliza BDD en equipos de desarrollo. Con WDIO aprendí cómo implementar esas funcionalidades o comportamientos definidos por las pruebas en Cucumber para crear pruebas automatizadas. Tuve la oportunidad de trabajar con métodos para interactuar con elementos web, definir hooks para ejecutar acciones en puntos específicos del ciclo de vida de las pruebas y usar las assertions (aserciones) integradas del framework.

Otro concepto que apliqué en el proyecto fue el uso del patrón Page Object Model (POM) al construir las pruebas. La idea de este enfoque es representar las distintas páginas de una aplicación en clases y encapsular la lógica de interacción con los elementos web dentro de esas clases. Algunas ventajas de este patrón son que mejora la reutilización y el mantenimiento, además de reducir la dependencia entre las pruebas y la estructura de los elementos web de las páginas. Personalmente, lo que más me gustó de trabajar con este patrón fue la forma como se organizan los elementos web en diferentes directorios, ya que cada página está en una clase separada, e incluso se pueden distribuir componentes en distintas clases, lo que se asemeja a cómo los frameworks basados en componentes estructuran las aplicaciones.

Finalmente, la última herramienta que aprendí a usar fue Allure, que permite generar distintos reportes con los resultados de las pruebas. Con Allure, pude generar reportes en HTML de las pruebas ejecutadas. Estos reportes son muy útiles porque ofrecen un lugar unificado donde se pueden visualizar todos los resultados, además, Allure permite ver cada prueba con sus detalles en caso de que se necesite buscar información más específica. Los reportes del proyecto se generan usando un hook de WDIO que indica a Allure crear un nuevo registro cada vez que todas las pruebas se han completado.

### Mis mayores desafíos en este proyecto

Hubo dos retos principales que enfrenté al implementar la suite de pruebas:

#### 1. Eliminación de valores en campos de entrada

En dos de los escenarios que creé, había un paso que requería borrar el valor de los campos de entrada después de haber escrito un texto previamente. Con esta acción me encontré con un problema, ya que aunque WDIO tiene una función `clearValue` diseñada para este propósito, al momento de ejecutar las pruebas parecía que esta no funcionaba. En modo 'headed' (visualizando en el navegador cada paso), los pasos de limpieza eliminaban los caracteres correctamente, sin embargo, en el siguiente paso los campos volvían a llenarse con la misma información que había sido borrada.

Para solucionarlo probé distintas alternativas, como usar `waitUntil` y `pause` para esperar a que los campos quedaran vacíos, enviar eventos JavaScript para limpiar los inputs, y otros cambios en la implementación de los pasos, pero ninguno funcionó.

La solución que finalmente funcionó fue usar la función `keys` y enviar una serie de *Backspaces*(tecla de retroceso) para eliminar todos los caracteres escritos previamente. Esta solución puede que no sea la más óptima, pero logra simular bastante bien la interacción real de un usuario al borrar un campo de entrada.

#### 2. Generar reportes HTML con Allure

Esta fue la primera vez que usé Allure (y una herramienta de reportes HTML en general), por lo que fue un proceso de ensayo y error, aprendiendo lo básico de la herramienta y cómo integrarla en el proyecto.

Afortunadamente, WebdriverIO tiene un plugin para Allure y la documentación ofrece suficiente información para implementar el código esencial y generar los primeros reportes, lo cual facilitó mucho el proceso.

Los aspectos que más tiempo me tomaron fueron: configurar Allure para que fuera compatible con CucumberJS como ejecutor de pruebas, y agregar el código necesario para tomar capturas de pantalla cuando una prueba falla. Al final, el proyecto incluye la generación automática de reportes, mostrando capturas en las pruebas o intentos fallidos dentro de una prueba específica.

## Resultados

Al final del proyecto, se implementó correctamente una suite de pruebas automatizadas funcional y estructurada, capaz de validar correctamente el flujo de inicio de sesión en la página de Saucedemo.

Las pruebas se ejecutan correctamente usando WebdriverIO y Cucumber, y los resultados pueden visualizarse mediante reportes generados por Allure.

Las siguientes son algunas capturas del proyecto.
> (Estas son imágenes de referencia, creadas haciendo que las pruebas fallen a propósito y pueden no coincidir con los resultados reales al ejecutar el código del repositorio).

![Captura de pantalla de la ejecución de las pruebas en los navegadores](/docs/images/tests-execution.png)
*En esta imagen se puede ver la ejecución de las pruebas automatizadas en dos navegadores (Edge y Firefox).*

![Captura de pantalla de la pestaña resumen en el reporte de Allure](/docs/images/report-overview.png)
*La imagen muestra un reporte de Allure generado después de las pruebas, específicamente la pestaña de Overview (Resumen).*

![Captura de pantalla de la pestaña de comportamientos](/docs/images/report-behaviors.png)
*La captura muestra la pestaña de Behaviors (Comportamientos) del reporte, donde se pueden ver con más detalle cada prueba y si una prueba falla, se puede observar una imagen adjunta.*
