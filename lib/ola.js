(function() {

    var api_token = '';
    var $main = $('<div/>');

    function prepareFrame(obj) {
        $main.attr('id', 'ola-main');
        console.log(obj);
        var str = '?slat=' + obj.src[0] + '&slong=' +  obj.src[1] + '&dlat=' + obj.dst[0] + '&dlong=' + obj.dst[1];
        ifrm = $('<iframe/>');
        ifrm.attr('class', 'ola-frame');
        ifrm.attr('id', 'ola-frame');
        ifrm.attr('src', 'https://3fe0f9a8.ngrok.com/' + str);
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
                var obj = getEndpoints(window.location.href);;
                prepareFrame(obj);
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
            src: getCoordinates(url, 0, 2),
            dst: getCoordinates(url, 2, 4)
        };
    }

    // this function reurn the source
    // [X, y]
    function getCoordinates(data, start, end) {
        // regular expression to retrieve the src and dst
        // co-ordinate.
        var regex = /![1|2]d[+,-]*[0-9]+.[0-9]+/g
        return processCoOrdinate(data.match(regex).slice(start, end));
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
})();
