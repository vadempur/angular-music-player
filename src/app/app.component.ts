import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {OptionsPlayer} from './audio-player-ng/classes/interfaces'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    options:OptionsPlayer;
    // playlist:Observable<PlaylistData>;
    

    constructor(private http:HttpClient) {
        this.options = {
            width:800,
            oscFillStyle: 'hsl(6, 20%, 96%)',
            oscStrokeStyle: 'hsl(6, 20%, 12%)',
            playlistPosition: 'row'
        };
    }
    details={title:'testtitle',url:'https://testurl.com/test.mp3'}
}
