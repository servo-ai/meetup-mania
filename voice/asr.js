function Asr() {}

Asr.init = function (callback) {
	this.recognition = new webkitSpeechRecognition(); //That is the object that will manage our whole recognition process. 
	this.recognition.continuous = false; //Suitable for dictation. 
	this.recognition.interimResults = true; //If we want to start receiving results even if they are not final.
	//Define some more additional parameters for the recognition:
	this.recognition.lang = 'en-US';
	this.recognition.maxAlternatives = 1; //Since from our experience, the highest result is really the best...


	this.recognition.onaudiostart = function () {

	}
	this.recognition.onaudioend = function () {

	}
}

/***
 * send to server and stop recognition
 */
Asr.sendTextToNLU = function (transcript) {
	console.log('final text:' + transcript)
	var _this = this;
	_this.transcript = transcript;
	Asr.stopListen();
}

/****
 * start running
 */
Asr.startListen = function (callback) {

	var _this = this;

	/**
	 * get the texts in onresult
	 */
	this.recognition.onresult = function (event) { //the event holds the results
		//Yay – we have results! Let’s check if they are defined and if final or not:
		if (typeof (event.results) === 'undefined') { //Something is wrong…
			console.warn('we have an undefined result')

			return;
		}

		for (var i = event.resultIndex; i < event.results.length; ++i) {
			if (event.results[i].isFinal) { //Final results

				Asr.stopListen();
				callback(event.results[i][0].transcript, true);

			} else { //i.e. interim...
				callback(event.results[i][0].transcript, false);
			}
		}

	};


	/**
	 * finished something for some reason
	 */
	this.recognition.onend = function (ev) {


	}

	/**
	 * error on recognition
	 */
	this.recognition.onerror = function (event) {
		console.error('recognition error', event);
		switch (event.error) {
			case 'network':
				alert('network error')

				break;
			case 'not-allowed':
			case 'service-not-allowed':
				alert('A permission error occured. Please clean browser cache and restart');
				break;
			case 'no-speech':

		}
	}

	console.log('starting to listen')
	this.recognition.start();
}

/**
 * 
 */
Asr.stopListen = function () {
	console.log('stop listening')
	this.recognition && this.recognition.stop();
	this.transcript = '';
}