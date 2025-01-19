import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  modelImg:string='';
  isHide:boolean=true;

  imgSrc:string[]=["/img1.png","/img2.png","/img3.png","/img1.png","/img2.png","/img3.png"]
    //imgSrc:string="img1.png"

// displayLayer(eventInfo:MouseEvent):string{
//   console.log(eventInfo);
//   alert("heloooooo");

//   let imglayer:string='';
//   return imglayer;
// }
//}
modelHide(eventInfo:EventTarget|null,imgref:HTMLImageElement):void{
  if(eventInfo===imgref)console.log("no hideeeeeeeeeeeee");
  else {
    console.log("hideeeeeeeeeeeee");
    this.isHide=true;

  }
  

}
}