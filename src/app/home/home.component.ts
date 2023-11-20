import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Title} from "@angular/platform-browser";
import {homeConstants} from "./home.constants.js";
import {NavbarComponent} from "../navbar/navbar.component.js";
import {MatMenuModule} from "@angular/material/menu";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  protected readonly homeConstants = homeConstants;
}
