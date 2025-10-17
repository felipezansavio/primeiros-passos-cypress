class MyInfoPage {
      selectorsList() {
        const selectors = {
              firstNameField: "[name='firstName']",
              lastNameField: "[name='lastName']",
              genericField: ".oxd-input--active",
              dateField: "[placeholder='yyyy-dd-mm']",
              dateCloseButton: ".--close",
              submitButton: "[type='submit']",
              genericCombobox:'.oxd-select-text--arrow',
              selectionNationality:'.oxd-select-dropdown > :nth-child(27)',
              selectionMaritalStatus:'.oxd-select-dropdown > :nth-child(2)'

        }

        return selectors
    } 

    fillingData(firstname, lastname, employee, othertest, driverslicensetest, date) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstname)
        cy.get(this.selectorsList().lastNameField).clear().type(lastname)
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employee)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(othertest)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driverslicensetest)
        cy.get(this.selectorsList().dateField).eq(1).type(date)  
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().genericCombobox).eq(0).click({force: true})
        cy.get(this.selectorsList().selectionNationality).click()
        cy.get(this.selectorsList().genericCombobox).eq(1).click({force: true})
        cy.get(this.selectorsList().selectionMaritalStatus).click()
    }

    saveForm(){
        cy.get(this.selectorsList().submitButton).eq(1).click({force: true})
        cy.get('body').should('contain', 'Success')
        cy.get('.oxd-toast-close')
    }
    
}

export default MyInfoPage