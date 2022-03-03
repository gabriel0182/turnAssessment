Given('Access OrangeHRM with the credentials', () => {
	cy.login()
})
When('Go to the candidates page', () => {
	cy.goToCandidates()
})
And('Search for the added candidate', () => {
	cy.searchCandidate()
})
Then('Download the candidate resume and attach the file to the Allure Report', () => {
	cy.downloadCandidateResume()
})
