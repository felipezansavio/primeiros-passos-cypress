import userData from '../fixtures/userData.json'
import myInfoData from '../fixtures/myInfoData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myinfoPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HMR Tests', () => {
  
  const selectorsList = {
    
    
    
    
  }

  
  it.only('User Info Update - Sucess', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)

    dashboardPage.verificationPageDashboard()

    menuPage.acessMyInfo()

    myInfoPage.fillingData(myInfoData.InfosTrue.firstname, myInfoData.InfosTrue.lastname, myInfoData.InfosTrue.employee, myInfoData.InfosTrue.othertest, myInfoData.InfosTrue.driverslicensetest, myInfoData.InfosTrue.date)
    
   
    // cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    // cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    // cy.get(selectorsList.genericField).eq(3).clear().type('Employee')
    // cy.get(selectorsList.genericField).eq(4).clear().type('OtherTest')
    // cy.get(selectorsList.genericField).eq(5).clear().type('DriversLicenseTest')
    // cy.get(selectorsList.dateField).eq(1).type('2025-03-10')  
    // cy.get(selectorsList.dateCloseButton).click()
    // cy.get(selectorsList.submitButton).eq(1).click({force: true})
    // cy.get('body').should('contain', 'Success')
    // cy.get('.oxd-toast-close')
    // cy.get(selectorsList.genericCombobox).eq(0).click({force: true})
    // cy.get(selectorsList.selectionNationality).click()
    // cy.get(selectorsList.genericCombobox).eq(1).click({force: true})
    // cy.get(selectorsList.selectionMaritalStatus).click()
    
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})