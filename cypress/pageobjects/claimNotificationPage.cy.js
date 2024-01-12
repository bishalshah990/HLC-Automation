class HLC_Claim_Notification_Page{

  elements ={

    navigation : () => cy.get('div[class^="content-wrapper"]>fuse-toolbar>mat-toolbar>div>div:nth-of-type(1)>button>span:nth-of-type(1)'),
    claimNotification : ()=> cy.get("div[class='navbar-content']>fuse-navigation>div>fuse-nav-vertical-group:nth-of-type(4)>div>div:nth-of-type(2)"),
    fonlPolocySearch : () => cy.get("input[placeholder='Search...']"),
    
    fileClaimId : ()=> cy.get("div[id='fc-list-container']>mat-table>mat-row>mat-cell:nth-of-type(1)>span>a"),
    
    approveClaimNotification : () => cy.get("div[fxlayout='row wrap']>button:nth-of-type(1)>span:nth-of-type(1)>mat-icon"),
    confirm : () => cy.get("[aria-label='CONFIRM']"),
    associatePolicy : () => cy.get("div[fxlayout='row wrap']>button:nth-of-type(1)>span:nth-of-type(1)>mat-icon"),
    policySelectorBox : () => cy.get("input[id='searchInput']"),

    threeDots :() => cy.get("mat-row[class^='mat-row cdk-row ng-tns']>mat-cell:nth-of-type(11)>div>button>span:nth-of-type(1)>mat-icon"),
    matchThis :() => cy.get("button[class^='mat-focus-indicator mat-menu-item ng-tns']>span"),
    associatePolicy : () => cy.get("div[fxlayout='row wrap']>button:nth-of-type(1)>span:nth-of-type(1)>mat-icon"),

    createClaim : () => cy.get("div[fxlayout='row wrap']>button:nth-of-type(2)>span:nth-of-type(1)>mat-icon"),
    generateQuote : () => cy.get("button[class^='mat-focus-indicator mat-button']>span:nth-of-type(1)>mat-icon"),

  }

  go_to_claim_notification(){
    cy.wait(3000)
    this.elements.navigation().click();
    cy.wait(3000)
    this.elements.claimNotification().click()
    cy.wait(7000)
  }

  search_claim_notification_policy(claimPolicy){
    this.elements.fonlPolocySearch().type(claimPolicy).type('{enter}')
    cy.wait(7000)
  }

  go_to_file_claim_id(){
    this.elements.fileClaimId().click()
    cy.wait(7000)
  }

  go_to_approve_claim_Notification(){
    cy.get("div[fxlayout='row wrap']>button:nth-of-type(1)>span:nth-of-type(1)>mat-icon", { timeout: 12000 }).should('be.visible')
    cy.wait(5000)
    this.elements.approveClaimNotification().click();
    cy.wait(5000)
    this.elements.confirm().click();
    cy.wait(5000)
  }

  go_to_associate_policy(){
    this.elements.associatePolicy().click()
    cy.wait(5000)
  }

  go_to_policy_selector(policySelec){
    this.elements.policySelectorBox().type(policySelec)
    cy.wait(10000)
    this.elements.threeDots().click()
    cy.wait(3000)
    this.elements.matchThis().click()
    cy.wait(3000)
    this.elements.confirm().click();
    cy.get("div[fxlayout='row wrap']>button:nth-of-type(1)>span:nth-of-type(1)>mat-icon", { timeout: 12000 }).should('be.visible')
    cy.wait(3000)
  }

  go_to_create_claim(){
    this.elements.createClaim().click()
    cy.get("button[class^='mat-focus-indicator mat-button']>span:nth-of-type(1)>mat-icon", { timeout: 12000 }).should('be.visible')
    cy.wait(10000)

  }

  

}

export default HLC_Claim_Notification_Page;