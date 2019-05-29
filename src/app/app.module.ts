import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './staticcomponent/header/header.component';
import { barNewsComponent } from './staticcomponent/barNews/barNews.component';
import { TopNewsComponent } from './staticcomponent/top-news/top-news.component';
import { FeaturesNewsComponent } from './staticcomponent/features-news/features-news.component';
import { HomeComponent } from './navigatecomponent/home/home.component';
import { DepartmentComponent } from './navigatecomponent/department/department.component';
import { NewsDetailsComponent } from './navigatecomponent/news-details/news-details.component';
import { NotfoundComponent } from './not-found/notfound.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    barNewsComponent,
    TopNewsComponent,
    FeaturesNewsComponent,
    HomeComponent,
    DepartmentComponent,
    NewsDetailsComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
