# Introducción a Python
**Python** es un lenguaje de programación que es interpretado, esto significa que los archivos son ejecutados por un interprete (un programa que se encarga de leer las instrucciones y a través del sistema operativo las ejecuta), la ventaja de ser interpretado básicamente es que el código es portable a muchas plataformas donde el interprete se encuentre instalado, lo mismo no ocurre con los lenguajes que son compilados, dado que en estos el programa es traducido directamente a un lenguaje que pueda ser entendido por el sistema operativo, por lo cual en cada plataforma se debera compilar el codigo y esto hace que sea considerablemente más dificil ejecutar el programa [[1]](https://es.wikipedia.org/wiki/Python). 

**Python** además de ser interpretado, es multiparadigma y es dinamicamente tipado [[2]](https://docs.python.org/3/tutorial/index.html), lo cual hace que sea ideal para el desarrollo rapido de aplicaciones y en la creación de programas para automatización de tareas(scripts), estas características han hecho a **Python** un lenguaje de programación muy popular, además la comunidad desarrolladores es bastante grande, lo cual ha traido una gran cantidad de librerias para el desarrollo de todo tipos de aplicaciones, desde aplicaciones de consola hasta juegos y aplicaciones web [[3]](https://brochure.getpython.info/).

# Introducción al lenguaje
Un archivo de **Python** es ejecutado por el interprete de forma secuencial, desde la primera linea al inicio del archivo hasta la ultima.

## Comentarios
Los comentarios en **Python** son lineas de codigo que no son ejecutados por el interprete y la intención es dejar algún tipo de nota directamente en el codigo que puede servir como un recordatorio o para documentar el código [[4]](https://docs.python.org/3/reference/lexical_analysis.html#comments).

{% raw %}
```python
# un comentario
#otro
x = 1 #los comentarios tambien se pueden colocar al final de una linea
```
{% endraw %}

## Variables
Una variable se puede interpretar como un espacio en memoria que contiene un dato, la utilidad de las variables es que te permiten guardar en memoria un valor y luego obtenerlo utilizando el nombre de las variables, por ejemplo:

{% raw %}
```python
nm = "Nombre" #la variable es nm y su valor es "Nombre" una cadena de caracteres
a = 7 #a es un entero (int)
a = 8 #las variables se pueden reasignar
a = "8" #reasignación con otro tipo de dato
b = 10_568 #se puede colocar separadores (_) para que el numero sea mas legible
# 10_568 es lo mismo que 10568
numero_flotante = 8.5 #un numero real (float)
peso = 5e3 #numero real en notación cientifica
#5e3 es lo mismo que 5*10**3 (5*10^3 o 5000)
```
{% endraw %}

## Tipos de datos básicos
Como se menciono en la sección anterior, las variables guardan información, pero esta información debe tener un tipo de dato especifico de forma que el interprete de **Python** pueda manipular de forma correcta la variable, es por esto que existen los tipos de datos en **Python**. Algunos de los tipos de datos incluidos por defecto en **Python** son:

+ **int** (enteros): es el tipo de datos por defecto para las variables que han sido asignadas con números sin punto decimal.

+ **float** (reales): es el tipo de datos por defecto para las variables que han sido asignadas con números con punto decimal.

+ **complex** (complejos): es el tipo de datos por defecto para las variables que han sido asignadas con números de la forma `a+bj` donde `a` y `b` son numeros, por ejemplo: 

{% raw %}
```python
x = 3+4j #x es un número complejo
```
{% endraw %}

+ **str** (cadenas de caracteres): es el tipo de datos por defecto para las variables que han sido asignadas con una secuencia de caracteres delimitada por comillas dobles (`"`) o comilla simple (`'`), por ejemplo:

{% raw %}
```python
var1 = "hello"
var2 = 'world'
varm = "error' # para delimitar la cadena solo se debe utilizar un delimitador
varm = "'hello'" #valido
varm = '"hello"' #valido
```
{% endraw %}

+ **bool** (booleanos): es el tipo de datos para las variables que han sido asignadas con `True` o `False`, estos se utilizan para denotar verdadero o falso, respectivamente, como en las proposiciones logicas, por ejemplo:

{% raw %}
```python

```
{% endraw %}

+ **list** (listas): este tipo de datos es utilizado cuando se quieren guardar elementos de cualquier tipo, se debe tener en cuenta que el orden en que se guardan los datos importa, por que para acceder a los datos se debe utilizar la posicion en la que se guardo. Una de las principales características de las listas es que tienen funciones que permiten modificar posteriormente los elementos que hay en la lista (agregar, eliminar, ordenar, ...). La sintaxis para crear una lista es `[elemento_1, elemento_2, ..., elemento_n]`, note que los elementos están separados por comas (`,`), la lista se delimita por corchetes (`[...]`) y el tipo de dato de los elementos puede ser cualquiera, por ejemplo:

{% raw %}
```python
lx = [123, "hello", 12.3, 1+3j] #una lista con 3 elementos
llx1 = ["una", "lista de", ["listas"] ] #una lista con 3 elementos
#note que el tercer elemento es una lista con un elemento
li = ["lista"]
llx2 = ["una", "lista de", li] #es lo mismo que llx1
```
{% endraw %}

La sintaxis para acceder a un valor  es `var[i]`, donde `var` es el nombre de la variable que guarda la lista e `i` es un `int` con la posición del elemento, las posiciones comienzan desde cero, entonces la posición del primer elemento es `0`, la del segundo `1` y asi sucesivamente, por ejemplo:

{% raw %}
```python
x = ["uno","dos","tres"]
uno = x[0]
dos = x[1]
tres = x[2]
```
{% endraw %}

para agregar un elemento a una lista en una variable `var`, utilice la siguiente expresion `var.append(x)` donde `x` es el elemento que se va a añadir y este se añadira en la ultima posición de la lista, por ejemplo:

{% raw %}
```python
x = ["uno","dos","tres"]
x.append("cuatro")
cuatro = x[3]
```
{% endraw %}

para eliminar un elemento de una lista en una variable `var`, utilice la siguiente expresion `var.pop(i)` donde `i` es la posición del elemento que se va a eliminar, por ejemplo:

{% raw %}
```python
x = ["uno","dos","tres"]
x.pop(0)
dos = x[0]
```

