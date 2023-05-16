import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: 'nav-bar.component.html',
  styleUrls: ['nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private location: Location) {}

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  refreshPage() {
    this.location.go('/');
    window.location.reload();
    window.scrollTo(0, 0);
  }

  isActive(sectionId: string): boolean {
    return this.location.path() === '/' + sectionId;
  }

}
