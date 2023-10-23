import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isModalOpen = false;

  constructor(private dataService: DataService) {}

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  // Puedes acceder a los datos a través del servicio
  navbarData = this.dataService.navbarData;
  welcomeData = this.dataService.welcomeData;
  modalData = this.dataService.modalData;
  contactData = this.dataService.contactData;

  title = 'EcoMoon';
}
