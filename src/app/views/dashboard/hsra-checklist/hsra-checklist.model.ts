/**
 * Same interface type for both POST and PUT
 */
export interface CheckListInputOutputModel {
    checklistId: number;
    milestoneId: number;
    conformance_extent_id: number;
    project_version_id: number;
    rationale: string;

}

/**
 * Same interface type for displaying on the screen
 */
export interface CheckListModel {
    id: number;
    checklistId: number;
    description: string;
    status: string;
    rationale: string;
    evidence: Evidence;
    conformanceExtent: Conformance;
}

export interface Evidence {
    filename: string;
    template: any;
    url: string;
}

export interface Conformance {
    name: string;
    id: number;
}
