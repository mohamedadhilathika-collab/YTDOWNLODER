function downloadVideo(){

const url =
document.getElementById("url").value;

if(!url){

alert("Paste YouTube URL");

return;

}

window.location.href =
`/download?url=${url}`;

}
