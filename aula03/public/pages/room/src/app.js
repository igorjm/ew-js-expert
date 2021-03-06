const onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const room = urlParams.get("room");
  console.log("this is the room", room);

  const socketUrl = "http://localhost:3000";
  const socketBuilder = new SocketBuilder({ socketUrl });

  const peerBuilder = new PeerBuilder();

  const view = new View();
  const media = new Media();
  const deps = {
    view,
    media,
    room,
    socketBuilder,
    peerBuilder,
  };

  Business.initialize(deps);

  view.renderVideo({});
};

window.onload = onload;
