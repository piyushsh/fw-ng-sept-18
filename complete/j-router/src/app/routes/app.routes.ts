
import { RouterModule, Routes } from '@angular/router';
import { RadioComponent } from '../radio/radio.component';
import { TvComponent } from '../tv/tv.component';
import { Radio4Component } from '../radio/radio4/radio4.component';
import { Radio11Component } from '../radio/radio11/radio11.component';
import { PayRadio } from '../guard/PayRadio';

const AppRoutes: Routes = [

    { path: '', redirectTo: 'tv', pathMatch: 'full' },

    { path: 'tv', component: TvComponent },
    { path: 'tv/:channel', component: TvComponent },

    { path: 'radio', component: RadioComponent,
      children: [
          { path: '4', component: Radio4Component },
          { path: '11', component: Radio11Component, canActivate:[ PayRadio ] }
      ]
    },

    { path: '**', redirectTo: 'tv' }
];

export { AppRoutes };
