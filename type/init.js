$(document).ready(function(){
	var entryCount = 0;
	var displayCount = 0;

  createElement('a');
  createElement('b');
  createElement('c');
  createElement('d');
  createElement('e');
  createElement('f');
  createElement('g');
  createElement('h');
  createElement('i');
  createElement('j');
  createElement('k');
  createElement('l');
  createElement('m');
  createElement('n');
  createElement('o');
  createElement('p');
  createElement('q');
  createElement('r');
  createElement('s');
  createElement('t');
  createElement('u');
  createElement('v');
  createElement('w');
  createElement('x');
  createElement('y');
  createElement('z');
  createElement(',');
  createElement('.');
  createElement('-');
  createElement('?');


	$(document).on("keypress",function(e){
		e.preventDefault();
		entryCount ++;
		displayCount ++;
		var char = String.fromCharCode(e.which);
		console.log("entry #" + entryCount + " : " + e.which + " | " + char + ". Showing " + displayCount);
		createElement(char);
	});

  $(document).on("keydown", function(e) {
    if (e.which == 8){
        e.preventDefault();
        entryCount ++;
        displayCount --;
		if (displayCount < 0) {
        displayCount = 0;
      }
        console.log("entry #" + entryCount + " : " + e.which + " | BKSP. Showing " + displayCount);
	    deleteElement();
    }
	});

  $('body').click(function(){

    var bg = $('body').css('background-color');
    var bgImage = $('body').css('background-image');

if (bg == 'rgb(255, 255, 255)') {
    $(this).css('background-color', 'black');
    console.log('this works');
} if (bg == 'rgb(0, 0, 0)') {
  $(this).css('background-color', "transparent");
  $(this).addClass('bg-stripe');

  console.log('this also works');
} if (bg == 'rgba(0, 0, 0, 0)') {
  $(this).css('background-color', 'white');
  $(this).removeClass('bg-stripe');
  console.log('this also also works');
}
    
  });

	function deleteElement() {
  		$(".inner").last().remove();
	}
});

  function createElement(k) {
  var elem = $('#cursor');
  if (k == "a" || k == "A") { elem.before('<span class="inner"><img src="30letters/A.png"></span>'); }
  if (k == "b" || k == "B") { elem.before('<span class="inner"><img src="30letters/B.png"></span>'); }
  if (k == "c" || k == "C") { elem.before('<span class="inner"><img src="30letters/C.png"></span>'); }
  if (k == "d" || k == "D") { elem.before('<span class="inner"><img src="30letters/D.png"></span>'); }
  if (k == "e" || k == "E") { elem.before('<span class="inner"><img src="30letters/E.png"></span>'); }
  if (k == "f" || k == "F") { elem.before('<span class="inner"><img src="30letters/F.png"></span>'); }
  if (k == "g" || k == "G") { elem.before('<span class="inner"><img src="30letters/G.png"></span>'); }
  if (k == "h" || k == "H") { elem.before('<span class="inner"><img src="30letters/H.png"></span>'); }
  if (k == "i" || k == "I") { elem.before('<span class="inner"><img src="30letters/I.png"></span>'); }
  if (k == "j" || k == "J") { elem.before('<span class="inner"><img src="30letters/J.png"></span>'); }
  if (k == "k" || k == "K") { elem.before('<span class="inner"><img src="30letters/K.png"></span>'); }
  if (k == "l" || k == "L") { elem.before('<span class="inner"><img src="30letters/L.png"></span>'); }
  if (k == "m" || k == "M") { elem.before('<span class="inner"><img src="30letters/M.png"></span>'); }
  if (k == "n" || k == "N") { elem.before('<span class="inner"><img src="30letters/N.png"></span>'); }
  if (k == "o" || k == "O") { elem.before('<span class="inner"><img src="30letters/O.png"></span>'); }
  if (k == "p" || k == "P") { elem.before('<span class="inner"><img src="30letters/P.png"></span>'); }
  if (k == "q" || k == "Q") { elem.before('<span class="inner"><img src="30letters/Q.png"></span>'); }
  if (k == "r" || k == "R") { elem.before('<span class="inner"><img src="30letters/R.png"></span>'); }
  if (k == "s" || k == "S") { elem.before('<span class="inner"><img src="30letters/S.png"></span>'); }
  if (k == "t" || k == "T") { elem.before('<span class="inner"><img src="30letters/T.png"></span>'); }
  if (k == "u" || k == "U") { elem.before('<span class="inner"><img src="30letters/U.png"></span>'); }
  if (k == "v" || k == "V") { elem.before('<span class="inner"><img src="30letters/V.png"></span>'); }
  if (k == "w" || k == "W") { elem.before('<span class="inner"><img src="30letters/W.png"></span>'); }
  if (k == "x" || k == "X") { elem.before('<span class="inner"><img src="30letters/X.png"></span>'); }
  if (k == "y" || k == "Y") { elem.before('<span class="inner"><img src="30letters/Y.png"></span>'); }
  if (k == "z" || k == "Z") { elem.before('<span class="inner"><img src="30letters/Z.png"></span>'); }
  if (k == "," || k == ",") { elem.before('<span class="inner"><img src="30letters/comma.png"></span>'); }
  if (k == "." || k == ".") { elem.before('<span class="inner"><img src="30letters/fullstop.png"></span>'); }
  if (k == "-" || k == "-") { elem.before('<span class="inner"><img src="30letters/hyphen.png"></span>'); }
  if (k == "?" || k == "?") { elem.before('<span class="inner"><img src="30letters/questionmark.png"></span>'); }
  if (k == " ") { elem.before('<span class="inner">&nbsp;</span>'); }
}