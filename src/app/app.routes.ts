import { Routes } from '@angular/router';
import { ViewregisterComponent } from './views/viewregister/viewregister.component';
import { ViewloginComponent } from './views/viewlogin/viewlogin.component';
import { ViewmainComponent } from './views/viewmain/viewmain.component';
import { ViewinfoComponent } from './views/viewinfo/viewinfo.component';
import { ViewuserinspComponent } from './views/viewuserinsp/viewuserinsp.component';
import { ViewadminComponent } from './views/viewadmin/viewadmin.component';
import { ViewadminuserComponent } from './views/viewadminuser/viewadminuser.component';
import { ViewadmininspecComponent } from './views/viewadmininspec/viewadmininspec.component';

export const routes: Routes = [
    {path:"register",component:ViewregisterComponent},
    {path:"login",component:ViewloginComponent},
    {path:"user",component:ViewmainComponent, children:[
        {path:"",component:ViewinfoComponent},
        {path:"insp",component:ViewuserinspComponent}
    ]},
    {path:"admin",component:ViewadminComponent, children:[
        {path:"",component:ViewadminuserComponent},
        {path:"insp",component:ViewadmininspecComponent}
    ]},
    { path: '', redirectTo: '/user', pathMatch: 'full' }, // Redirección al inicio
    { path: '**', redirectTo: '/user' } // Redirección para rutas no encontradas
];
