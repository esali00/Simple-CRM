export class User {
    firstname: string;
    lastname: string; 
    email: string;
    birthdate: number;
    street: string; 
    zipCode: number;
    city: string

    constructor(obj?: any) {
        this.firstname = obj ? obj.firstname : ''
        this.lastname = obj ? obj.lastname : ''
        this.email = obj ? obj.email : ''
        this.birthdate = obj ? obj.birthdate : ''
        this.street = obj ? obj.street : ''
        this.zipCode = obj ? obj.zipCode : ''
        this.city = obj ? obj.city : ''
    }
    
    public toJSON() {
        return {
            "firstname": this.firstname,
            "lastname": this.lastname,
            "email": this.email,
            "birthdate": this.birthdate,
            "street": this.street,
            "zipCode": this.zipCode,
            "city": this.city
        }
    }

}