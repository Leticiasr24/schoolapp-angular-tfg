import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Buscaralumno } from './buscaralumno.component'

const routes = [
  {
    path: '',
    component: Buscaralumno,
  },
]

@NgModule({
  declarations: [Buscaralumno],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Buscaralumno],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BuscaralumnoModule {}
