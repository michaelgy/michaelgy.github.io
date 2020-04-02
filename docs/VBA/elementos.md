# Elementos Básicos
## Comentarios
Los comentarios son lineas de texto y se utilizan generalmente para colocar notas o documentar el codigo de forma que no afecte la ejecución del programa,
toda linea que comience con `'` o con `REM` es un comentario [[1]](https://docs.microsoft.com/en-us/office/vba/language/glossary/vbe-glossary#comment), por ejemplo:
```VBA
' Esto es un comentario
'Esto es otro comentario
        ' sigue siendo un comentario
REM otra forma de escribir un comentario
```

## Sentencias (Statements)
Una sentencia en Visual Basic(*VB*) es una unidad completa sintacticamente que expresa una acción,
declaración o definición [[2]](https://docs.microsoft.com/en-us/office/vba/language/glossary/vbe-glossary#statement). Las siguientes lineas de codigo
son ejemplos de una sentencia:
```VBA
Dim x As Integer
x = 10
Range("A1").Value = x
Range("A1").Select
```
Varias sentencias se pueden separar en una misma linea usando `:`, por ejemplo:
```VBA
' crear dos variables: x e y.
Dim x As Integer: Dim y As Integer
' Es lo mismo que
Dim x As Integer
Dim y As Integer
```
Una misma sentencia se puede dividir en varias lineas usando `_`, por ejemplo:
```VBA
' crear variable x
Dim _
x _
As Integer
' Es lo mismo que
Dim x As Integer
```
## Variables
Las variables son espacios en memoria donde se almacenan los datos.
En *VB* la forma más simple de declarar es `Dim indentificador As Tipo` [[3]](https://docs.microsoft.com/en-us/office/vba/language/concepts/getting-started/declaring-variables), donde *identificador* es una cadena de caracteres que debe cumplir con las [reglas de nombramiento de VBA](https://docs.microsoft.com/en-us/office/vba/language/concepts/getting-started/visual-basic-naming-rules)

*Tipo* es algún tipo de dato reconocible por *VB*, como `Integer`, `String`, `Decimal`, `Double`, etc. Por ejemplo:
```VBA
Dim entero As Integer
Dim cadena As String
Dim n1 As Integer, x As Double, nm As String
```
Para asignar valores a una variable puede hacerlo posteriormente utilizando el la sentencia de asignación `=` [[6]](https://docs.microsoft.com/en-us/office/vba/language/concepts/getting-started/writing-assignment-statements):

```VBA
Dim n As Integer
n = 10
```

Para más información sobre la declaración de variables consulte [[7]](https://docs.microsoft.com/en-us/office/vba/language/concepts/getting-started/declaring-variables).

## Arreglos (Arrays)
Los arreglos son conjuntos de elementos de un mismo tipo, se pueden declarar
de muchas formas([[8]](https://docs.microsoft.com/en-us/office/vba/language/concepts/getting-started/declaring-arrays),[[9]](https://docs.microsoft.com/en-us/office/vba/language/concepts/getting-started/declaring-arrays)), por ejemplo:

{% raw %}
```VBA
' Declarar un arreglo de 3 enteros
Dim numbers1(2) As Integer
numbers1(0) = 1
numbers1(1) = 10
numbers1(2) = 100

' Declarar un arreglo Variant (sin tipo definido) y tamaño dinamico
Dim numbers2()

' Definir el tamaño de un arreglo previamente definido y preservar los datos
' Solo funciona cuando el arreglo no tenía un tamaño definido
ReDim Preserve numbers2(15)
numbers2(10) = 100

' Cambiar el tamaño de un arreglo previamente definido y elimina los datos
ReDim numbers2(8)

' Declara un arreglo con posiciones validas dt(2) y dt(3)
Dim dt(2 To 3) As Long
' numbers3(0) = 10 es un error
' numbers3(1) = 1 es un error

' Declare a 6 x 6 multidimensional array.
Dim matrix(5, 5) As String
matrix(1, 1) = "pro"
matrix(3, 4) = "bando"
```
{% endraw %}

Note del ejemplo anterior que no es necesario definir un valor para todos
los elementos del arreglo, todos los arreglos tienen valores por defecto
que dependen del tipo de datos del arreglo, en el caso de `Integer` el valor
por defecto es `0`.

## Operadores

los operadores deben utilizarse solamente en sentencias (declaración de variables, condicionales, ciclos, ...)

{% raw %}
```VBA
'Escribir lo siguiente en un script es un error
4 + 4
'Dado que la operación no esta dentro de una sentencia.
```
{% endraw %}

### Operadores  aritmeticos
Los operadores aritmeticos en **VBA** son suma(`a+b`), resta(`a-b`), multiplicación(`a*b`), division(`a\b`), division entera(`a/b`), modulo(`a Mod b`). Estos operadores deben utilizarse en cuyos operandos (`a` y `b`) sean expresiones que al evaluarlas den como resultado un valor numerico [[10]](https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/operator-summary), por ejemplo:

{% raw %}
```VBA
Dim i As Integer
i = 4 + 4

Dim x(8-2) As Integer
```
{% endraw %}

### Operadores de comparación
Los operadores de comparación en **VBA** son menor que (`a<b`), menor o igual  que (`a<=b`), mayor que (`a>b`), mayor o igual que (`a>=b`), igual que (`a=b`), diferente (`a<>b`), si `a` y `b` son expresiones númericos o strings 

## Elementos de control

### Condicionales
Los condicionales se utilizan principalmente cuando la ejecución de ciertas sentencias dependen de cierta condición que se debe cumplir, por ejemplo:

{% raw %}
```VBA
Dim randomn As Double
random = WorksheetFunction.RandBetween(0, 10)
Dim count As Integer: count = CInt(random)
Dim message As String

If count = 0 Then
    message = "No hay elementos"
ElseIf count = 1 Then
    message = "Hay 1 un elemento"
Else
    message = "Hay " & CStr(count) & " Elementos"
End If
MsgBox message
```
{% endraw %}

### Ciclo for
{% raw %}
```VBA
Dim randomn As Double
random = WorksheetFunction.RandBetween(0, 10)
Dim count As Integer: count = 0

Dim message As String
For numbs = random To 1 Step -2
    count = count + numbs
Next
MsgBox "random = " & CStr(random) & " count = " & CStr(count)
```
{% endraw %}

Una alternativa para el ciclo `For ... To ... Next` del ejemplo anterior es el
ciclo `For Each ... In ... Next`, como lo muestra el siguiente ejemplo

{% raw %}
```VBA
Dim total As Integer
total = CInt(InputBox("numero < 3", "Titulo", 2))
For Each c In Range("A1:D10")
    c.Value = total
    total = total + 1
Next c
```
{% endraw %}