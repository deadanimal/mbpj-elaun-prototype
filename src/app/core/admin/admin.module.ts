import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  BsDropdownModule, 
  ProgressbarModule, 
  TooltipModule, 
  BsDatepickerModule,
  ModalModule
} from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as mapbox from 'mapbox-gl';
(mapbox as any).accessToken = environment.mapbox.accessToken

import { AdminRoutes } from './admin.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ManagementComponent } from './management/management.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ReportComponent } from './report/report.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { OvertimeApplicationComponent } from './overtime-application/overtime-application.component';
import { OvertimeApplyComponent } from './overtime-apply/overtime-apply.component';
import { OvertimeClaimComponent } from './overtime-claim/overtime-claim.component';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';
import { OvertimeWorkApplyComponent } from './overtime-work-apply/overtime-work-apply.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ManagementComponent,
    AnalyticsComponent,
    ReportComponent,
    SettingsComponent,
    ProfileComponent,
    OvertimeApplicationComponent,
    OvertimeApplyComponent,
    OvertimeClaimComponent,
    HelpdeskComponent,
    OvertimeWorkApplyComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    RouterModule.forChild(AdminRoutes),
    HttpClientModule,
    LeafletModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot()
  ]
})
export class AdminModule { }
