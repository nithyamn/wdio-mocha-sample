node {  
    try {
    properties([parameters([credentials(credentialType: 'com.browserstack.automate.ci.jenkins.BrowserStackCredentials', defaultValue: 'new key', description: '', name: '', required: false)])])
  
    stage('Pull repository from GitHub') {
        git url: 'https://github.com/nithyamn/wdio-mocha-sample.git'
    }
        
    stage('Initiate tests on BrowserStack') {
        browserstack("${params.BROWSERSTACK_USERNAME}") {
            def user = "${env.BROWSERSTACK_USERNAME}"
            if ( user.contains('-')) {
                user = user.substring(0, user.lastIndexOf("-"))
            }
            withEnv(['BROWSERSTACK_USERNAME=' + user]) {
            sh label: '', returnStatus: true, script: '''#!/bin/bash -l
                                 npm install
                                 npm run browserstack-single
                               '''
            }
        }
        junit testDataPublishers: [[$class: 'AutomateTestDataPublisher']], testResults: 'browserstack-reports/REPORT*.xml'
    }
    
    /*stage('Archive BrowserStack Automate test results') {
        junit testDataPublishers: [[$class: 'AutomateTestDataPublisher']], testResults: 'browserstack-reports/*.xml'
    }*/
    
    } catch (e) {
        currentBuild.result = 'FAILURE'
        throw e
    } finally {
        currentBuild.result = 'BUILD Failed'
    }
}
