import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProjectDetailsService } from './hsra-project-details.service';
import { BusinessModel, ProjectModel, VersionModel, MilestoneModel, ProjectMilestone } from './hsra-project.model';
import { uniq } from 'lodash';

@Component({
  selector: 'app-hsra-project-details',
  templateUrl: './hsra-project-details.component.html',
  styleUrls: ['./hsra-project-details.component.scss']
})
export class HsraProjectDetailsComponent implements OnInit {

  /*
   * Dropdown models
   */
  private buModel: BusinessModel;
  private projectModel: ProjectModel;
  private releaseModel: VersionModel;
  private milestoneModel: MilestoneModel;
  private businessUnitList: BusinessModel [];
  private projectDetailList: ProjectModel [];
  private releaseVersionList: VersionModel [];
  private milestoneList: MilestoneModel [];
  private isVersionSelected: boolean;
  private processTypeInformation: string;
  /*
  * Disabling drop down models
  * */
  @Input() isBuDisabled: boolean;
  @Input() isProjectDisabled: boolean;
  @Input() isReleaseDisabled: boolean;
  @Input() isMilestoneDisabled: boolean;
  @Input() isMileStoneUpcoming: boolean;
  @Output() changeHandler: EventEmitter <ProjectMilestone> = new EventEmitter<ProjectMilestone>();

  constructor(
    /**
     * Ideally - ProjectDetailsService must be provided along with this component,
     * But the service ends up being called again and again, every time the component is re-used
     * (if described as part of this component's providers)
     * Therefore, moving ProjectDetailsService unde the provider list of app.module.ts
     */
    private projectDetailsService: ProjectDetailsService
  ) {    }

  getBusinessUnitOptionList(list): BusinessModel [] {
    const tempList = list.map(item => {
      return {
        name: item.name,
        id: item.id,
        code: item.code
      };
    });
    return tempList;
  }

  onBuChangeHandler(buModel: BusinessModel) {
    /** Hide Process / Process Type label and reset its value */
    this.isVersionSelected = false;
    console.log('Selected BU is: ', buModel);
    this.buModel = buModel;
    this.projectDetailsService.getAllProjectsUnderBU(buModel.id).subscribe( res => {
      this.isProjectDisabled = false;
      console.log('Response from Project Detail Service is: ', res);
      /** Populating business unit drop down values */
      /** Populating project details drop down values */
      this.projectDetailList = this.getProjectDetailsList(res);
      /** Populating release drop down values */
      // console.log('One OBject having all PRojects, Version and PRocess ', this.projectDetailList);
    });
  }

  onProjectChangeHandler(projectItem: ProjectModel) {
    console.log('Selected Project is: ', projectItem);
    this.projectModel = projectItem;
    this.isReleaseDisabled = false;
    this.releaseVersionList = this.projectModel.version;
  }

  onReleaseChangeHandler (version: VersionModel) {
    console.log('Selected Version is: ', version);
    this.releaseModel = version;
    this.isVersionSelected = true;
    this.processTypeInformation = `${version.process.name} / ${version.process.type}`;
    this.projectDetailsService.getAllMilestonesUnderProject(version.id).subscribe(res => {
      console.log('Response for Milestones by Version: ', res);
      this.isMilestoneDisabled = false;
      this.milestoneList = this.getMilestonesList(res);
    });
  }

  onMilesStoneChangeHandler(milestone: MilestoneModel) {
    this.milestoneModel = milestone;
    const projectMilestoneObj: ProjectMilestone = {
      prjVersion : this.releaseModel,
      milestone: this.milestoneModel
    };
    console.log('Project and Milestone Grouped Object is: ', projectMilestoneObj);
    this.changeHandler.emit(projectMilestoneObj);
  }

  getProjectDetailsList(list): ProjectModel [] {
    const tempList = list.map(item => {
      const versionList: VersionModel [] = item.versionList.map(versionItem => {
        return {
          name : versionItem.version,
          id: versionItem.id,
          process : {
            name: versionItem.process.name,
            type: versionItem.process.processType.name
          }
        };
      });
      return {
        name: item.name,
        version: versionList
      };
    });
    return tempList;
  }

  getReleaseVersionList(list: any): VersionModel [] {
    const tempList = list.map(item => {
      return {
        name: item.versionList[0].version,
        id: item.versionList[0].id
      };
    });
    return tempList;
  }

  getMilestonesList(list: any): MilestoneModel [] {
    const tempList = list.map(item => {
      return {
        name: item.name,
        id: item.id
      };
    });
    return tempList;
  }

  ngOnInit() {
    /**
     * Initially - We are disabling the process /process type,  project, release & milestone dropdowns
     */
    this.isVersionSelected = false;
    this.isProjectDisabled = true;
    this.isReleaseDisabled = true;
    this.isMilestoneDisabled = true;

    /**
     * Getting all of the drop down options
     */
    this.projectDetailsService.getAllBusinessUnit().subscribe(res => {
      console.log('List of Business Unit tagged to Architect Role is: ', res);
      this.businessUnitList = uniq(this.getBusinessUnitOptionList(res));
    });
  }

}
