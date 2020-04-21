import { Component } from '@angular/core';
import { Language } from './Language'

@Component({
    selector: 'st-lang',
    templateUrl: './languages.component.html'
})
export class LanguagesComponent {
    langs : Language[]  = [];

    addLang(name : string, rating : number) {
        // check whether name is present
        for(var lang of this.langs)
        {
            if (lang.name == name)
            {
                alert("Language is alredy present!");
                return;
            }
        }
        
        this.langs.push( new Language(name,rating))
        console.log(this.langs)
    }

    deleteLang(idx : number) {
        console.log(idx)
        this.langs.splice(idx,1)
    }

    
}
