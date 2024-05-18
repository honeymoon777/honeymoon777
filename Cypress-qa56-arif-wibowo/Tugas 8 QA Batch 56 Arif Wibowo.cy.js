/// <reference types="cypress" />

describe('Testing Cypress Batch 56 AWEP', () => {

  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://demowebshop.tricentis.com/register')
  })


  it('Register Success', () => {
    //cy.url().should('include', '/register')
    cy.contains("Male").click()
    cy.get('#FirstName').type('Arif Wibowo')
    cy.get('#LastName').type('Eris Putra')
    cy.get('#Email').type('masaa@gmail.com')
    cy.get('#Password').type('password123')
    cy.get('#ConfirmPassword').type('password123')
    cy.get('#register-button.button-1.register-next-step-button').click()
    
  })

  it('Register Email already exists', () => {
    cy.contains("Male").click()
    cy.get('#FirstName').type('Arif Wibowo')
    cy.get('#LastName').type('Eris Putra')
    cy.get('#Email').type('arif@gmail.com')
    cy.get('#Password').type('password123')
    cy.get('#ConfirmPassword').type('password123')
    cy.get('#register-button.button-1.register-next-step-button').click()
    //.should('have.text', 'The specified email already exists')
    cy.contains("The specified email already exists").should('have.text', "The specified email already exists")
  })


  it('Gender is NULL', () => {
    //cy.contains("Male").click()
    cy.get('#FirstName').type('Arif Wibowo')
    cy.get('#LastName').type('Eris Putra')
    cy.get('#Email').type('arif@gmail.com')
    cy.get('#Password').type('password123')
    cy.get('#ConfirmPassword').type('password123')
    cy.get('#register-button.button-1.register-next-step-button').click()
    //.should('have.text', 'The specified email already exists')
    //cy.contains("First name is required.").should('have.text', "First name is required.")
  })


  it('First Name is NULL', () => {
    cy.contains("Male").click()
    //cy.get('#FirstName').type('Arif Wibowo')
    cy.get('#LastName').type('Eris Putra')
    cy.get('#Email').type('arif@gmail.com')
    cy.get('#Password').type('password123')
    cy.get('#ConfirmPassword').type('password123')
    cy.get('#register-button.button-1.register-next-step-button').click()
    //.should('have.text', 'The specified email already exists')
    cy.contains("First name is required.").should('have.text', "First name is required.")
  })

  it('Last Name is NULL', () => {
    cy.contains("Female").click()
    cy.get('#FirstName').type('Arif Wibowo')
    //cy.get('#LastName').type('Eris Putra')
    cy.get('#Email').type('arif@gmail.com')
    cy.get('#Password').type('password123')
    cy.get('#ConfirmPassword').type('password123')
    cy.get('#register-button.button-1.register-next-step-button').click()
    //.should('have.text', 'The specified email already exists')
    cy.contains("Last name is required.").should('have.text', "Last name is required.")
  })


  it('Email is NULL', () => {
    cy.contains("Female").click()
    cy.get('#FirstName').type('Arif Wibowo')
    cy.get('#LastName').type('Eris Putra')
    //cy.get('#Email').type('arif@gmail.com')
    cy.get('#Password').type('password123')
    cy.get('#ConfirmPassword').type('password123')
    cy.get('#register-button.button-1.register-next-step-button').click()
    //.should('have.text', 'The specified email already exists')
    cy.contains("Email is required.").should('have.text', "Email is required.")
  })








})