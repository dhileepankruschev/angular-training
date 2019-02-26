import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MyCompComponent } from './my-comp/my-comp.component';
import { DirectChkComponent } from './direct-chk/direct-chk.component';
import { TempChkComponent } from './temp-chk/temp-chk.component';
import { EventChkComponent } from './event-chk/event-chk.component';
import { FormInputComponent } from './form-input/form-input.component';
import { ProductBaseComponent } from './product-base/product-base.component';
import { ProductShowComponent } from './product-show/product-show.component';
import { ProductInputComponent } from './product-input/product-input.component';
import { InputTemplateComponent } from './input-template/input-template.component';
import { InputModelComponent } from './input-model/input-model.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { HighlighterDirective } from './highlighter.directive';
import { PipeCheckComponent } from './pipe-check/pipe-check.component';
import { SqrtPipe } from './sqrtpipe.pipe';
import { FetchServService } from './fetch-serv.service';
import { UserserviceChild1Component } from './userservice-child1/userservice-child1.component';
import { UserserviceChild2Component } from './userservice-child2/userservice-child2.component';
import { UseHttpCompComponent } from './use-http-comp/use-http-comp.component';
import { MessageServiceComponent } from './message-service/message-service.component';
import { EmailService } from "./services/email.service";
import { SmsService } from "./services/sms.service";
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  //{ path: "", component: HomeComponent },//when there is no url extension, redirect to home component
  { path: "", redirectTo: "home", pathMatch: "full" },//we can also redirect the page to some url using redirectTo
                                                      //pathMatch: "full" reads full path. used when path=""
  { path: "home", component: HomeComponent },
  { path: "contact", component: ContactComponent },
  { path: "contactus", redirectTo: "contact" },//we can also add additional paths for same component and redirect it to original component
  { path: "about", component: AboutComponent },
  //{ path: "search", component: SearchComponent }
  { path: "search/:srch", component: SearchComponent }//If data needs to be transfered along with navigation. srch: represents data to be transfered
                                                      //'srch' is the name which will be used in SearchComponent constructor to receive the parameter value
]

// Annotations/Decorators : Let Angular transpiler know how to treat a particular class / entity / data member / function
// What services to provide to that class
// Allows you to provide additional info on that entity
@NgModule({
  declarations: [ // list of all the child components / modules to be registered inside that module
    AppComponent,
    MyCompComponent,
    DirectChkComponent,
    TempChkComponent,
    EventChkComponent,
    FormInputComponent,
    ProductBaseComponent,
    ProductShowComponent,
    ProductInputComponent,
    InputTemplateComponent,
    InputModelComponent,
    TwoWayComponent,
    CustomDirectiveDirective,
    HighlighterDirective,
    PipeCheckComponent,
    SqrtPipe,
    UserserviceChild1Component,
    UserserviceChild2Component,
    UseHttpCompComponent,
    MessageServiceComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    SearchComponent
  ],
  imports: [ // To import a particular class to all the child components, so that we need not import it in all the child components separately
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    //For using HTTP services GET POSt PUT DELETE
    HttpModule,
    RouterModule.forRoot(routes)//for routing to work
  ],
  //providers controls your dependency injections. All services needs to be registered here
  providers: [
    FetchServService,
    //EmailService,
    {
      provide: "IService",
      //useClass: EmailService
      useClass: SmsService
    }
  ], // Specify the list of shareable services
  bootstrap: [AppComponent] // Contains details of Top Level component
})
export class AppModule { }
