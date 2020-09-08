<<<<<<< HEAD
## Ejercicio

La idea es con los conceptos que ya tenemos de Angular, @Input, @Output y componentes
Completar el presente repositorio para que la aplicacion funcione.

## TodoList

Tengo una lista de tareas. 

+ Como usuario quiero poder agregar una tarea. Una tera consiste en un texto y en un estado que puede ser pendiente o completada.
+ Al agregarse la tarea esta siempre pendiente.
+ A medida que se van agregando elementos se le asigna un id unico secuencial a cada tarea.
+ Como usuario quiero poder eliminar una tarea, haciendo click en un comando junto a ella.
+ como usuario quiero cambiar el estado de una tarea de completada a pendiente y viceversa.
+ Como usuario quiero que las tareas completadas se muestren con una diferenciacion visual de las pendientes, puede ser un tachado, un color de fondo o algo. 
+ como usuario quiero ver la cantidad total de tareas pendientes y completadas que tengo en mi lista en un footer.
+ En la lista de tareas se puede ver el id descripcion y el estado de cada tarea, ademas de un boton para elimnarla y otro para cambiar el estado.

Se deben usar los componentes que estan planteados y completar la funcionalidad faltante para que compile y se pueda hacer el 

```ng build```
```ng build --prod```
```ng serve```

## Nivel 2 (opcional)
Si te resulto muy facil la primera parte. o si ya tenes experiencia con Angular, React, Vue u otros frameworks.
+ Persistir la lista en localStorage
+ Permitir la edicion de una tarea.
+ Medir el tiempo que se tarda en completar una tarea y mostrar en el footer el tiempo promedio.
+ Permitir seleccionar un icono de fontawesome, bootstrap icons o cualquier libreria publica de iconos, para la tarea.

## Para entregar el trabajo 
+ Hacer un fork de este repositorio tomar la rama todo-list-exercise y hacer un pull request a dicha rama. 
[Aqui](https://blog.desdelinux.net/tutorial-simple-primer-pr-pull-request/)
y [Aqui](https://github.com/omegaup/omegaup/wiki/C%C3%B3mo-Hacer-un-Pull-Request) les deoj una guia de como usar git para un Pull request. 

Me mandan el link al pull request asi les puedo mandar comentarios mediante github.

=======
# Ejercicio integrador

La idea es tomar el spec de frontend de real world app (https://github.com/gothinkster/realworld/tree/master/spec)
Y hacer un frontend par el backend alojado en 
https://conduit.productionready.io/api

Este backend esta documentado en https://github.com/gothinkster/realworld/tree/master/api

El ejercicio consiste en implementar 
+ Signup Sign in de usuarios. 
+ ABMC de Articulos. 
+ ABC de Comentarios (no hace falta actualizar)
+ Mostrar una lista paginada de articulos. 

El ejercicio debe incluir routing, reactive forms, http, autenticacion. 
El token de la autenticacion se debe guardar en local storage. 

Pueden usar el diseño y el los estilos css o componentes de terceros que quieran entre ellos puede ser
+ Bootstrap 
+ Material UI
+ https://clarity.design/

o el que quieran, si van a usar componentes con javascript asegurense de usar aquellos que esten hechos con angular sino se puede complicar. 

El ejercicio lo pueden hacer en grupos de hasta 4 personas, en ese caso usen nu repositorio comun de github o gitlab  y todos los merge hay que hacerlos por pull request. 
Voy a mirar los pull request para evaluar el trabajo. 

Deberian hacer un fork de este repositorio para empezar y despues la entrega la vamos a hacer por pull request. 

El proyecto debe funcionar con el backend. 
Debe compilar en modo produccion 

ng build --prod

y debe pasar el linting

ng lint 


>>>>>>> cf102b13598bfa23f58bb9f0b39810cbafc3d05c
