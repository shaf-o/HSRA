import { Milestone } from '../../../views/dashboard/milestone-list/milestone-list-model/milestone-list-model';
import { Checklist } from '../../checklist-list/checklist-list-model/checklist-list-model';

export interface AssessmentResult {
    milestone: Milestone;
    checklist: Checklist;
    conformanceExtent: ConformanceExtent;
    publishStatus: PublishStatus;
    rationale: string;
}

export interface Projects {
    name: string;
    code: string;
    versionList: Version;
    processType: any;
    description: string;
    project_manager: string;
    architect: string;
    id?: number;
}

export interface Version {
    version: string;
    project_id: Number;
    id?: number;
}

export interface ConformanceExtent {
    name: string;
    code: String;
    id?: number;
}

export interface PublishStatus {
    name: string;
    code: String;
    id?: number;
}
