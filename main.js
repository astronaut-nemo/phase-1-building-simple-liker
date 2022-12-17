// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.getElementById('modal');
errorModal.setAttribute('class', 'hidden');

const likeGlyphs = Array.from(document.getElementsByClassName('like-glyph'));
likeGlyphs.forEach(glyph => {
  glyph.addEventListener('click', (event) => {
    mimicServerCall()
    // Handle successful response
    .then((response) => likeHandler(event))
    // Handle error
    .catch((error) => errorHandler())
  });
});

function likeHandler(event){
  // Change the heart to a full heart
  const likeGlyph = event.target;
  if(likeGlyph.innerHTML === EMPTY_HEART){
    likeGlyph.innerHTML = FULL_HEART;
    likeGlyph.setAttribute('class', 'like-glyph activated-heart')
  }
  else{
    likeGlyph.innerHTML = EMPTY_HEART;
    likeGlyph.setAttribute('class', 'like-glyph ')
  }
}

function errorHandler(){
  errorModal.removeAttribute('class');
  setTimeout(() => errorModal.setAttribute('class', 'hidden'), 3000);
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
