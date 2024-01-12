class HLC_Login_Page{

  elements = {
    usernameInput : () => cy.get('input[placeholder="Email"]'),
    passwordInput : () => cy.get('input[placeholder="Password"]'),
    loginBtn : () => cy.get("form[name='loginForm']>button>span:nth-of-type(1)"),
    claimActivity : () => cy.get("div[class^='content ng-tns']>ngx-gridster>div>ngx-gridster-item:nth-child(1)>div>div:nth-child(1)>mat-toolbar>div"),
    errorTxt : () => cy.get("form[name='loginForm']>mat-error"),
    logoutArrow : () => cy.get(".mat-button-wrapper > div > .mat-icon"),
    signOut :() => cy.get("[aria-label='Log Out'] > span"),
    wait : () => cy.wait(10000)
  }


  enterUsername(username){
    this.elements.usernameInput().clear();
    this.elements.usernameInput().type(username);
  }

  enterPassword(password){
    this.elements.passwordInput().clear();
    this.elements.passwordInput().type(password)
  }

  clickLogin(){
    this.elements.loginBtn().click();
    this.elements.wait();
  }

  checkClaimActivity(){
    this.elements.claimActivity().should('be.visible')
  }

  logoutFromApplication(){
    this.elements.logoutArrow().click();
    this.elements.signOut().should('be.visible');
    this.elements.signOut().click();
  }

}

export default HLC_Login_Page;