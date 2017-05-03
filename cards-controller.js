function CardsController() {


  var dataStore = new MarvelService()


  dataStore.getCharacters(ready)

  this.onAdd = function (id) {
    //this function will take the player that was clicked and add them to your team through the dataStore.
    dataStore.addToMyCharacters(id)
    draw(dataStore.getMarvelCharacters(), dataStore.getMyCharacters())
  }

  this.onRemove = function (id) {
    //this will remove the character from your team
    dataStore.removeMyCharacter(id)
    draw(dataStore.getMarvelCharacters(), dataStore.getMyCharacters())
  }

  function ready(data) {
    draw(data, [])
  }

  function draw(marvelList, myList) {
    //target is the id of the element where the list will be rendered
    var marvelElem = document.getElementById('marvel-characters')
    var myElem = document.getElementById('my-characters')
    marvelElem.innerHTML = ''
    myElem.innerHTML = ''

    var marvelTemplate = ''
    var myTemplate = ''

    for (var i in marvelList) {
      var character = marvelList[i];
      marvelTemplate += `
          <div class="card">
            <img src="${character.thumbnail.path}.${character.thumbnail.extension}" width="100">
            <h3>${character.name}</h3>
            <div>
              <button class="btn-success" id="${character.id}" onclick="cardsCtrl.onAdd(${character.id})">Add to Team</button><br><br><br>
            </div>
          <div>
        `
    }

    for (var i in myList) {
      var character = myList[i];
      myTemplate += `
          <div class="card">
            <img src="${character.thumbnail.path}.${character.thumbnail.extension}" width="100">
            <h3>${character.name}</h3>
            <div>
              <button class="btn-danger" id="${character.id}" onclick="cardsCtrl.onRemove(${character.id})">DESTROY FOREVER</button><br><br><br>
            </div>
          <div>
          `
    }

    marvelElem.innerHTML = marvelTemplate
    myElem.innerHTML = myTemplate;

  }


}