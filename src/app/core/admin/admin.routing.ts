import { Routes } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementComponent } from './management/management.component';
import { ReportComponent } from './report/report.component';
import { OvertimeApplicationComponent } from './overtime-application/overtime-application.component';
import { OvertimeApplyComponent } from './overtime-apply/overtime-apply.component';
import { OvertimeClaimComponent } from './overtime-claim/overtime-claim.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';
import { OvertimeWorkApplyComponent } from './overtime-work-apply/overtime-work-apply.component';
import { WorkApplyComponent } from './work-apply/work-apply.component';
import { WorkApplicationComponent } from './work-application/work-application.component';

export const AdminRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'analytics',
                component: AnalyticsComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'management',
                component: ManagementComponent
            },
            {
                path: 'report',
                component: ReportComponent
            },
            {
                path: 'overtime',
                children: [
                    { 
                        path: 'application',
                        component: OvertimeApplicationComponent
                    },
                    {
                        path: 'apply',
                        component: OvertimeApplyComponent
                    },
                    {
                        path: 'claim',
                        component: OvertimeClaimComponent
                    },
                    {
                        path: 'application-work',
                        component: OvertimeWorkApplyComponent
                    }
                ]
            },
            {
                path: 'settings',
                component: SettingsComponent
            },
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: 'help',
                component: HelpdeskComponent
            },
            {
                path: 'work',
                children: [
                    {
                        path: 'apply',
                        component: WorkApplyComponent
                    },
                    {
                        path: 'application',
                        component: WorkApplicationComponent
                    }
                ]
            }
        ]
    }
]