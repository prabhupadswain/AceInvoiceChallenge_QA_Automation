/// <reference types="cypress" />

it('Ace Invoice Challenge', function() {
   
    cy.visit('https://aceinvoice.com/')
    cy.contains('Sign up for FREE').click()
    //cy.get('.form-control').type('prabhupadswain-' + CurrentDateAndTime() + '@example.com')
    cy.get('input[name="email"]').type('prabhupadswain-' + CurrentDateAndTime() + '@example.com')
    cy.contains('Get Started').click()
    cy.get('input[name="password"]').type('welcome1234')
    cy.contains('Continue').click()
    cy.get(':nth-child(2) > :nth-child(1) > .field-value > .form-control').type('Oliver')
    cy.get(':nth-child(2) > .field-value > .form-control').type('Smith')
    cy.get(':nth-child(3) > .form-group > .field-value > .form-control').select('(GMT+05:30) New Delhi')
    //cy.get('[type="radio"].control__indicator').check('%d/%m/%Y')
    cy.get('[type="radio"]').check('%d/%m/%Y',{force:true})
    cy.get('[type="checkbox"]').check({force: true})
    //<input type="checkbox" name="user[terms_of_service_accepted]" id="" required="" value="true">
    cy.contains('Continue').click()
    cy.get('input[name="name"]').type('prabhupadswain Private Limited')
    cy.contains('Continue').click()
    //cy.should('have.class', 'pl-4')
    // cy.contains("Congratulations, you're all set!")
    cy.on('window:confirm',(txt)=>{
      expect(txt).to.contains("Congratulations, you're all set!")
      
   })
   cy.get('input[name="client[name]"]').type('Trix Inc XYZ')
   cy.contains('Continue').click()
   cy.on('window:confirm',(txt)=>{
    expect(txt).to.contains("Congratulations, you're all set!")
    
 })
   cy.wait(5000)
   cy.contains('Continue').click()
   

   cy.on('window:confirm',(txt)=>{
    expect(txt).to.contains("Verification email sent to")
    
 })

 cy.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
 cy.get('.header-center-wrap > :nth-child(4) > a').click()

 cy.contains('Add New Client').click()
 cy.get('input[name="client[name]"]').type('Trix Inc')
 cy.contains('Submit').click()

 cy.on('window:confirm',(txt)=>{
  expect(txt).to.contains("Add New Project")
  
})

cy.get('input[name="projectName"]').type('Trix Web Development')
cy.get(':nth-child(3) > .col-12 > .field-value > .form-control').select('Hourly project rate')
cy.get('input[name="projectLevelRate"]').type('20')
//cy.wait(3000)
//cy.get(':nth-child(2) > .field-value > .form-control').type(20)
cy.contains('Submit').click({force: true})

 cy.on('window:confirm',(txt)=>{
   expect(txt).to.contains("Trix Web Development") 
 })

 cy.on('window:confirm',(txt)=>{
  expect(txt).to.contains("Hourly Project Rate") 
})

cy.on('window:confirm',(txt)=>{
  expect(txt).to.contains("No rounding") 
})

cy.on('window:confirm',(txt)=>{
  expect(txt).to.contains("Oliver Smith") 
})

cy.on('window:confirm',(txt)=>{
  expect(txt).to.contains("20") 
})




   

})

function CurrentDateAndTime()
{
    var date = new Date();

    var month = new Array();
      month[0] = "january";
      month[1] = "february";
      month[2] = "march";
      month[3] = "april";
      month[4] = "may";
      month[5] = "june";
      month[6] = "july";
      month[7] = "august";
      month[8] = "september";
      month[9] = "october";
      month[10] = "november";
      month[11] = "december";
    
    return month[date.getMonth()]+"-"+date.getDate()
           +"-"+date.getFullYear()
           +"-"+date.getHours()
           +date.getMinutes()
           +"-"+date.getMilliseconds()
}



