import {RouterModule, Routes} from '@angular/router';
import {TasksComponent} from './tasks/tasks.component';
import {ArchiveComponent} from './archive/archive.component';
import {NgModule} from '@angular/core';
import {NotFoundComponent} from './not-found/not-found.component';

export const routes: Routes = [
  {path: 'current-tasks', component: TasksComponent},
  {path: 'archive-tasks', component: ArchiveComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
