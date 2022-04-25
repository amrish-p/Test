import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyContainerComponent } from './myContainer/my-container/my-container.component';
import { TwoWayComponent } from './myContainer/two-way/two-way.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './myContainer/home/home.component';
import { ProductComponent } from './myContainer/product/product.component';
import { ContactComponent } from './myContainer/contact/contact.component';
import { AboutComponent } from './myContainer/about/about.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes=[
  {path:'', component:HomeComponent},
  {path:'product', component:ProductComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent} 
];

@NgModule({
  declarations: [
    AppComponent,
    MyContainerComponent,
    TwoWayComponent,
    HomeComponent,
    ProductComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
