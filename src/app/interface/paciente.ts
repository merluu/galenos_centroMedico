export interface Paciente {
    run_paciente : string;
    nombres : string;
    ape_paterno : string;
    ape_materno: string;
    telefono: string;
    comuna: string;
    direccion: string;
    correo: string;
    contrasenia: string;
}

export interface Pacientes {
    pacientes: Paciente[];
}

