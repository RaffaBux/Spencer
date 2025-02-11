import { bootstrapApplication } from '@angular/platform-browser';
import { AppRoot } from '../app/app.component';
import { config } from '../app/app.config.server';

const bootstrap = () => bootstrapApplication(AppRoot, config);

export default bootstrap;
