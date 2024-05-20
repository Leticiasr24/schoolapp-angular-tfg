export interface Chat {
        id: string; // ID del mensaje en Firestore
        id_usuario_envia: string; // ID del usuario que envía el mensaje
        id_usuario_recibe: string; // ID del usuario que recibe el mensaje
        contenido: string; // Contenido del mensaje
        fecha_registro: Date; // Fecha de registro del mensaje (tipo Timestamp)
      
}
