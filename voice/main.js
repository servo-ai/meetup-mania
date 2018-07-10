console.log('\'Allo \'Allo!');


Asr.init();
Tts.init();
Nlu.init()
Joker.init();
/**
 * 
 */
function listen0() {
    $('#bot').show()
    Asr.startListen(function (text, final) {

        if (final) {
            $('#bot').hide()
            $('#textCaptured').text('FINAL: ' + text)
        } else {
            $('#textCaptured').text('Interim: ' + text)
        }

    })
}



/**
 * 
 */
function listen() {
    $('#bot').show()
    Asr.startListen(function (text, final) {

        if (final) {
            $('#bot').hide()
            $('#textCaptured').text('FINAL: ' + text)
            Nlu.process(text, function (resultData) {

                var intentId = resultData.entities.intent && resultData.entities.intent[0].value;
                var number = resultData.entities.number && resultData.entities.number[0].value;
                console.log('got back', intentId, number);
            })
        } else {
            $('#textCaptured').text('Interim: ' + text)
        }

    })
}




/**
 * 
 */
function listen2() {
    // $('#bot').show()
    Asr.startListen(function (text, final) {
        $('#bot').hide()
        if (final) {
            $('#textCaptured').text('FINAL: ' + text)

            Nlu.process(text, function (resultData) {
                console.log('got back', resultData);
                var intentId = resultData.entities.intent && resultData.entities.intent[0].value;
                var number = resultData.entities.number && resultData.entities.number[0].value;
                if (intentId === 'JokeIntent') {
                    Joker.joke(number);
                } else {
                    Tts.speak('You must be kidding! I cannot understand a word you are saying');
                }
            })
        } else {
            $('#textCaptured').text('Interim: ' + text)
        }

    })
}










/**
 * 
 */
function listen1() {
    // $('#bot').show()
    Asr.startListen(function (text, final) {
        if (final) {
            $('#textCaptured').text('FINAL: ' + text)
            // //$('#bot').hide()
            // Nlu.process(text, function (resultData) {
            //     console.log('got back', resultData);
            //     var intentId = resultData.entities.intent && resultData.entities.intent[0].value;
            //     var number = resultData.entities.number && resultData.entities.number[0].value;
            //     if (intentId === 'JokeIntent') {
            //         Joker.joke(number);
            //     } else {
            //         Tts.speak('You must be kidding! I cannot understand a word you are saying');
            //     }
            // })
        } else {
            $('#textCaptured').text('Interim: ' + text)
        }

    })
}