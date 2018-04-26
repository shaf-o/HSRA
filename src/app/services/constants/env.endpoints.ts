// import { environment } from './../../../environments/environment';
// const apiURL = require("../../../assets/data/env.config.json");
// let base = apiURL.dev.target;
const base = 'http://161.85.100.209:8080/hsra_dev/';
// if(environment.production){
//     base = apiURL.prod.target;
// }else {
//     base = apiURL.dev.target;
// };

export const appURL = {
    /** Business Unit Related */
    'getAllBU': base + 'shpar/bu',
    'loginLDAP': base + 'ldaplogin',
    'loginEndPoint': base + 'login',
    'logoutEndPoint': base + 'logout',
    'selectedRole': base + 'selectedRole',
    'getAllProcess': base + 'process',
    'createProcess': base + 'process',
    'updateProcess': base + 'process',
    'deleteProcess': base + 'process',
    'getAllProject': base + 'project',
    'getAllHSRAChecklist': base + 'hsraChecklist',
    'getAllHSRAOverview': base + 'hsraOverview',
    'createProject': base + 'project',
    'updateProject': base + 'project',
    'deleteProject': base + 'project',
    'milestone': base + 'milestone',
    'createMilestone': base + 'milestone',
    'updateMilestone': base + 'milestone',
    'deleteMilestone': base + 'milestone',
    'getAllChecklist': base + 'checklist',
    'getAllChecklistGroup': base + 'checklistGroup',
    'createChecklistGroup' : base + 'checklistGroup',
    'createChecklist': base + 'checklist/upload',
    'updateChecklist': base + 'checklist',
    'deleteChecklist': base + 'checklist',
    'downloadFile': base + 'sharepoint/checklist-template/download',
    'getAllUser': base + 'user',
    'searchUser': base + 'ad/user?email',
    'createUser': base + 'user',
    'updateUser': base + 'user',
    'deleteUser': base + 'user',
    'getAllRole': base + 'role',
    'getDashboardDetails' : base + 'dashboard',
    'getAllVersion' : base + 'projectversions',
    'getAssessmentResults' : base + 'assessmentResults',
    'getAllMappingChecklistMilestone': base + 'checklistMilestone',
    'updateMappingChecklistMilestone': base + 'checklistMilestone',
    'getAllProcessType': base + 'processtype',
};

export const globalMessage = {
    'pageNotFound': 'There was server error.Please refresh the page',
    'serverDown': 'The requested url was not found',
    'saveTitle': 'Save Report',
    'saveMessage': 'Are you sure you want to save changes?',
    'submitMessage': 'Are you sure you want to submit changes?',
    'alert': 'Alert',
    // tslint:disable-next-line:max-line-length
    'pendingChange': 'Are you sure you want to navigate away from this page?\n\nYou have unsaved data.\n\nPress OK to continue or Cancel to stay on the current page.',
}; // end:globalMessage constant

export const routerURL = {
};

export enum premssionEnum {
    CAO = 1,
    Admin = 2,
    BG = 3
}
