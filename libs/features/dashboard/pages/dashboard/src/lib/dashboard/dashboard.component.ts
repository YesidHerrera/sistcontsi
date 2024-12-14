import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonCard, IonCol, IonGrid, IonRow } from '@ionic/angular/standalone';
import { BalanceCardComponent } from '@ingeniemos.la/balance-card';
import { BalanceCardListComponent } from '@ingeniemos.la/balance-card-list';
import { BalanceCardItem } from '@ingeniemos.la/dashboard-models';

@Component({
  selector: 'lib-dashboard',
  standalone: true,
  imports: [CommonModule, IonGrid, IonCol, IonRow, BalanceCardComponent, BalanceCardListComponent, IonCard],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {

  balanceCardItems = signal<BalanceCardItem[]>([
    {
      id: '1',
      name: 'CAJA GENERAL',
      balance: 15000000,
      icon: 'cash-outline',
    },
    {
      id: '2',
      name: 'CAJA MENOR',
      balance: 850000,
      icon: 'wallet-outline'
    },
    {
      id: '3',
      name: 'BANCOLOMBIA 900-005-1002-000',
      balance: 28520000,
      icon: 'card-outline'
    },
  ]);

}
