import HLC_Login_Page from "../pageobjects/loginPage.cy";
import HLC_Fonl_Page from "../pageobjects/FonlPage.cy copy";
import HLC_Claim_Notification_Page from "../pageobjects/claimNotificationPage.cy";


describe('Login Page Test', () => {
  
  beforeEach(function() {
    cy.fixture("hlcTestData.json").then((user)  => {
      var urls = user.url
    cy.visit(urls);
    cy.wait(5000)
  })
 })


it('Verify the functionality of Fonl Tab', () => {
  cy.fixture("hlcTestData.json").then((user)  => {
    var name = user.username
    var pass = user.password

    var fname = user.FirstName
    var mName = user.MiddleName
    var lname = user.lastName
    var phone = user.phNum
    var chat = user.internalNote
    var addresss = user.Address
    var text = user.internalNote
    var emailinput = user.email
    var policy = user.claimPolicy

    const loginobj = new HLC_Login_Page();
    loginobj.enterUsername(name)
    loginobj.enterPassword(pass)
    loginobj.clickLogin()
    loginobj.checkClaimActivity()

    const fonlObj = new HLC_Fonl_Page();
    fonlObj.go_to_navigation_tab()
    fonlObj.go_to_start_FNOL_web()
    fonlObj.go_to_drop_down()
    fonlObj.go_to_text_box(chat)
    fonlObj.go_to_text_box(emailinput)
    fonlObj.go_to_text_box(phone)
    fonlObj.go_to_text_box(policy)
    fonlObj.go_to_drop_down()
    fonlObj.go_to_text_box(policy)
    fonlObj.go_to_drop_down()
    fonlObj.go_to_text_box(policy)
    fonlObj.go_to_text_box(fname)
    fonlObj.go_to_text_box(mName)
    fonlObj.go_to_text_box(lname)
    fonlObj.go_to_text_box(addresss)
    fonlObj.go_to_next_button()
    cy.wait(4000)
    fonlObj.go_to_calendar()
    fonlObj.go_to_next_button()

    fonlObj.go_to_calendar()
    fonlObj.go_to_next_button()

    fonlObj.go_to_text_box(policy)
    fonlObj.go_to_drop_down()
    fonlObj.go_to_drop_down()
    fonlObj.go_to_text_box(text)
    fonlObj.go_to_text_box(emailinput)
    fonlObj.go_to_text_box(phone)
    fonlObj.go_to_drop_down()
    fonlObj.go_to_text_box(text)
    fonlObj.go_to_text_box(emailinput)
    fonlObj.go_to_text_box(phone)
    fonlObj.go_to_complete()
    fonlObj.go_to_cross()
  })
  
}) 

it('Login and get the Fonl search policy', () => {
  cy.fixture("hlcTestData.json").then((user)  => {
    var name = user.username
    var pass = user.password
    var policy = user.claimPolicy
    var policyselector = user.policynumber

    const loginobj = new HLC_Login_Page();
    loginobj.enterUsername(name)
    loginobj.enterPassword(pass)
    loginobj.clickLogin()
    loginobj.checkClaimActivity()

    const claim = new HLC_Claim_Notification_Page();
    claim.go_to_claim_notification()
    claim.search_claim_notification_policy(policy)
    claim.go_to_file_claim_id()
    
    claim.go_to_approve_claim_Notification()
    claim.go_to_associate_policy()
    claim.go_to_policy_selector(policyselector)
    claim.go_to_create_claim()

  })

})




}) 