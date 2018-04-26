export interface Process {
    name: string;
    id?: number;
    code: string;
    processType: ProcessType;
}

export interface ProcessType {
    id: number;
    name: string;
    code: string;
}


export const PROCESS_OPTION_LIST = [
    {
        id: 0,
        name: 'Agile',
        code: 'agile'
    },
    {
        id: 1,
        name: 'Native',
        code: 'native'
    }
];

export class ProcessInstance {
    process: Process;

    constructor() {
        this.process = {
            id: 0,
            name: '',
            code: '',
            processType: PROCESS_OPTION_LIST[0]
        };
    }

    setInstance = (data: Process): void => {
        this.process = data;
    }// end:setInstance

    getInstance = (): Process => {
        return this.process;
    }// end:getInstance

    getProcessOptionList = (): ProcessType[] => {
        return PROCESS_OPTION_LIST;
    }

    parseString = (input: string): Process => {
        return this.process;
    }// end:parseString
}// end:ProcessInstance
