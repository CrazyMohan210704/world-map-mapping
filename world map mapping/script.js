document.addEventListener('DOMContentLoaded', function() {
  var continents = document.querySelectorAll('.continent');
  var continentUrls = {
    africa: 'africa.html',
    asia: 'asia.html',
    europe: 'europe.html',
    'north-america': 'north-america.html',
    oceania: 'oceania.html',
    'south-america': 'south-america.html',
    antarctica: 'antarctica.html'
  };

  function handleContinentClick(continent) {
    var url = continentUrls[continent];
    if (url) {
      window.location.href = url;
    }
  }

  continents.forEach(function(continent) {
    continent.addEventListener('click', function() {
      var continentClass = this.className.split(' ')[1];
      handleContinentClick(continentClass);
    });
  });
});
 