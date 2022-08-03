
  var randomNumber1=Math.floor(Math.random()*6)+1;
  var image1Text="images/dice"+randomNumber1+".png";
  document.querySelector(".dice .img1").setAttribute("src",image1Text);


  var randomNumber2=Math.floor(Math.random()*6)+1;
  var image2Text="images/dice"+randomNumber2+".png";
  document.querySelector(".dice .img2").setAttribute("src",image2Text);


  if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 wins";
  }
  else if (randomNumber1<randomNumber2) {
    document.querySelector("h1").innerHTML="Player2 wins";
  }
  else{
    document.querySelector("h1").innerHTML="Draw!";
  }
