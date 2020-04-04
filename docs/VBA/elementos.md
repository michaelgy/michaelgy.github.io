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
En *VB* la forma más simple de declarar es `Dim indentificador As Tipo` [[3]](https://docs.microsoft.com/en-us/office/vba/language/concepts/getting-started/declaring-variables), donde *identificador* es una cadena de caracteres que debe cumplir con las [reglas de nombramiento de VBA](https://docs.microsoft.com/en-us/office/vba/language/concepts/getting-started/visual-basic-naming-rules), *Tipo* es algún tipo de dato reconocible por *VB*, como `Integer`, `String`, `Decimal`, `Double`, etc. Por ejemplo:
```VBA
Dim entero As Integer
Dim cadena1, cadena2 As String
Dim n1 As Integer, x As Double, nm As String
```
Puede asignar un valor a la variable posteriormente utilizando la sentencia de asignación `=` [[6]](https://docs.microsoft.com/en-us/office/vba/language/concepts/getting-started/writing-assignment-statements):

```VBA
Dim n As Integer
n = 10
```

Para más información sobre la declaración de variables consulte [[7]](https://docs.microsoft.com/en-us/office/vba/language/concepts/getting-started/declaring-variables).

## Arreglos (Arrays)
Los arreglos son conjuntos de elementos de un mismo tipo, se pueden declarar
de muchas formas([[8]](https://docs.microsoft.com/en-us/office/vba/language/concepts/getting-started/declaring-arrays),[[9]](https://docs.microsoft.com/en-us/office/vba/language/concepts/getting-started/using-arrays)), por ejemplo:

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
Los operadores aritmeticos en **VBA** son suma(`a+b`), resta(`a-b`), negación(`-a`), multiplicación(`a*b`), division(`a/b`), division entera(`a\b`) y modulo(`a Mod b`), los operandos (`a` y `b`) deben ser expresiones que al evaluarlas den como resultado un valor numerico [[10]](https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/operator-summary), por ejemplo:

{% raw %}
```VBA
Dim i As Integer
i = 4 + 4

Dim x(8-2) As Integer
```
{% endraw %}

### Operadores de comparación
Los operadores de comparación en **VBA** son menor que (`a<b`), menor o igual  que (`a<=b`), mayor que (`a>b`), mayor o igual que (`a>=b`), igual que (`a=b`), diferente (`a<>b`), donde `a` y `b` son expresiones numericas o strings, la función que realiza cada operador es la usual (comparación de numeros o comparación lexicografica, respectivamente), para más información consulte [[11]](https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/comparison-operators). Ademas de los anteriores operadores de comparación, **VBA** cuenta con los operadores:
+ **Is**  es utilizado para comparar si dos objetos se refieren al mismo objeto [[12]](https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/is-operator), por ejemplo:

{% raw %}
```VBA
Dim c, x As Range
Set c = Range("A1")
Set x = Range("B1")
MsgBox c Is x 'False
Set x = Range("A1")
MsgBox c Is x 'False
Set x = c
MsgBox c Is x 'True
```
{% endraw %}

+ **Like** es utilizado para comparar dos cadenas, en particular la sintaxis es la siguiente `strx Like pattern`, donde `strx` y `pattern ` son `String` pero el operador considera `pattern` como una expresión regular [[13]](https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/like-operator), ejemplos:

{% raw %}
```VBA
MyCheck = "aBBBa" Like "a*a"    ' Returns True.
MyCheck = "F" Like "[A-Z]"    ' Returns True.
MyCheck = "F" Like "[!A-Z]"    ' Returns False.
MyCheck = "a2a" Like "a#a"    ' Returns True.
MyCheck = "aM5b" Like "a [L-P]#[!c-e]"    ' Returns True.
MyCheck = "BAT123khg" Like "B?T*"    ' Returns True.
MyCheck = "CAT123khg" Like "B?T*"    ' Returns False.
MyCheck = "ab" Like "a*b"    ' Returns True.
MyCheck = "a*b" Like "a [*]b"    ' Returns False.
MyCheck = "axxxxxb" Like "a [*]b"    ' Returns False.
MyCheck = "a [xyz" Like "a [[]*"    ' Returns True.
MyCheck = "a [xyz" Like "a [*"    ' Throws Error 93 (invalid pattern string).
```
{% endraw %}

### Operadores de concadenación
Los operadores de concatenación para `String` en **VBA** son `&` y `+`, ambos operadores tienen la misma función y es por eso que se recomienda usar solamente `&` como operador de concatenación (para evitar ambigüedades) [[14]](https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/ampersand-operator), ejemplo:

{% raw %}
```VBA
Dim s1,s2 As String
s1 = "cade"
s2 = "na"
MsgBox s1 & s2
MsgBox s1 + s2 'el resultado es el mismo pero no se recomienda usar esta forma
```
{% endraw %}

### Operadores lógicos
Los operadores lógicos en **VBA** son conjunción (`And`), equivalencia logica (`Eqv`), implicación (`Imp`), negación (`Not`), disyunción (`Or`) y disyunción exclusiva (`Xor`) [[15]](https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/operator-summary), por ejemplo:

{% raw %}
```VBA
Dim A, B, C, MyCheck As Single
A = 10: B = 8: C = 6
MyCheck = A > B Imp B > C    ' Returns True.
MyCheck = A > B Imp C > B    ' Returns False.
MyCheck = B > A Imp C > B    ' Returns True.
MyCheck = B > A Imp C > D    ' Returns True.

MyCheck = A > B And B > C    ' Returns True.
MyCheck = A > B And C > B    ' Returns False.

MyCheck = A > B Or C > B    ' Returns True.

MyCheck = A > B Eqv C > B    ' Returns False.
MyCheck = B > A Eqv C > B    ' Returns True.
MyCheck = A > B Eqv B > C    ' Returns True.

MyCheck = A > B Xor C > B    ' Returns True.
MyCheck = B > A Xor C > B    ' Returns False.

MyCheck = Not A > B          ' Returns False.
MyCheck = Not B > A          ' Returns False.
```
{% endraw %}

### Precedencia de los operadores
La precedencia se refiere al orden en el que se ejecutan los operadores en una expresión, el orden de ejecución de los operadores se muestra en la siguiente tabla (el primer operador se ejecuta primero, luego el segundo, ...) y si dos operadores tienen la misma precedencia se ejecuta primero el de más a la izquierda [[16]](https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/operator-precedence):

<table>
    <colgroup>
        <col width="50%" />
        <col width="50%" />
        </colgroup>
    <thead>
        <tr>
        <th>Tipo de operador</th>
        <th>Operador</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td rowspan= "7" >Aritmeticos</td>
        <td>^</td>
        </tr>
        <tr>
        <td>- (Negación)</td>
        </tr>
        <tr>
        <td>*, /</td>
        </tr>
        <tr>
        <td>\</td>
        </tr>
        <tr>
        <td>Mod</td>
        </tr>
        <tr>
        <td>+, -</td>
        </tr>
        <tr>
        <td>&amp;</td>
        </tr>
        <tr>
        <td rowspan= "7" >Comparación</td>
        <td>=</td>
        </tr>
        <tr>
        <td>&lt;&gt;</td>
        </tr>
        <tr>
        <td>&lt;</td>
        </tr>
        <tr>
        <td>&gt;</td>
        </tr>
        <tr>
        <td>&lt;=</td>
        </tr>
        <tr>
        <td>&gt;=</td>
        </tr>
        <tr>
        <td>Like, Is</td>
        </tr>
        <tr>
        <td rowspan= "6" >Logicos</td>
        <td>Not</td>
        </tr>
        <tr>
        <td>And</td>
        </tr>
        <tr>
        <td>Or</td>
        </tr>
        <tr>
        <td>Xor</td>
        </tr>
        <tr>
        <td>Eqv</td>
        </tr>
        <tr>
        <td>Imp</td>
        </tr>
    </tbody>
</table>

Utilice parentesis `()` para hacer explicito cual es el orden de ejecución de los operadores, por ejemplo la expresión `Not a ^ 2 * b > a + b` es equivalente a `Not ( ( ( a ^2)*b ) > ( a + b ) )`

## Elementos de control

### Condicionales
Los *condicionales* se utilizan principalmente cuando la ejecución de un grupo de sentencias dependen de cierta condición que se debe cumplir [[17]](https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/ifthenelse-statement), por ejemplo:

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
El *ciclo for* se utiliza para ejecutar un grupo de sentencias una cantidad determinada de veces [[18]](https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/fornext-statement), por ejemplo:
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
ciclo `For Each ... In ... Next`, la ventaja de este es que permite obtener uno a uno los elementos de un arreglo o una colección de datos [[19]](https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/for-eachnext-statement), como lo muestra el siguiente ejemplo:

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

### Ciclo while
El ciclo se utiliza cuando se requiere ejecutar varias veces un conjunto de sentencias hasta que una determinada expresión lógica al evaluarla su resultado sea `False` [[20]](https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/whilewend-statement), por ejemplo:

{% raw %}
```VBA
Dim x as Integer
x = 2
While x<100
    x = x*x
Wend
```
{% endraw %}

## Procedimientos (Sub, Function)

Los procedimientos son un conjunto de sentencias que se ejecutan como una unidad [[21]](https://docs.microsoft.com/en-us/office/vba/language/glossary/vbe-glossary#procedure), además no se puede declarar un procedimiento dentro de otro, pero un procedimiento si puede llamar a otro. Para ejecutar un procedimiento se puede utilizar la sentencia `Call` o se puede omitir esta y usar simplemente el nombre del procedimiento [[22]](https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/call-statement).

### Sub
El procedimiento **Sub** no retorna ningun valor y se pueden declarar con cero o más parametros [[23]](https://docs.microsoft.com/en-us/office/vba/language/concepts/getting-started/writing-a-sub-procedure), por ejemplo:

{% raw %}
```VBA
Sub proc1(x As String)
MsgBox "procedimiento 1 con parametro " & x
End Sub

Sub proc2()
MsgBox "procedimiento 2"
proc1 (":2")
End Sub

Sub proc3()
MsgBox "procedimiento 3"
'Otra forma de asignar valores a un parametro
Call proc1(x:=":3")
'Otra mas
proc1 x:=":)" ' proc1 ":)"
End Sub
```
{% endraw %}

### Function
El procedimiento **Function** a diferencia del **Sub** retorna un valor y se pueden declarar con cero o más parametros, el valor que retorna se debe asignar dentro de la función y la variable a la que se asigna tiene el mismo nombre que la función (note que la variable no puede ser declarada dentro de la función dado que es una variable especial que se debe asignar para que la función pueda retornar un valor) [[23]](https://docs.microsoft.com/en-us/office/vba/language/concepts/getting-started/writing-a-function-procedure), por ejemplo:
{% raw %}
```VBA

' Grados fahrenheit a celsius
Function Celsius(fDegrees) 
 Celsius = (fDegrees - 32) * 5 / 9 
End Function

'Esta funcion retorna un numero aleatorio
' de 0 a 1
Function aleatorio() As Double
    Randomize
    aleatorio = Rnd
End Function
```
{% endraw %}
