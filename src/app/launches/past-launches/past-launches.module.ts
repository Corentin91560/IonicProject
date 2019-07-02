import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PastLaunchesPage } from './past-launches.page';
import { ComponentsModule } from 'src/app/modules/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: PastLaunchesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PastLaunchesPage]
})
export class PastLaunchesPageModule {}
