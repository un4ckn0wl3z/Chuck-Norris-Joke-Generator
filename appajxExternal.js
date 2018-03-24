document.querySelector('.get-jokes').addEventListener('click',getJokes);

function getJokes(e){
  // console.log('Get jokes');
  const number = document.querySelector('input[type="number"]').value;
  // console.log(number);
  const xhr = new XMLHttpRequest();
  xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);
  xhr.onload = function(){
    document.querySelector('.jokes').innerHTML = '';
    if(this.status === 200){
      const response = JSON.parse(this.responseText);
      let output='';
      //console.log(response);
      if(response.type === 'success'){
        response.value.forEach(function(joke){
          output += `
            <li>${joke.joke}</li>
          `;
        });
      }else{
        output += '<li>Somthing went wrong</li>';
      }
      document.querySelector('.jokes').innerHTML = output;
    }
  };
  xhr.send();
  e.preventDefault();
}