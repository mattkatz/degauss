$(function(){
	console.log('ready!');
	window.setInterval(degauss,10000);
});

function degauss(){
//	alert('a crazy warp/degauss effect that changes the text!');

	console.log('skewing');
	$('div').addClass('skewout');
  window.setTimeout(function(){
    $('div').addClass('norm');
    changeText();
  },1000);

	window.setTimeout(function(){
    $('div').removeClass('skewout');
    $('div').removeClass('norm');
	},3000);

};

function changeText(){
	var quotes = [
		"He had a purpose in the world and women are drawn like magenets to such men and she had fallen in love with him",
		"not caring that it was going to happen heinously and in full view of the two startled late night customers",


	];
	var quote = quotes[Math.floor(Math.random() * 2)];
	$('#head').text(quote);
	console.log($('#head').text());
}

