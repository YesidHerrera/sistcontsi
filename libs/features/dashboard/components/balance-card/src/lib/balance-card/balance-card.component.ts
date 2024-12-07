import { Component, input } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { IonCard, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { TruncateTextPipe } from '@ingeniemos.la/shared-pipes';
import { BalanceCardItem } from '@ingeniemos.la/dashboard-models';

@Component({
  selector: 'lib-balance-card',
  standalone: true,
  imports: [CommonModule, IonCard, IonLabel, IonIcon, CurrencyPipe, TruncateTextPipe],
  templateUrl: './balance-card.component.html',
  styleUrl: './balance-card.component.scss',
})
export class BalanceCardComponent {

  balanceCardItem = input.required<BalanceCardItem>();

}