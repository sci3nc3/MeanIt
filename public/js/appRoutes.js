function routeProvider($routeProvider, $locationProvider, $httpProvider) {

    //================================================
    // Check if the user is connected
    //================================================
    var checkLoggedin = function ($q, $http, $location, $rootScope) {
        var deferred = $q.defer();

        $http.get('/is-admin-logged-in').success(function (user) {
            if (user) {
                $rootScope.user = user;
                deferred.resolve();
            } else {
                deferred.reject();
                $location.url('/admin');
            }
        });

        return deferred.promise;
    };

    /*
     * Pages
     */
    $routeProvider
        .when('/', {
            title: 'Givee',
            templateUrl: 'views/landing.html',
            controller: 'LandingController'
        })

    /*
     * Admin
     */
    $routeProvider
        .when('/dashboard', {
            title: 'Givee Admin Dashboard',
            templateUrl: 'views/admin/dashboard.html',
            controller: 'AdminDashboardController',
            resolve: {
                loggedin: ['$q', '$http', '$location', '$rootScope', checkLoggedin]
            }
        });

    /*
     * Otherwise
     */
    $routeProvider.otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
}
