import HLC_Login_Page from "../pageobjects/loginPage.cy";
import HLC_FHD_Policy_Search_Page from "../pageobjects/fhdPolicySearchPage.cy";
import HLC_FHD_Generate_Quote from "../pageobjects/FhdGenerateQute.cy";
import HLC_FHD_Claim_Infomrmation from "../pageobjects/FhdClaimInformation.cy";
import HLC_CSR_Policy_search from "../pageobjects/csrPolicySearch.cy";
import HLC_Needs_Requirement_Page from "../pageobjects/NeedsRequirementPage.cy";
import HLC_Upload_Document_Page from "../pageobjects/UploadDocument.cy";
import HLC_Pending_Review_Page from "../pageobjects/PendingReviewPage.cy";
import HLC_Ready_to_pay from "../pageobjects/Read_to_pay.cy";

describe('Login Page Test', () => {
  
  beforeEach(function() {
    cy.fixture("hlcTestData.json").then((user)  => {
      var urls = user.url
    cy.visit(urls);
    cy.wait(5000)
  })
 })

 it('Verify valid FHD login Successfully', () => {
  cy.fixture("hlcTestData.json").then((user)  => {
    var name = user.usernameFhd
    var pass = user.password

    const loginobj = new HLC_Login_Page();
    loginobj.enterUsername(name)
    loginobj.enterPassword(pass)
    loginobj.clickLogin()
  })
  
})

it('Verify the Policy Search', () => {
  cy.fixture("hlcTestData.json").then((user)  => {
    var name = user.usernameFhd
    var pass = user.password
    var policy = user.fhdPolicy
    var DateOfDeath = user.fhdDateofDeath
    var DateOfBirth = user.fhdInsuredDob
    var phone = user.phNum

    var funeral = user.fhdFun1
    var email = user.email

    const loginobj = new HLC_Login_Page();
    loginobj.enterUsername(name)
    loginobj.enterPassword(pass)
    loginobj.clickLogin()

    const fhdPolicy = new HLC_FHD_Policy_Search_Page();
    fhdPolicy.go_to_navigation()
    fhdPolicy.go_search_the_policy(policy)
    fhdPolicy.click_Begin_claim()

    const fhdgenerate = new HLC_FHD_Generate_Quote();
    fhdgenerate.click_pick_cause_of_death()
    fhdgenerate.enter_date_death(DateOfDeath)
    fhdgenerate.enter_date_of_birth(DateOfBirth)
    fhdgenerate.enter_contact_number(phone)
    fhdgenerate.click_generate_quote_button()
    fhdgenerate.click_start_claim()

    const fhdclaim = new HLC_FHD_Claim_Infomrmation();
    fhdclaim.enter_Performing_Funeral_Home_Representative1(funeral)
    fhdclaim.enter_funeral_home_arrangement2(funeral)
    fhdclaim.enter_email_funeral_home_arrangement3(email)
    fhdclaim.enter_phone_funeral_home_arrangement4(phone)
    fhdclaim.enter_signature()
  })
  
}) 

it('Verify CSR Login Successfully', () => {
  cy.fixture("hlcTestData.json").then((user)  => {
    var name = user.username
    var pass = user.password
    var policy = user.fhdPolicy

    const loginobj = new HLC_Login_Page();
    loginobj.enterUsername(name)
    loginobj.enterPassword(pass)
    loginobj.clickLogin()
    loginobj.checkClaimActivity()

    const csrPolicy = new HLC_CSR_Policy_search();
    csrPolicy.click_navigation()
    csrPolicy.search_needs_requirement_policy(policy)

    const needsRequirement = new HLC_Needs_Requirement_Page()
    needsRequirement.wait_the_needs_requirement_page()
    needsRequirement.go_view_checklist_page()
    needsRequirement.wait_the_needs_requirement_page()

    const upload = new HLC_Upload_Document_Page();
    upload.go_to_file_upload()
    upload.go_match_this()
    upload.go_save_button()

    needsRequirement.wait_the_needs_requirement_page()

    const pendingreview = new HLC_Pending_Review_Page();
    pendingreview.go_assign_to_me()
    pendingreview.wait_the_pending_review()
    pendingreview.go_approve_tab()

    const read = new HLC_Ready_to_pay();
    read.go_to_payment()
    read.go_to_terminate_pay()

    loginobj.logoutFromApplication()

  })
  
})

}) 