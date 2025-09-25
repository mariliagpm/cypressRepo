var elements=require('./elements')
class LoginPage{ 

     checkHeader(){
         cy.get(elements.LOGINPAGE.HEADER_HOME).should('be.visible')
         cy.get(elements.LOGINPAGE.HEADER_HOME).should('contain.text','Swag Labs')
         cy.get(elements.LOGINPAGE.HEADER_HOME).should('have.text','Swag Labs')
     }     

     fillUserName(username){
        cy.get(elements.LOGINPAGE.USENAME).type(username)
     }

     fillPassword(password){
        cy.get(elements.LOGINPAGE.PASSWORD).type(password)
     } 

     clickLoginButton(){
        cy.get(elements.LOGINPAGE.SUBMIT_BUTTON).click();
     }
}

export default LoginPage;