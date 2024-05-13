import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { FeaturesComponent } from "./features/features.component";
import { AppointmentComponent } from "./appointment/appointment.component";
import { AuthGuard } from "../auth/guards/auth.guard";

const routes: Routes = [
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'features', component: FeaturesComponent},
    {path: 'appointment', component: AppointmentComponent, canActivate: [AuthGuard]},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule {

}