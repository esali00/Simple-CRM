export class Customer  {
    firstname: string;
    lastname: string; 
    email: string;
    phone: string;
    street: string; 
    zipCode: number;
    city: string;
    country: string;
    industry: string;

    constructor(obj?: any) {
        this.firstname = obj ? obj.firstname : ''
        this.lastname = obj ? obj.lastname : ''
        this.email = obj ? obj.email : ''
        this.phone = obj ? obj.phone : ''
        this.street = obj ? obj.street : ''
        this.zipCode = obj ? obj.zipCode : ''
        this.city = obj ? obj.city : ''
        this.country = obj ? obj.country : ''
        this.industry = obj ? obj.industry : ''
    }
    
    public toJSON() {
        return {
            "firstname": this.firstname,
            "lastname": this.lastname,
            "email": this.email,
            "phone": this.phone,
            "street": this.street,
            "zipCode": this.zipCode,
            "city": this.city,
            "country": this.country,
            "industry": this.industry
        }
    }

}