var elements = require('./elements')

class HomePage{

    checkHeader(){
        cy.get(elements.HOME_PAGE.HEADER_HOME).should('contain.text','Swag Labs')
        
    }

}

export default HomePage;