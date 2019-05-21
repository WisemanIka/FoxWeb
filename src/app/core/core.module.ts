import { NgModule, ModuleWithProviders } from "@angular/core";
import { HttpClientService } from "./services/httpClient.service";

@NgModule({
  imports: [
    // JwtModule.forRoot({
    //   config: {
    //     //tokenGetter: tokenGetter
    //   }
    // })
  ],
  declarations: [],
  exports: [],
  providers: [HttpClientService],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule
    };
  }
}
