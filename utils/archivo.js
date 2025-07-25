import fs from 'fs';
import path from 'path';

const ruta = path.resolve('data/tareas.json');

export function guardarTareas(tareas) {
  fs.writeFileSync(ruta, JSON.stringify(tareas, null, 2));
}

export function cargarTareas() {
  if (!fs.existsSync(ruta)) return [];
  const data = fs.readFileSync(ruta, 'utf-8');
  return JSON.parse(data);
}
