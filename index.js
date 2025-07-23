import mostrarMenu from './utils/menu.js';
import { listarTareas, agregarTarea, editarTarea, eliminarTarea } from './controllers/tareasController.js';
import { cargarTareas, guardarTareas } from './utils/archivo.js';

console.clear();
console.log('📘 Bienvenido al Gestor de Tareas de Don Brian');

async function main() {
  let salir = false;

  while (!salir) {
    const opcion = await mostrarMenu();

    switch (opcion) {
      case '1':
        await agregarTarea();
        break;
      case '2':
        listarTareas();
        break;
      case '3':
        await editarTarea();
        break;
      case '4':
        await eliminarTarea();
        break;
      case '5':
        salir = true;
        console.log('👋 ¡Hasta pronto!');
        break;
    }
  }
}

main();
