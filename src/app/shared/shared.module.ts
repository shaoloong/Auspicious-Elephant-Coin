import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import { I18nComponent } from './i18n/i18n.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    I18nComponent
  ],
  declarations: [I18nComponent]
})
export class SharedModule { }
