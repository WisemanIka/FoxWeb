import { NgModule, ModuleWithProviders } from "@angular/core";

//Common Modules
import { WebRoutingModule } from './web-routing.module';


@NgModule({
  imports: [
    WebRoutingModule
  ],
  declarations: [],
  exports: [],
  providers: []
})
export class WebModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: WebModule
    };
  }
}
