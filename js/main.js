new TypeIt("#intro", {
    speed: 25,
    waitUntilVisible: true,
    breakLines: false,
    lifeLike: true,
    loop: false
  })
    .type("Hi,")
    .pause(200)
    .type(" I'm James")
    .pause(300)
    .type(". Welcome to my website.")
    .go();

