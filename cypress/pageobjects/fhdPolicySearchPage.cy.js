class HLC_FHD_Policy_Search_Page{

  elements = {
    navigation : () => cy.get('div[class^="content-wrapper"]>fuse-toolbar>mat-toolbar>div>div:nth-of-type(1)>button>span:nth-of-type(1)'),      
    policytab : () => cy.get('.Policy >.mat-ripple >.nav-link-title'),
    policySearchBox : () => cy.get("input[id='searchInput']"),
    fhdActive : () => cy.get("mat-row[role='row']>mat-cell:nth-child(4)>div"),

    threeDots : ()=> cy.get("button[aria-label='More'] mat-icon[role='img']"),
    beginClaim : () => cy.get("button[aria-label='Begin New Claim"),
    generateQuote : () => cy.get("button[id='generate-quote'] span[class='mat-button-wrapper']"),
    scroll_the_page : () =>  cy.get("button[id='generate-quote'] span[class='mat-button-wrapper']"),
    
    fonlPolocySearch : () => cy.get("input[placeholder='Search...']"),
    
  }

  go_to_navigation(){
    this.elements.navigation().click();
    cy.wait(3000)
    this.elements.policytab().click()
    cy.get("input[id='searchInput']", { timeout: 12000 }).should('be.visible')
  }

  go_search_the_policy(policyNumber){
    this.elements.policySearchBox().type(policyNumber);
  }

  click_Begin_claim(){
    cy.get("mat-row[role='row']>mat-cell:nth-child(4)>div", { timeout: 12000 }).should('be.visible');
    this.elements.threeDots().click();
    cy.get("button[aria-label='Begin New Claim']>span", { timeout: 12000 }).should('be.visible');
    this.elements.beginClaim().click();
    cy.wait(10000)
    this.elements.scroll_the_page().scrollIntoView().should('be.visible');
    cy.get("button[id='generate-quote'] span[class='mat-button-wrapper']", { timeout: 12000 }).should('be.visible');
  }

  search_claim_notification_policy(claimPolicy){
    this.elements.fonlPolocySearch().type(claimPolicy).type('{enter}')
    cy.wait(7000)
  }
  

}

export default HLC_FHD_Policy_Search_Page;