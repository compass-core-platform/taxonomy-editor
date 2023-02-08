import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LandingPageComponent } from './landing-page/landing-page.component'

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: LandingPageComponent,
    },
    {
        path:'home', component:LandingPageComponent
    }
]
@NgModule({
    imports: [],
    exports: [RouterModule],
    providers: [],
  })
  export class AppRoutingModule { }
  