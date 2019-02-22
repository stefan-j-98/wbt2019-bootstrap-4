$(document).ready(function () {
    var currentLng = localStorage.getItem("lang") || "rs";

    var navbarHeight = $(".navbar").height();
    $(".carousel-inner").css("height", window.innerHeight - 60.794);
    $(".carousel-inner img").css("height", window.innerHeight - 60.794);
    $(".carousel-inner img").css("width", window.innerWidth);
    $(window).resize(function () {
        var navbarHeight = $(".navbar").height();
        $(".carousel-inner").css("height", window.innerHeight - 60.794);
        $(".carousel-inner img").css("height", window.innerHeight - 60.794);
        $(".carousel-inner img").css("width", window.innerWidth);
    });
    var translate = new Translate();
    var attributeName = 'data-tag';
    translate.init(attributeName, currentLng);
    translate.process();
    $(".dropdown-menu .dropdown-item").click(function () {
        if ($(this).text() == "Српски" || $(this).text() == "Serbian") {
            currentLng = "rs";
            translate.init(attributeName, currentLng);
            translate.process();
            localStorage.setItem("lang", currentLng);
        }
        else {
            currentLng = "en";
            translate.init(attributeName, currentLng);
            translate.process();
            localStorage.setItem("lang", currentLng)
        }
        console.log(currentLng);
    });
    window.onscroll = function () {
        ScrollEffect()
        $(".navbar").css("background-color", "#212529");
    };
    $("#demo").on("slide.bs.carousel", function (e) {
        if (e.relatedTarget.id == "first-slide") {
            $(".navbar").css("background-color", "#001836");
            $(".nav-link").css("color", "rgba(255,255,255,.5)");
            $(".nav-link").hover(function () {
                $(this).css("color", "white");
            }, function () {
                $(this).css("color", "rgba(255,255,255,.5)");
            });
            $(".navbar-brand").css("color", "white");
        }
        else if (e.relatedTarget.id == "second-slide") {
            $(".navbar").css("background-color", "#ffdcc8");
            $(".nav-link").css("color", "#2d112a");
            $(".nav-link").hover(function () {
                $(this).css("color", "#2d112a");
            }, function () {
                $(this).css("color", "#2d112a");
            });
            $(".navbar-brand").css("color", "#2d112a");
        }
        else if (e.relatedTarget.id == "third-slide") {
            $(".navbar").css("background-color", "#ffd5a3");
            $(".nav-link").css("color", "#211023");
            $(".nav-link").hover(function () {
                $(this).css("color", "#211023");
            }, function () {
                $(this).css("color", "#211023");
            });
            $(".navbar-brand").css("color", "#211023");
        }
    });

    $(function () {
        var $win = $(window);

        $win.scroll(function () {
            if ($win.scrollTop() == 0) {
                if ($(".first").hasClass("active")) {
                    $(".navbar").css("background-color", "#001836");
                    $(".nav-link").css("color", "rgba(255,255,255,.5)");
                    $(".nav-link").hover(function () {
                        $(this).css("color", "white");
                    }, function () {
                        $(this).css("color", "rgba(255,255,255,.5)");
                    });
                    $(".navbar-brand").css("color", "white");
                }
                else if ($(".second").hasClass("active")) {
                    $(".navbar").css("background-color", "#ffdcc8");
                    $(".nav-link").css("color", "#2d112a");
                    $(".nav-link").hover(function () {
                        $(this).css("color", "#2d112a");
                    }, function () {
                        $(this).css("color", "#2d112a");
                    });
                    $(".navbar-brand").css("color", "#2d112a");

                }
                else if ($(".third").hasClass("active")) {
                    $(".navbar").css("background-color", "#ffd5a3");
                    $(".nav-link").css("color", "#211023");
                    $(".nav-link").hover(function () {
                        $(this).css("color", "#211023");
                    }, function () {
                        $(this).css("color", "#211023");
                    });
                    $(".navbar-brand").css("color", "#211023");
                }

            }
            else {
                $(".navbar").css("background-color", "#212529");
                $(".nav-link").css("color", "rgba(255,255,255,.5)");
                    $(".nav-link").hover(function () {
                        $(this).css("color", "white");
                    }, function () {
                        $(this).css("color", "rgba(255,255,255,.5)");
                    });
                    $(".navbar-brand").css("color", "white");
            }
        });
    });
});
function Translate() {
    //inicijalizacija
    this.init = function (attribute, lng) {
        this.attribute = attribute;
        this.lng = lng;
    }
    //prevodjenje 
    this.process = function () {
        _self = this;
        var xrhFile = new XMLHttpRequest();
        //ucitaj jezik
        xrhFile.open("GET", "../resources/" + this.lng + ".json", true);
        xrhFile.onreadystatechange = function () {
            if (xrhFile.readyState === 4) {
                if (xrhFile.status === 200 || xrhFile.status == 0) {
                    var LngObject = JSON.parse(xrhFile.responseText);
                    console.log(LngObject["name1"]);
                    var allDom = document.getElementsByTagName("*");
                    for (var i = 0; i < allDom.length; i++) {
                        var elem = allDom[i];
                        var key = elem.getAttribute(_self.attribute);
                        if (key != null) {
                            console.log(key);
                            elem.innerHTML = LngObject[key];
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