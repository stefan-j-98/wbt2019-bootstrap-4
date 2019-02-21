 $( document ).ready(function() {
     var currentLng = localStorage.getItem("lang") || "rs";
     
    var navbarHeight = $(".navbar").height();
    $(".carousel-inner").css("height", window.innerHeight - 60.794);
    $(".carousel-inner img").css("height", window.innerHeight - 60.794);
    $(".carousel-inner img").css("width", window.innerWidth);
    $( window ).resize(function() {
    var navbarHeight = $(".navbar").height();
    $(".carousel-inner").css("height", window.innerHeight - 60.794);
    $(".carousel-inner img").css("height", window.innerHeight - 60.794);
    $(".carousel-inner img").css("width", window.innerWidth);
    });
        var translate = new Translate();
        var attributeName = 'data-tag';
        translate.init(attributeName, currentLng);
        translate.process();
        $(".dropdown-menu .dropdown-item").click(function(){
            if($(this).text() == "Српски" || $(this).text() == "Serbian")
            {
                currentLng = "rs";
                translate.init(attributeName, currentLng);
                translate.process();
                localStorage.setItem("lang", currentLng);
            }
            else{
                currentLng = "en";
                translate.init(attributeName, currentLng);
                translate.process();
                localStorage.setItem("lang", currentLng)
            }
            console.log(currentLng);
         });
         window.onscroll = function() {ScrollEffect()};
});
function Translate() { 
    //inicijalizacija
    this.init =  function(attribute, lng){
        this.attribute = attribute;
        this.lng = lng;    
    }
    //prevodjenje 
    this.process = function(){
                _self = this;
                var xrhFile = new XMLHttpRequest();
                //ucitaj jezik
                xrhFile.open("GET", "./resources/"+this.lng+".json", true);
                xrhFile.onreadystatechange = function ()
                {
                    if(xrhFile.readyState === 4)
                    {
                        if(xrhFile.status === 200 || xrhFile.status == 0)
                        {
                            var LngObject = JSON.parse(xrhFile.responseText);
                            console.log(LngObject["name1"]);
                            var allDom = document.getElementsByTagName("*");
                            for(var i =0; i < allDom.length; i++){
                                var elem = allDom[i];
                                var key = elem.getAttribute(_self.attribute);
                                if(key != null) {
                                     console.log(key);
                                     elem.innerHTML = LngObject[key]  ;
                                }
                            }
                     
                        }
                    }
                }
                xrhFile.send();
    }    
}
function ScrollEffect() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("scrollBar").style.width = scrolled + "%";
  }