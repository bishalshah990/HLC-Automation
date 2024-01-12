class HLC_FHD_Claim_Infomrmation{

  elements = {
    funeralHome1 : () => cy.get("input[id='Funeral_Home_Rep']"),
    scroll_the_page : () => cy.get("button[aria-label='cancel quote']"),

    making_home_arrangement2 : () => cy.get("input[id='name_of_individual_making_funeral_home_arrangements']"),
    funeral_home_arrangement3 : () => cy.get("input[id='email_of_individual_making_funeral_home_arrangements']"),
    funeral_home_arrangement4 : () => cy.get("input[id='phone_number_of_individual_making_funeral_home_arrangements']"),
    sign : () => cy.get("button[aria-label='Click here to sign']"),
    signaturePad : () => cy.get("mat-panel-title[class^='mat-expansion-panel-header-title t']"),
    firstName : () => cy.get("input[placeholder='First Name']"),
    lastName : () => cy.get("input[placeholder='Last Name']"),
    checkBox : () => cy.get("mat-checkbox[id^='mat-checkbox']>label>span:nth-child(1)"),
    submit : () => cy.get("div[fxlayoutalign='center']>button"),
    accept : () => cy.get("div[class^='ng-trigger ng-trigger-slideInLeft ps ng-sta']>div:nth-of-type(1)>button:nth-of-type(1)"),
    submitClaim : () => cy.get("div[class^='ng-trigger ng-trigger-slideInLeft ng-star-inser']>div:nth-of-type(7)>button:nth-of-type(1)"),

  }

  enter_Performing_Funeral_Home_Representative1(funeralHome1){
    this.elements.funeralHome1().type(funeralHome1);
    this.elements.sign().scrollIntoView().should('be.visible');
    cy.wait(2000)
  }

  enter_funeral_home_arrangement2(funeralHome2){
    this.elements.making_home_arrangement2().type(funeralHome2);

  }

  enter_email_funeral_home_arrangement3(funeralHome3){
    this.elements.funeral_home_arrangement3().type(funeralHome3);
  }

  enter_phone_funeral_home_arrangement4(funeralHome4){
    this.elements.funeral_home_arrangement4().type(funeralHome4);
    
  }

  enter_signature(){
    this.elements.sign().click();
    cy.wait(3000)
    this.elements.signaturePad().click();
    this.elements.firstName().type('Bishal');
    this.elements.lastName().type('Shah');
    this.elements.submit().click();
    this.elements.checkBox().scrollIntoView().should('be.visible');
    cy.wait(3000)
    this.elements.checkBox().click()
    this.elements.accept().click()
    cy.get("div[class^='ng-trigger ng-trigger-slideInLeft ng-star-inser']>div:nth-of-type(7)>button:nth-of-type(1)", { timeout: 12000 }).should('be.visible')
    cy.wait(3000)
    this.elements.submitClaim().click()
    cy.get("div[id='caseload']>fuse-action-panel>div>div>div:nth-of-type(2)>button:nth-of-type(1)>span:nth-of-type(1)>mat-icon", { timeout: 20000 }).should('be.visible')
    cy.wait(3000)

  }


}

export default HLC_FHD_Claim_Infomrmation;