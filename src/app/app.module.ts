import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {provideHttpClient} from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    AppComponent
  ],
  providers: [
    AppComponent,
    provideHttpClient()
  ],
})
export class AppModule { }
