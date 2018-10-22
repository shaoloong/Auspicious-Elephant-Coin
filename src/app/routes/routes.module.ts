import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';
import { routes } from './routes-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { IndexComponent } from './index/index.component';
import { ClientComponent } from './client/client.component';
import { WhitepaperComponent } from './whitepaper/whitepaper.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true}),
    LayoutModule,
    NgZorroAntdModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [IndexComponent, ClientComponent, WhitepaperComponent, TeamComponent, ContactComponent]
})
export class RoutesModule { }
