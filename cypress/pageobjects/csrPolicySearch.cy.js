class HLC_CSR_Policy_search{

  elements ={
    navigation : () => cy.get("[fxflex='1 0 auto']> .mat-focus-indicator>.mat-button-wrapper>.mat-icon"),
    policySearchTab : () => cy.get(".Policy >.mat-ripple >.nav-link-title"),
    policySearchBox : () => cy.get("#searchInput"),
    scroll_the_page : () =>  cy.get("mat-header-row[role='row']>mat-header-cell:nth-child(8)>div>div:nth-child(1)"),
    three_dots : () => cy.get("button[aria-label='More'] mat-icon[role='img']"),
    viewDetail : () => cy.get("button[aria-label='Begin New Claim'] span")

  }

  click_navigation(){
    this.elements.navigation().click()
    cy.get(".Policy >.mat-ripple >.nav-link-title", { timeout: 12000 }).should('be.visible')
    this.elements.policySearchTab().click()
  }



  search_needs_requirement_policy(fhdpolicy){
    this.elements.policySearchBox().type(fhdpolicy)
    this.elements.scroll_the_page().scrollIntoView().should('be.visible');
    cy.wait(3000)
    this.elements.three_dots().click()
    cy.get("button[aria-label='Begin New Claim'] span", { timeout: 12000 }).should('be.visible')
    cy.wait(3000)
    this.elements.viewDetail().click()
  }

  search_settled_policy(){
    search_needs_requirement_policy(fhdpolicy)
    this.elements.policySearchBox().type(fhdpolicy)
    cy.get("button[aria-label='More'] mat-icon[role='img']").should('not.be.visible')

  }





}

export default HLC_CSR_Policy_search;