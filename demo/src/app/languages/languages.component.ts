import { Component } from '@angular/core';
import { Language } from './Language'

@Component({
    selector: 'st-lang',
    templateUrl: './languages.component.html'
})
export class LanguagesComponent {
    langs : Language[]  = [];

    addLang(name : string, rating : number) {
        this.langs.push( new Language(name,rating))
        console.log(this.langs)
    }

    deleteLang(name : string) {
        console.log(name)
    }

    
}
