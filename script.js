function validation(){
    var input = document.getElementsByClassName('formcontent')
    var inputem = document.querySelector('.formcontentem')
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    for (let a = 0; a < input.length; a++){
      if(input[a].firstElementChild.value == '')
      {
        input[a].firstElementChild.classList.remove('valid')
        input[a].firstElementChild.classList.add('invalid')
        input[a].innerHTML += `<div class = "error">
          <i class="fas fa-exclamation-circle"></i>
          <p class = "errortext">${input[a].firstElementChild.placeholder} cannot be empty</p>
          </div>`
        
      }else{
        input[a].firstElementChild.classList.remove('invalid')
        input[a].firstElementChild.classList.add('valid')
        input[a].lastElementChild.innerHTML = ''
      }
    }
    if(inputem.firstElementChild.value.match(pattern)){
      inputem.firstElementChild.classList.add('valid')
      inputem.firstElementChild.classList.remove('invalid')
      inputem.lastElementChild.innerHTML = ''
    }else{
      inputem.firstElementChild.classList.remove('valid')
      inputem.firstElementChild.classList.add('invalid')
      inputem.innerHTML += `<div class = "errorem">
          <i class="fas fa-exclamation-circle"></i>
          <p class = "errortextem">Looks like this not an email</p>
          </div>`
    }
  }