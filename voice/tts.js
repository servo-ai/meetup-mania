function Tts() {}
var _mid = 0;
Tts.init = function (manager) {

	this.manager = manager;
	this.messages = [];
	var _this = this;
	return new Promise(function (resolve) {
		_this.voices = speechSynthesis.getVoices();
		console.log(_this.voices);

		function tryVoices() {
			_this.voices = speechSynthesis.getVoices();
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
 * 
 */
Tts.speak = function (text, done, voicename) {

	var msg = new SpeechSynthesisUtterance();

	var voices = this.voices.filter(function (voice) {
		console.log(voice.name, voicename, voice.name === voicename)
		return voice.name === (voicename || 'Google UK English Female');
	});
	msg.voice = voices[0];
	// Set the text.
	msg.text = text;

	// Set the attributes.
	msg.volume = 1.0;
	msg.rate = 0.9;
	msg.pitch = 1.0;
	msg.onend = function () {
		done();
	};
	msg.onerror = function (err) {
		console.error(err)
	};

	speechSynthesis.speak(msg);

}