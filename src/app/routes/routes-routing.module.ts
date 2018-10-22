import { LayoutComponent } from '../layout/layout.component';
import { IndexComponent } from './index/index.component';
import { ClientComponent } from './client/client.component';
import { WhitepaperComponent } from './whitepaper/whitepaper.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';

export const routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      { path: 'index', component: IndexComponent}
    ]
  },
  {
    path: 'client',
    component: LayoutComponent,
    children: [
      { path: '', component: ClientComponent},
    ]
  },
  {
    path: 'whitepaper',
    component: LayoutComponent,
    children: [
      { path: '', component: WhitepaperComponent},
    ]
  },
  {
    path: 'team',
    component: LayoutComponent,
    children: [
      { path: '', component: TeamComponent},
    ]
  },
  {
    path: 'contact',
    component: LayoutComponent,
    children: [
      { path: '', component: ContactComponent},
    ]
  }
];
