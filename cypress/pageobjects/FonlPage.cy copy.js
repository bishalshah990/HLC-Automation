class HLC_Fonl_Page{
  elements = {
    navigation : () => cy.get("[fxflex='1 0 auto']> .mat-focus-indicator>.mat-button-wrapper>.mat-icon"),
    startFonl : () => cy.get("div[class='navbar-content']>fuse-navigation>div>fuse-nav-vertical-item:nth-of-type(4)>div>a"),
    playButton : () => cy.get("button[role='button']"),
    drop_down : () => cy.get("mat-select[role='combobox']>div"),
    drop_down_value : () => cy.get("div[role='listbox']>mat-option:nth-of-type(2)>span"),
    nextButton : () => cy.get("button[role='button']"),

    next_button1 : () => cy.get("button[role='button']").should('be.visible').click(),
    text_box : () => cy.get("input[id^='mat-input']"),

    calendar :() => cy.get("button[class^='mat-focus-indicator mat-icon-button ma']>span:nth-child(1)"),
    calendarBack : () => cy.get(".mat-calendar-previous-button"),
    calendarDate : () => cy.get("tbody[class='mat-calendar-body']>tr:nth-child(3)>td:nth-child(4)"),
    complete : () => cy.get(".text-center > .mat-focus-indicator > .mat-button-wrapper > span"),
    cross : () => cy.get("mat-toolbar-row[class='mat-toolbar-row flex flex-row']>div:nth-of-type(2)>button"),

    claimNotification : ()=> cy.get("div[class='navbar-content']>fuse-navigation>div>fuse-nav-vertical-group:nth-of-type(4)>div>div:nth-of-type(2)")
  }

  go_to_navigation_tab(){
    this.elements.navigation().click()
    cy.wait(5000)
  }

  go_to_start_FNOL_web(){
    this.elements.startFonl().click()
    cy.wait(5000)
    this.elements.playButton().click()
    cy.wait(2000)
  }

  go_to_drop_down(){
    this.elements.drop_down().click()
    cy.wait(2000)
    this.elements.drop_down_value().click()
    cy.wait(2000)
    this.elements.next_button1()

  }

  go_to_text_box(uname){
    this.elements.text_box().type(uname).type('{enter}')
    cy.wait(2000)
  }


  go_to_enter_email(emailid){
    this.elements.text_box().type(emailid).type('{enter}')
  }

  go_to_enter_phone_number(phone_number){
    this.elements.text_box().type(phone_number).type('{enter}')
  }

  go_to_next_button(date){
    this.elements.nextButton().click()
  }

  go_to_calendar(){
    this.elements.calendar().click()
    cy.wait(2000)
    this.elements.calendarBack().click()
    cy.wait(2000)
    this.elements.calendarDate().click()
    cy.wait(2000)

  }

  go_to_complete(){
    this.elements.complete().click()
  }

  go_to_cross(){
    this.elements.cross().click()
  }

  go_to_claimNotification(){
    this.elements.claimNotification().click()
    cy.wait(7000)
  }
}

export default HLC_Fonl_Page;