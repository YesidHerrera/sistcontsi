import { Component, signal } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { IonIcon, IonItem, IonLabel, IonList, IonNote } from '@ionic/angular/standalone';
import { BalanceListItem } from '@ingeniemos.la/dashboard-models';

@Component({
  selector: 'lib-balance-card-list',
  standalone: true,
  imports: [CommonModule, IonList, IonItem, IonLabel, IonIcon, IonNote, CurrencyPipe],
  templateUrl: './balance-card-list.component.html',
  styleUrl: './balance-card-list.component.scss',
})
export class BalanceCardListComponent {
  listItems = signal<BalanceListItem[]>([
    {
      date: '2024-11-25',
      actor: 'Cooperativa de Colombia S.A.S',
      documentType: 'Factura de Venta',
      documentNature: 'DEBITO',
      documentNumber: '0001',
      value: 1500000
    },
    {
      date: '2024-11-25',
      actor: 'Yesid Herrera Doria',
      documentType: 'Factura de Venta',
      documentNumber: '0002',
      documentNature: 'DEBITO',
      value: 3000000,
    },
    {
      date: '2024-11-25',
      actor: 'Somos tech S.A.S',
      documentType: 'Pago de CXP',
      documentNumber: '0001',
      documentNature: 'CREDITO',
      value: 1236000,
    },
    {
      date: '2024-11-25',
      actor: 'Marisel Cuartas Cardona',
      documentType: 'Gastos varios',
      documentNumber: '0001',
      documentNature: 'CREDITO',
      value: 1500,
    },
    {
      date: '2024-11-24',
      actor: 'A Varios',
      documentType: 'Gastos varios',
      documentNumber: '0001',
      documentNature: 'CREDITO',
      value: 520500,
    },
    {
      date: '2024-11-24',
      actor: 'A Varios',
      documentType: 'Factura de Venta',
      documentNumber: '0003',
      documentNature: 'DEBITO',
      value: 30000,
    },
  ]);
}
