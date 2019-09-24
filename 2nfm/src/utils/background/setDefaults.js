function setDefaults() {
  const defaults = {
    enableTabCaptureAPI: "false",
    isSharingOn: "false",
    enableVideo: "false",
    enableAudio: "false",
    sessionId: "",
  };

  Object.keys(defaults).forEach(function(key) {
    window.localStorage.setItem(key, defaults[key]);
  });

  if (connection) {
    connection.attachStreams.forEach(function(stream) {
      try {
        stream.getTracks().forEach(function(track) {
          try {
            track.stop();
          } catch (e) {}
        });
      } catch (e) {}
    });

    try {
      connection.close();
    } catch (e) {}

    try {
      connection.closeSocket();
    } catch (e) {}

    connection = null;
  }

  // chrome.browserAction.setIcon({
  //     path: 'images/icon-inactive_128.png'
  // });

  // if (popup_id) {
  //     try {
  //         chrome.windows.remove(popup_id);
  //     } catch (e) {}

  //     popup_id = null;
  // }

  // chrome.browserAction.setTitle({
  //     title: '2N Streamer'
  // });

  setViewerCount("0");

  // chrome.runtime.reload();
  init();
}