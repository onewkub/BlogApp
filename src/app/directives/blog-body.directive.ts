import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[BlogBody]',
})
export class BlogBodyDirective {

  constructor(private el: ElementRef, private render: Renderer2) {
  }

  private addHashtag() {
    setTimeout(()=>{
    let content = this.el.nativeElement.innerHTML;
    let newcontent = content.replace(/(^|\s)*#(\w+)/g, '$1<span class="hashtag">#$2</span>');
    this.render.setProperty(this.el.nativeElement, 'innerHTML', newcontent);
    },1)
  }

  ngOnInit() {
    this.addHashtag();
  }
}
