const card1 = document.getElementById('card-course-flip-1');
const card_back1 = document.getElementById('card-back-1')
card1.addEventListener('click', function() {
  card1.classList.toggle('flipped');
  card_back1.classList.toggle('flip')
});

const card2 = document.getElementById('card-course-flip-2');
const card_back2 = document.getElementById('card-back-2')
card2.addEventListener('click', function() {
  card2.classList.toggle('flipped');
  card_back2.classList.toggle('flip')
});

const card3 = document.getElementById('card-course-flip-3');
const card_back3 = document.getElementById('card-back-3')
card3.addEventListener('click', function() {
  card3.classList.toggle('flipped');
  card_back3.classList.toggle('flip')
});

