// first button
function basicFunction() {
    const contentOne = document.getElementById('textOne');
    const contentTwo = document.getElementById('textTwo');
    const contentThree = document.getElementById('textThree');
    if (contentOne.style.display === 'none') {
      contentOne.style.display = 'block';
      contentTwo.style.display = 'none';
      contentThree.style.display = 'none';
    } else {
      contentTwo.style.display = 'none';
    }
  
  }
  
  // secont button 
  function mySecondFunction() {
    const contentOne = document.getElementById('textOne');
    const contentTwo = document.getElementById('textTwo');
    const contentThree = document.getElementById('textThree');
    if (contentTwo.style.display === 'none') {
      contentOne.style.display = 'none';
      contentTwo.style.display = 'block';
      contentThree.style.display = 'none';
    } else {
      contentOne.style.display = 'none'
    }
  
  }
  function myThirdFunction() {
    const contentOne = document.getElementById('textOne');
    const contentTwo = document.getElementById('textTwo');
    const contentThree = document.getElementById('textThree');
    if (contentThree.style.display === 'none') {
      contentOne.style.display = 'none';
      contentTwo.style.display = 'none';
      contentThree.style.display = 'block';
    } else {
      contentOne.style.display = 'none'
    }
  
  }