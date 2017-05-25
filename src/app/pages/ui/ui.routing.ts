import { AtGridComponent } from './components/ATGrid/at-grid/at-grid.component';
import { Routes, RouterModule }  from '@angular/router';

import { Ui } from './ui.component';
import { Buttons } from './components/buttons/buttons.component';
import { Grid } from './components/grid/grid.component';
import { Icons } from './components/icons/icons.component';
import { Modals } from './components/modals/modals.component';
import { Typography } from './components/typography/typography.component';
import { SlimComponent } from './components/slim/slim.component';
import { ATGridExampleComponent } from './components/atgrid-example/atgrid-example.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Ui,
    children: [
      { path: 'buttons', component: Buttons },
      { path: 'grid', component: Grid },
      { path: 'atgrid', component: ATGridExampleComponent },
      { path: 'icons', component: Icons },
      { path: 'typography', component: Typography },
      { path: 'modals', component: Modals },
      { path: 'slim', component: SlimComponent },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
