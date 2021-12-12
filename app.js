const title = document.querySelector(".hello h1");
const file = document.querySelector("#file");
const fileText = document.querySelector("#fileText");
const reader = new FileReader();
let objtemp;
//LoadFile
file.addEventListener("change", (event)=>{
    reader.readAsText(event.target.files[0]);
    reader.onload = function(){
        fileText.value=reader.result;
    }
})
function convertFile(){
    let result = "#EXTM3U\n";
    const songs = JSON.parse(fileText.value)["members"];
    console.dir(songs);
    objtemp=songs;
    for(let i=0;i<songs.length;i++){
        result += objtemp[i]["info"]+"\n";
    }
    fileText.value = result;
}