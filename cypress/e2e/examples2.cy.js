import HomePage2 from "../support/pages/HomePage2/HomePage2";

 
var data 
describe('TesteSuite', () => {
    before(() => {

        cy.fixture('data.json').then(function (data1) {
            data = data1;
            });
            

    })

    it('testing1',  { tags: ['@test2'] }, () => {
       var homePage = new  HomePage2();
       cy.visit("https://www.saucedemo.com/")
       cy.screenshot();
       homePage.checkHeader();
       homePage.fillUsername(data.username)
       homePage.fillPassword(data.password)
       homePage.clickSubmitButton()

    })

 



 
})
