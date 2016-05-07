window.addSvgLinks = function(){
  var $ = jQuery
  var linkFor = {
    "Ruby-on-Rails" : "http://rubyonrails.org/",
    "MicroServices" : "https://www.nginx.com/blog/microservices-at-netflix-architectural-best-practices/",
    "Groovy" : "http://www.groovy-lang.org/",
    "React-Native" : "https://facebook.github.io/react-native/",
    "JavaScript" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    "AngularJS" : "https://angularjs.org/",
    "Postgres" : "http://www.postgresql.org/",
    "Ngnix" : "http://nginx.com",
    "MongoDB" : "https://www.mongodb.com/",
    "Redis" : "http://redis.io/",
    "Apache-Kafka" : "http://kafka.apache.org/",
    "Spring" : "https://spring.io/",
    "Python" : "https://www.python.org/",
    "Docker" : "https://www.docker.com/",
    "Mobile" : "https://en.wikipedia.org/wiki/Mobile_application_development/",
    "Ionic" : "http://ionicframework.com/",
    "NoSql" : "https://www.mongodb.com/nosql-explained/",
    "React" : "https://facebook.github.io/react/",
    "Cloud" : "https://en.wikipedia.org/wiki/Cloud_computing",
    "Swift" : "https://developer.apple.com/swift/",
    "Ruby" : "https://www.ruby-lang.org/en/",
    "Open-Source" : "https://opensource.com/resources/what-open-source",
    "Java" : "http://openjdk.java.net/",
    "C#" : "https://msdn.microsoft.com/en-us/library/kx37x362.aspx",
    "MySQL" : "https://www.mysql.com/",
    "IOS" : "http://www.apple.com/ios/",
    "Andoird" : "https://www.android.com/",
    "NodeJS" : "https://nodejs.org/",
    "Chef" : "https://www.chef.io/",
    "AWS" : "https://aws.amazon.com",
    "Zero-downtime" : "http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.CNAMESwap.html",
    "Rackspace" : "https://rackspace.com",
    "Cucumber" : "https://cucumber.io/",
    "Protractor" : "http://angular.github.io/protractor/#/",
    "Jasmine" : "http://jasmine.github.io/",
    "EmberJS" : "http://emberjs.com/",
    "KnockoutJS" : "http://knockoutjs.com/",
    "Ansible" : "https://www.ansible.com/",
    "Express" : "http://expressjs.com/",
    "jenkins" : "https://jenkins.io/",
    "Puppet" : "https://puppet.com/",
    "Yeoman" : "http://yeoman.io/",
    "Bamboo" : "https://www.atlassian.com/software/bamboo",
    "GoLang" : "https://golang.org/",
    "Grails" : "https://grails.org/",
    "Grunt" : "http://gruntjs.com/",
    "SnapCI" : "https://snap-ci.com/",
    "Travis" : "https://travis-ci.com/",
    "Gulp" : "http://gulpjs.com/",
    "DigitalOcean" : "https://www.digitalocean.com/",
    "HTML5" : "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    "Bower" : "http://bower.io/",
    "Scala" : "http://www.scala-lang.org/",
    ".net" : "https://www.microsoft.com/net/default.aspx",
    "Git" : "https://git-scm.com/",
    "Lua" : "https://www.lua.org/",
    "GoCD" : "https://www.go.cd/",
    "CD" : "http://martinfowler.com/bliki/ContinuousDelivery.html",
    "CI" : "http://martinfowler.com/articles/continuousIntegration.html",
    "Swagger" : "http://swagger.io/",
    "Azure" : "https://azure.microsoft.com/en-us/",
    "NewRelic" : "https://newrelic.com/",
    "Splunk" : "http://www.splunk.com/"
  }


  var svg = document.getElementsByTagName('svg')[0]
  svg.setAttribute('xmlns:xlink',"http://www.w3.org/1999/xlink")
  var texts = svg.getElementsByTagName('text')
  console.log(texts)
  for(i=0; i<texts.length; i++){
    createLinkElement(texts[i]);

  }

  function createLinkElement(textNode){
    var wrapper = document.createElement('a');
    wrapper.setAttribute("xlink:href", linkFor[textNode.textContent])
    wrapper.setAttribute("target", "_blank")
    // console.log(textNode)
    wrapper.setAttribute("fill", textNode.getAttribute("fill"))
    wrapper.setAttribute("stroke", textNode.getAttribute("stroke"))
    var textNodeValue = document.createTextNode(textNode.textContent)
    wrapper.appendChild(textNodeValue)

    textNode.textContent = ''
    textNode.appendChild(wrapper)
    // wrap(textNode, wrapper);
  }


  function wrap(toWrap, wrapper) {
    if (toWrap.nextSibling) {
        toWrap.parentNode.insertBefore(wrapper, toWrap.nextSibling);
    } else {
        toWrap.parentNode.appendChild(wrapper);
    }
    return wrapper.appendChild(toWrap);
  }
}