(function() {

    var api_token = '';

    var $cards = $('#cards');
    var $main = $('<div/>');

    function prepareFrame() {
        $main.attr('id', 'ola-main');

        ifrm = $('<iframe/>');
        ifrm.attr('class', 'ola-frame');
        ifrm.attr('id', 'ola-frame');
        ifrm.attr('src', 'https://31ba78b9.ngrok.com/');
        ifrm.css({
            position: 'fixed',
            top: 10,
            right: 10,
            border: 0
        });

        $main.append(ifrm);
    }

    $(document.body).append($main);

    (function() {
        var previousState = window.history.state;
        setInterval(function() {
            if (previousState !== window.history.state) {
                previousState = window.history.state;
                $('#ola-main').html('');

                prepareFrame();
            }
        }, 1000);
    })();
})();
