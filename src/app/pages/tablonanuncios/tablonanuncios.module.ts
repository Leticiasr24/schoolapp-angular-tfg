import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Tablonanuncios } from './tablonanuncios.component'

const routes = [
  {
    path: '',
    component: Tablonanuncios,
  },
]

@NgModule({
  declarations: [Tablonanuncios],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Tablonanuncios],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TablonanunciosModule {}
