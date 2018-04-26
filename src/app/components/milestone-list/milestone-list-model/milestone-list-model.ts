
export interface Milestone {
    name: string;
    code: string;
    level: number;
    id?: number;
    process: any;
}

export class MilestoneInstance {
    milestone: Milestone;

    constructor() {
        this.milestone = {
            id: 0,
            name: '',
            code: '',
            level: 0,
            process : {},
        };
    }

    setInstance = (data: Milestone): void => {
        this.milestone = data;
    }// end:setInstance

    getInstance = (): Milestone => {
        return this.milestone;
    }// end:getInstance

}// end:MilestoneInstance
