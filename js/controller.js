// контроллер для приложения

myapp.controller('WeatherCtrl', function ($scope, weatherService, citiesService) {
    $scope.weather = weatherService.getWeather(); // Выводим погоду для города Санкт-Петербург по умолчанию
    $scope.load = function (){ //обрабатываем клик по кнопке "Показать"

        if ($('#city').val() == "") {
            $('#city').css({'border-color' : 'red'});
        } else {
        	$('#city').css({'border-color' : '#ccc'});
        	$scope.weather = weatherService.getWeather();
        }
    }

    $scope.cities = function (){ // Обрабатываем изменение текстового поля
        if ($('#city').val().length > 3 ) {
        	$scope.citytitle = citiesService.getCities();
        }
    }
});
