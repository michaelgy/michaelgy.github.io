# Elementos Básicos
### Comentarios
Los comentarios son lineas de texto y se utilizan generalmente para colocar notas o documentar el codigo de forma que no afecte la ejecución del programa,
toda linea que comience con `'` o con `REM` es un comentario [[1]](https://docs.microsoft.com/en-us/office/vba/language/glossary/vbe-glossary#comment), por ejemplo:
```VBA
' Esto es un comentario
'Esto es otro comentario
        ' sigue siendo un comentario
REM otra forma de escribir un comentario
```

### Sentencias (Statements)
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
### Variables
Las variables son espacios en memoria donde se almacenan los datos.
En *VB* la forma más simple de declarar es `Dim indentificador As Tipo` [[3]](https://docs.microsoft.com/en-us/office/vba/language/concepts/getting-started/declaring-variables), donde *identificador* es una cadena de caracteres que debe cumplir lo siguiente[[4]](https://docs.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/declared-elements/declared-element-names):
+ Debe comenzar con un caracter alfa numerico o con guion bajo `_`.
+ Debe contener unicamente caracteres alfa numericos o con guiones bajos `_`.
+ Debe contener al menos un caracter alfa numerico si comienza con guion bajo `_`.
+ la longitud no debe ser mayor a 1023 caracteres.

*Tipo* es algún tipo de dato reconocible por *VB*, como `Integer`, `String`, `Decimal`, `Double`, etc. Por ejemplo:
```VBA
Dim entero As Integer
Dim cadena As String
Dim cadena_init As String = "valor inicial"
Dim numero As Decimal = 123456
Dim real As Double = 7.89
Dim n1 As Integer, x As Double, nm As String
```
Para asignar valores a una variable puede hacerlo al momento de declarar la variable como en el ejemplo anterior o posteriormente utilizando el operador
de asignación `=` [[6]](https://docs.microsoft.com/en-us/dotnet/visual-basic/language-reference/operators/assignment-operator):

```VBA
Dim n As Integer
n = 10
```

Para más información sobre la sentencia `Dim` consulte [[7]](https://docs.microsoft.com/en-us/dotnet/visual-basic/language-reference/statements/dim-statement).

### Arreglos (Arrays)
Los arreglos son conjuntos de elementos de un mismo tipo, se pueden declarar
de muchas formas por ejemplo [[8]](https://docs.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/arrays/):

{% raw %}
```VBA
' Declare a single-dimension array of 5 numbers.
Dim numbers(4) As Integer

' Declare a single-dimension array and set its 4 values.
Dim numbers = New Integer() {1, 2, 4, 8}

' Change the size of an existing array to 16 elements and retain the current values.
ReDim Preserve numbers(15)

' Redefine the size of an existing array and reset the values.
ReDim numbers(15)

' Declare a 6 x 6 multidimensional array.
Dim matrix(5, 5) As Double

' Declare a 4 x 3 multidimensional array and set array element values.
Dim matrix = New Integer(3, 2) {{1, 2, 3}, {2, 3, 4}, {3, 4, 5}, {4, 5, 6}}

' Declare a jagged array
Dim sales()() As Double = New Double(11)() {}
```
{% endraw %}
Para asignar valores a un arreglo puede hacerlo al momento de declarar la variable como en el ejemplo anterior o posteriormente utilizando el operador
de asignación `=` :

```VBA
' Declare a single-dimension array of 4 numbers.
Dim numeros(3) As Integer
numeros(0) = 1
numeros(1) = 2
numeros(3) = 4
```
Note del ejemplo anterior que no es necesario definir un valor para todos
los elementos del arreglo, todos los arreglos tienen valores por defecto
que dependen del tipo de datos del arreglo, en el caso de `Integer` el valor
por defecto es `0`.

### Elementos de control

+ Condicionales:
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
+ Ciclo for:
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

{% raw %}
```VBA
Dim total As Integer
total = 0
For Each c In Hoja1.Range("A1:D10")
    c.Value = total
    total = total + 1
Next c
```
{% endraw %}

{% raw %}
```VBA
Dim myValue As Variant
myValue = InputBox("numero < 3", "Titulo", 2)
For x = 1 To myValue Step 1
    MsgBox cStr(x)
Next 
```
{% endraw %}
