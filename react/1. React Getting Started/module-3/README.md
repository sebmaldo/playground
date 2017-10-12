# Módulo 3

## Descripción General
Este módulo introduce los estilos a RXJ y además se preocupa que utilizar una conección con un repositorio externo, en este caso la api pública de github.

## Reflexiones
Al parecer, tal como dice el curso, puede ser mejor idea utilizar funciones como componente de react siempre que se pueda y sólo dejar las clases para cuando se estrictamente necesario.

Parece que vscode reconoce las extenciones jsx y las interpreta como correctamente aumentando la cantidad de elementos para el auto completado.

El traspaso de funciones hacia el interior de las aplicaciones parece ser la forma como se puede traspasar el cambio de estados a los componentes padres.

El input de datos parece ser transparente y muy bien logrado.

Sólo dentro de un componente se pueden manejar cosas como los estilos o las clases que el componente usa, no hay que tratar de usarlo desde donde se llama el componente, que desde ahí no sirve.

No hay que olvidar que cuando se pone una funcion in line dentro del llamado o en un componente se crea una instancia de la función por cada vez que se instancia el componente, por lo que hay que ser cuidadoso con esto.

## Conclusión

Cómodo para mandar mensajes entre componentes, hay que ponerle atención a las funciones que se utilizan y el estado de una clase de componente me hace un poco de sentido, pero aún creo que puede haber una perversa utilización de los estados.

Hay que tener cuidado, ya que si uno no sabe usar bien react puede ser que se usen muchos recursos, com por ejemplo definir funciones en el mismo llamado a un componente.