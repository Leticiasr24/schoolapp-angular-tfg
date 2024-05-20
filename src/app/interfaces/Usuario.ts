import { DocumentReference } from "@angular/fire/firestore";

export interface Usuario {
        id_user: number;
        nombre_usuario: string;
        dni_usuario: string;
        tlf_usuario: string;
        email_usuario: string;
        fecha_nacimiento_usuario: string;
        direccion_usuario: string;
        cod_postal_usuario: string;
        municipio_id: string; // ID del municipio en Firestore
        repetidor_usuario?: boolean; // Opcional
        recogida_usuario?: boolean; // Opcional
        curso_id?: number; // Opcional
        rol_id: DocumentReference; // ID del rol en Firestore
        recordatorio_id: number; // ID del recordatorio en Firestore
        anuncio_id: string[]; // ID del anuncio en Firestore
        tutor_id?: number; // ID del tutor en Firestore (opcional)
        nombre_padre?: string; // Opcional
        dni_padre?: string; // Opcional
        email_padre?: string; // Opcional
        horarios_id: string[]; // Arreglo de IDs de horarios
        ult_curso_trabajado?: string; // Opcional
        ult_centro_trabajo?: string; // Opcional
        municipio_trabajado_id: string; // ID del municipio trabajado en Firestore
        departamento_id?: string; // Opcional
        grupo_asignado_id?: number; // ID del grupo asignado en Firestore (opcional)
        asignatura_id?: string[];
}
