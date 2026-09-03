console.log("Hello World!");


 let artistDisplay1 = document.getElementById("artist-1");
 let trackNameDisplay1 = document.getElementById("track-name-1");
 let songButton = document.getElementById("song-button");


 async function loadSongs() {
  let response = await fetch("https://student-data-api.edwardolagunju25.workers.dev/api/v1/datasets/viral-50-usa/records?limit=10");
  let data = await response.json();
  let songs = data.records;

   console.log(songs);
   console.log(songs[2]);
   console.log(songs[2].Artist);
   console.log(songs[2]["Track Name"]);
 
  console.log("Status: " + response.status);

   artistDisplay1.textContent = songs[7].Artist;
   trackNameDisplay1.textContent = songs[7]["Track Name"];

} 


songButton.addEventListener("click", function(){
   loadSongs();
}
);