import userData from '../fixtures/userData.json'
import DashboardPage from '../pages/dashboardPage.js'
import LoginPage from '../pages/loginPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe(' Login Orange HMR Tests', () => {

  it('Login - Fail', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAcessInvalid()
  })

  it('Login - Sucess', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.verificationPageDashboard()
  })
})