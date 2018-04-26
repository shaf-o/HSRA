import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import {
  FlexLayoutModule
} from '@angular/flex-layout';
import {
  ExtraOptions,
  RouterModule,
  Routes
} from '@angular/router';
import {
  AsyncLocalStorageModule
} from 'angular-async-local-storage';


import { AppComponent } from './app.component';
import { ProcessListComponent } from './views/dashboard/process-list/process-list.component';
import { MilestoneListComponent } from './views/dashboard/milestone-list/milestone-list.component';
import { ChecklistListComponent } from './components/checklist-list/checklist-list.component';
import { ProductListComponent
} from './views/dashboard/product-list/product-list.component';
import {
  AssessmentResultComponent
} from './components/assessment-result/assessment-result.component';
import {
  AddProcessDialogComponent
} from './components/dialogs/add-process-dialog/add-process-dialog.component';
import {
  AddProductDialogComponent
} from './components/dialogs/add-product-dialog/add-product-dialog.component';
import {
  AddMilestoneDialogComponent
} from './components/dialogs/add-milestone-dialog/add-milestone-dialog.component';
import {
  AddChecklistDialogComponent
} from './components/dialogs/add-checklist-dialog/add-checklist-dialog.component';
import {
  ClusterTableComponent
} from './views/dashboard/product-list/cluster-table/cluster-table.component';
import {
  BgTableComponent
} from './views/dashboard/product-list/bg-table/bg-table.component';
import {
  BuTableComponent
} from './views/dashboard/product-list/bu-table/bu-table.component';
import {
  ProductTableComponent
} from './views/dashboard/product-list/product-table/product-table.component';
import {
  AddClusterDialogComponent
} from './components/dialogs/add-cluster-dialog/add-cluster-dialog.component';
import {
  AddBuDialogComponent
} from './components/dialogs/add-bu-dialog/add-bu-dialog.component';
import {
  AddBgDialogComponent
} from './components/dialogs/add-bg-dialog/add-bg-dialog.component';
import {
  MilestoneQueueListComponent
} from './components/milestone-queue-list/milestone-queue-list.component';
import {
  HsraChecklistComponent
} from './views/dashboard/hsra-checklist/hsra-checklist.component';
import {
  HsraUpcomingComponent
} from './views/dashboard/hsra-upcoming/hsra-upcoming.component';
import {
  ChecklistDetailListComponent
} from './components/checklist-detail-list/checklist-detail-list.component';

import {
  AgGridModule
} from 'ag-grid-angular/main';
import {
  RequirementSelectRendererComponent
} from './components/checklist-detail-list/requirement-select-renderer/requirement-select-renderer.component';
import {
  RequirementSelectEditorComponent
} from './components/checklist-detail-list/requirement-select-editor/requirement-select-editor.component';
import {
  ConformanceListComponent
} from './views/dashboard/conformance-list/conformance-list.component';
import {
  DashboardComponent
} from './views/dashboard/dashboard.component';
import {
  AuthComponent
} from './views/auth/auth.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { AddUserDialogComponent } from './components/dialogs/add-user-dialog/add-user-dialog.component';
import { LoginService } from './services/auth/login.service';
import { LogoutService } from './services/auth/logout.service';
import { StorageService } from './services/storage/storage.service';
import { RestServices } from './services/rest.service';
import { LocalStorageService, LocalStorageModule } from 'angular-2-local-storage';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { ManageProcessService } from './services/cao-admin-services/manage-process.service';
import { ManageMilestoneService } from './services/cao-admin-services/manage-milestone.service';
import { ManageChecklistService } from './services/cao-admin-services/manage-checklist.service';
import { ManageMappingChecklistMilestoneService } from './services/cao-admin-services/manage-mapping-checklist-milestone.service';
import { ConfirmDialogComponent } from './components/dialogs/confirm-dialog/confirm-dialog.component';
import { ManageUserService } from './services/cao-admin-services/manage-user.service';
import { FileUploadButtonComponent } from './components/file-upload-button/file-upload-button.component';
import { FileURLComboUIComponent } from './components/file-url-combo-ui/file-url-combo-ui.component';
import { ManageAssessmentService } from './services/cao-admin-services/manage-assessment.service';
import { ErrorService } from './services/error/error.service';
import { ManageProjectService } from './services/bu-owner-services/manage-project.service';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { AddProjectDialogComponent } from './components/dialogs/add-project-dialog/add-project-dialog.component';
import { OverviewDashboardComponent } from './views/dashboard/overview-dashboard/overview-dashboard.view';
import { HsraProjectDetailsComponent } from './components/hsra-project-details/hsra-project-details.component';
import { ProjectDetailsService } from './components/hsra-project-details/hsra-project-details.service';
import { DemoUIScreen } from './views/developer/demo-ui-screen/demo-ui-screen.component';
import { DashboardService } from './services/architect-services/dashboard.service';
import { HSRAChecklistService } from './services/architect-services/hsra-checklist.service';
import { FileUrlDialogComponent } from './components/file-url-combo-ui/file-url-dialog/file-url-dialog.component';


const appRoutes: Routes = [{
  path: '',
  component: AuthComponent
},
{
  path: 'home',
  component: DashboardComponent
},
{
  path: 'login',
  redirectTo: ''
}
];

@NgModule({
  declarations: [
    AppComponent,
    ProcessListComponent,
    MilestoneListComponent,
    ChecklistListComponent,
    ProductListComponent,
    ProjectListComponent,
    AssessmentResultComponent,
    AddProcessDialogComponent,
    AddUserDialogComponent,
    AddProductDialogComponent,
    AddMilestoneDialogComponent,
    AddChecklistDialogComponent,
    AddProjectDialogComponent,
    ClusterTableComponent,
    BgTableComponent,
    BuTableComponent,
    ProductTableComponent,
    AddClusterDialogComponent,
    AddBuDialogComponent,
    AddBgDialogComponent,
    MilestoneQueueListComponent,
    HsraChecklistComponent,
    HsraUpcomingComponent,
    ChecklistDetailListComponent,
    RequirementSelectRendererComponent,
    RequirementSelectEditorComponent,
    ConformanceListComponent,
    DashboardComponent,
    AuthComponent,
    UserManagementComponent,
    ConfirmDialogComponent,
    FileUploadButtonComponent,
    FileURLComboUIComponent,
    OverviewDashboardComponent,
    HsraProjectDetailsComponent,
    DemoUIScreen,
    FileUrlDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AgGridModule.withComponents([]),
    AsyncLocalStorageModule,
    LocalStorageModule.withConfig({
      prefix:  'phd-app',
      storageType:  'localStorage'
    })
  ],
  providers: [
    LoginService,
    StorageService,
    RestServices,
    LogoutService,
    CookieService,
    ErrorService,
    ManageProcessService,
    ManageMilestoneService,
    ManageChecklistService,
    ManageMappingChecklistMilestoneService,
    ManageUserService,
    ManageAssessmentService,
    ManageProjectService,
    ProjectDetailsService,
    DashboardService,
    HSRAChecklistService
  ],
  entryComponents: [
    FileUrlDialogComponent,
    AddProductDialogComponent,
    AddProcessDialogComponent,
    AddMilestoneDialogComponent,
    AddChecklistDialogComponent,
    AddClusterDialogComponent,
    AddBuDialogComponent,
    AddBgDialogComponent,
    AddUserDialogComponent,
    AddProjectDialogComponent,
    ConfirmDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
