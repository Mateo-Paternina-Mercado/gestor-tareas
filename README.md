# 📝 Gestor de Tareas CLI

Sistema de gestión de tareas por consola, completamente modular, con persistencia en archivos y potenciado con Lodash.

Inspirado por las sabias y urgentes palabras de Don Brian ☕💼

---

## 🚀 Funcionalidades

- Crear tareas con validaciones
- Listar tareas (ordenadas por estado y alfabéticamente)
- Editar descripciones
- Eliminar con confirmación
- Persistencia en archivo `data/tareas.json`
- Evita duplicados
- Ordena, agrupa y filtra con Lodash
- Interfaz CLI con `inquirer`

---

## 🗂️ Estructura del Proyecto

```TXT
gestor-tareas/
├── index.js
├── data/
│ └── tareas.js
├── utils/
│ ├── menu.js
│ └── archivo.js
├── controllers/
│ └── tareasController.js
├── models/
│ └── tarea.js
├── package.json
└── README.md
```

---

## 📦 Instalación

```jsx
git clone <https://github.com/Mateo-Paternina-Mercado/gestor-tareas>

cd gestor-tareas

npm i
```

## ▶️ Uso

```jsx
node index.js o npm start
```

Navega por el menú interactivo usando las flechas del teclado.

## 📚 Dependencias

**inquirer** – Interfaz CLI

**lodash** – Utilidades de manipulación

**chalk** (opcional) – Colores en consola

Instalación: 

```jsx
npm install inquirer lodash chalk 
```

## 🧠 Inspiración

"Quiero orden, control y archivos... ¡y usa esa cosa llamada Lodash!"
— Don Brian, líder implacable de las tareas internas

## 📬 Contacto

¿Mejoras, bugs, o nuevas features?
¡Haz un fork, un pull request, o crea un issue! 

## ✅ Autor

Desarrollado por Mateo Paternina Mercado para el Taller de Refactorización y Modularización de Campuslands.