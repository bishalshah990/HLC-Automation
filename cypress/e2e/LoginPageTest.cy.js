import HLC_Login_Page from "../pageobjects/loginPage.cy";

describe('Login Page Test', () => {
  
  beforeEach(function() {
    cy.fixture("hlcTestData.json").then((user)  => {
      var urls = user.url
    cy.visit(urls);
    cy.wait(5000)
  })
 })

 it('Verify valid login Successfully', () => {
  cy.fixture("hlcTestData.json").then((user)  => {
    var name = user.username
    var pass = user.password

    const loginobj = new HLC_Login_Page();
    loginobj.enterUsername(name)
    loginobj.enterPassword(pass)
    loginobj.clickLogin()
    loginobj.checkClaimActivity()
    loginobj.logoutFromApplication()
  
  })
  
})

it('Verify for In valid login Successfully', () => {
  cy.fixture("hlcTestData.json").then((user)  => {
    var name = user.username
    var pass = user.username

    const loginobj = new HLC_Login_Page();
    loginobj.enterUsername(name)
    loginobj.enterPassword(pass)
    loginobj.clickLogin()
    loginobj.elements.errorTxt().should('contain','Username or Password is Incorrect')

  
  })
  
}) 

}) 