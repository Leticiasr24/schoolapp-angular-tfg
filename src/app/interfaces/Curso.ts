export interface Curso {
        id_curso: string;
        nombre: string;
        grupo_id: string; // ID del grupo en Firestore
        tutor_id: string; // ID del tutor en Firestore
        horario_id: string; // ID del horario en Firestore
      
}
