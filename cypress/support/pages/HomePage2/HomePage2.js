 

var elements =require('./elements')
class HomePage2{

    checkHeader(){
        cy.get(elements.HOME_PAGE2.HEADER_HOME).should('have.text','Swag Labs')
    }

    fillUsername(username){
        cy.get(elements.HOME_PAGE2.USERNAME).type(username)
    }

    fillPassword(password){
        cy.get(elements.HOME_PAGE2.PASSWORD).type(password)
    }

    clickSubmitButton(){
        cy.get(elements.HOME_PAGE2.SUBMIT_BUTTON).click();
    }

}

export default HomePage2;