import { bootstrapApplication } from '@angular/platform-browser';
import {UiComponent} from "./ui/ui.component";
import { config } from './app/app.config.server';
import {AdminComponent} from "./admin/admin.component";

const bootstrap = () => bootstrapApplication(UiComponent,  config);

export default bootstrap;
