import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { SidemenuComponent } from '@ingeniemos.la/sidemenu';
import { addIcons } from 'ionicons';
import { homeOutline, peopleOutline, cubeOutline, documentsOutline, folderOutline, cogOutline, arrowForwardOutline, cardOutline, cashOutline, documentOutline, folderOpenOutline, listOutline, receiptOutline, walletOutline } from 'ionicons/icons';
import { SideMenuItem } from '@ingeniemos.la/core-models';

@Component({
  imports: [RouterModule, IonHeader, IonContent, IonToolbar, IonTitle, SidemenuComponent, IonButtons, IonMenuButton],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'siscontsi';

  menuItems: SideMenuItem[] = [
    {
      title: 'core.layout.sideMenu.dashboard',
      route: 'dashboard',
      icon: 'home-outline'
    },
    {
      title: 'core.layout.sideMenu.subjects',
      route: 'subjects',
      icon: 'people-outline'
    },
    {
      title: 'core.layout.sideMenu.items',
      route: 'items',
      icon: 'cube-outline'
    },
    {
      title: 'core.layout.sideMenu.documents',
      route: 'documents',
      icon: 'documents-outline'
    },
    {
      title: 'core.layout.sideMenu.reports',
      route: 'reports',
      icon: 'folder-outline'
    },
    {
      title: 'core.layout.sideMenu.settings',
      route: 'settings',
      icon: 'cog-outline'
    }
  ];

  constructor() {
    addIcons({ peopleOutline, documentOutline, cubeOutline, cogOutline, documentsOutline,  homeOutline, cashOutline, walletOutline, cardOutline, folderOpenOutline, arrowForwardOutline, listOutline, receiptOutline, folderOutline });
  }
}
