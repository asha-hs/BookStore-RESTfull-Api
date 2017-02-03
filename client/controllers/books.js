var myApp = angular.module('myApp');

myApp.controller('BooksController',['$scope','$http','$location','$routeParams',function($scope,$http,$location,$routeParams)
{
  console.log("Books Controller loaded...");
    $scope.getBooks = function() {
                              $http(
                                {
                                method:'GET',
                                url:'/api/books'
                              }).then(function(response) {

                                $scope.books = response.data;
                              },function(response){
                                console.log("error");
                            });
                          }
    $scope.getBook = function() {
        var id = $routeParams.id;
        console.log("id "+id);
                          $http({
                            method:'GET',
                            url:'/api/books/'+id
                          }).then(function(response) {
                            console.log(response.data);
                            $scope.book = response.data;
                          },function(response){
                            console.log("error");
                        });
                      }
  $scope.addBook = function() {

            console.log("$scope.book "+$scope.book);

            $http.post('/api/books/', $scope.book).then(
              function(response){
              window.location.href='#/books';
            }, function(response){console.log("error");});

      }
  $scope.updateBook = function() {

            var id = $routeParams.id;

            $http.put('/api/books/'+id, $scope.book).then(
              function(response){
              window.location.href='#/books';
            }, function(response){console.log("error");});

      }
  $scope.removeBook = function(id) {



            $http.delete('/api/books/'+id).then(
              function(response){
              window.location.href='#/books';
            }, function(response){console.log("error");});

      }

   }]);
