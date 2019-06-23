const emailService = function($http) {
    return {
        add : function(email, success, error) {
            return $http.post('/api/email', {'email' : email}).then(success,error);
        },

        delete : function(id) {
            return $http.delete('/api/email/' + id);
        }
    }      
}