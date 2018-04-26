
export interface Checklist {
    name: string;
    url: string;
    filename:string;
    id?: number;
    recordId:number;
    description: string;
}//end:Checklist

export interface ChecklistUpload {
    name:string;
    description:string;
    file?:File;
}//end:ChecklistUpload

export class ChecklistUploadInstance {
    checklistUpload:ChecklistUpload;

    constructor(){
        this.checklistUpload = {
            name:'',
            description:''
        }
    }//end:constructor

    setFileInstance = (file:File):void =>{
        this.checklistUpload.file = file;
    }//end:setFileInstance

    setName = (name:string):void =>{
        this.checklistUpload.name = name;
    }//end:setName

    setDescription = (description:string):void => {
        this.checklistUpload.description = description;
    }//end:setDescription

    setInstance = (data: ChecklistUpload): void => {
        this.checklistUpload = data;
    }// end:setInstance

    getInstance = (): ChecklistUpload => {
        return this.checklistUpload;
    }// end:getInstance


    getFileInstance = ():File => {
        return this.checklistUpload.file;
    }//end:getFileInstance

    getName = ():string => {
        return this.checklistUpload.name;
    }//end:getName

    getDescription = ():string => {
        return this.checklistUpload.description;
    }//end:getDescription

}//end:class-ChecklistUploadInstance

export class ChecklistInstance {
    checklist: Checklist;

    constructor() {
        this.checklist = {
            id: 0,
            recordId:0,
            name: '',
            url: '',
            filename:'',
            description: ''
        };
    }

    setInstance = (data: Checklist): void => {
        this.checklist = data;
    }// end:setInstance

    getInstance = (): Checklist => {
        return this.checklist;
    }// end:getInstance

}// end:ChecklistInstance
