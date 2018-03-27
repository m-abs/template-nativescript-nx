// angular
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

// Nx
import { NxModule } from '@nrwl/nx';

// nativescript
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

// app
import { CoreModule } from './modules/core/core.module';
import { SharedModule } from './modules/shared/shared.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptHttpClientModule,
    NxModule.forRoot({}),
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {}
