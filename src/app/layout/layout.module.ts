import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';
import { HeaderFixedComponent } from './header-fixed/header.component';
@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule,
    TranslateModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HeaderFixedComponent
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, HeaderFixedComponent]
})
export class LayoutModule { }
