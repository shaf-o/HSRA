import { NgModule } from '@angular/core';
// tslint:disable-next-line:max-line-length
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatTabsModule, MatSidenavModule, MatSpinner, MatProgressSpinnerModule, MatTooltipModule, MatCheckbox, MatCheckboxModule, } from '@angular/material';
import { MatPaginatorModule, MatTableModule, MatDialogModule, MatSnackBarModule } from '@angular/material';
import { MatFormFieldModule, MatInputModule, MatSelectModule, MatRadioModule, MatProgressBarModule } from '@angular/material';

@NgModule({
  imports: [
    MatCheckboxModule,
    MatButtonModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSelectModule,
    MatRadioModule,
    MatSidenavModule
  ],
  exports: [
    MatCheckboxModule,
    MatButtonModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatTabsModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSelectModule,
    MatRadioModule,
    MatSidenavModule
  ]
})
export class MaterialModule { }
