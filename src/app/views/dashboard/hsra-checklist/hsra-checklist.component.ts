import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { StorageService } from '../../../services/storage/storage.service';
import { ProjectMilestone } from '../../../components/hsra-project-details/hsra-project.model';
import { HSRAChecklistService } from '../../../services/architect-services/hsra-checklist.service';
import { CheckListModel } from './hsra-checklist.model';

@Component({
  selector: 'app-hsra-checklist',
  templateUrl: './hsra-checklist.component.html',
  styleUrls: ['./hsra-checklist.component.scss']
})
export class HsraChecklistComponent implements OnInit {
  private isLoading: boolean;
  private Loadbutton: boolean;
  displayedColumns = ['id', 'description', 'status', 'rationale'];
  // dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  dataSource: MatTableDataSource<CheckListModel>;
  todoCheckList: CheckListModel [];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private storageService: StorageService,
    private checklistService: HSRAChecklistService
  ) {}

  getCheckListElements(inputResponse: any): CheckListModel [] {
    return inputResponse.map((item, index) => {
      return {
        id: index + 1,
        checklistId: item.checklist.id,
        description: item.checklist.description,
        status: item.unit.name,
        rationale: item.rationale,
        evidence: item.evidence.filename,
        conformanceExtent: {
          id: item.conformanceExtent.id,
          name: item.conformanceExtent.name
        }
      };
    });
  }

  applyFilter(filterValue: string) {
    this.isLoading = true;
    this.Loadbutton = true;
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
    this.isLoading = false;
  }

  projectDetailsChangeHandler(inputObj: ProjectMilestone) {
    this.isLoading = true;
    this.Loadbutton = true;
    console.log('HSRA Checklist Screen handler: ', inputObj);
    this.checklistService.getChecklistItemsUnderMilestone( inputObj.milestone.id, inputObj.prjVersion.id ).subscribe(res => {
      console.log('List of Checklist Items inside a Milestone: ', res);
      this.todoCheckList = this.getCheckListElements(res);
      console.log('Actual Checklist Table: ', this.todoCheckList);
      this.dataSource = new MatTableDataSource<CheckListModel>(this.todoCheckList);
      this.dataSource.paginator = this.paginator;
      this.isLoading = false;
    });
  }

  ngOnInit() {
    /**
     * Disable the loader INITIALLY for getting conformance checklist
     */
    this.isLoading = false;
    this.Loadbutton = false;
  }
 
}
