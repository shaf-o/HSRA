import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { ManageAssessmentService } from '../../services/cao-admin-services/manage-assessment.service';
import { AssessmentResult, Projects, Version } from './assessment-result-model/assessment-result-model';

@Component({
  selector: 'app-assessment-result',
  templateUrl: './assessment-result.component.html',
  styleUrls: ['./assessment-result.component.css']
})
export class AssessmentResultComponent implements OnInit {
  private projectList: Projects;
  private projectObj: any;
  private projectId: Number;
  private versionList: Version;
  private versionObj: any;
  private assessmentList: AssessmentResult;

  displayedColumns = ['position', 'requirement', 'url', 'conformance', 'status', 'rationale'];
  dataSource: MatTableDataSource<AssessmentResult>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
  //  this.dataSource.paginator = this.paginator;
  }

  constructor(
    public manageAssessmentservice: ManageAssessmentService
  ) { }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  selectedProjectType(projectObj) {
    this.projectObj = projectObj;
    this.projectId = projectObj.id;
    this.manageAssessmentservice.getAllVersionConfig(projectObj.id).subscribe(res => {
      this.versionList = res;
      this.selectedVersionType(res[0]);
      // this.projectObj = res[0];
    }, (error) => {
      console.error(error);
    });
  }// end:selectedProjectType

  selectedVersionType(versionObj) {
    this.versionObj = versionObj;
    this.manageAssessmentservice.getAssessmentResultConfig(this.projectId, versionObj.id).subscribe(res => {
      // this.assessmentList = res;
      this.dataSource = new MatTableDataSource<AssessmentResult>(res);
    }, (error) => {
      console.error(error);
    });
  }// end:selectedVersionType

  ngOnInit() {
    this.manageAssessmentservice.getAllProjectsConfig().subscribe(res => {
      this.projectList = res;
      this.selectedProjectType(res[0]);
      // this.projectObj = res[0];
    }, (error) => {
      console.error(error);
    });
  }
}
