import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Altaempleado } from './altaempleado.component'

const routes = [
  {
    path: '',
    component: Altaempleado,
  },
]

@NgModule({
  declarations: [Altaempleado],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Altaempleado],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AltaempleadoModule {}
