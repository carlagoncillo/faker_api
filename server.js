const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;
    
//classes is always before routes
// this.any = nameOfVariable.key.value();
class User{
    constructor() {
        this.user_id = faker.datatype.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.gender = faker.name.gender();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
        this.time = faker.time.recent();
    }
}

class Company {
    constructor() {
        this.company_id = faker.datatype.number();
        this.companyName = faker.company.companyName();
        this.address = {
            street : faker.address.streetAddress(),
            city : faker.address.city(),
            state : faker.address.state(),
            zipCode : faker.address.zipCode(),
            country : faker.address.country()
        }
        this.fullAddress = `${this.address.street}, ${this.address.city}, ${this.address.state}, ${this.address.zipCode}`
        this.time = faker.time.recent();
    }
}

// req is shorthand for request
// res is shorthand for response
app.get("/api/users/new", (req, res) => {
    const newUser = new User();
    res.json({ user: newUser });
});

app.get("/api/companies/new", (req, res) => {
    const newCompany = new Company();
    res.json({ company: newCompany });
});

app.get('/api/users/companies', (req, res) =>{
    const new_user = new User(), new_company = new Company();
    res.json({user : new_user, company : new_company})
});


// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );