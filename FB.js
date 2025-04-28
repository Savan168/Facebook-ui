
const container = document.getElementById('cardContainer');

container.addEventListener('wheel', function (e) {
    e.preventDefault();
    container.scrollLeft += e.deltaY;
});