import { Component } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { MunicipiosService } from 'src/app/services/municipios.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-altaalumno',
  templateUrl: 'altaalumno.component.html',
  styleUrls: ['altaalumno.component.css'],
})

export class Altaalumno {

formularioAlumnos: FormGroup;
formularioCurso: FormGroup;
municipios: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private municipiosService: MunicipiosService,
    private usuariosService: UsuariosService
  ) {
  }
  
  ngOnInit() {
    this.municipiosService.obtenerMunicipios().subscribe(
      (data: string[]) => {
        this.municipios = data;
        console.log(data);
      },
      (error) => {
        console.error('Error al obtener municipios', error);
      }
    );

    this.formularioAlumnos = this.formBuilder.group({
      nombre: ['', Validators.required],
      dni: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      direccion: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      municipio: ['', Validators.required],
      cpostal: ['', Validators.required],
      tlf: ['', Validators.required],
      contrasena: ['', Validators.required],
      grupo: ['', Validators.required],
      nombre_padre: ['', Validators.required],
      email_padre: ['', [Validators.required, Validators.email]],
      dni_padre: ['', Validators.required],
      repetidor: [false, Validators.required],
      recogida: [false, Validators.required],
      rol: ['alumno']

    });

    this.formularioCurso = this.formBuilder.group({
      curso: ['', Validators.nullValidator],
      asignaturaOptativa1: ['', Validators.nullValidator],
      asignaturaOptativa2: ['', Validators.nullValidator],
      asignaturaOptativa3: ['', Validators.nullValidator],
      asignaturaOptativa4: ['', Validators.nullValidator],
      asignaturaOptativa42: ['', Validators.nullValidator],
    });

    this.formularioCurso.get('curso')?.valueChanges.subscribe(curso => {
      this.onCursoChange(curso);
    });

  }

   onCursoChange(curso: string): void {
    const asignaturaOptativa1 = this.formularioCurso.get('asignaturaOptativa1');
    const asignaturaOptativa2 = this.formularioCurso.get('asignaturaOptativa2');
    const asignaturaOptativa3 = this.formularioCurso.get('asignaturaOptativa3');
    const asignaturaOptativa4 = this.formularioCurso.get('asignaturaOptativa4');
    const asignaturaOptativa42 = this.formularioCurso.get('asignaturaOptativa42');

    if (curso === '1º' ) {
      asignaturaOptativa1?.enable();
      asignaturaOptativa2?.disable();
      asignaturaOptativa2?.reset();
      asignaturaOptativa3?.disable();
      asignaturaOptativa3?.reset();
      asignaturaOptativa4?.disable();
      asignaturaOptativa4?.reset();
      asignaturaOptativa42?.disable();
      asignaturaOptativa42?.reset();
    } else if (curso === '2º') {
      asignaturaOptativa2?.enable();
      asignaturaOptativa1?.disable();
      asignaturaOptativa1?.reset();
      asignaturaOptativa3?.disable();
      asignaturaOptativa3?.reset();
      asignaturaOptativa4?.disable();
      asignaturaOptativa4?.reset();
      asignaturaOptativa42?.disable();
      asignaturaOptativa42?.reset();
    } else if (curso === '3º') {
      asignaturaOptativa3?.enable();
      asignaturaOptativa2?.disable();
      asignaturaOptativa2?.reset();
      asignaturaOptativa1?.disable();
      asignaturaOptativa1?.reset();
      asignaturaOptativa4?.disable();
      asignaturaOptativa4?.reset();
      asignaturaOptativa42?.disable();
      asignaturaOptativa42?.reset();
    } else if (curso === '4º') {
      asignaturaOptativa4?.enable();
      asignaturaOptativa42?.enable();
      asignaturaOptativa2?.disable();
      asignaturaOptativa2?.reset();
      asignaturaOptativa1?.disable();
      asignaturaOptativa1?.reset();
      asignaturaOptativa3?.disable();
      asignaturaOptativa3?.reset();
  }
}
  onSubmit() {
    console.log("hola");
    if (this.formularioAlumnos.valid){
      console.log("hola");
      const datosAlumno = this.formularioAlumnos.value;
      const datosCurso = this.formularioCurso.value;
      const dastosCombinados = {...datosAlumno, ...datosCurso};
      this.usuariosService.addAlumno(dastosCombinados).subscribe(
        response => {
          console.log('Alumno registrado con éxito', response);
        },
        error => {
          console.error('Error al registrar al alumno', error);
        }
      );
    }
  }
    
  
}
