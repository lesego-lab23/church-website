import { Component } from '@angular/core';

@Component({
  selector: 'app-giving',
  templateUrl: './giving.component.html',
  styleUrls: ['./giving.component.css']
})
export class GivingComponent {

  copy(text: string) {
navigator.clipboard.writeText(text);
alert("Copied to clipboard!");
}

}
