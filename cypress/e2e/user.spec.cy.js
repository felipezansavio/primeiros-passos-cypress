import userData from '../fixtures/userData.json'
import myInfoData from '../fixtures/myInfoData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myinfoPage.js'

const Chance = require('chance');

const chance = new Chance();
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HMR Tests', () => {
  
  it('User Info Update - Sucess', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)

    dashboardPage.verificationPageDashboard()

    menuPage.acessMyInfo()

    myInfoPage.fillingData(chance.first(), chance.last(), myInfoData.InfosTrue.employee, myInfoData.InfosTrue.othertest, myInfoData.InfosTrue.driverslicensetest, myInfoData.InfosTrue.date)
    myInfoPage.saveForm()

  })
})