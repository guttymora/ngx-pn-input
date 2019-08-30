import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgxPnInputModule} from '../../projects/ngx-pn-input/src/lib/ngx-pn-input.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NgxPnInputModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
