function Tts() {}
var _mid = 0;
Tts.init = function (manager) {

	this.manager = manager;
	this.messages = [];
	var _this = this;
	return new Promise(function (resolve) {
		_this.voices = window.speechSynthesis.getVoices();
		console.log(_this.voices);

		function tryVoices() {
			_this.voices = window.speechSynthesis.getVoices();
			if (_this.voices.length) {
				resolve();
			} else {
				setTimeout(tryVoices, 200);
			}
			console.log(_this.voices)
		}
		setTimeout(tryVoices, 200);
	});

}
/***
 * handle one message
 */
Tts.handleMessage = function (msg) {
	var _this = this;
	var isAQuestion = msg.isAQuestion
	/**
	 * on error
	 * @param {*} msg 
	 */
	var onerror = function (msg) {
		console.error(msg)
	}
	/**
	 * var end of message
	 */
	var onend = function () {
		console.log('end', msg.mid, msg.text, Date.now() - msg.timeStart);

		let msg1 = _this.messages.pop();
		if (msg1) {
			_this.handleMessage(msg1);
		} else {
			setTimeout(function () {
				_this.manager.speechEnded();
				if (isAQuestion) {
					_this.manager.startListen();
				}
			}, 50);
		}
	}

	msg.onend = onend;
	msg.timeStart = Date.now();
	msg.mid = _mid++;
	msg.onerror = onerror;
	console.log('start', msg.mid, msg.text)
	window.speechSynthesis.speak(msg);
}




/**
 * 
 */
Tts.startSpeaking = function () {
	var _this = this;

	// Queue this utterance
	let msg = _this.messages.pop()
	if (msg) {
		this.handleMessage(msg);
	}
}


/***
 * 
 */
Tts.speak = function (text, isAQuestion) {

	var msg = new SpeechSynthesisUtterance();

	var voices = this.voices.filter(function (voice) {
		return voice.name === 'Google UK English Female';
	});
	msg.voice = voices[0];
	// Set the text.
	msg.text = text;

	// Set the attributes.
	msg.volume = 1.0;
	msg.rate = 1.0;
	msg.pitch = 1.0;
	msg.isAQuestion = isAQuestion;
	var _this = this;
	this.messages.push(msg);
	this.startSpeaking();

}




Tts.deinit = function () {
	this.messages = [];
}