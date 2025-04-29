import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonImg
} from '@ionic/angular/standalone';


@Component({
  selector: 'app-etapa1',
  templateUrl: './etapa1.page.html',
  styleUrls: ['./etapa1.page.scss'],
  standalone: true,
  imports: [IonImg,  IonTitle, IonToolbar, IonHeader, IonContent]
})
export class Etapa1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
