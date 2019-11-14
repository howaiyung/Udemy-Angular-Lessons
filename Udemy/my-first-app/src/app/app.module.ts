import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component'; //Type script feature

//App Module is a bundle of functions

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent //Angular knows it there, but Typescript has no clue where it is
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Refer to https://stackoverflow.com/questions/45129790/difference-between-httpmodule-and-httpclientmodule/45129865#45129865
//