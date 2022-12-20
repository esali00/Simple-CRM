export class User {
    firstname: string;
    lastname: string; 
    email: string;
    phone: string;
    department: string;
    street: string; 
    zipCode: number;
    city: string;
    country: string;

    constructor(obj?: any) {
        this.firstname = obj ? obj.firstname : ''
        this.lastname = obj ? obj.lastname : ''
        this.email = obj ? obj.email : ''
        this.phone = obj ? obj.phone : ''
        this.department = obj ? obj.department : ''
        this.street = obj ? obj.street : ''
        this.zipCode = obj ? obj.zipCode : ''
        this.city = obj ? obj.city : ''
        this.country = obj ? obj.country : ''
    }
    
    public toJSON() {
        return {
            "firstname": this.firstname,
            "lastname": this.lastname,
            "email": this.email,
            "phone": this.phone,
            "department": this.department,
            "street": this.street,
            "zipCode": this.zipCode,
            "city": this.city,
            "country": this.country
        }
    }

}