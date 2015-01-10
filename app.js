u$.ldGa("UA-58423761-1");
(function(){
    function getTextColor(color) {
        /*
         * Calculates perceived brightness, and returns a good text color
         * http://stackoverflow.com/a/596243
         */
        return Math.sqrt((color.r * color.r * .299) + (color.g * color.g * .587) + (color.b * color.b * .114)) < 130 ? "#fff" : "#000";
    }

    function getRgb(colorString) {
        return {
            r: parseInt(colorString.substr(0, 2), 16),
            g: parseInt(colorString.substr(2, 2), 16),
            b: parseInt(colorString.substr(4, 2), 16)
        }
    }

    u$.r(function() {
        (function (time, ts, hex, body, max) {
            function update() {
                //Calculate the values we will use
                var now = new Date();
                var timestamp = Math.floor(now / 1000);
                var colorTime = timestamp % max;
                var t = ("000000" + colorTime.toString(16)).slice(-6);

                //Now use them appropriately
                body.style.color = getTextColor(getRgb(t));
                time.innerText = now.toLocaleString();
                ts.innerText = timestamp;
                body.style.backgroundColor = "#" + t;
                hex.innerText = t;

                //And continue the animation loop
                requestAnimationFrame(update);
            }

            //Run the clock
            requestAnimationFrame(update);
        })(document.getElementById("time"), document.getElementById("ts"), document.getElementById("hex"), document.getElementById("body"), 0xffffff);
    });
})();
