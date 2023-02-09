import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from  './../models/character.model';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.css']
})


export class StartScreenComponent {
  character: Character;

  constructor(private http: HttpClient) {
  }
  createCharacter(character: Character) {
    return this.http.post('http://localhost:8080/hero/add', character);
  }

  characterSelector(selection: Number){
    if(selection == 1){
      this.character = new Character("Dude", 10, 17, 100, 17, 50, "Cotton Shirt", 2, "Gauntlets", 7);
      this.createCharacter(this.character);
    }
    if(selection == 2){
      console.log("Archer")
      this.character = new Character();
    }
    if(selection == 3){
      console.log("Warrior")
      this.character = new Character();
    }
    if(selection == 4){
      console.log("Templar")
      this.character = new Character();
    }

  }
}
