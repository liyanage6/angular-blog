import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';

  posts =  [
    {
        title: "Mon premier post",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elit lorem, ullamcorper in purus eget, finibus tincidunt erat. Sed efficitur ac mauris elementum volutpat. Vivamus.",
        loveIts: 0,
        created_at: new Date
    },
    {
        title: "Mon deuxieme post",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elit lorem, ullamcorper in purus eget, finibus tincidunt erat. Sed efficitur ac mauris elementum volutpat. Vivamus.",
        loveIts: 0,
        created_at: new Date
    },
    {
        title: "Another one Post",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elit lorem, ullamcorper in purus eget, finibus tincidunt erat. Sed efficitur ac mauris elementum volutpat. Vivamus.",
        loveIts: 0,
        created_at: new Date
    },
    {
        title: "Puis un autre post",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elit lorem, ullamcorper in purus eget, finibus tincidunt erat. Sed efficitur ac mauris elementum volutpat. Vivamus.",
        loveIts: 0,
        created_at: new Date
    },
  ];
}
