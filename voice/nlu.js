function Nlu() {}
Nlu.init = function () {

}

Nlu.process = function (text, callback) {
    $.ajax({
        url: 'https://api.wit.ai/message',
        data: {
            'q': text,
            'access_token': 'FNO6BX5WQ23SQSKXTYU6MM444MDVL564'
        },
        dataType: 'jsonp',
        method: 'GET',
        success: function (response) {
            callback(response);
        }
    });
}