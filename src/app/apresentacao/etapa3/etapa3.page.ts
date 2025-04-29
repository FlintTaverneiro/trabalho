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
  selector: 'app-etapa3',
  templateUrl: './etapa3.page.html',
  styleUrls: ['./etapa3.page.scss'],
  standalone: true,
  imports: [IonImg, IonTitle, IonToolbar, IonHeader, IonContent]
})
export class Etapa3Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
