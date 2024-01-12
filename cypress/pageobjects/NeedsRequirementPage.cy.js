class HLC_Needs_Requirement_Page{

  elements ={
    inbox : () => cy.get("div[id='caseload']>fuse-action-panel>div>div>div:last-of-type>button:nth-of-type(1)>span:nth-of-type(1)>div"),
    beneficiary : () => cy.get("div[id='caseload']>fuse-action-panel>div>div>div:last-of-type>button:nth-of-type(2)>span:nth-of-type(1)>div"),
    additional_Info : () => cy.get("div[id='caseload']>fuse-action-panel>div>div>div:last-of-type>button:nth-of-type(3)>span:nth-of-type(1)>div"),
    event_log : () => cy.get("div[id='caseload']>fuse-action-panel>div>div>div:last-of-type>button:nth-of-type(4)>span:nth-of-type(1)>div"),
    view_check_list : () => cy.get("div[id='caseload']>fuse-action-panel>div>div>div:last-of-type>button:nth-of-type(5)>span:nth-of-type(1)>div"),
    customer_support : () => cy.get("div[id='caseload']>fuse-action-panel>div>div>div:last-of-type>button:nth-of-type(6)>span:nth-of-type(1)>div"),
    assign_to_me : () => cy.get("div[id='caseload']>fuse-action-panel>div>div>div:last-of-type>button:nth-of-type(7)>span:nth-of-type(1)>div"),
  }

  wait_the_needs_requirement_page(){
    cy.get("div[id='caseload']>fuse-action-panel>div>div>div:last-of-type>button:nth-of-type(1)>span:nth-of-type(1)>div", { timeout: 12000 }).should('be.visible')
    cy.get("div[id='caseload']>fuse-action-panel>div>div>div:last-of-type>button:nth-of-type(2)>span:nth-of-type(1)>div", { timeout: 12000 }).should('be.visible')
    cy.get("div[id='caseload']>fuse-action-panel>div>div>div:last-of-type>button:nth-of-type(3)>span:nth-of-type(1)>div", { timeout: 12000 }).should('be.visible')
    cy.get("div[id='caseload']>fuse-action-panel>div>div>div:last-of-type>button:nth-of-type(4)>span:nth-of-type(1)>div", { timeout: 12000 }).should('be.visible')
    cy.get("div[id='caseload']>fuse-action-panel>div>div>div:last-of-type>button:nth-of-type(5)>span:nth-of-type(1)>div", { timeout: 12000 }).should('be.visible')
    cy.get("div[id='caseload']>fuse-action-panel>div>div>div:last-of-type>button:nth-of-type(6)>span:nth-of-type(1)>div", { timeout: 12000 }).should('be.visible')
    cy.get("div[id='caseload']>fuse-action-panel>div>div>div:last-of-type>button:nth-of-type(7)>span:nth-of-type(1)>div", { timeout: 12000 }).should('be.visible')
  }

  go_view_checklist_page(){
    this.elements.view_check_list().click()
  }

  click_assign_to_me(){
    this.elements.assign_to_me().click()
  }



}

export default HLC_Needs_Requirement_Page;