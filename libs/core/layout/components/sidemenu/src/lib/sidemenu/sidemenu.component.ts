import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonMenu, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { TranslocoPipe } from '@jsverse/transloco';
import { Router } from '@angular/router';
import { SideMenuItem } from '@ingeniemos.la/core-models';

@Component({
  selector: 'lib-sidemenu',
  imports: [CommonModule, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, TranslocoPipe, IonList, IonItem, IonIcon, IonLabel],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.scss',
})
export class SidemenuComponent {

  router = inject(Router);
  menuItems = input.required<SideMenuItem[]>();

  navigate(url: string) {
    this.router.navigate([url]);
  }
}
