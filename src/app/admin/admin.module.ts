import { NgModule, ModuleWithProviders } from "@angular/core";


//Common Modules
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [
    AdminRoutingModule
  ],
  declarations: [],
  exports: [],
  providers: []
})
export class AdminModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AdminModule
    };
  }
}
