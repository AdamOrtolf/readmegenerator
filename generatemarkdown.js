function generateMarkdown (data) {
      return `
      Project Title: #${data.title}
      Project Description: #${data.description}
      Installations Required: #${data.installation}
      Usage: #${data.usage}
      License: #${data.license}
      Contributing: #${data.contributing}
      Tests: #${data.tests}
     

      `
}


module.exports = generateMarkdown
