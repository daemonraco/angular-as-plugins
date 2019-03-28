import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { environment } from '../../environments/environment';

@Component({
    selector: 'app-embedded',
    templateUrl: './embedded.component.html',
})
export class EmbeddedComponent implements OnInit {
    @ViewChild('container') public container: ElementRef;

    constructor(protected activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((params: Params) => {
            const script = document.createElement('script');
            if (params['how-it-should-be'] !== undefined) {
                script.src = environment.production ? '/assets/my-plugin.js' : '/assets/my-plugin-no-optimization.js';
            } else {
                script.src = environment.production ? '/assets/my-plugin-no-optimization.js' : '/assets/my-plugin.js';
            }
            document.body.appendChild(script);

            const div = document.createElement('div');
            div.innerHTML = '<my-plugin></my-plugin>';

            this.container.nativeElement.innerHTML = '';
            this.container.nativeElement.appendChild(div);
        });
    }
}
