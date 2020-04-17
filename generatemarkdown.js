function generateMarkdown (data) {
      return `
      #${data.title}
      #${data.description}
      #${data.installation}
      #${data.usage}
      #${data.license}
      #${data.contributing}
      #${data.tests}
     

      `
}


module.exports = generateMarkdown
