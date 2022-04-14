/// <reference types = "cypress" />


describe('API Testing', () => {
    
        Cypress.config('baseUrl','http://dummy.restapiexample.com/api/v1')
    
    

    it('GET - read', () => {
        cy.request('GET','/employees').then((response) => { //cy.request('GET', 'http://dummy... <==dont use that because is the default method
            expect(response).to.have.property('status',200)
            expect(response.body).to.not.be.null
            expect(response.body.data).to.have.length(24)
        })
    })

    it('POST - create', () => {
        const item= {"name":"test","salary":"123","age":"23"}
        const newLocal = '123'
        cy.request('POST','/create',item)
        .its('body')
        .its('data')
        .should('include', {name:'test'})
        .should('include', {salary:'123'})

    })

    it('PUT - update', () => {
         const item= {"name":"test"}
         cy.request({method:'PUT',url:'/update/1', body:item,failOnStatusCode: false} )         /// other way to say : cy.request(method'PUT', url:'/update/1',body:item, failOnStatusCode:false)
         .its('status').should('eq',429)
     })
   
})
