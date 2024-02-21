< script >

    var index = 1;

function changeImage() {
    var imgs = ["./img/img1.jpg", "./img/img2.jpg", "./img/img3.jpg"];
    document.getElementById('img').src = imgs[index];
    index++;
} < /script>