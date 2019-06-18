import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {NAudioPlayerNgModule} from './audio-player-ng/audio-player-ng.module'

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NAudioPlayerNgModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
