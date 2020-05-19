# Referencia rápida
### Convención
Se utilizaran comentarios despues de ejecutar una serie de sentencias para indicar entrada
de datos `#<<<` del usuario por consola o salida de datos `#>>>`  por consola, por ejemplo:
{% raw %}
```python
print("ingrese un número")
x = input()
#<<< 1234
print(x)
#>>> 1234
```
{% endraw %}
### Funciones incorporadas en Python
Las siguientes funciones pueden ser llamadas sin la necesidad de importar ninguna librería
{% raw %}
```python
x = "programmer"
print("hello world",x)  #(print) mostrar por consola los parametros dados
#>>> hello world programmer
w = input("2**3 = ") #(input) obtener datos por consola, retorna un string
#>>> 2**3 =
#<<< 8
print(type(w)) #(type) retorna un string con el "tipo de dato" del parametro dado
#>>> <class 'str'>
print(len(x)) #(len) retorna un entero con la cantidad de elementos de la secuencia
#>>> 10
print(int(w)) #(int) convierte el parametro dado en un entero
#>>> 8
print(float(w)) #(float) convierte el parametro dado en un flotante
#>>> 8.0
print("2**3 ="+ " " +str(8)) #(str) convierte el parametro dado en un string
#>>> 2**3 = 8
```
{% endraw %}


### declaración de variables
{% raw %}
```python
nn = None #NoneType
bool1 = True #bool
var1 = 1 #int
var2 = 1.2 #float
var3 = 1+3j #complex
str1 = "string" #str
str2 = 'astring' #str
ls1 = [1,var1,str1,[str2,var3]] #list
tp1 = (1,var1,str1,[str2,var3]) #tuple
st1 = {"1", var1, 13} #set
dict1 = {"key1":"1", 1:"1", 2:2, ("1",1):1} #dict

#agrupacion de terminos (parentesis)
a1 = (var1+2)*3
```
{% endraw %}


### Operadores (aritmeticos, comparación, lógicos)
{% raw %}
```python
##aritmeticos
x1 = 12+5 #suma
x2 = 12-5 #resta
x3 = 12*5 #multiplicación
x4 = 12**5 #exponenciación
x5 = 12/5 #división
x6 = 12//5 #divisón entera
x7 = 12%5 #modulo
##comparación
bool1 = x1<20 #menor
bool2 = x2 <= x1 #menor o igual
bool3 = x3 > x1 #mayor
bool4 = x4 >= x3 #mayor o igual
bool5 = x1 in ls1 #pertencia
bool5 = x1 not in ls1 #no pertencia
##lógicos
bool6 = bool1 and bool2 #conjunción
bool7 = bool2 or bool3 #disyunción
bool8 = not bool2 #negación
```
{% endraw %}

### Funciones para secuencias
#### Para strings
{% raw %}
```python
x = "4500"
print(x.isdecimal()) #(isdecimal) retorna True si la cadena contine solamente numeros
#>>> True
print(x.isalpha()) #(isalpha) retorna True si la cadena contiene solamente letras
#>>> False
x = "name"
print(x.upper()) #(upper) retorna la cadena con los caracteres en mayuscula
#>>> NAME
print(x.lower()) #(lower) retorna la cadena con los caracteres en miniscula
#>>> name
print(x.find("m")) #(find) recibe como parametro una cadena y retorna la posición (o -1)
#>>> 2
print(x.find("x"))
#>>> -1
```
{% endraw %}

#### Para listas
{% raw %}
```python
x = [1, "2"]
x.append(1) #(append) agrega el parametro dado al final
print(x)
#>>> [1, '2', 1]
w = x.pop(0) #(pop) elimina el elemento en la posición dada como parametro y lo retorna
print(x,w)
#>>> ['2', 1] 1
x.extend(["3",[1+3j]]) #(extend) agrega a los elementos de otra secuencia a la lista
print(x)
#>>> ['2', 1, '3', [(1+3j)]]
print(x.index('3')) #(index) retorna la posición del elemento dado, si no existe arroja un error
#>>> 2
```

{% endraw %}