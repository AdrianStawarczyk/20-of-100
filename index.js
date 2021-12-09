const result = [];
const losowanie = function (){
  if (result.length === 20) return;

  const wynikLosowania =
  Math.floor(Math.random()* 100 + 1);

  for (let i=0; i < result.length; i++) {
    if (wynikLosowania === result[i]){
      return losowanie()
    }
  }
  const div = document.createElement("div");
  div.textContent = wynikLosowania;

  result.push(wynikLosowania);
  document.body.appendChild(div);
}

  const button = document.querySelector("button");
  button.addEventListener("click", losowanie);






  const arr = [];
  const losowanie = function (){
  while(arr.length < 20){
      var r = Math.floor(Math.random() * 100 + 1);
      if(arr.indexOf(r) === -1) arr.push(r);
  }

  const div = document.createElement("div");
  div.textContent = arr;

  arr.push(r);
  document.body.appendChild(div);
  }

  const button = document.querySelector("button");
  button.addEventListener("click", losowanie);
