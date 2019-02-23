window.onload=function(){
	var html=document.getElementById("html"),
		css=document.getElementById("css"),
		js=document.getElementById("js"),
		output=document.getElementById("output"),
		working=false,
		fill=function(){
			if(working){
				return false;
			}
			working=true;
			var document=output.contentDocument,
				style=document.createElement("style"),
				script=document.createElement("script");
			document.body.innerHTML=html.textContent;
			style.innerHTML=css.textContent.replace(/\s/g,"");
			script.innerHTML=js.textContent;
			document.body.appendChild(style);
			document.body.appendChild(script);
			working=false;
		};
	html.onkeyup=fill;
	css.onkeyup=fill;
	js.onkeyup=fill;
	$(".navbar").css("background-color", "#212529");
	$(document).on("keyup", "#html", function () {
		$("#html").each(function (i, block) {
			hljs.configure({
				language: "html"
			  })
		});
		$("#css").each(function (i, block) {
			hljs.configure({
				language: "css"
			  })
			highlightBlock(block);
		});
		$("#js").each(function (i, block) {
			hljs.configure({
				language: "javascript"
			  })
		});
	});
}

function copyToHtml()
{
    var text = $(".copyButton").val();
    $("#html code").text(text);
}

function highlightBlock(el) {
	let savedSel = rangy.saveSelection();
	hljs.highlightBlock(el);
	rangy.restoreSelection(savedSel);
}