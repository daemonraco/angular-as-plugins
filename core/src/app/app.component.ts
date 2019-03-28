import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: [],
})
export class AppComponent implements OnInit {
    title = 'core';

    ngOnInit() {
        console.log('DEBUG AppComponent::[core]...');
    }
}
