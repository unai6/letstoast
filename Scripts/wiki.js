function whatever(cocktail) {
    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${cocktail, cocktail}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
          let mycocktail = myJson.originalimage.source
            console.log(mycocktail)
      })
}
whatever('Collins glass')