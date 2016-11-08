/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'art-scenes',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',

    torii: {
      sessionServiceName: 'session'
    },

    firebase: {
      apiKey: "AIzaSyAeNRrMpqv5bqm3q8x550a9zwvse_MpY5k",
      authDomain: "whoiswho-7afea.firebaseapp.com",
      databaseURL: "https://whoiswho-7afea.firebaseio.com",
      storageBucket: "whoiswho-7afea.appspot.com",
      messagingSenderId: "11256295442"
    },

    // if using ember-cli-content-security-policy
    contentSecurityPolicy: {
      'script-src': "'self' 'unsafe-eval' apis.google.com",
      'frame-src': "'self' https://*.firebaseapp.com",
      'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com"
    },

    googleFonts: [
      "Abril+FatFace:400",
      "Roboto+Mono:300,700",
      "Material+Icons"
    ],

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
