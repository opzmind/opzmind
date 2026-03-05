import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})
export class SeoService {
    constructor(private title: Title, private meta: Meta) { }

    updateSeo(titleStr: string, desc: string) {
        this.title.setTitle(titleStr);

        this.meta.updateTag({ name: 'description', content: desc });

        // Open Graph
        this.meta.updateTag({ property: 'og:title', content: titleStr });
        this.meta.updateTag({ property: 'og:description', content: desc });
        this.meta.updateTag({ property: 'og:type', content: 'website' });
        this.meta.updateTag({ property: 'og:url', content: 'https://codexbyte.com' });

        // Twitter Card
        this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
        this.meta.updateTag({ name: 'twitter:title', content: titleStr });
        this.meta.updateTag({ name: 'twitter:description', content: desc });
    }
}
