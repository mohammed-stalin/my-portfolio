import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BanerComponent } from './baner/baner.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { EducationComponent } from './education/education.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ResponsiveDirective } from './directives/responsive.directive';
import { NavBarComponent } from './nav-bar/nav-bar.component';
@NgModule({
  declarations: [AppComponent, BanerComponent, PersonalInformationComponent, EducationComponent, WorkExperienceComponent, SkillsComponent, ProjectsComponent, ContactComponent, ResponsiveDirective, NavBarComponent],
  imports: [BrowserModule, AppRoutingModule ,FormsModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
