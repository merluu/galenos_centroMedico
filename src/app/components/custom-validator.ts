import { FormGroup, ValidationErrors } from '@angular/forms';

export function passwordsMatchValidator(group: FormGroup): ValidationErrors | null {
    const contrasenia = group.get('contrasenia')?.value;
    const contrasenia2 = group.get('contrasenia2')?.value;

    if (contrasenia !== contrasenia2) {
    return { passwordsMatch: true };
    }

    return null;
}




