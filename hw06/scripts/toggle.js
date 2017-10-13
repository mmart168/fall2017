//Katsama Amornnimit

const toggleLikeE = () => {
  if (document.querySelector('.like').classList.contains('active')) {
      document.querySelectorAll('.like').forEach(function (elem) {
        elem.classList.remove('active')
      })
  } else {
      document.querySelectorAll('.like').forEach(function (elem) {
        elem.classList.add('active')
      })
    }
}

const toggleLike = (sourceDOMElement) => {
  sourceDOMElement.parentElement.parentElement.classList.toggle('tweet-highlight')
}

const toggleLikeGood = () => {
  if (document.getElementById('like1').classList.contains('active')) {
      document.getElementById('like1').classList.remove('active')
  } else {
      document.getElementById('like1').classList.add('active')
  }

}
