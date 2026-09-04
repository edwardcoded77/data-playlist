console.log("Cat page is working!");

 let catFactsDisplay = document.getElementById("cat-facts");
 let catNameDisplay = document.getElementById("cat-name");
 let catButton = document.getElementById("cat-button");
 let catPhoto   = document.getElementById("cat-photo");
 
 
 let catIndex = 0;

 async function loadCats() {
  let response = await fetch("https://student-data-api.edwardolagunju25.workers.dev/api/v1/datasets/cats/records?limit=50");
  let data = await response.json();
  let cats = data.records;
 


//   console.log(cats);
  let cat = cats[catIndex];

//    console.log(cat);
//    console.log(cat.Name);
//    console.log(cat.Image);

   catNameDisplay.textContent = cat.Name;
   catFactsDisplay.textContent = "From "  + cat.Origin  +  ". "  +  cat.Temperament  + " and weighs up to "   + cat["Maximum Weight"] + " pounds.";
   catPhoto.src = cat.Image;
   catPhoto.hidden = false;
   catPhoto.alt = cat.Name + " cat";


    catIndex  = catIndex  + 1 ;
   if (catIndex >= cats.length) {
        catIndex  = 0;
    }


}

 catButton.addEventListener("click" , function(){
loadCats();
 });