const SonarScanner = require('sonarqube-scanner');

SonarScanner.scan({
  serverUrl: 'http://localhost:9000',
  options: {
    'sonar.projectKey': 'node-docker-app',
    'sonar.projectName': 'Node Docker App',
    'sonar.projectVersion': '1.0',
    'sonar.sources': '.',   //folder to analyze
    'sonar.login': 'sqa_fb22f802425345f0cd803cfd03966f8614c3008b'  // replace with your token
  }
}, () => {
  console.log('SonarQube scan finished');
});

