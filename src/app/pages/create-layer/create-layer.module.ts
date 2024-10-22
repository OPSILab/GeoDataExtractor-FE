import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CreateLayerComponent } from "./create-layer.component";
import {
  NbCardModule,
  NbSpinnerModule,
  NbStepperModule,
  NbThemeModule,
} from "@nebular/theme";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    BrowserModule,
    NbSpinnerModule,
    NbStepperModule,
    FormsModule,
    NbThemeModule,
    ReactiveFormsModule,
    NbStepperModule,
    NbCardModule,
  ],
  providers: [],
  bootstrap: [CreateLayerComponent],
})
export class CreateLayerModule {}
