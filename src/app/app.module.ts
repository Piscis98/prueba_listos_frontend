import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { StorageService } from './shared/services/storage/storage.service';
import { TranslatorService } from './shared/services/translator/translator.service';
import { UserService } from './shared/services/user/user.service';
import { InterceptorService } from './shared/services/interceptor/interceptor.service';
import { DialogComponent } from './shared/components/dialog/dialog.component';
import { ContainerAppComponent } from './components/container-app/container-app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState, INITIAL_STATE, rootReducer } from './shared/models/store';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    DialogComponent,
    ContainerAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    NgReduxModule
  ],
  entryComponents:[DialogComponent],
  providers: [StorageService, TranslatorService,UserService, InterceptorService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
  constructor(ngRedux:NgRedux<IAppState>){

    ngRedux.configureStore(rootReducer,INITIAL_STATE);

  }

}
