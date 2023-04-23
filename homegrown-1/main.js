max = 3
count = 1

function update(el){
  if(el.id == "up"){
    count = count < max?count+=1:1
  }else if(el.id == "down"){
    count = count > 1?count-=1:max
  }
  document.getElementById("week-photo").src = "/assets/mock_"+count+".jpg"
}



function reqListener() {
  console.log(this.responseText);
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "http://www.example.org/");
req.send();

