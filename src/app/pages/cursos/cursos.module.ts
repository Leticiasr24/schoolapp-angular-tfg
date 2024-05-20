import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Cursos } from './cursos.component'

const routes = [
  {
    path: '',
    component: Cursos,
  },
]

@NgModule({
  declarations: [Cursos],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Cursos],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CursosModule {}
