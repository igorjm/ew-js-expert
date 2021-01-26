class Business {
  constructor({ room, media, view }) {
    this.room = room;
    this.media = media;
    this.view = view;

    this.socketBuilder = this.socketBuilder
      .setOnUserConnected(this.onUserConnected())
      .build();

    this.socketBuilder.emit("join-room", this.room, "teste01");

    this.currentStream = {};
  }

  static initialize(deps) {
    const instance = new Business(deps);
    return instance._init();
  }

  async _init() {
    this.currentStream = await this.media.getCamera();
    this.addVideoStream("teste01");
  }

  addVideoStream(userId, stream = this.currentStream) {
    const isCurrentId = false;
    this.view.renderVideo({
      userId,
      stream,
      isCurrentId,
    });
  }

  onUserConnected = function () {
    return (userId) => {
      console.log("user connected", userId);
    };
  };

  onUserDisconnected = function () {
    return (userId) => {
      console.log("user disconnected", userId);
    };
  };
}
