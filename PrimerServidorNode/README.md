# Filtrador y Ordenador de Arrays

Este servicio permite filtrar y ordenar arrays según el tipo de dato especificado (números, strings o booleanos).

## Características

- Filtra elementos por tipo de dato (number, string, boolean)
- Ordena los elementos filtrados
- Genera un archivo de salida con el resultado
- Validaciones de entrada
- Formato de salida legible

## Requisitos Previos

- Node.js (versión 14 o superior)
- npm (incluido con Node.js)

## Uso

El servicio se puede ejecutar de dos formas:

### 1. Ejecución Normal
```bash
npm start
```

### 2. Ejecución en Modo Watch (con recarga automática)
```bash
npm run watch
```

## Estructura del Código

- `index.js`: Archivo principal que contiene la lógica de filtrado y ordenamiento
- `output.txt`: Archivo generado con los resultados del procesamiento

## Ejemplos de Uso

El servicio procesa un array predefinido que contiene:
```javascript
[2,10,"a",4,"b",6,"d",true,"e",9,1,"z",12,"r", "c", false]
```

Puedes modificar el tipo de filtrado cambiando el parámetro en la última línea del archivo `index.js`:
- `"number"`: Filtra y ordena números
- `"string"`: Filtra y ordena strings
- `"boolean"`: Filtra y ordena booleanos

## Salida

El resultado se mostrará en:
1. La consola (en formato de tabla)
2. El archivo `output.txt` (en formato JSON indentado)

## Integrantes

- Manuel Dubovis
- Patricio Baez
- Meital Srougo
- Ignacio Igartua
