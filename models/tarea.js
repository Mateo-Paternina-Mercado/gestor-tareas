export default function crearTarea(descripcion) {
    return {
      id: Date.now(),
      descripcion: descripcion.trim(),
      completada: false
    };
  }
  