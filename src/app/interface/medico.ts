export interface Medico {
    run_medico : string;
    nombres : string;
    ape_paterno : string;
    ape_materno: string;
    telefono: string;
    comuna: string;
    direccion: string;
    correo: string;
    contrasenia: string;
}


export interface Medicos {
    medicos: Medico[];
}
