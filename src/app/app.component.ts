import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'greeter';
  names: string[] = ['Garret', 'Holly', 'Matt', 'Tyler', 'Jared'];

  changeTitle(newTitle: string): void {
    this.title = newTitle;
  }

  addName(formParam: NgForm): void {
    let newName: string = formParam.form.value.name;
    this.names.push(newName);
  }

  removeName(i: number): void {
    this.names.splice(i, 1);
  }
}

