import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
    ],
    providers: [
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
    ],
    entryComponents: [
        AppComponent,
    ],
})
export class AppModule {
    constructor(private injector: Injector) {
        const elem = createCustomElement(AppComponent, { injector: this.injector });
        customElements.define('my-plugin', elem);
    }

    ngDoBootstrap() {
    }
}
