export class Task {
    title: string;
    description: string;
    priority: string;

    constructor(obj?: any) {
        this.title = obj ? obj.firstname : ''
        this.description = obj ? obj.lastname : ''
        this.priority = obj ? obj.email : ''
    }

    toJSON() {
        return {
            "title": this.title,
            "description": this.description,
            "priority": this.priority
        }
    }
}