export interface Reserva {
    run_medico_disponibilidad : string;
    run_paciente: string;
    metodo_pago: string;
    valor_atencion: string;
    fecha_disponibilidad: string;
    id_bloque_disponibilidad: string;
    correo: string;
}


export interface Reservas {
    reservas: Reserva[];
}
