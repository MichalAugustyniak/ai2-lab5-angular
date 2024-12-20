import {LOCALE_ID, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {provideHttpClient} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule, provideNativeDateAdapter} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    AppComponent,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule
  ],
  providers: [
    AppComponent,
    provideHttpClient(),
    provideNativeDateAdapter(),
    {provide: LOCALE_ID, useValue: 'pl-PL'},
  ],
})
export class AppModule { }
