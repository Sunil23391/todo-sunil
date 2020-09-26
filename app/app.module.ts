import { NgModule } from '@angular/core';
import { BrowserModule,Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes} from '@angular/router';

// Services
import { ContainerService } from '../services/container.service';

// Main Component
import { AppComponent } from './app.component';

// Granular Components
import { HeaderComponent } from './header/header.component';
import { ProjectComponent } from './project/project.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskInformationComponent } from './task-information/task-information.component';
import { BlankPageComponent } from './blank-page/blank-page.component';

const routes:Routes = [{
  path:'',
  component:ProjectComponent
}]

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HeaderComponent, TaskListComponent, TaskInformationComponent, ProjectComponent, BlankPageComponent ],
  bootstrap:    [ AppComponent ],
  providers: [Title,ContainerService]
})
export class AppModule { }
