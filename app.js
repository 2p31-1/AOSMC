const title = document.querySelector(".hello h1");
const file = document.querySelector("#file");
const fileText = document.querySelector("#fileText");
const reader = new FileReader();
let fileName;
let objtemp;
//LoadFile
file.addEventListener("change", (event)=>{
    reader.readAsText(event.target.files[0]);
    reader.onload = function(){
        fileText.value=reader.result;
    }
    const filePath = event.target.value;
    let result = filePath.split("/");
    result = result[result.length-1].split("\\");
    fileName = result[result.length-1]+".m3u8";
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
function downloadFile(){
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,'+encodeURIComponent(fileText.value));
    element.setAttribute('download', fileName);
    document.body.appendChild(element);
    element.click();
}