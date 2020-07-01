using System;


public class Parcial{
    public static void Main(){

        int Cantidad_datos = Convert.ToInt32(Microsoft.VisualBasic.Interaction.InputBox("Cantidad datos:"));
        int[] datoM = new int[Cantidad_datos];
        double[] datoK = new double[Cantidad_datos];
        for(int contador_datos = 0; contador_datos<Cantidad_datos; contador_datos++){
            datoM[contador_datos] = Convert.ToInt32(Microsoft.VisualBasic.Interaction.InputBox("datoM:"));
            datoK[contador_datos] = Convert.ToDouble(Microsoft.VisualBasic.Interaction.InputBox("datoK:"));
            string m = DeterminarMensajeResultado(datoM[contador_datos],datoK[contador_datos]);
            Microsoft.VisualBasic.Interaction.MsgBox($"MensajeResultado: {m}");
        }
        double Media = calcularMedia(datoK, Cantidad_datos);
        string reporte = ConstruyeReporte(Media, datoM, datoK, Cantidad_datos);
        Microsoft.VisualBasic.Interaction.MsgBox($"reporte: {reporte}");
    }
    public static string DeterminarMensajeResultado(int modelo, double recorrido){
        string mensajeResultado;
        if(modelo>=2017){
            if(recorrido<20000){
                mensajeResultado = "Plena";
            }
            else{
                mensajeResultado = "Extendida";
            }
        }
        else{
            mensajeResultado = "Vencida";
        }
        return mensajeResultado;
    }
    public static double calcularMedia (double[] datoK, int cantidadDatos ) {
        double tempK = datoK[0];
        double media = 0.0;
        for (int i = 0; i < datoK.Length - 1; i++) {
            for (int j = 0; j < datoK.Length - 1 - i; j++) {
                if (datoK[j] > datoK[j + 1]) {
                    tempK = datoK[j];
                    datoK[j] = datoK[j + 1];
                    datoK[j + 1] = tempK;
                }
            }
        }
        media = (datoK[0] + datoK[datoK.Length - 1]) / 2.0;
        return media;
    }
    public static string ConstruyeReporte(double Media, int[] datoM, double[] datoK, int Cantidad_datos){
        string reporte = "Datos iniciales";
        for(int contador_datos = 0; contador_datos<Cantidad_datos; contador_datos++){
            if(datoK[contador_datos]<Media){
                reporte += $" {datoM[contador_datos]} {datoK[contador_datos]}";
            }
        }
        return reporte;
    }
}

public class Entrega{

    public void Principal(){

        int Cantidad_datos = Convert.ToInt32(Microsoft.VisualBasic.Interaction.InputBox("Cantidad datos:"));
        int[] datoM = new int[Cantidad_datos];
        double[] datoK = new double[Cantidad_datos];
        for(int contador_datos = 0; contador_datos<Cantidad_datos; contador_datos++){
            datoM[contador_datos] = Convert.ToInt32(Microsoft.VisualBasic.Interaction.InputBox("datoM:"));
            datoK[contador_datos] = Convert.ToDouble(Microsoft.VisualBasic.Interaction.InputBox("datoK:"));
            string m = DeterminarMensajeResultado(datoM[contador_datos],datoK[contador_datos]);
            Microsoft.VisualBasic.Interaction.MsgBox($"MensajeResultado: {m}");
        }
        double Media = calcularMedia(datoK, Cantidad_datos);
        string reporte = ConstruyeReporte(Media, datoM, datoK, Cantidad_datos);
        Microsoft.VisualBasic.Interaction.MsgBox($"reporte: {reporte}");
    }


    public string DeterminarMensajeResultado(int modelo, double recorrido){
        string mensajeResultado;
        if(modelo>=2017){
            if(recorrido<20000){
                mensajeResultado = "Plena";
            }
            else{
                mensajeResultado = "Extendida";
            }
        }
        else{
            mensajeResultado = "Vencida";
        }
        return mensajeResultado;
    }
    public double calcularMedia (double[] datoK, int cantidadDatos ) {
        double tempK = datoK[0];
        double media = 0.0;
        for (int i = 0; i < datoK.Length - 1; i++) {
            for (int j = 0; j < datoK.Length - 1 - i; j++) {
                if (datoK[j] > datoK[j + 1]) {
                    tempK = datoK[j];
                    datoK[j] = datoK[j + 1];
                    datoK[j + 1] = tempK;
                }
            }
        }
        media = (datoK[0] + datoK[datoK.Length - 1]) / 2.0;
        return media;
    }
    public string ConstruyeReporte(double Media, int[] datoM, double[] datoK, int Cantidad_datos){
        string reporte = "Datos iniciales";
        for(int contador_datos = 0; contador_datos<Cantidad_datos; contador_datos++){
            if(datoK[contador_datos]<Media){
                reporte += $" {datoM[contador_datos]} {datoK[contador_datos]}";
            }
        }
        return reporte;
    }
}

/*
namespace FormWithButton
{
    public class Ejercicio
    {
        public static void principal(){
            int equipos = 3;
            string[] nombres;
            int[] pganados, pperdidos,puntaje;
            nombres = new string[equipos];
            pganados = new int[equipos];
            pperdidos = new int[equipos];
            puntaje = new int[equipos];
            
            for(int i = 0; i<equipos; i++){
                nombres[i] = Microsoft.VisualBasic.Interaction.InputBox($"Nombre del equipo {i+1}: ",
                            "Nombres");
                pganados[i] = Convert.ToInt32(Microsoft.VisualBasic.Interaction.InputBox($"partidos ganados del equipo {i+1}: ",
                            "Partidos ganados"));
                pperdidos[i] = Convert.ToInt32(Microsoft.VisualBasic.Interaction.InputBox($"partidos perdidos del equipo {i+1}: ",
                            "Partidos perdidos"));
                puntaje[i] = 38+2*pganados[i]-pperdidos[i];
                Microsoft.VisualBasic.Interaction.MsgBox($"{puntaje[i]}");
            }
            bsort(puntaje,nombres);
            mostrar(nombres);
            bsort(nombres);
            mostrar(nombres);
        }

        public static void mostrar(object[] arr, int n = 3){
            string salida = "";
            for(int i = 0; i<n; i++){
                salida += $"{arr[i]}";
            }
            Microsoft.VisualBasic.Interaction.MsgBox(salida);
        }

        public static string[] bsort(int[] puntaje, string[] nombres, int equipos = 3){
            int tmp;
            string tmp1;
            for(int j = 0; j < equipos; j++){
                for(int i = 0; i< equipos-1; i++){
                    if(puntaje[i]<puntaje[i+1]){
                        tmp = puntaje[i];
                        puntaje[i] = puntaje[i+1];
                        puntaje[i+1] = tmp;
                        tmp1 = nombres[i];
                        nombres[i] = nombres[i+1];
                        nombres[i+1] = tmp1;
                    }
                }
            }
            return nombres;
        }
        public static string[] bsort(string[] nombres, int equipos = 3){
            string tmp1;
            for(int j = 0; j < equipos; j++){
                for(int i = 0; i< equipos-1; i++){
                    if(nombres[i][0]<nombres[i+1][0]){
                        tmp1 = nombres[i];
                        nombres[i] = nombres[i+1];
                        nombres[i+1] = tmp1;
                    }
                }
            }
            return nombres;
        }
    }

    public class Prueba
    {
        static void Main()
        {
            Ejercicio.principal();
        }
    }
}
*/