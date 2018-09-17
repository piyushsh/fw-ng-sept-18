
import { RouterModule, Routes } from '@angular/router';
import { RadioComponent } from '../radio/radio.component';
import { TvComponent } from '../tv/tv.component';
import { Radio4Component } from '../radio/radio4/radio4.component';
import { Radio11Component } from '../radio/radio11/radio11.component';
import { PayRadio } from '../guard/PayRadio';
import { AppComponent } from '../app.component';

const AppRoutes: Routes = [
    { path: "", redirectTo: "tv", pathMatch: "full" },
    { path: "tv", component: TvComponent },
    { path: "tv/:channel", component: TvComponent },
    //{ path: "tv/17", component: TvComponent },
    {
        path: "radio", component: RadioComponent,
        children: [
            { path: "4", component: Radio4Component, canActivate: [PayRadio] },
            { path: "11", component: Radio11Component }
        ]
    },

    //Handle non-existent paths
    { path: "**", redirectTo: "radio" }
];

export { AppRoutes };
