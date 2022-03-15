import { Component, OnInit } from '@angular/core';

import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { getFirestore } from 'firebase/firestore';

import { collection, addDoc } from 'firebase/firestore';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {

  constructor() {
    const app = initializeApp(environment.firebase);
  }

  ngOnInit() {}

  async create(){

    const db = getFirestore();

    try {
      const docRef = await addDoc(collection(db, 'faq'), {
        question: 'Por que este aplicativo é tão feio?',
        response: 'porque o professor enxerga mal'
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }

  }

}
