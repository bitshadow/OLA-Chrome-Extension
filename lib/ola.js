(function() {

    var api_token = '';
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

    // this function return the src and destination from the url
    // in the following format:
    // {
    // src : [X, Y]
    // dest : [X, Y]
    //}
    function getEndpoints(url) {
        return {
            src: getSource(url),
            dst: getDestination(url)
        };
    }

    // this function reurn the source
    // [X, y]
    function getSource(data) {
        return processCoOrdinate(data.match(regex).slice(0, 2));
    }

    // this funciton return the destination
    // [X, Y]
    function getDestination(data) {
        return processCoOrdinate(data.match(regex).slice(2, 4));
    }

    // util function to process the co-ordinate
    // remove the unwanted char
    function processCoOrdinate(points) {
        var output = [];
        for (element in points) {
            point = points[element];
            point = point.replace("1d", "");
            point = point.replace("2d", "");
            point = point.replace("!", "");
            output.push(point);
        }
        return output;
    }

    // regular expression to retrieve the src and dst
    // co-ordinate.
    var regex = /[1|2]d[+,-]*[0-9]+.[0-9]+!?/g
    console.log(getEndpoints(window.location.href));

})();
