import {Component, inject, NgModule} from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";
import {RouterOutlet} from "@angular/router";
import {ProfileService} from "../../data/services/profile.service";
import {AppComponent} from "../../app.component";
import {AppRoutingModule} from "../../app.routes";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    SidebarComponent,
    RouterOutlet
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})

@NgModule({
  imports: [
    AppRoutingModule
  ],
  declarations: [
  ],
  providers: [],
  bootstrap: [],
  exports: []
})

export class LayoutComponent {
  profileService = inject(ProfileService)
}
