/* All versions of project should be of type - Version */
export interface VersionModel {
    name: string;
    id: number;
    process: ProcessModel;
}

export interface ProcessModel {
    name: string;
    type: string;
}

/* Drop down type should be BusinessModel */
export interface BusinessModel {
    name: string;
    id: number;
    code: string;
}

export interface ProjectModel {
    name: string;
    version: VersionModel [];

}

export interface MilestoneModel {
    id: number;
    name: string;
}

export interface ProjectMilestone {
    prjVersion: VersionModel;
    milestone: MilestoneModel;
}
