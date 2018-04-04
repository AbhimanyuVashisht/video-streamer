$(() => {
    const electron = require('electron');

    const display = electron.screen.getPrimaryDisplay();

    const constraints = {
        video: {
            width: {
                ideal: display.size.width
            },
            height: {
                ideal: display.size.height
            }
        }
    };

    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        const video = document.querySelector('video');
        video.srcObject = stream;
    }).catch((error) => {
        console.log(error)
    });

    // Listen for the Rainbow Filter checkbox being clicked
    $("#rainbow-toggle").on('change', () => {
        if ($('#rainbow-toggle').is(':checked')) {
            $('.rainbow-filter').show()
        } else {
            $('.rainbow-filter').hide()
        }
    })
});