# Secuencias
Las secuencias en **Python** se pueden pensar como contenedores de datos,
entre las secuencias hay dos categorias: las que son **mutables** y las que no
(**inmutables**). Las mutables son las que pueden ser modificadas (agregar,
actualizar o eliminar elementos) despues de creadas, las immutables no cuentan
con esta propiedad. Todas las secuencias son **iterables**, esto quiere decir que
mediante un ciclo se puede acceder a los elementos que contiene. Las siguientes
funciones son validas para todas las secuencias:
{% raw %}
```python
x = [0,1,2,3]
print(len(x)) #(len) retorna un entero con el tamaño de la secuencia
#>>> 4
print(min(x)) #(min) retorna el elemento "menor" de la secuencia
#>>> 0
print(max(x)) #(max) retorna el elemento "mayor" de la secuencia
#>>> 3
print(any(x)) #(any) retorna True si alguno de los valores son "Verdaderos", si no False
#>>> True
print(all(x)) #(all) retorna True si todos los valores son "Verdaderos", si no False
#>>> False
```
{% endraw %}

Puede referirse a el [modelo de datos](https://docs.python.org/3/reference/datamodel.html) de la documentación oficial de **Python** para más información sobre secuencias.

## Listas
Las listas son un tipo de secuencia **mutable** en **Python** que permite almacenar 
cualquier otro tipo de dato (enteros, cadenas, flotantes, listas, ...),
cada elemento dentro de la lista tiene un indice asociado, con el indice
se puede acceder al elemento, tambien se puede reemplazar o actualizar 
el elemento en esa posición, por ejemplo:
{% raw %}
```python
x = [10, "A", 5, 1, 2, 3j]
print(x[2])
#>>> 5
```
{% endraw %}
en el ejemplo `x` es una lista con 6 elementos, el elemento de más
a la izquierda tiene indice 0 (este es el primer elemento) y el elemento de más a la derecha tiene
indice 5 (este es el último elemento). En la siguiente imagen se pueden ver los elementos
de la lista `x` con su correspondiente indice:

![listas](./Secuencias/listas.JPG)

para acceder a un elemento en la lista utilizamos su indice, en el ejemplo anterior se accedio al
tercer elemento de la lista (el que tiene indice 2) y luego se imprimio. La sintaxis para acceder
a un elemento es `lista[indice]` donde `lista` es el nombre de la variable o el literal
de la lista que se va a utilizar e `indice` es el indice (un número entero) del elemento al cual se va a 
acceder. En caso de que el indice sea mayor o igual a la cantidad de elementos que hay en la
lista, **Python** arroja un error, por ejemplo:
{% raw %}
```python
print(x[5]) #Error
#>>> IndexError: list index out of range
```
{% endraw %}

El `indice` también puede ser negativo, en este caso es como si la lista comenzara desde
el último elemento, entonces el indice del útlimo elemento es -1 y el del primer elemento
(de la lista `x`) es -5. En la siguiente imagen se pueden ver los elementos
de la lista `x` con su correspondiente indice negativo:

![listas 2](./Secuencias/listas_2.JPG)

al igual que con indices positivos, al intentar acceder con un indice negativo que no está asociado a ningun elemento, **Python** arroja un error, por ejemplo:
{% raw %}
```python
print(x[-7]) #Error
#>>> IndexError: list index out of range
print(x[-6]) #Ok
#>>> 10
```
{% endraw %}

Existe tambien la posibilidad de sacar una sublista de una lista, esto se conoce como **slicing** o **recortar**, la sintaxis es `lista[start:stop:step]`, donde `start`,`stop` y `step` son enteros, la lista resultante es `[lista[start], lista[start+step], lista[start+2*step], ..., lista[k]]`, donde `k` es un número menor que `stop` (esto quiere decir que la sublista no contiene el elemento en la posición `stop`, si este existe), por ejemplo:

{% raw %}
```python
print(x[1:6:2]) #saca los elementos cuya posición sea impar
#>>> ['A', 1, 3j]
print(x[1:100:2]) #lo mismo que la anterior (note que stop>len(x))
#>>> ['A', 1, 3j]
print(x[50:100:5]) #en este caso el rango produce una lista vacia
#>>> []
print(x[-1:-6:-1]) #soporta rangos negativos
#>>> [3j, 2, 1, 5, 'A']
print(x[2::2]) #stop es opcional (se asume que es hasta el final de la lista)
#>>> [5, 2]
print(x[::2]) #start es opcional (se asume que es desde la posicion 0)
#>>> [10, 5, 2]
print(x[::]) #step es opcional (se asume que es 1)
#>>> [10, 'A', 5, 1, 2, 3j]
```
{% endraw %}

Una lista puede ser modificada cambiando, agregando o eliminando un elemento (entre otras operaciones que se puede hacer con una lista), la forma en la cual se pueden hacer estas modificaciones es presentada a continuación:
{% raw %}
```python
x[0] = 100 #actualizar un elemento
print(x)
#>>> [100, 'A', 5, 1, 2, 3j]
x.append(200) #(append) recibe como parametro un elemento y lo agrega al final
#>>> [100, 'A', 5, 1, 2, 3j, 200]
y = x.pop(2) #(pop) recibe como parametro un indice, elimina y retorna el elemento indicado
print(x,y)
#>>> [100, 'A', 1, 2, 3j, 200] 5
```
{% endraw %}

## Strings (Cadenas)
Los strings son secuencias que almacenan [caracterés](https://es.wikipedia.org/wiki/Car%C3%A1cter_(tipo_de_dato)), son un tipo de secuencia **inmutable** y al igual que las listas, cada caracter dentro de un string tiene un indice asociado 