// new TypeIt("#roles", {
//     // strings: ["systems administration, ", "help desk, ", "systems engineering, ", "QA, ", "and working towards DevOps."],
//     speed: 25,
//     // loop: true,
//     // loopDelay: 1100,
//     waitUntilVisible: true,
//     breakLines: false,
//     lifeLike: true,
//     // startDelete: false
//   })
//     .type("I wear hats in systems administration,")
//     .pause(100)
//     .type(" help desk,")
//     .pause(100)
//     .type(" systems engineering,")
//     .pause(100)
//     .type(" QA,")
//     .pause(300)
//     .type(" and working my way towards DevOps.")
//     .go();

new TypeIt("#intro", {
    speed: 25,
    waitUntilVisible: true,
    breakLines: false,
    lifeLike: true,
    loop: false
  })
    .type("Hi,")
    .pause(300)
    .type(" I'm James")
    .pause(300)
    .type(", and I'm in IT.")
    .pause(300)
    .type("<br>I wear hats in systems administration,")
    .pause(200)
    .type(" help desk,")
    .pause(200)
    .type(" systems engineering,")
    .pause(200)
    .type(" QA,")
    .pause(300)
    .type(" and working my way towards DevOps.")
    .go();