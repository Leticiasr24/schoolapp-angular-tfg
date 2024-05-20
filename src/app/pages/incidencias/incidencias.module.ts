import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Incidencias } from './incidencias.component'

const routes = [
  {
    path: '',
    component: Incidencias,
  },
]

@NgModule({
  declarations: [Incidencias],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Incidencias],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class IncidenciasModule {}
