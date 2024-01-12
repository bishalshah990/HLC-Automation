class HLC_Pending_Review_Page{

  elements = {
    inbox : () => cy.get("div[id='caseload']>fuse-action-panel>div>div>div:last-of-type>button:nth-of-type(1)>span:nth-of-type(1)>div"),
    beneficiary : () => cy.get("div[id='caseload']>fuse-action-panel>div>div>div:last-of-type>button:nth-of-type(2)>span:nth-of-type(1)>div"),
    additionalInfo : () => cy.get("div[id='caseload']>fuse-action-panel>div>div>div:last-of-type>button:nth-of-type(3)>span:nth-of-type(1)>div"),
    eventLog : () => cy.get("div[id='caseload']>fuse-action-panel>div>div>div:last-of-type>button:nth-of-type(4)>span:nth-of-type(1)>div"),
    customerSupport : () => cy.get("div[id='caseload']>fuse-action-panel>div>div>div:last-of-type>button:nth-of-type(5)>span:nth-of-type(1)>div"),
    assign_to_me : () => cy.get("div[id='caseload']>fuse-action-panel>div>div>div:last-of-type>button:nth-of-type(6)>span:nth-of-type(1)>div"),
    confirm_button : () => cy.get("mat-dialog-container[id^='mat-dialog']>core-confirm-dialog>div>div:nth-of-type(2)>button:nth-of-type(1)>span:nth-of-type(1)"),
    approve : () => cy.get("div[id='caseload']>fuse-action-panel>div>div>div:last-of-type>button:nth-of-type(10)>span:nth-of-type(1)>div")
    
  
  }

  wait_the_pending_review(){
    cy.get("div[id='caseload']>fuse-action-panel>div>div>div:last-of-type>button:nth-of-type(1)>span:nth-of-type(1)>div", { timeout: 12000 }).should('be.visible')
    cy.get("div[id='caseload']>fuse-action-panel>div>div>div:last-of-type>button:nth-of-type(2)>span:nth-of-type(1)>div", { timeout: 12000 }).should('be.visible')
    cy.get("div[id='caseload']>fuse-action-panel>div>div>div:last-of-type>button:nth-of-type(3)>span:nth-of-type(1)>div", { timeout: 12000 }).should('be.visible')
    cy.get("div[id='caseload']>fuse-action-panel>div>div>div:last-of-type>button:nth-of-type(4)>span:nth-of-type(1)>div", { timeout: 12000 }).should('be.visible')
    cy.get("div[id='caseload']>fuse-action-panel>div>div>div:last-of-type>button:nth-of-type(5)>span:nth-of-type(1)>div", { timeout: 12000 }).should('be.visible')
    cy.get("div[id='caseload']>fuse-action-panel>div>div>div:last-of-type>button:nth-of-type(6)>span:nth-of-type(1)>div", { timeout: 12000 }).should('be.visible')
  }

  go_assign_to_me(){
    cy.wait(10000)
    this.elements.assign_to_me().click()
    cy.wait(3000)
    this.elements.confirm_button().click()
  }

  go_approve_tab(){
    this.elements.approve().click()
    cy.wait(3000)
    this.elements.confirm_button().click()
  }


}

export default HLC_Pending_Review_Page;