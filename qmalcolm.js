angular.module('qmalcolm'),[
    // Angular

    // Add-Ons
    'config',

    //Components

    //Directives
    'about',
    'construction',
    'photography',
    'programming',
])

.config(function($locationProvider, $httpProvider,$urlRouterProvider, config) {

    // HTML5 Friendly URLs
    // $locationProvider.html5Mode(true);
    $locationProvider.html5Mode({
        enabled: true,
        // requireBase: false
    });

    $urlRouterProvider.otherwise('/');

    // Default header settings for http calls
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
})

.run(function($rootScope, config, $state, Users, $cookies) {

});
