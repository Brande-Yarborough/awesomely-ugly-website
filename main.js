let $courseInfoButton = document.querySelector('.course-info');
$courseInfoButton.addEventListener('click', function(event) {
var image = document.getElementById('clickMe');
if(image.src === "https://images.squarespace-cdn.com/content/v1/5a00bbaf8dd041a7bf7bd94f/1545075580269-JXZPEYVQP1BL3TYPYVJ8/Horizontal+shot+female+profile+with+laptop.jpg?format=1000w") {
image.src = "https://iamkatyyam.files.wordpress.com/2018/04/drinking-from-a-fire-hose.jpg";

} else {
    image.src = "https://images.squarespace-cdn.com/content/v1/5a00bbaf8dd041a7bf7bd94f/1545075580269-JXZPEYVQP1BL3TYPYVJ8/Horizontal+shot+female+profile+with+laptop.jpg?format=1000w";
}

});