import allureWriter from "@shelex/cypress-allure-plugin/writer";  
const { defineConfig } = require("cypress");  

import grepPreprocessor from "@cypress/grep"
 
module.exports = defineConfig({
  env: {
    grepFilterSpecs: true,
    grepOmitFiltered: true,
  },
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
       
       require('@bahmutov/cy-grep/src/plugin')(config);
        allureWriter(on, config);
        return config;
    },
  },
});
