import inquirer from 'inquirer';
import _ from 'lodash';
import crearTarea from '../models/tarea.js';
import { guardarTareas, cargarTareas } from '../utils/archivo.js';

let tareas = cargarTareas();

export async function agregarTarea() {
  const { descripcion } = await inquirer.prompt([
    { type: 'input', name: 'descripcion', message: 'Descripción de la tarea:' }
  ]);

  if (_.isEmpty(descripcion.trim())) {
    return console.log('⚠️ No puedes ingresar una tarea vacía.');
  }

  const nueva = crearTarea(descripcion);
  tareas.push(nueva);
  tareas = _.uniqBy(tareas, 'descripcion');
  guardarTareas(tareas);
  console.log('✅ Tarea agregada.');
}

export function listarTareas() {
  if (_.isEmpty(tareas)) {
    console.log('📭 No hay tareas registradas.');
    return;
  }

  const ordenadas = _.orderBy(tareas, ['completada', 'descripcion'], ['asc', 'asc']);
  console.log('\n📋 Lista de tareas:');
  ordenadas.forEach((t, i) => {
    const estado = t.completada ? '✅' : '❌';
    console.log(`${i + 1}. [${estado}] ${t.descripcion}`);
  });
}

export async function editarTarea() {
  if (_.isEmpty(tareas)) return console.log('⚠️ No hay tareas para editar.');

  const { indice } = await inquirer.prompt([
    {
      type: 'list',
      name: 'indice',
      message: 'Selecciona una tarea para editar:',
      choices: tareas.map((t, i) => ({ name: t.descripcion, value: i }))
    }
  ]);

  const { nuevaDescripcion } = await inquirer.prompt([
    { type: 'input', name: 'nuevaDescripcion', message: 'Nueva descripción:' }
  ]);

  if (_.isEmpty(nuevaDescripcion.trim())) {
    return console.log('⚠️ Descripción no válida.');
  }

  tareas[indice].descripcion = nuevaDescripcion.trim();
  guardarTareas(tareas);
  console.log('✏️ Tarea actualizada.');
}

export async function eliminarTarea() {
  if (_.isEmpty(tareas)) return console.log('⚠️ No hay tareas para eliminar.');

  const { indice } = await inquirer.prompt([
    {
      type: 'list',
      name: 'indice',
      message: 'Selecciona una tarea para eliminar:',
      choices: tareas.map((t, i) => ({ name: t.descripcion, value: i }))
    }
  ]);

  const { confirmar } = await inquirer.prompt([
    { type: 'confirm', name: 'confirmar', message: '¿Estás seguro?', default: false }
  ]);

  if (confirmar) {
    tareas.splice(indice, 1);
    guardarTareas(tareas);
    console.log('🗑️ Tarea eliminada.');
  }
}
