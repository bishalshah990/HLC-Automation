class HLC_Ready_to_pay{
  
elements = {
  payment : () => cy.get("div[id='caseload']>fuse-action-panel>div>div>div:last-of-type>button:nth-of-type(6)>span:nth-of-type(1)>div"),
  payee : () => cy.get("div[id='caseload']>fuse-action-panel>div>div>div:last-of-type>button:nth-of-type(6)>span:nth-of-type(1)>div"),
  TerminatePay : () => cy.get("div[id='caseload']>fuse-action-panel>div>div>div:last-of-type>button:nth-of-type(7)>span:nth-of-type(1)>div"),
  confirm : () => cy.get("mat-dialog-container[id^='mat-dialog']>core-confirm-dialog>div>div:nth-of-type(2)>button:nth-of-type(1)>span:nth-of-type(1)"),
  export_claim_Packet : () => cy.get("div[id='caseload']>fuse-action-panel>div>div>div:last-of-type>button:nth-of-type(6)>span:nth-of-type(1)>div"),
  re_generate : () => cy.get("table[class^='mat-table cdk-table ng-tns-c']>tbody>tr:nth-child(1)>td:nth-child(4)>button:nth-child(1)>span:nth-child(1)"),
  export_ok : () => cy.get("div[class^='confirm-dialog']>div:nth-child(3)>button"),

  
}

go_to_payment(){
  cy.wait(10000)
  this.elements.payment().click()
  cy.get("div[id='caseload']>fuse-action-panel>div>div>div:last-of-type>button:nth-of-type(6)>span:nth-of-type(1)>div", { timeout: 12000 }).should('be.visible')
  cy.get("div[id='caseload']>fuse-action-panel>div>div>div:last-of-type>button:nth-of-type(7)>span:nth-of-type(1)>div", { timeout: 12000 }).should('be.visible')
}


go_to_terminate_pay(){
  cy.wait(10000)
  this.elements.TerminatePay().click()
  cy.wait(3000)
  this.elements.confirm().click()
  cy.wait(30000)
}

download_Export_Claim_Packet(){
  this.elements.export_claim_Packet().click();
  cy.wait(5000)
  this.elements.re_generate().click()
  cy.wait(5000)
  this.elements.export_ok().click()

}

}

export default HLC_Ready_to_pay;