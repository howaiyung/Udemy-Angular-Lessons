import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /*styleUrls: ['./app.component.css']*/
  styles: [`
    h3 {
      color: dodgerblue;
    }
  `]
})
export class AppComponent {
  name = 'Ho Wai Yung';
}


/*

Working with style files or styles, the rule of thumb is that

If it is short, you can stick the style into app.component.ts,
The perferred way, and to be less messy, it to create a css file
and reference the css file in styleUrls.

*/