import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[BlogBody]',
})
export class BlogBodyDirective {

  constructor(private el: ElementRef, private render: Renderer2, private router: Router) {
  }

  private addHashtag() {
    setTimeout(()=>{
    let content = this.el.nativeElement.innerHTML;
    let newcontent = content.replace(/(^|\s)*#(\w+)/g, '$1<span class="hashtag">#$2</span>');
    this.render.setProperty(this.el.nativeElement, 'innerHTML', newcontent);
    this.render.listen(this.el.nativeElement, 'click', (event) => {
      event.stopPropagation();
      event.preventDefault();
      let hashtag = new String(event.target.innerText);
      this.router.navigate([`${hashtag.replace('#', '')}`]);
      // this.navCtrl.push(HashtagPage, {'hashtagTitle': hashtag.substring(1, hashtag.length)});
   });
    },1)
  }

  ngOnInit() {
    this.addHashtag();
  }
}
