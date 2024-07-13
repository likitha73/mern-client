//this is where we write our test case
describe('Open Home Page',()=>{
    it('Open Home Page',()=>{
        cy.visit('/')
        //visit('url') to visit a url
        cy.contains('login')
        //if a text is present in the document
    })
})