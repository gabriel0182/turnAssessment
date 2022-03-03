Given('Access OrangeHRM with the credentials', () => {
	cy.login()
})
When('Go to the candidates page', () => {
	cy.goToCandidates()
})
And('Add a new candidate', () => {
	cy.addCandidates()
})
Then('A {string} message is displayed after adding a new candidate', (notification) => {
	cy.readMessage(notification)
})
