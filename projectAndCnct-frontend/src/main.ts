import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { LucideAngularModule, Github, Linkedin, Mail, Heart } from 'lucide-angular';


bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    LucideAngularModule.pick({ Github, Linkedin, Mail, Heart }),
  ],
}).catch((err) => console.error(err));
