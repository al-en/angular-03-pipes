import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatTableModule} from '@angular/material';

const material = [MatButtonModule, MatCheckboxModule, MatTableModule]

@NgModule({
  imports: [material],
  exports: [material],
})
export class MaterialModule { }