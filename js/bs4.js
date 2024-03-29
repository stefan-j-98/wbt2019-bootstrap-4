window.onload=function(){
    $(".navbar").css("background-color", "#363334");

    // document.addEventListener("contextmenu", function(e){
    //   e.preventDefault();
    // }, false);
    // document.addEventListener("keydown", function(e) {
    // //document.onkeydown = function(e) {
    //   // "I" key
    //   if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
    //     disabledEvent(e);
    //   }
    //   // "J" key
    //   if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
    //     disabledEvent(e);
    //   }
    //   // "S" key + macOS
    //   if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
    //     disabledEvent(e);
    //   }
    //   // "U" key
    //   if (e.ctrlKey && e.keyCode == 85) {
    //     disabledEvent(e);
    //   }
    //   // "F12" key
    //   if (event.keyCode == 123) {
    //     disabledEvent(e);
    //   }
    // }, false);
    // function disabledEvent(e){
    //   if (e.stopPropagation){
    //     e.stopPropagation();
    //   } else if (window.event){
    //     window.event.cancelBubble = true;
    //   }
    //   e.preventDefault();
    //   return false;
    // }
    
    window.onscroll = function () {
        ScrollEffect()
        $(".navbar").css("background-color", "#212529");
    };

    //doughnut
  var ctxD = document.getElementById("doughnutChart").getContext('2d');
  var myLineChart = new Chart(ctxD, {
    type: 'doughnut',
    data: {
      labels: ["Bootstrap", "Microsoft ASP.NET", "Ruby on Rails", "Laravel", "Google Web Toolkit", "animate.css", "Express", "CodeIgniter", "UIKit", "Material Designe Light"],
      datasets: [{
        data: [53.7, 25.5, 9, 8, 7, 6, 5, 4, 3, 2],
        hoverBackgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360", "#3b4758", "#618d2a", "#242529", "#3f4b50", "#41e42b"],
        backgroundColor: ["#f86164", "#2e745a", "#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774", "#3e3f46", "#919699", "#3bb32b"]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true
    }
  });
};
$(function () {
    var $win = $(window);
    $win.scroll(function () {
        if ($win.scrollTop() == 0) {
            $(".navbar").css("background-color", "#363334");
        }
    });
});