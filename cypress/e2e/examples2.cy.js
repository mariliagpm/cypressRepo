import HomePage2 from "../support/pages/HomePage2/HomePage2";

 
var data ;

describe('TesteSuite', () => {
    before(() => {

        cy.fixture('data.json').then(function (data1) {
            data = data1;
            });
 
    })

    it('testing1',  { tags: ['@test2'] }, () => {
       var homePage = new  HomePage2();
       cy.visit("/")
       cy.screenshot('Login Page');
       homePage.checkHeader();
       homePage.fillUsername(data.username)
       homePage.fillPassword(data.password)
       homePage.clickSubmitButton()
        
       cy.get('[data-test="inventory-item-name"]').each(($element,index, $list)=>{
        cy.log(`name at index ${index} : ${$element.text()}`)
        if(index == 1){
            let text = $element.text();
            cy.wrap(text).as('text')
        }
       })
       cy.screenshot('Home Page');

       cy.get('@text').then(txt=>{
        
        cy.log(`text one ${txt}`)
       })

    })

 



 
})
