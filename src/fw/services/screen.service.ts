import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Injectable()
export class ScreenService {
  private resizeSource = new Subject<null>();

  resize$ = this.resizeSource.asObservable();

  largeBreakPoint = 800;
  screenWidth = 1000;
  screenHeight = 800;

  constructor() {
      try {
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        window.addEventListener('resize',(event) => this.onResize(event));
      }
      catch(e) {
        //We're going with default screen dimensions
      }
  }

  isLarge(): boolean {
      return this.screenWidth >= this.largeBreakPoint;
  }

  onResize($event): void {
      this.screenWidth = window.innerWidth;
      this.screenHeight = window.innerHeight;
      this.resizeSource.next();
  }

}
