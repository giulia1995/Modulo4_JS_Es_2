fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem')
.then(res => res.json())
.then(data => {
    const albums = data.data
    setAlbumCards(albums)
})
.catch(error => {
    console.error('Error fetching data:', error);
  });

let song = document.querySelector("#card-container")
let tracks = document.querySelector(".modal-body")
    function setAlbumCards(cards){
    console.log('Songs',cards)
    for(const card of cards){
        song.innerHTML += `
        <div class = "col-6 col-sm-6 col-md-4 col-lg-3"
        <div class="card">
        <img src="${card.album.cover_medium}" class="card-img-top" alt="...">
        <div class="card-body d-flex align-items-center flex-column py-2">
          <p class="card-text">${card.album.title}</p>
        </div>
      </div>
      </div>`

      tracks.innerHTML += `<div class="d-flex align-items-center mb-3">
      <div>
      <img src="${card.album.cover_small}" class="card-img-top" alt="...">
      </div>
      <p class="ms-3 text-white">${card.album.title}</p>
      </div>
      `
    }
 }

 fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=queen')
.then(res => res.json())
.then(data => {
    const albums = data.data
    setAlbumCards(albums)
})
.catch(error => {
    console.error('Error fetching data:', error);
  });

let song2 = document.querySelector("#card-container")
let tracks2 = document.querySelector(".modal-body")
    function setAlbumCards(cards){
    console.log('Songs',cards)
    for(const card of cards){
        song.innerHTML += `
        <div class = "col-6 col-sm-6 col-md-4 col-lg-3"
        <div class="card">
        <img src="${card.album.cover_medium}" class="card-img-top" alt="...">
        <div class="card-body d-flex align-items-center flex-column py-2">
          <p class="card-text">${card.album.title}</p>
        </div>
      </div>
      </div>`

      tracks.innerHTML += `<div class="d-flex align-items-center mb-3">
      <div>
      <img src="${card.album.cover_small}" class="card-img-top" alt="...">
      </div>
      <p class="ms-3 text-white">${card.album.title}</p>
      </div>
      `
    }
 }

 fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica')
.then(res => res.json())
.then(data => {
    const albums = data.data
    setAlbumCards(albums)
})
.catch(error => {
    console.error('Error fetching data:', error);
  });

let song3 = document.querySelector("#card-container")
let tracks3 = document.querySelector(".modal-body")
    function setAlbumCards(cards){
    console.log('Songs',cards)
    for(const card of cards){
        song.innerHTML += `
        <div class = "col-6 col-sm-6 col-md-4 col-lg-3"
        <div class="card">
        <img src="${card.album.cover_medium}" class="card-img-top" alt="...">
        <div class="card-body d-flex align-items-center flex-column py-2">
          <p class="card-text">${card.album.title}</p>
        </div>
      </div>
      </div>`

      tracks.innerHTML += `<div class="d-flex align-items-center mb-3">
      <div>
      <img src="${card.album.cover_small}" class="card-img-top" alt="...">
      </div>
      <p class="ms-3 text-white">${card.album.title}</p>
      </div>
      `
    }
 }