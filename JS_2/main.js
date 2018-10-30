var btn = document.getElementsByClassName('btn');
var mess = document.getElementsByClassName('info');

initScript();

function initScript() {
	for( var i = 0; i < btn.length; i++) {
		btn[i].addEventListener('click', addClass);

		btn[i].setAttribute('data-position', i);
		mess[i].setAttribute('data-position', i);
	}
}

function addClass (event) {
	var position = event.target.getAttribute('data-position');

	disableAllButtons();
	event.target.classList.add('active');
	disableAllMessages();
	setMessageByPosition(position);
}

function disableAllButtons() {
	for (var i = 0; i < btn.length; i++) {
		btn[i].classList.remove('active');
	}
}

function disableAllMessages() {
	for ( var i = 0; i < mess.length; i++) {
		mess[i].classList.remove('open');
	}
}

function setMessageByPosition(position) {
	for ( var i = 0; i < mess.length; i++) {
		if (mess[i].getAttribute('data-position') == position) {
			mess[i].classList.add('open');
			break;
		}
	}
}
