export interface User {
    name: string;
    id?: number;
    code1: number;
    email: String;
    selectedRole: any;
    roleList: any;
    firstName: string;
    lastName: string;
    organizationList: any;
}

export class UserInstance {
    user: User;

    constructor() {
        this.user = {
            name: '',
            id: 0,
            code1: 0,
            email: '',
            selectedRole: {},
            roleList: {},
            firstName: '',
            lastName: '',
            organizationList: {},
        };
    }

    setInstance = (data: User): void => {
        this.user = data;
    }// end:setInstance

    getInstance = (): User => {
        return this.user;
    }// end:getInstance

}// end:UserInstance
