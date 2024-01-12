class HLC_Upload_Document_Page{

  document = "input[type=file]"
  documentClass = "hidden ng-tns-c598-8"
  matchThis = "div[id='caseload']>div button:nth-child(1)>span>span"
  saveButton = ".blue-200-fg"

  viewbutton = "div[id='caseload']>div:nth-of-type(1)>div:nth-of-type(1)>div>div:nth-of-type(3)>button>span:nth-of-type(1)>span"
  closeButton = "div[id='doctracks']>div>div:nth-of-type(3)>button:nth-of-type(2)>span:nth-of-type(2)"

  go_to_file_upload()
  {
      cy.get(this.document).invoke("removeClass",this.documentClass)
      .selectFile("cypress/fixtures/TestData.pdf")
      //cy.get(this.matchThis,{timeout:10000}).scrollIntoView().should('be.visible')
      cy.wait(10000)
  }

  go_match_this()
  {
      cy.get(this.matchThis).each(($button) => {
          cy.wrap($button).click().
          k +=1
        })
      
      cy.wait(10000)
  }

  go_save_button()
  {
      cy.get(this.saveButton).click()
  }

  go_view_tab(){
      cy.get(this.viewbutton).should('be.visible');
      cy.get(this.viewbutton).click()
      cy.wait(20000)
      cy.get(this.closeButton).should('be.visible');
      cy.get(this.closeButton).click()
      cy.wait(5000)
  }

}

export default HLC_Upload_Document_Page;