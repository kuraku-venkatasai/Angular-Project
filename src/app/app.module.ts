import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatLegacyTableModule as MatTableModule} from '@angular/material/legacy-table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatLegacyPaginatorModule as MatPaginatorModule} from '@angular/material/legacy-paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSortModule} from '@angular/material/sort';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
