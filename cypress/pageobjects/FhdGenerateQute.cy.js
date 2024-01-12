class HLC_FHD_Generate_Quote{

  elements ={
    caueOfDeath :() => cy.get("div[id^='mat-select-value']"),
    waitCauseOfDeath :() => cy.get("div[id='causeOfDeath-panel']>mat-option:nth-child(4)"),
    scroll_the_page : () =>  cy.get("button[id='generate-quote'] span[class='mat-button-wrapper']"),
    dateOfDeath : () => cy.get("input[id='v_datDeath']"),
    dateofBirth : () => cy.get("input[id='userProvidedDOB']"),
    contactNumber : () => cy.get("input[id='contract_number']"),
    startClaim : () => cy.get("button[id='start-claim']"),
    textClaim : () => cy.get("div[class='mat-step-text-label ng-star-inserted']")

  }

  click_pick_cause_of_death(){
    this.elements.caueOfDeath().click();
    cy.get("div[id='causeOfDeath-panel']>mat-option:nth-child(4)", { timeout: 12000 }).should('be.visible');
    this.elements.waitCauseOfDeath().click();
    this.elements.scroll_the_page().scrollIntoView().should('be.visible');
  }

  enter_date_death(dateofdeath){
    this.elements.dateOfDeath().type(dateofdeath)
  }

  enter_date_of_birth(dateofbirth){
    this.elements.dateofBirth().type(dateofbirth)
  }

  enter_contact_number(number){
    this.elements.contactNumber().type(number)
  }

  click_generate_quote_button(){
    this.elements.scroll_the_page().click()
    cy.get("button[id='start-claim']", { timeout: 20000 }).should('be.visible')

  }

  click_start_claim(){
    this.elements.startClaim().click()
    cy.get("div[class='mat-step-text-label ng-star-inserted']", { timeout: 20000 }).should('be.visible')
  }

}

export default HLC_FHD_Generate_Quote;