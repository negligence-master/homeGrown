

function getJSONP(url, success) {

    var ud = '_' + +new Date,
        script = document.createElement('script'),
        head = document.getElementsByTagName('head')[0] ||
        document.documentElement;

    window[ud] = function(data) {
        head.removeChild(script);
        success && success(data);
    };

    script.src = url.replace('callback=?', 'callback=' + ud);
    head.appendChild(script);

}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


function random_choice(event) {
    random_generation = Math.round(Math.random()*387);


    fetch('/plant_by_area/jsons/' + random_generation + '.json')
        .then(response => response.text())
        .then(text => {
            n = [];
            text.split(`'image_url': '`).forEach(t => {
                name = (t.substring(0, t.indexOf(`'`)));
                if (n.includes(name)) {

                } else {
                    n.push(name);
                }
            })
            n.shift();
            if(n.length == 0){
              random_choice();
            }else{
              
            
              console.log(n);
              shuffleArray(n)
  
  
              delete_list = document.getElementsByClassName("query_result")
              for (a = 0; a < delete_list.length; a++) {
                  delete_list[a].remove()
              }
              
              s = document.createElement("div")
              s.classList.add("query_result");
              s.style = "background-color:#bef9ea"
  
              ss = document.createElement("img")
              ss.src = n[0]
              ss.classList.add("query-image")
              s.append(ss)
  
  
            
              document.getElementsByClassName("body-container")[0].prepend(s)
              
            }
          })
          // outputs the content of the text file
          





}
document.body.style["background-color"] = "#bef9ea"
random_choice()