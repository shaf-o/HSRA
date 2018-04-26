export interface Project {
    name: string;
    id?: number;
    code: string;
    versionList: any;
    currentProjectVersion: string;
    process_id: number;
    description: string;
    project_manager: string;
    architect: string;
}


export class ProjectInstance {
    project: Project;

    constructor() {
        this.project = {
            name: '',
            id: 0,
            code: '',
            versionList: {},
            currentProjectVersion: '',
            process_id: 0,
            description: '',
            project_manager: '',
            architect: '',
        };
    }

    setInstance = (data: Project): void => {
        this.project = data;
    }// end:setInstance

    getInstance = (): Project => {
        return this.project;
    }// end:getInstance

    parseString = (input: string): Project => {
        return this.project;
    }// end:parseString
}// end:ProjectInstance
