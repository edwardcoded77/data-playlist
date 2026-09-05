console.log("Hello World!");

 let artistDisplay1 = document.getElementById("artist-name");
 let trackNameDisplay1 = document.getElementById("track-name");
 let songButton = document.getElementById("song-button");
 let nextBtn = document.getElementById("next-button");
 let prevBtn = document.getElementById("back-button");
 let trackCount = document.getElementById("track-count");
 let topBtn = document.getElementById("top-button");
 let randomBtn = document.getElementById("random-button");
 
// declare song variable
let songs = [];

// Add counter variable
let index = 0;


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
   let song = songs[index];
   artistDisplay1.textContent = song.Artist;
   trackNameDisplay1.textContent = song["Track Name"];
   // Keep track of the song
   trackCount.textContent = (index + 1) + " of " + songs.length;
}

// Back button 
prevBtn.addEventListener("click", function(){
   // Add counter pattern
   index = index - 1;

   // Wrap the ends of stopping
     if (index <  0) {
        index = songs.length -1 ;
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















// // function showSong() {
// //   let song = songs[index];

//   document.getElementById("track-name").textContent = song["Track Name"];
//   document.getElementById("track-facts").textContent = "#" + song.Position + " — " + song.Artist;
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
