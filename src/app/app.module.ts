import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment'
import { SbTaxonomyEditorModule } from 'sb-taxonomy-editor'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SbTaxonomyEditorModule.forChild({
      source: 'online', data:
        { 
          endpoint: environment.url,
          token: environment.token, 
          frameworkName: 'tarento_fw',
          isApprovalRequired:environment.isApprovalRequired
        }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
