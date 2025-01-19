import { Component, NgModule } from '@angular/core';
import{FormsModule}from"@angular/forms"

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  labelUserName:string='UserName';
  labelUserAge:string='UserAge';
  labelUserEmail:string='UserEmail';
  labelUserPssword:string='UserPssword';

  isHide:boolean=true
  isHide2:boolean=true
  isHide3:boolean=true
  isHide4:boolean=true

  text:string='';
  text2:string='';
  text3:string='';
  text4:string='';

  storArr:string[]=[];
  storFun():string{
    console.log(this.text)
   this.storArr.push(this.text)
   //console.log(this.storArr)
   return(this.text)

  }
display(){
  this.isHide=false;
  // if(this.text==' ')this.isHide=true;
  // else
}
check(){
  // let tt:string=
 
  if(this.text=="")this.isHide=true;
  else this.isHide=false;
}
check2(){
  // let tt:string=
 
  if(this.text2=="")this.isHide2=true;
  else this.isHide2=false;
}
check3(){
// let tt:string=
 
  if(this.text3=="")this.isHide3=true;
  else this.isHide3=false;
}
check4(){
  // let tt:string=
  if(this.text4=="")this.isHide4=true;
  else this.isHide4=false;
}
display2(){
    this.isHide2=false;
}
display3(){
  this.isHide3=false;
}
display4(){
  this.isHide4=false;

}

}
