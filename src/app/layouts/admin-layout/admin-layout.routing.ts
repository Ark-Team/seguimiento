import { Routes } from '@angular/router';

import { TablesComponent } from '../../pages/tables/tables.component';
import { DetailComponent } from 'src/app/pages/detail/detail.component';

export const AdminLayoutRoutes: Routes = [
    { path: '', component: TablesComponent },
    { path: 'detail/:id', component: DetailComponent },
];
