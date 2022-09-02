import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password: string = "bahubali@01";
  isVisible:boolean=false;
  count:number=0;
  log: string="";
  counter:number[]=[];

  showhidepassword(){
    this.isVisible = !this.isVisible;
    this.log=this.log + " " +this.count + " , ";
    this.counter.push(this.count+1);
    this.count= this.count + 1;

  }
  


    
  }
  
  

