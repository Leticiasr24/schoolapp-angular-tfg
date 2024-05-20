export interface Anuncio {
    id_anuncio: string;
    nombre_anuncio: string;
    contenido_anuncio: string;
    curso_id?: string; // ID del curso en Firestore (opcional)
    grupo_id?: string; // ID del grupo en Firestore (opcional)
    usuario_id: string[]; // Relación muchos a muchos con Usuario
}
