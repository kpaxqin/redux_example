import jsdom from 'jsdom'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.window._satellite = {domReady: function(callback) {callback()}};
global.navigator = {userAgent: ''};

global.expect = chai.expect;

chai.use(chaiEnzyme());
