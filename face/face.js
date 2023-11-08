var video = document.getElementById('video');
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        video.srcObject = stream;
        video.play();
    });
}

function captureImage() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, 480, 640);
    let image = canvas.toDataURL('image/jpeg');
    $.post( "/save-image", { image: image, } ) 
    .done(function(data){ 
        alert('Image ' + data.status); 
    });
    window.location.href= "../index/index.html";
}