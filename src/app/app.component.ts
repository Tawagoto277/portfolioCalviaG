import { AfterViewChecked, AfterViewInit, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit, AfterViewChecked, OnInit{
  title = 'portfolioCalviaG';

  currentSectionIndex: number = 0;
  sections: HTMLElement[] = [];
  contentDiv!: HTMLElement;

  ngOnInit(): void {
    // console.log("OnInit");
    this.contentDiv = document.getElementById('content')!;
    this.sections = Array.from(document.querySelectorAll('section'));
  }

  ngAfterViewInit(): void {
    // console.log("Viewinit");
    this.showSection(this.currentSectionIndex);
  }

  ngAfterViewChecked(){
    // console.log("ViewCheck");
    this.contentDiv.addEventListener('scroll', () => this.onDivScroll());
  }

  showSection(index: number){
    this.sections.forEach((section, idx) => {
      section.classList.toggle('active', idx === index);
    });
  }

  onDivScroll(){
    const scrollPosition = this.contentDiv.scrollTop;
    // console.log("position" + scrollPosition);    
    const windowHeight = this.contentDiv.clientHeight;
    // console.log("altezza" + windowHeight);    
    const newIndex = Math.floor(scrollPosition / windowHeight);
    // console.log("index" + newIndex);
    
    if (newIndex !== this.currentSectionIndex) {
      this.currentSectionIndex = newIndex;
      this.showSection(this.currentSectionIndex);
    };
  }
}
