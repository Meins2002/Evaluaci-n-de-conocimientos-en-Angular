Requisitos

1    Manejo de las operaciones CRUD
        Create
        Read
        Update
        Delete
2   Creación de componentes reutilizables renderizados con listas y con interacciones
3   Enrutamiento estático y dinámico
    Plus: genera la carga diferida para las rutas
4   Uso de la librería UI para Angular: Angular Material para estilizar tus componentes
5   Creación de formularios
6   Inyección de dependencias
7   Uso de directivas
8   Uso de un pipe propio de angular y la creación de un pipe personalizado
9   Uso de los lifecycle hooks de Angular
10  Uso del localStorage para generar persistencia de los datos

PLUS: Creación de unit test para mínimo el 50% de tu aplicación

Atributos de calidad esperados
    Uso de buenas prácticas para tener un código limpio
    Formularios controlados
    Manejo de errores
    Nombres de variables claros
    Uso correcto de la inyección de dependencias

Rutas sugeridas
    Ruta raíz de la aplicación en donde se dé una presentación inicial del sitio
    Ruta para visualizar el catálogo de películas
    Ruta para la visualización del formulario para la creación de nuevas películas
    Ruta para ver el detalle de cada película, un formulario con el que se podrá actualizar la información de la película y un botón para eliminar la película
    Ruta en la que hablaras a detalle sobre quién eres y con qué tecnologías construiste la aplicación

EndPoints que puedes usar:
    Obtener todas las películas:
        ghibliapi.vercel.app/films
    Obtener solo una cantidad específica de películas:
        ghibliapi.vercel.app/films?limit={cantidad_de_películas_que_quieres_obtener}
    Obtener la información de una sola película
        https://ghibliapi.vercel.app/films/{id}

Es importante que los formularios tengan concordancia con la información que usas de la API

Instrucciones para el estudiante
    Crea una aplicación de angular con el CLI de angular
    Crea los componentes que creas necesarios
    Estilízalos con la librería de UI de angular material
    Haz un llamado a la API para obtener las películas y guárdalas en el localStorage
    Crea un formulario controlado para crear una nueva película y guárdala en el localStorage
    Crea el formulario para actualizar una película (también se debe actualizar en el localStorage)
    Crea el botón para eliminar una película (También se debe eliminar del localStorage)