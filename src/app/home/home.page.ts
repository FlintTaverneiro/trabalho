import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonChip,
  IonAvatar,
  IonLabel,
  IonButtons,
  IonMenuButton,
  IonMenu,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonThumbnail
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonChip, IonAvatar, IonLabel, IonButtons, IonMenuButton, IonMenu,  IonCard, IonCardHeader, IonCardTitle, IonCardContent,  IonList,  IonItem, IonThumbnail],
})
export class HomePage {
  constructor() {}
}
