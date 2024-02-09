import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { UiComponent} from "./ui/ui.component";

bootstrapApplication(UiComponent, appConfig)
  .catch((err) => console.error(err));

