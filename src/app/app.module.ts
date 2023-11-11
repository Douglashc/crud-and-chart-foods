import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { FoodsModule } from './foods/foods.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,

    SharedModule,
    FoodsModule,
    CardModule,
    PanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
