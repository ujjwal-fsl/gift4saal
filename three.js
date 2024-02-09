function showThirdButton() {
    var firstButtonOpened = document.querySelectorAll('.button-surprise')[0].classList.contains('opened');
    var secondButtonOpened = document.querySelectorAll('.button-surprise')[1].classList.contains('opened');
    
    if (firstButtonOpened && secondButtonOpened) {
      document.getElementById('thirdButton').classList.remove('hidden');
    }
    else {
      document.querySelectorAll('.button-surprise')[0].classList.add('opened');
      document.querySelectorAll('.button-surprise')[1].classList.add('opened');
    }
  }
  