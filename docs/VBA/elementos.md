# Elementos Básicos
### Sentencias (Statements)
Una sentencia en Visual Basic(*VB*) es una unidad completa sintacticamente que expresa una acción,
declaración o definición [[1]](https://docs.microsoft.com/en-us/office/vba/language/glossary/vbe-glossary#statement). Las siguientes lineas de codigo
son ejemplos de una sentencia:
```VBA
Dim x As Integer
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

### Comentarios
