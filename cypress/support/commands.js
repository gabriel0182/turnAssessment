// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload'

Cypress.Commands.add('login', () => {
	cy.clearCookies()
	cy.visit('https://opensource-demo.orangehrmlive.com/')
	cy.fixture('../fixtures/login.json').then((login) => {
		cy.get('#divLoginImageContainer').within(() => {
			cy.get('#divUsername')
				.type(login.user)
				.get('#divPassword')
				.type(login.pass)
				.get('#btnLogin')
				.click()
		})
	})
})
Cypress.Commands.add('goToCandidates', () => {
	cy.get('#mainMenu').within(() => {
		cy.get('li').contains('Recruitment').click()
	})
	cy.get('#mainMenuFirstLevelUnorderedList').within(() => {
		cy.get('#menu_recruitment_viewCandidates').click({ force: true })
	})
})
Cypress.Commands.add('addCandidates', () => {
	const date = new Date()
	const year = date.getUTCFullYear()
	const mounth = (date.getUTCMonth() + 1).toString().padStart(2, '0')
	const day = (date.getUTCDay() - 2).toString().padStart(2, '0')
	const ss = date.getUTCSeconds()
	cy.get('#frmList_ohrmListComponent').within(() => {
		cy.get('#btnAdd').click()
	})
	cy.fixture('../fixtures/cadidate.json').then((info) => {
		cy.get('#frmAddCandidate').within(() => {
			cy.get('#addCandidate_firstName')
				.type(info.firstName)
				.get('#addCandidate_middleName')
				.type(info.middleName)
				.get('#addCandidate_lastName')
				.type(info.lastName)
				.get('#addCandidate_email')
				.type(info.email + ss + '@gmail.com')
				.get('#addCandidate_contactNo')
				.type(info.contactNo)
				.get('#addCandidate_vacancy')
				.select(info.jobVacancy)
				.get('#addCandidate_comment')
				.type(info.comment)
		})
		cy.get('#addCandidate_resume').attachFile('cve.txt', { subjectType: 'drag-n-drop' })
	})
	cy.get('#addCandidate_appliedDate').clear().type(`${year}+'-'${mounth}+'-'${day}{enter}`)
	cy.get('#frmAddCandidate').within(() => {
		cy.get('#addCandidate_consentToKeepData').click()
	})
	cy.get('#btnSave').click()
})
Cypress.Commands.add('readMessage', (notification) => {
	cy.get('body').should('contain.text', notification)
})
