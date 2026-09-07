console.log("Hello World!");

 let artistDisplay1 = document.getElementById("artist-name");
 let trackNameDisplay1 = document.getElementById("track-name");
 let songButton = document.getElementById("song-button");
 let nextBtn = document.getElementById("next-button");
 let prevBtn = document.getElementById("back-button");
 let trackCount = document.getElementById("track-count");
 let topBtn = document.getElementById("top-button");
 let randomBtn = document.getElementById("random-button");
 let saveBtn = document.getElementById("save-button");
 let favsCount = document.getElementById("favs-count");
 let favBtn  = document.getElementById("favs-button");
 let favList = document.getElementById("favs-list");
 
// declare song variable
let songs = [];

// Add counter variable
let index = 0;


// Add save counter variable
let favorites = [];

async function loadSongs() {
  let response = await fetch("https://student-data-api.edwardolagunju25.workers.dev/api/v1/datasets/viral-50-usa/records?limit=50");
  let data = await response.json();
  songs = data.records;

   // update the DOM 
    showSong()
}


songButton.addEventListener("click", function(){
   loadSongs();
}
);


// Next button
    nextBtn.addEventListener("click", function(){
    // Add counter pattern
    index = index + 1;
    
    // Wrap the ends of stopping
     if (index > songs.length - 1) {
        index = 0;
    }
    // Update the DOM 
       showSong()
 })

  
 // Updating the DOM function 
   function showSong() {
   let song = songs[index];                               // Give me the song that is currently being displayed
   artistDisplay1.textContent = song.Artist;             // display an artist 
   trackNameDisplay1.textContent = song["Track Name"]; // display track name
   
   // Keep track of the song
   trackCount.textContent = "Track " + (index + 1) + " of " + songs.length;
}

// Back button 
    prevBtn.addEventListener("click", function(){
   // Add counter pattern
   index = index - 1;

   // Wrap the ends of stopping
     if (index <  0) {
        index = songs.length - 1 ;
      }
   // Update the DOM 
      showSong()
  })

  topBtn.addEventListener("click", function(){
   index = 0;
   showSong()
  })


 randomBtn.addEventListener("click", function(){
   index = Math.floor(Math.random() * songs.length);
   showSong()
 })

  

 saveBtn.addEventListener("click", function () {

    // Get the song we're currently viewing
       let song = songs[index];

    // Check if this song is already saved
      let  alreadyFavorite = favorites.some(
        favorite => favorite.id === song.id
    );

    // Don't save the same song twice
    if (alreadyFavorite) {
        return;
    }

    // Don't allow more than 5
    if (favorites.length >= 5) {
       return;
    }

    // Add the song
    favorites.push(song);
   
   // // Save favorites to localStorage
   //  localStorage.setItem("favorites", JSON.stringify(favorites)
   //  );
   
   //  let savedFavorites = localStorage.getItem("favorites");

   // if (savedFavorites) {
   //  favorites = JSON.parse(savedFavorites);
   // }

    // Update the screen
    favsCount.textContent = `Favorites tracks : ${favorites.length}/5`;
    
    // Check our array
    console.log("Favorites:", favorites);
})
 

favBtn.addEventListener("click", function(){
  displayFavs();

})
  
function displayFavs(){
   // Make empty list
      favList.innerHTML = "" ;  
   // loop thru favorites array
     favorites.forEach(function (song) { 
      let favoriteSong = document.createElement("p"); 
     favoriteSong.textContent = song["Track Name"] + " - " + song.Artist;
        favList.appendChild(favoriteSong);
    });
   }

  
// #favs-list {
//    width: 90%;
//     max-width: 600px;
//     margin: 20px auto;
//     padding: 20px;
//     background: rgba(255, 255, 255, 0.85);
//     border-radius: 20px;
//     box-sizing: border-box;
// }

// #favorites-list h3 {
//     margin-top: 0;
//     text-align: center;
// }

// #favorites-list p {
//     margin: 10px 0;
//     padding: 8px 0;
//     border-bottom: 1px solid #ddd;
// }










































/*  Search for a song  */
//   let searchInput = document.getElementById("input-id");
//   let searchButton = document.getElementById("search-button");

// let findTimer;


// async function findSongs() {
// //   let searchItem = searchInput.value;
// //   let response = await fetch("https://student-data-api.edwardolagunju25.workers.dev/api/v1/datasets/viral-50-usa/records?limit=10&search=" + encodeURIComponent(searchItem));

// //   let data = await response.json();
// //   let songs = data.records;

// //   console.log(songs);

// //   if (songs.length > 0) {
// //     let song = songs[0];    
// //     trackNameDisplay1.textContent = song["Track Name"];
// //     artistDisplay1.textContent = song.Artist;
// //   } else {
// //     // Nothing matched
// //     trackNameDisplay1.textContent = "No songs found.";
// //     artistDisplay1.textContent = "";
// //   }
  
// //   // Wait 5 seconds, then clear the result
// //   clearTimeout(findTimer);
   
// //     findTimer = setTimeout(function () {
// //     trackNameDisplay1.textContent = "";
// //     artistDisplay1.textContent = "";
// //     searchInput.value = "";
// //   }, 5000);
// // }

// // searchButton.addEventListener("click", function () {
// //   findSongs();
// // });





// function loadSongs() {
//   fetch("https://student-data-api.edwardolagunju25.workers.dev/api/v1/datasets/viral-50-usa/records?limit=50")
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {

//     });
//      let song = songs[index];
//      artistDisplay1.textContent = song.Artist;
//      trackNameDisplay1.textContent = song["Track Name"];
//     index = index + 1;
// }
