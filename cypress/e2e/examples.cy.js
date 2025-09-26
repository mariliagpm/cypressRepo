import LoginPage from "../support/pages/LoginPage/LoginPage" 
import HomePage from "../support/pages/HomePage/HomePage"
 
var data;
 

describe('TesteSuit', () => {
    before(() => {

        cy.fixture('data.json').then(function (data1) {
            data = data1;
            });
            

    })

    it('testing1', () => {
        const loginPage = new LoginPage();
        const homePage= new HomePage();
        cy.visit('/')
        loginPage.checkHeader();
        loginPage.fillUserName(data.username);
        loginPage.fillPassword(data.password);
        loginPage.clickLoginButton();
        cy.url().should('eq','https://www.saucedemo.com/inventory.html')
        homePage.checkHeader();

    })


    it('testing2', () => {
        const loginPage = new LoginPage();
        const homePage= new HomePage();
        cy.visit('/')
        loginPage.checkHeader();
        loginPage.fillUserName(data.username);
        loginPage.fillPassword(data.password);
        loginPage.clickLoginButton();
        cy.url().should('eq','https://www.saucedemo.com/inventory.html')
        homePage.checkHeader();

    })



        it('testing3'  , () => {
        const loginPage = new LoginPage();
        const homePage= new HomePage();
        cy.visit('/')
        loginPage.checkHeader();
        loginPage.fillUserName(data.username);
        loginPage.fillPassword(data.password);
        loginPage.clickLoginButton();
        cy.url().should('eq','https://www.saucedemo.com/inventory.html')
        homePage.checkHeader();

    })

     it('testing4', () => {
        const loginPage = new LoginPage();
        const homePage= new HomePage();
        cy.visit('/')
        loginPage.checkHeader();
        loginPage.fillUserName(data.username);
        loginPage.fillPassword(data.password);
        loginPage.clickLoginButton();
        cy.url().should('eq','https://www.saucedemo.com/inventory.html')
        homePage.checkHeader();

    })

    
    it('testing5', () => {
        const loginPage = new LoginPage();
        const homePage= new HomePage();
        cy.visit('/')
        loginPage.checkHeader();
        loginPage.fillUserName(data.username);
        loginPage.fillPassword(data.password);
        loginPage.clickLoginButton();
        cy.url().should('eq','https://www.saucedemo.com/inventory.html')
        homePage.checkHeader();

    })

 it('testing6', () => {
        const loginPage = new LoginPage();
        const homePage= new HomePage();
        cy.visit('/')
        loginPage.checkHeader();
        loginPage.fillUserName(data.username);
        loginPage.fillPassword(data.password);
        loginPage.clickLoginButton();
        cy.url().should('eq','https://www.saucedemo.com/inventory.html')
        homePage.checkHeader();

    })   


    it('testing7', () => {
        const loginPage = new LoginPage();
        const homePage= new HomePage();
        cy.visit('/')
        loginPage.checkHeader();
        loginPage.fillUserName(data.username);
        loginPage.fillPassword(data.password);
        loginPage.clickLoginButton();
        cy.url().should('eq','https://www.saucedemo.com/inventory.html')
        homePage.checkHeader();

    })   


    it('testing8', () => {
        const loginPage = new LoginPage();
        const homePage= new HomePage();
        cy.visit('/')
        loginPage.checkHeader();
        loginPage.fillUserName(data.username);
        loginPage.fillPassword(data.password);
        loginPage.clickLoginButton();
        cy.url().should('eq','https://www.saucedemo.com/inventory.html')
        homePage.checkHeader();

    })   
   

    it('testing9', () => {
        const loginPage = new LoginPage();
        const homePage= new HomePage();
        cy.visit('/')
        loginPage.checkHeader();
        loginPage.fillUserName(data.username);
        loginPage.fillPassword(data.password);
        loginPage.clickLoginButton();
        cy.url().should('eq','https://www.saucedemo.com/inventory.html')
        homePage.checkHeader();

    })   
   
})
