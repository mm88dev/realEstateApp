angular.module('myApp', [
  'ngRoute'
]).config(function ($routeProvider, $locationProvider) {

  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/', {
      templateUrl: 'pages/login.html',
      controller: 'loginController'
    })
    .when("/rooms", {
      templateUrl: "pages/roomsIndex.html",
      controller: "mainController"
    })
    .when("/rooms/:room", {
      templateUrl: "pages/room.html",
      controller: "mainController"
    })
    .when("/printPage", {
      templateUrl: "pages/printPage.html",
      controller: "printController"
    });
}).run(function ($rootScope) {

  $rootScope.allItems = {
    "masterBath": [{
        name: "Door",
        description: "Adjust door hinge",
        price: 0,
        id: 327
      },
      {
        name: "Cabinet 24",
        description: "Dark brown Vanity (price + 10% + $75 labor)",
        price: 0,
        id: 328
      },
      {
        name: "Cabinet 30",
        description: "Dark brown Vanity (price + 10% + $75 labor)",
        price: 0,
        id: 329
      },
      {
        name: "Cabinet 36",
        description: "Dark brown Vanity (price + 10% + $75 labor)",
        price: 0,
        id: 330
      },
      {
        name: "Doors",
        description: "Door stopper 1/2 moon",
        price: 0,
        id: 331
      },
      {
        name: "Lights",
        description: "New Installation on 2 in 1 combo Heater and exhaust (Cost + tax + 10% + $80 installation + $80 ducting)",
        price: 0,
        id: 332
      },
      {
        name: "Sinks",
        description: "Overmounted Sink ",
        price: 0,
        id: 333
      },
      {
        name: "Windows",
        description: "Replace broken window glass (Cost + 10% + $30.00)",
        price: 0,
        id: 334
      },
      {
        name: "Electric",
        description: "Ligth switch or outlet plate",
        price: 2.20,
        id: 335
      },
      {
        name: "Lights",
        description: "Regular light bulbs",
        price: 2.20,
        id: 336
      },
      {
        name: "Cabinet",
        description: "Catch clip remove and install new",
        price: 4.40,
        id: 337
      },
      {
        name: "Doors",
        description: "Catch clip remove and install new",
        price: 4.40,
        id: 338
      },
      {
        name: "Doors",
        description: "Door stopper solid stick",
        price: 4.68,
        id: 339
      },
      {
        name: "Electric",
        description: "Ligth switch or outlet double plate",
        price: 5.50,
        id: 340
      },
      {
        name: "Electric",
        description: "Adjust GFCI",
        price: 5.50,
        id: 341
      },
      {
        name: "Mirrors",
        description: "Remove plastic framed mirror from door or wall",
        price: 5.50,
        id: 342
      },
      {
        name: "Sinks",
        description: "Shot off valve Handle",
        price: 5.50,
        id: 343
      },
      {
        name: "Toilet",
        description: "Remove existing caulking that is between toilet base and floor",
        price: 5.50,
        id: 344
      },
      {
        name: "Accessorie",
        description: "Reinstall Paper Holder, Towel Bar and Ring",
        price: 5.78,
        id: 345
      },
      {
        name: "Accessorie",
        description: "Reinstall/Adjust Paper Holder",
        price: 5.78,
        id: 346
      },
      {
        name: "Accessorie",
        description: "Towel ring Reinstall/Adjust",
        price: 5.78,
        id: 347
      },
      {
        name: "Doors",
        description: "Replace wood molding inside around door frame, top molding only",
        price: 6.60,
        id: 348
      },
      {
        name: "Electric",
        description: "Regular outlet",
        price: 6.60,
        id: 349
      },
      {
        name: "Cabinet",
        description: "Cabinet doors and drawers Individual Knob/Handles ",
        price: 7.70,
        id: 350
      },
      {
        name: "Electric",
        description: "Regular Light switch",
        price: 8.25,
        id: 351
      },
      {
        name: "Drawer",
        description: "Adjust cabinet drawer",
        price: 8.80,
        id: 352
      },
      {
        name: "Electric",
        description: "Decora outlets",
        price: 9.90,
        id: 353
      },
      {
        name: "Electric",
        description: "Decora switch",
        price: 9.90,
        id: 354
      },
      {
        name: "Lights",
        description: "Decora switch",
        price: 9.90,
        id: 355
      },
      {
        name: "Light	4'",
        description: "Fluorecent light bulb",
        price: 11.00,
        id: 356
      },
      {
        name: "Accessorie",
        description: "Regular Paper Holder",
        price: 11.00,
        id: 357
      },
      {
        name: "Accessorie",
        description: "Towel bar Reinstall/Adjust",
        price: 11.00,
        id: 358
      },
      {
        name: "Cabinet",
        description: "Seal gaps inside the wall cabinet",
        price: 11.00,
        id: 359
      },
      {
        name: "Doors",
        description: "Adjust cabinet door",
        price: 11.00,
        id: 360
      },
      {
        name: "Toilet",
        description: "Toilet base screw caps set of 2",
        price: 11.00,
        id: 361
      },
      {
        name: "Toilet",
        description: "Water supply line x 1",
        price: 12.10,
        id: 362
      },
      {
        name: "Faucets",
        description: "Faucet water supply line x 1",
        price: 13.20,
        id: 363
      },
      {
        name: "Tubs",
        description: "Replace caulking around bath Tubs",
        price: 14.30,
        id: 364
      },
      {
        name: "Tubs",
        description: "Install missing shower soap dish, install new one ($10.64 + tax + 10%)",
        price: 14.30,
        id: 365
      },
      {
        name: "Doors",
        description: "Replace wood molding inside around door frame, side molding only",
        price: 16.50,
        id: 366
      },
      {
        name: "Electric",
        description: "Remove wall light fixture and install a plate",
        price: 16.50,
        id: 367
      },
      {
        name: "Cabinet",
        description: "New satin finish hinges pair, take off cabinet doors & install after painting of cabinets & doors",
        price: 17.88,
        id: 368
      },
      {
        name: "Doors",
        description: "Door knob",
        price: 20.90,
        id: 369
      },
      {
        name: "Tubs",
        description: "Tubs drain screen, replacement and/or installation of new screen w/screw ($11.79 cost)",
        price: 20.90,
        id: 370
      },
      {
        name: "Accessorie",
        description: "Replace shower curtain, install new keep it hanging on its package",
        price: 22.00,
        id: 371
      },
      {
        name: "Accessorie",
        description: "Towel Ring",
        price: 22.00,
        id: 372
      },
      {
        name: "Drawers",
        description: "Guide",
        price: 22.00,
        id: 373
      },
      {
        name: "Shower",
        description: "Replace shower curtain, keep new one on its bag",
        price: 22.00,
        id: 374
      },
      {
        name: "Tubs",
        description: "New Curtain",
        price: 22.00,
        id: 375
      },
      {
        name: "Cabinet",
        description: "Patch medicine cabinet hole",
        price: 27.50,
        id: 376
      },
      {
        name: "Doors",
        description: "Replacer portion of broken door frame up to 6",
        price: 27.50,
        id: 377
      },
      {
        name: "Electric",
        description: "Install electric box for light switch, outlet or alarm boxes inside the wall, per box",
        price: 27.50,
        id: 378
      },
      {
        name: "Toilet",
        description: "Replace wax ring",
        price: 27.50,
        id: 379
      },
      {
        name: "Toilet",
        description: "Replace toilet seat",
        price: 28.60,
        id: 380
      },
      {
        name: "Tubs",
        description: "Shower head 90 degrees pipe to be install with new shower faucet (21.58 cost)",
        price: 31.90,
        id: 381
      },
      {
        name: "Accessorie",
        description: "Towel bar Regular",
        price: 33.00,
        id: 382
      },
      {
        name: "Doors",
        description: "New hinges pair rounded or square finished cut",
        price: 33.00,
        id: 383
      },
      {
        name: "Doors",
        description: "Cabinet door Cut / Trim",
        price: 33.00,
        id: 384
      },
      {
        name: "Sinks",
        description: "Replace angle stop aka Shot off valve",
        price: 27.50,
        id: 385
      },
      {
        name: "Toilet",
        description: "Replace angle stop aka Shot off valve",
        price: 27.50,
        id: 386
      },
      {
        name: "Tubs",
        description: "Remove shower doors and frames and trash them",
        price: 33.00,
        id: 387
      },
      {
        name: "Window",
        description: "Clear window glass, install frost type film",
        price: 33.00,
        id: 388
      },
      {
        name: "Windows",
        description: "New window screen",
        price: 33.00,
        id: 389
      },
      {
        name: "Tubs",
        description: "Shower head 'S' shape pipe ($18.74 + tax + 10% + $10)",
        price: 35.20,
        id: 390
      },
      {
        name: "Tubs",
        description: "Shower head 90 degrees pipe only (21.58 cost)",
        price: 36.30,
        id: 391
      },
      {
        name: "Doors",
        description: "Replace wood moldings inside around door frame, sides and top",
        price: 38.50,
        id: 392
      },
      {
        name: "Floors",
        description: "Cove base around the bath floor, install 1/4 round vinyl molding in Bathroom",
        price: 40.70,
        id: 393
      },
      {
        name: "Cabinet",
        description: "Move Medicine Cabinet to a new location",
        price: 44.00,
        id: 394
      },
      {
        name: "Tubs",
        description: "Clean up tub walls tiles grout with muriatic acid and seal it",
        price: 44.00,
        id: 395
      },
      {
        name: "Accessorie",
        description: "Towel Satin Finish",
        price: 49.50,
        id: 396
      },
      {
        name: "Tubs",
        description: "Remove shower soap dish, install new one ($10.64 + tax + 10% + $5.00)",
        price: 49.50,
        id: 397
      },
      {
        name: "Doors",
        description: "Panel door",
        price: 82.50,
        id: 398
      },
      {
        name: "Faucets",
        description: "Replace shower valves, plates and handles, replace shower head, pipe and plate",
        price: 82.50,
        id: 399
      },
      {
        name: "Cabinet",
        description: "New Medicine cabinet Framed (existing hole)",
        price: 84.70,
        id: 400
      },
      {
        name: "Accessorie",
        description: "Replace shower head pipe and plate, shower handle and plate, spout, all parts are stained",
        price: 88.00,
        id: 401
      },
      {
        name: "Electric",
        description: "New GFCI (wiring)",
        price: 88.00,
        id: 402
      },
      {
        name: "Lights	New",
        description: "installation on 3 in 1 combo electric line",
        price: 88.00,
        id: 403
      },
      {
        name: "Lights	New",
        description: "installation on 3 in 1 combo flex ducting pipe",
        price: 88.00,
        id: 404
      },
      {
        name: "Accessorie",
        description: "Paper Holder, Towel Bar and Ring",
        price: 99.00,
        id: 405
      },
      {
        name: "Tubs	Hotel",
        description: "with curtain and ring",
        price: 99.00,
        id: 406
      },
      {
        name: "Lights",
        description: "2 sconce light fixture",
        price: 104.50,
        id: 407
      },
      {
        name: "Cabinet",
        description: "New Medicine Cabinet Framed (make a new hole)",
        price: 106.70,
        id: 408
      },
      {
        name: "Shower",
        description: "tiles	Clean up Shower walls and floor tiles grout, apply new as needed and seal it",
        price: 110.00,
        id: 409
      },
      {
        name: "Lights",
        description: "3 sconce light fixture",
        price: 126.50,
        id: 410
      },
      {
        name: "Mirrors",
        description: "60' x 36 Wall mirror",
        price: 132.00,
        id: 411
      },
      {
        name: "Floors",
        description: "New water proof flooring (Normal Size $150.00 to Big Size $175.00)",
        price: 165.00,
        id: 412
      },
      {
        name: "Faucets",
        description: "Replace shower valve single handle",
        price: 220.00,
        id: 413
      },
      {
        name: "Lights",
        description: "3 in 1 combo including flexible duct (Remove old exhaust fan and connect on existing ducting)",
        price: 247.50,
        id: 414
      },
      {
        name: "Counter",
        description: "tops	Remove tiles and install Granite",
        price: 247.50,
        id: 415
      },
      {
        name: "Tubs",
        description: "Install new tub",
        price: 253.00,
        id: 416
      },
      {
        name: "Tubs",
        description: "New Tiles on walls around the Tubs or Jacuzzi up to the ceiling",
        price: 907.50,
        id: 417
      },
      {
        name: "Tubs",
        description: "New Tiles on walls around the Tubs or Jacuzzi up to the ceiling",
        price: 907.50,
        id: 418
      },
      {
        name: "Tiles",
        description: "Replace existing tiles on stand up shower including pan",
        price: 1512.50,
        id: 419
      },
      {
        name: "Tiles",
        description: "Floor to ceiling tiles including pan",
        price: 1980.00,
        id: 420
      }
    ],
    "hallBath": [{
        name: "Door",
        description: "Adjust door hinge",
        price: 0,
        id: 422
      },
      {
        name: "Cabinet 24",
        description: "Dark brown Vanity (price + 10% + $75 labor)",
        price: 0,
        id: 423
      },
      {
        name: "Cabinet 30",
        description: "Dark brown Vanity (price + 10% + $75 labor)",
        price: 0,
        id: 424
      },
      {
        name: "Cabinet 36",
        description: "Dark brown Vanity (price + 10% + $75 labor)",
        price: 0,
        id: 425
      },
      {
        name: "Doors",
        description: "Door stopper 1/2 moon",
        price: 0,
        id: 426
      },
      {
        name: "Lights",
        description: "New Installation on 2 in 1 combo Heater and exhaust (Cost + tax + 10% + $80 installation + $80 ducting)",
        price: 0,
        id: 427
      },
      {
        name: "Sinks",
        description: "Overmounted Sink ",
        price: 0,
        id: 428
      },
      {
        name: "Windows",
        description: "Replace broken window glass (Cost + 10% + $30.00)",
        price: 0,
        id: 429
      },
      {
        name: "Electric",
        description: "Ligth switch or outlet plate",
        price: 2.20,
        id: 430
      },
      {
        name: "Lights",
        description: "Regular light bulbs",
        price: 2.20,
        id: 431
      },
      {
        name: "Cabinet",
        description: "Catch clip remove and install new",
        price: 4.40,
        id: 432
      },
      {
        name: "Doors",
        description: "Catch clip remove and install new",
        price: 4.40,
        id: 433
      },
      {
        name: "Doors",
        description: "Door stopper solid stick",
        price: 4.68,
        id: 434
      },
      {
        name: "Electric",
        description: "Ligth switch or outlet double plate",
        price: 5.50,
        id: 435
      },
      {
        name: "Electric",
        description: "Adjust GFCI",
        price: 5.50,
        id: 436
      },
      {
        name: "Mirrors",
        description: "Remove plastic framed mirror from door or wall",
        price: 5.50,
        id: 437
      },
      {
        name: "Sinks",
        description: "Shot off valve Handle",
        price: 5.50,
        id: 438
      },
      {
        name: "Toilet",
        description: "Remove existing caulking that is between toilet base and floor",
        price: 5.50,
        id: 439
      },
      {
        name: "Accessorie",
        description: "Reinstall Paper Holder, Towel Bar and Ring",
        price: 5.78,
        id: 440
      },
      {
        name: "Accessorie",
        description: "Reinstall/Adjust Paper Holder",
        price: 5.78,
        id: 441
      },
      {
        name: "Accessorie",
        description: "Towel ring Reinstall/Adjust",
        price: 5.78,
        id: 442
      },
      {
        name: "Doors",
        description: "Replace wood molding inside around door frame, top molding only",
        price: 6.60,
        id: 443
      },
      {
        name: "Electric",
        description: "Regular outlet",
        price: 6.60,
        id: 444
      },
      {
        name: "Cabinet",
        description: "Cabinet doors and drawers Individual Knob/Handles ",
        price: 7.70,
        id: 445
      },
      {
        name: "Electric",
        description: "Regular Light switch",
        price: 8.25,
        id: 446
      },
      {
        name: "Drawer",
        description: "Adjust cabinet drawer",
        price: 8.80,
        id: 447
      },
      {
        name: "Electric",
        description: "Decora outlets",
        price: 9.90,
        id: 448
      },
      {
        name: "Electric",
        description: "Decora switch",
        price: 9.90,
        id: 449
      },
      {
        name: "Lights",
        description: "Decora switch",
        price: 9.90,
        id: 450
      },
      {
        name: "Light	4'",
        description: "Fluorecent light bulb",
        price: 11.00,
        id: 451
      },
      {
        name: "Accessorie",
        description: "Regular Paper Holder",
        price: 11.00,
        id: 452
      },
      {
        name: "Accessorie",
        description: "Towel bar Reinstall/Adjust",
        price: 11.00,
        id: 453
      },
      {
        name: "Cabinet",
        description: "Seal gaps inside the wall cabinet",
        price: 11.00,
        id: 454
      },
      {
        name: "Doors",
        description: "Adjust cabinet door",
        price: 11.00,
        id: 455
      },
      {
        name: "Toilet",
        description: "Toilet base screw caps set of 2",
        price: 11.00,
        id: 456
      },
      {
        name: "Toilet",
        description: "Water supply line x 1",
        price: 12.10,
        id: 457
      },
      {
        name: "Faucets",
        description: "Faucet water supply line x 1",
        price: 13.20,
        id: 458
      },
      {
        name: "Tubs",
        description: "Replace caulking around bath Tubs",
        price: 14.30,
        id: 459
      },
      {
        name: "Tubs",
        description: "Install missing shower soap dish, install new one ($10.64 + tax + 10%)",
        price: 14.30,
        id: 460
      },
      {
        name: "Doors",
        description: "Replace wood molding inside around door frame, side molding only",
        price: 16.50,
        id: 461
      },
      {
        name: "Electric",
        description: "Remove wall light fixture and install a plate",
        price: 16.50,
        id: 462
      },
      {
        name: "Cabinet",
        description: "New satin finish hinges pair, take off cabinet doors & install after painting of cabinets & doors",
        price: 17.88,
        id: 463
      },
      {
        name: "Doors",
        description: "Door knob",
        price: 20.90,
        id: 464
      },
      {
        name: "Tubs",
        description: "Tubs drain screen, replacement and/or installation of new screen w/screw ($11.79 cost)",
        price: 20.90,
        id: 465
      },
      {
        name: "Accessorie",
        description: "Replace shower curtain, install new keep it hanging on its package",
        price: 22.00,
        id: 466
      },
      {
        name: "Accessorie",
        description: "Towel Ring",
        price: 22.00,
        id: 467
      },
      {
        name: "Drawers",
        description: "Guide",
        price: 22.00,
        id: 468
      },
      {
        name: "Shower",
        description: "Replace shower curtain, keep new one on its bag",
        price: 22.00,
        id: 469
      },
      {
        name: "Tubs",
        description: "New Curtain",
        price: 22.00,
        id: 470
      },
      {
        name: "Cabinet",
        description: "Patch medicine cabinet hole",
        price: 27.50,
        id: 471
      },
      {
        name: "Doors",
        description: "Replacer portion of broken door frame up to 6",
        price: 27.50,
        id: 472
      },
      {
        name: "Electric",
        description: "Install electric box for light switch, outlet or alarm boxes inside the wall, per box",
        price: 27.50,
        id: 473
      },
      {
        name: "Toilet",
        description: "Replace wax ring",
        price: 27.50,
        id: 474
      },
      {
        name: "Toilet",
        description: "Replace toilet seat",
        price: 28.60,
        id: 475
      },
      {
        name: "Tubs",
        description: "Shower head 90 degrees pipe to be install with new shower faucet (21.58 cost)",
        price: 31.90,
        id: 476
      },
      {
        name: "Accessorie",
        description: "Towel bar Regular",
        price: 33.00,
        id: 477
      },
      {
        name: "Doors",
        description: "New hinges pair rounded or square finished cut",
        price: 33.00,
        id: 478
      },
      {
        name: "Doors",
        description: "Cabinet door Cut / Trim",
        price: 33.00,
        id: 479
      },
      {
        name: "Sinks",
        description: "Replace angle stop aka Shot off valve",
        price: 27.50,
        id: 480
      },
      {
        name: "Toilet",
        description: "Replace angle stop aka Shot off valve",
        price: 27.50,
        id: 481
      },
      {
        name: "Tubs",
        description: "Remove shower doors and frames and trash them",
        price: 33.00,
        id: 482
      },
      {
        name: "Window",
        description: "Clear window glass, install frost type film",
        price: 33.00,
        id: 483
      },
      {
        name: "Windows",
        description: "New window screen",
        price: 33.00,
        id: 484
      },
      {
        name: "Tubs",
        description: "Shower head 'S' shape pipe ($18.74 + tax + 10% + $10)",
        price: 35.20,
        id: 485
      },
      {
        name: "Tubs",
        description: "Shower head 90 degrees pipe only (21.58 cost)",
        price: 36.30,
        id: 486
      },
      {
        name: "Doors",
        description: "Replace wood moldings inside around door frame, sides and top",
        price: 38.50,
        id: 487
      },
      {
        name: "Floors",
        description: "Cove base around the bath floor, install 1/4 round vinyl molding in Bathroom",
        price: 40.70,
        id: 489
      },
      {
        name: "Cabinet",
        description: "Move Medicine Cabinet to a new location",
        price: 44.00,
        id: 490
      },
      {
        name: "Tubs",
        description: "Clean up tub walls tiles grout with muriatic acid and seal it",
        price: 44.00,
        id: 491
      },
      {
        name: "Accessorie",
        description: "Towel Satin Finish",
        price: 49.50,
        id: 492
      },
      {
        name: "Tubs",
        description: "Remove shower soap dish, install new one ($10.64 + tax + 10% + $5.00)",
        price: 49.50,
        id: 493
      },
      {
        name: "Doors",
        description: "Panel door",
        price: 82.50,
        id: 494
      },
      {
        name: "Faucets",
        description: "Replace shower valves, plates and handles, replace shower head, pipe and plate",
        price: 82.50,
        id: 495
      },
      {
        name: "Cabinet",
        description: "New Medicine cabinet Framed (existing hole)",
        price: 84.70,
        id: 496
      },
      {
        name: "Accessorie",
        description: "Replace shower head pipe and plate, shower handle and plate, spout, all parts are stained",
        price: 88.00,
        id: 497
      },
      {
        name: "Electric",
        description: "New GFCI (wiring)",
        price: 88.00,
        id: 498
      },
      {
        name: "Lights	New",
        description: "installation on 3 in 1 combo electric line",
        price: 88.00,
        id: 499
      },
      {
        name: "Lights	New",
        description: "installation on 3 in 1 combo flex ducting pipe",
        price: 88.00,
        id: 500
      },
      {
        name: "Accessorie",
        description: "Paper Holder, Towel Bar and Ring",
        price: 99.00,
        id: 501
      },
      {
        name: "Tubs	Hotel",
        description: "with curtain and ring",
        price: 99.00,
        id: 502
      },
      {
        name: "Lights",
        description: "2 sconce light fixture",
        price: 104.50,
        id: 503
      },
      {
        name: "Cabinet",
        description: "New Medicine Cabinet Framed (make a new hole)",
        price: 106.70,
        id: 504
      },
      {
        name: "Shower",
        description: "tiles	Clean up Shower walls and floor tiles grout, apply new as needed and seal it",
        price: 110.00,
        id: 505
      },
      {
        name: "Lights",
        description: "3 sconce light fixture",
        price: 126.50,
        id: 506
      },
      {
        name: "Mirrors",
        description: "60' x 36' Wall mirror",
        price: 132.00,
        id: 507
      },
      {
        name: "Floors",
        description: "New water proof flooring (Normal Size $150.00 to Big Size $175.00)",
        price: 165.00,
        id: 508
      },
      {
        name: "Faucets",
        description: "Replace shower valve single handle",
        price: 220.00,
        id: 509
      },
      {
        name: "Lights",
        description: "3 in 1 combo including flexible duct (Remove old exhaust fan and connect on existing ducting)",
        price: 247.50,
        id: 510
      },
      {
        name: "Counter",
        description: "tops	Remove tiles and install Granite",
        price: 247.50,
        id: 511
      },
      {
        name: "Tubs",
        description: "Install new tub",
        price: 253.00,
        id: 512
      },
      {
        name: "Tubs",
        description: "New Tiles on walls around the Tubs or Jacuzzi up to the ceiling",
        price: 907.50,
        id: 513
      },
      {
        name: "Tubs",
        description: "New Tiles on walls around the Tubs or Jacuzzi up to the ceiling",
        price: 907.50,
        id: 514
      },
      {
        name: "Tiles",
        description: "Replace existing tiles on stand up shower including pan",
        price: 1512.50,
        id: 515
      },
      {
        name: "Tiles",
        description: "Floor to ceiling tiles including pan",
        price: 1980.00,
        id: 516
      }
    ],
    "hallwayBath": [{
        name: "Cabinets",
        description: "24'' Dark brown Vanity (price + 10% + $75 labor)",
        price: 0,
        id: 793
      },
      {
        name: "Cabinets",
        description: "24'' Dark brown Vanity (price + 10% + $75 labor)",
        price: 0,
        id: 794
      },
      {
        name: "Cabinets",
        description: "30'' Dark brown Vanity (price + 10% + $75 labor)",
        price: 0,
        id: 795
      },
      {
        name: "Cabinets",
        description: "30'' Dark brown Vanity (price + 10% + $75 labor)",
        price: 0,
        id: 796
      },
      {
        name: "Cabinets",
        description: "36'' Dark brown Vanity (price + 10% + $75 labor)",
        price: 0,
        id: 797
      },
      {
        name: "Cabinets",
        description: "36'' Dark brown Vanity (price + 10% + $75 labor)",
        price: 0,
        id: 798
      },
      {
        name: "Doors",
        description: "Door stopper 1/2 moon",
        price: 0,
        id: 799
      },
      {
        name: "Sink",
        description: "Overmounted Sink",
        price: 0,
        id: 800
      },
      {
        name: "Windows",
        description: "Replace broken window glass (Cost + 10% + $30.00)",
        price: 0,
        id: 801
      },
      {
        name: "Cabinets",
        description: "24'' Dark brown Vanity (price + 10% + $75 labor)",
        price: 0,
        id: 802
      },
      {
        name: "Cabinets",
        description: "30'' Dark brown Vanity (price + 10% + $75 labor)",
        price: 0,
        id: 803
      },
      {
        name: "Cabinets",
        description: "36'' Dark brown Vanity (price + 10% + $75 labor)",
        price: 0,
        id: 804
      },
      {
        name: "Doors",
        description: "Door stopper 1/2 moon",
        price: 0,
        id: 805
      },
      {
        name: "Lights",
        description: "New Installation on 2 in 1 combo Heater and exhaust (Cost + tax + 10% + $80 installation + $80 ducting)",
        price: 0,
        id: 806
      },
      {
        name: "Sinks",
        description: "Overmounted Sink",
        price: 0,
        id: 807
      },
      {
        name: "Windows20",
        description: "Replace broken window glass (Cost + 10% + $30.00)",
        price: 0,
        id: 808
      },
      {
        name: "Electric",
        description: "Ligth switch or outlet plate",
        price: 43498,
        id: 809
      },
      {
        name: "Lights",
        description: "Regular light bulbs",
        price: 43498,
        id: 810
      },
      {
        name: "Electric",
        description: "Ligth switch or outlet plate",
        price: 43498,
        id: 811
      },
      {
        name: "Lights",
        description: "Regular light bulbs",
        price: 43498,
        id: 812
      },
      {
        name: "Doors",
        description: "Catch clip remove and install new",
        price: 43559,
        id: 813
      },
      {
        name: "Doors",
        description: "Catch clip remove and install new",
        price: 43559,
        id: 814
      },
      {
        name: "Doors",
        description: "Door stopper solid stick",
        price: 24929,
        id: 815
      },
      {
        name: "Doors",
        description: "Door stopper solid stick",
        price: 24929,
        id: 816
      },
      {
        name: "Electric",
        description: "Ligth switch or outlet double plate",
        price: 43590,
        id: 817
      },
      {
        name: "Electric",
        description: "Adjust GFCI",
        price: 43590,
        id: 818
      },
      {
        name: "GFCI",
        description: "Adjust GFCI",
        price: 43590,
        id: 819
      },
      {
        name: "Mirrors",
        description: "Remove plastic framed mirror from door or wall",
        price: 43590,
        id: 820
      },
      {
        name: "Paper Holder",
        description: "Reinstall/Adjust",
        price: 43590,
        id: 821
      },
      {
        name: "Sinks",
        description: "Shot off valve Handle",
        price: 43590,
        id: 822
      },
      {
        name: "Toilet",
        description: "Remove existing caulking that is between toilet base and floor",
        price: 43590,
        id: 823
      },
      {
        name: "Electric",
        description: "Ligth switch or outlet double plate",
        price: 43590,
        id: 824
      },
      {
        name: "Electric",
        description: "Adjust GFCI",
        price: 43590,
        id: 825
      },
      {
        name: "Mirrors",
        description: "Remove plastic framed mirror from door or wall",
        price: 43590,
        id: 826
      },
      {
        name: "Sinks",
        description: "Shot off valve Handle",
        price: 43590,
        id: 827
      },
      {
        name: "Toilet",
        description: "Remove existing caulking that is between toilet base and floor",
        price: 43590,
        id: 828
      },
      {
        name: "Accessories",
        description: "Reinstall Paper Holder, Towel Bar and Ring",
        price: 28611,
        id: 829
      },
      {
        name: "Accessories",
        description: "Towel ring Reinstall/Adjust",
        price: 28611,
        id: 830
      },
      {
        name: "Accessories",
        description: "Reinstall Paper Holder, Towel Bar and Ring",
        price: 28611,
        id: 831
      },
      {
        name: "Accessories",
        description: "Reinstall/Adjust Paper Holder",
        price: 28611,
        id: 832
      },
      {
        name: "Accessories",
        description: "Towel ring Reinstall/Adjust",
        price: 28611,
        id: 833
      },
      {
        name: "Doors",
        description: "Replace wood molding inside around door frame, top molding only",
        price: 43622,
        id: 834
      },
      {
        name: "Electric",
        description: "Regular outlet",
        price: 43622,
        id: 835
      },
      {
        name: "Doors",
        description: "Replace wood molding inside around door frame, top molding only",
        price: 43622,
        id: 836
      },
      {
        name: "Electric",
        description: "Regular outlet",
        price: 43622,
        id: 837
      },
      {
        name: "Cabinets",
        description: "Cabinet doors and drawers Individual Knob/Handles",
        price: 43653,
        id: 838
      },
      {
        name: "Cabinets",
        description: "Cabinet doors and drawers Individual Knob/Handles",
        price: 43653,
        id: 839
      },
      {
        name: "Electric",
        description: "Regular Light switch",
        price: 8.25,
        id: 840
      },
      {
        name: "Electric",
        description: "Regular Light switch",
        price: 8.25,
        id: 841
      },
      {
        name: "Drawer",
        description: "Adjust cabinet drawer",
        price: 8.8,
        id: 842
      },
      {
        name: "Drawer",
        description: "Adjust cabinet drawer",
        price: 8.8,
        id: 843
      },
      {
        name: "Electric",
        description: "Decoration outlets",
        price: 9.9,
        id: 844
      },
      {
        name: "Electric",
        description: "Decoration switch",
        price: 9.9,
        id: 845
      },
      {
        name: "Electric",
        description: "Decoration outlets",
        price: 9.9,
        id: 846
      },
      {
        name: "Electric",
        description: "Decoration switch",
        price: 9.9,
        id: 847
      },
      {
        name: "Lights",
        description: "Decoration switch",
        price: 9.9,
        id: 848
      },
      {
        name: "Toilet",
        description: "Toilet base screw caps set of 2",
        price: 11,
        id: 849
      },
      {
        name: "Accessories",
        description: "Towel bar Reinstall/Adjust",
        price: 11,
        id: 850
      },
      {
        name: "Cabinets",
        description: "Seal gaps inside the wall cabinet",
        price: 11,
        id: 851
      },
      {
        name: "Doors",
        description: "Adjust cabinet door",
        price: 11,
        id: 852
      },
      {
        name: "Paper Holder",
        description: "Regular",
        price: 11,
        id: 853
      },
      {
        name: "Accessories",
        description: "Regular Paper Holder",
        price: 11,
        id: 854
      },
      {
        name: "Accessories",
        description: "Towel bar Reinstall/Adjust",
        price: 11,
        id: 855
      },
      {
        name: "Cabinets",
        description: "Seal gaps inside the wall cabinet",
        price: 11,
        id: 856
      },
      {
        name: "Doors",
        description: "Adjust cabinet door",
        price: 11,
        id: 857
      },
      {
        name: "Toilet",
        description: "Toilet base screw caps set of 2",
        price: 11,
        id: 858
      },
      {
        name: "Toilet",
        description: "Water supply line x 1",
        price: 12.1,
        id: 859
      },
      {
        name: "Toilet",
        description: "Water supply line x 1",
        price: 12.1,
        id: 860
      },
      {
        name: "Faucet",
        description: "Faucet water supply line x 1",
        price: 13.2,
        id: 861
      },
      {
        name: "Faucets",
        description: "Faucet water supply line x 1",
        price: 13.2,
        id: 862
      },
      {
        name: "Tubs",
        description: "Install missing shower soap dish, install new one ($10.64 + tax + 10%)",
        price: 14.3,
        id: 863
      },
      {
        name: "Tubs",
        description: "Replace caulking around bath Tubs",
        price: 14.3,
        id: 864
      },
      {
        name: "Tubs",
        description: "Install missing shower soap dish, install new one ($10.64 + tax + 10%)",
        price: 14.3,
        id: 865
      },
      {
        name: "Doors",
        description: "Replace wood molding inside around door frame, side molding only",
        price: 16.5,
        id: 866
      },
      {
        name: "Electric",
        description: "Remove wall light fixture and install a plate",
        price: 16.5,
        id: 867
      },
      {
        name: "Doors",
        description: "Replace wood molding inside around door frame, side molding only",
        price: 16.5,
        id: 868
      },
      {
        name: "Electric",
        description: "Remove wall light fixture and install a plate",
        price: 16.5,
        id: 869
      },
      {
        name: "Cabinets",
        description: "New satin finish hinges pair, take off cabinet doors & install after painting of cabinets & doors",
        price: 17.88,
        id: 870
      },
      {
        name: "Cabinets",
        description: "New satin finish hinges pair, take off cabinet doors & install after painting of cabinets & doors",
        price: 17.88,
        id: 871
      },
      {
        name: "Tubs",
        description: "Tubs drain screen, replacement and/or installation of new screen w/screw ($11.79 cost)",
        price: 11.79,
        id: 872
      },
      {
        name: "Doors",
        description: "Door knob",
        price: 20.9,
        id: 873
      },
      {
        name: "Tubs",
        description: "Tubs drain screen, replacement and/or installation of new screen w/screw ($11.79 cost)",
        price: 43728,
        id: 874
      },
      {
        name: "Accessories",
        description: "Towel Ring",
        price: 22,
        id: 875
      },
      {
        name: "Drawers",
        description: "Guide",
        price: 22,
        id: 876
      },
      {
        name: "Accessories",
        description: "Replace shower curtain, install new keep it hanging on its package",
        price: 22,
        id: 877
      },
      {
        name: "Accessories",
        description: "Towel Ring",
        price: 22,
        id: 878
      },
      {
        name: "Drawers",
        description: "Guide",
        price: 22,
        id: 879
      },
      {
        name: "Shower",
        description: "Replace shower curtain, keep new one on its bag",
        price: 22,
        id: 880
      },
      {
        name: "Tubs",
        description: "New Curtain",
        price: 22,
        id: 881
      },
      {
        name: "Cabinets",
        description: "Patch medicine cabinet hole",
        price: 27.5,
        id: 882
      },
      {
        name: "Doors",
        description: "Replacer portion of broken door frame up to 6''",
        price: 27.5,
        id: 883
      },
      {
        name: "Electric",
        description: "Install electric box for light switch, outlet or alarm boxes inside the wall, per box",
        price: 27.5,
        id: 884
      },
      {
        name: "Toilet",
        description: "Replace wax ring",
        price: 27.5,
        id: 885
      },
      {
        name: "Cabinets",
        description: "Patch medicine cabinet hole",
        price: 27.5,
        id: 886
      },
      {
        name: "Doors",
        description: "Replace portion of broken door frame up to 6''",
        price: 27.5,
        id: 887
      },
      {
        name: "Electric",
        description: "Install electric box for light switch, outlet or alarm boxes inside the wall, per box",
        price: 27.5,
        id: 888
      },
      {
        name: "Toilet",
        description: "Replace wax ring",
        price: 27.5,
        id: 889
      },
      {
        name: "Toilet",
        description: "Replace toilet seat",
        price: 28.6,
        id: 890
      },
      {
        name: "Toilet",
        description: "Replace toilet seat",
        price: 28.6,
        id: 891
      },
      {
        name: "Tubs",
        description: "Shower head 90 degrees pipe to be install with new shower faucet (21.58 cost)",
        price: 31.9,
        id: 892
      },
      {
        name: "Tubs",
        description: "Shower head 90 degrees pipe to be install with new shower faucet (21.58 cost)",
        price: 31.9,
        id: 893
      },
      {
        name: "Accessories",
        description: "Towel bar Regular",
        price: 33,
        id: 894
      },
      {
        name: "Doors",
        description: "New hinges pair rounded or square finished cut",
        price: 33,
        id: 895
      },
      {
        name: "Doors",
        description: "Cabinet door Cut / Trim",
        price: 33,
        id: 896
      },
      {
        name: "Sinks",
        description: "Replace angle stop aka Shot off valve",
        price: 27.5,
        id: 897
      },
      {
        name: "Toilet",
        description: "Replace angle stop aka Shot off valve",
        price: 27.5,
        id: 898
      },
      {
        name: "Tubs",
        description: "Remove shower doors and frames and trash them",
        price: 33,
        id: 899
      },
      {
        name: "Window",
        description: "Clear window glass, install frost type film",
        price: 33,
        id: 900
      },
      {
        name: "Windows",
        description: "New window screen",
        price: 33,
        id: 901
      },
      {
        name: "Accessories",
        description: "Towel bar Regular",
        price: 33,
        id: 902
      },
      {
        name: "Doors",
        description: "New hinges pair rounded or square finished cut",
        price: 33,
        id: 903
      },
      {
        name: "Doors",
        description: "Cabinet door Cut / Trim",
        price: 33,
        id: 904
      },
      {
        name: "Sinks",
        description: "Replace angle stop aka Shot off valve",
        price: 43612,
        id: 905
      },
      {
        name: "Toilet",
        description: "Replace angle stop aka Shot off valve",
        price: 43612,
        id: 906
      },
      {
        name: "Tubs",
        description: "Remove shower doors and frames and trash them",
        price: 33,
        id: 907
      },
      {
        name: "Window",
        description: "Clear window glass, install frost type film",
        price: 33,
        id: 908
      },
      {
        name: "Windows",
        description: "New window screen",
        price: 33,
        id: 909
      },
      {
        name: "Tubs",
        description: "Shower head ''S'' shape pipe ($18.74 + tax + 10% + $10)",
        price: 35.2,
        id: 910
      },
      {
        name: "Tubs",
        description: "Shower head ''S'' shape pipe ($18.74 + tax + 10% + $10)",
        price: 35.2,
        id: 911
      },
      {
        name: "Tubs",
        description: "Shower head 90 degrees pipe only (21.58 cost)",
        price: 36.3,
        id: 912
      },
      {
        name: "Tubs",
        description: "Shower head 90 degrees pipe only (21.58 cost)",
        price: 36.3,
        id: 913
      },
      {
        name: "Doors",
        description: "Replace wood moldings inside around door frame, sides and top",
        price: 38.5,
        id: 914
      },
      {
        name: "Doors",
        description: "Replace wood moldings inside around door frame, sides and top",
        price: 38.5,
        id: 915
      },
      {
        name: "Floors",
        description: "Cove base around the bath floor, install 1/4'' round vinyl molding in Bathroom",
        price: 40.7,
        id: 916
      },
      {
        name: "Floors",
        description: "Cove base around the bath floor, install 1/4'' round vinyl molding in Bathroom",
        price: 40.7,
        id: 917
      },
      {
        name: "Cabinets",
        description: "Move Medicine Cabinet to a new location",
        price: 44,
        id: 918
      },
      {
        name: "Cabinets",
        description: "Move Medicine Cabinet to a new location",
        price: 44,
        id: 919
      },
      {
        name: "Tubs",
        description: "Clean up tub walls tiles grout with muriatic acid and seal it",
        price: 44,
        id: 920
      },
      {
        name: "Accessories",
        description: "Towel Satin Finish",
        price: 49.5,
        id: 921
      },
      {
        name: "Tubs",
        description: "Remove shower soap dish, install new one ($10.64 + tax + 10% + $5.00)",
        price: 49.5,
        id: 922
      },
      {
        name: "Accessories",
        description: "Towel Satin Finish",
        price: 49.5,
        id: 923
      },
      {
        name: "Tubs",
        description: "Remove shower soap dish, install new one ($10.64 + tax + 10% + $5.00)",
        price: 49.5,
        id: 924
      },
      {
        name: "Counter tops",
        description: "Clean up counter top tiles grout, apply new as needed and seal it",
        price: 51.7,
        id: 925
      },
      {
        name: "GFCI",
        description: "Relocate GFCI",
        price: 55,
        id: 926
      },
      {
        name: "Cabinets",
        description: "Replace wood inside the cabinet under the sink",
        price: 55,
        id: 927
      },
      {
        name: "Cabinets",
        description: "Replace wood inside the cabinet under the sink",
        price: 55,
        id: 928
      },
      {
        name: "Toilet",
        description: "Replace toilet flange and wax ring",
        price: 55,
        id: 929
      },
      {
        name: "Cabinets",
        description: "Replace wood inside the cabinet under the sink",
        price: 55,
        id: 930
      },
      {
        name: "Cabinets",
        description: "Replace wood inside the cabinet under the sink",
        price: 55,
        id: 931
      },
      {
        name: "GFCI",
        description: "Relocate GFCI",
        price: 55,
        id: 932
      },
      {
        name: "Toilet",
        description: "Replace toilet flange and wax ring",
        price: 55,
        id: 933
      },
      {
        name: "GFCI",
        description: "Replace electric outlet and install GFCI",
        price: 55,
        id: 934
      },
      {
        name: "Faucet",
        description: "Sink Standard Faucet with Popup",
        price: 66,
        id: 935
      },
      {
        name: "Faucets",
        description: "Sink Standard Faucet with Popup",
        price: 66,
        id: 936
      },
      {
        name: "Tubs",
        description: "Tiles grout around the Tubs to be clean, apply new as needed and seal it",
        price: 77,
        id: 937
      },
      {
        name: "Tubs",
        description: "Tiles grout around the Tubs to be clean, apply new as needed and seal it",
        price: 77,
        id: 938
      },
      {
        name: "Doors",
        description: "Panel Door",
        price: 82.5,
        id: 939
      },
      {
        name: "Doors",
        description: "Panel door",
        price: 82.5,
        id: 940
      },
      {
        name: "Faucets",
        description: "Replace shower valves, plates and handles, replace shower head, pipe and plate",
        price: 82.5,
        id: 941
      },
      {
        name: "Cabinets",
        description: "New Medicine cabinet Framed (existing hole)",
        price: 84.7,
        id: 942
      },
      {
        name: "Cabinets",
        description: "New Medicine cabinet Framed (existing hole)",
        price: 84.7,
        id: 943
      },
      {
        name: "Accessories",
        description: "Replace shower head pipe and plate, shower handle and plate, spout, all parts are stained",
        price: 88,
        id: 944
      },
      {
        name: "Electric",
        description: "New GFCI (wiring)",
        price: 88,
        id: 945
      },
      {
        name: "Lights",
        description: "New installation on 3 in 1 combo electric line",
        price: 88,
        id: 946
      },
      {
        name: "Lights",
        description: "New installation on 3 in 1 combo flex ducting pipe",
        price: 88,
        id: 947
      },
      {
        name: "Accessories",
        description: "Paper Holder, Towel Bar and Ring",
        price: 99,
        id: 948
      },
      {
        name: "Accessories",
        description: "Paper Holder, Towel Bar and Ring",
        price: 99,
        id: 949
      },
      {
        name: "Tubs",
        description: "Hotel with curtain and ring",
        price: 99,
        id: 950
      },
      {
        name: "Lights",
        description: "2 sconce light Fixture",
        price: 104.5,
        id: 951
      },
      {
        name: "Lights",
        description: "2 sconce light fixture",
        price: 104.5,
        id: 952
      },
      {
        name: "Cabinets",
        description: "New Medicine Cabinet Framed (make a new hole)",
        price: 106.7,
        id: 953
      },
      {
        name: "Cabinets",
        description: "New Medicine Cabinet Framed (make a new hole)",
        price: 106.7,
        id: 954
      },
      {
        name: "Shower tiles",
        description: "Clean up Shower walls and floor tiles grout, apply new as needed and seal it",
        price: 110,
        id: 955
      },
      {
        name: "Lights",
        description: "3 sconce light fixture",
        price: 126.5,
        id: 956
      },
      {
        name: "Mirrors",
        description: "60' x 36'' Wall mirror",
        price: 132,
        id: 957
      },
      {
        name: "Mirrors",
        description: "60' x 36'' Wall mirror",
        price: 132,
        id: 958
      },
      {
        name: "Floors",
        description: "New water proof flooring (Normal Size $150.00 to Big Size $175.00)",
        price: 165,
        id: 959
      },
      {
        name: "Floors",
        description: "New water proof flooring (Normal Size $150.00 to Big Size $175.00)",
        price: 165,
        id: 960
      },
      {
        name: "Faucet",
        description: "Replace shower valve single handle",
        price: 220,
        id: 961
      },
      {
        name: "Faucets",
        description: "Replace shower valve single handle",
        price: 220,
        id: 962
      },
      {
        name: "Tubs",
        description: "Install new tub",
        price: 236.5,
        id: 963
      },
      {
        name: "Lights",
        description: "3 in 1 combo",
        price: 247.5,
        id: 964
      },
      {
        name: "Lights",
        description: "3 in 1 combo including flexible duct (Remove old exhaust fan and connect on existing ducting)",
        price: 247.5,
        id: 965
      },
      {
        name: "Counter tops",
        description: "Remove tiles and install Granite ''Snow Flake'' only black and white",
        price: 247.5,
        id: 966
      },
      {
        name: "Jacuzzi",
        description: "Run a new line from Jacuzzi circuit breaker board w/ new breaker + GFCI at Jacuzzi",
        price: 275,
        id: 967
      },
      {
        name: "Jacuzzi",
        description: "Install new jacuzzi",
        price: 302.5,
        id: 968
      },
      {
        name: "Tubs",
        description: "Install a Jacuzzi, labor only",
        price: 330,
        id: 969
      },
      {
        name: "Tubs",
        description: "New Tiles on walls around the Tubs or Jacuzzi up to the ceiling",
        price: 907.5,
        id: 970
      },
      {
        name: "Tubs",
        description: "New Tiles on walls around the Tubs or Jacuzzi up to the ceiling",
        price: 907.5,
        id: 971
      },
      {
        name: "Tubs",
        description: "New Tiles on walls around the Tubs or Jacuzzi up to the ceiling",
        price: 907.5,
        id: 972
      },
      {
        name: "Tiles",
        description: "Floor to ceiling tiles including pan temoving old tub",
        price: 1980.00,
        id: 973
      },
      {
        name: "Tiles",
        description: "Floor to ceiling tiles",
        price: 1980.00,
        id: 974
      },
      {
        name: "Door",
        description: "Adjust door hinge",
        price: 0,
        id: 975
      },
      {
        name: "Cabinet",
        description: "Catch clip remove and install new",
        price: 0,
        id: 976
      },
      {
        name: "Light",
        description: "4' Fluorecent light bulb",
        price: 0,
        id: 977
      },
      {
        name: "Door",
        description: "Adjust door hinge",
        price: 0,
        id: 978
      },
    ],
    "livingRoom": [{
      name: "Door",
      description: "Adjust door  hinge",
      price: 0,
      id: 30
    }, {
      name: "Door",
      description: "Replace front door",
      price: 0,
      id: 31
    }, {
      name: "Door",
      description: "Repair front door",
      price: 0,
      id: 32,
    }, {
      name: "Ceiling",
      description: "Ceiling fan light glass cover (Parts + 10% + ,3.) (Parts + 10% + ,3.00)",
      price: 0,
      id: 33
    }, {
      name: "Door",
      description: "Door stopper 1/2 moon",
      price: 0,
      id: 34
    }, {
      name: "Window",
      description: "Replace broken window glass (Cost + 10% + ,30.00)",
      price: 0,
      id: 35
    }, {
      name: "Electric",
      description: "Decora plate",
      price: 2.20,
      id: 36
    }, {
      name: "Electric",
      description: "Ligth switch or outlet plate",
      price: 2.20,
      id: 37
    }, {
      name: "Light",
      description: "Regular light bulbs",
      price: 2.20,
      id: 38
    }, {
      name: "Closet",
      description: "Replace regular light bulb",
      price: 2.48,
      id: 39
    }, {
      name: "Cabinet",
      description: "Catch clip remove and install new",
      price: 4.40,
      id: 40
    }, {
      name: "Door",
      description: "Door stopper solid stick",
      price: 4.68,
      id: 41
    }, {
      name: "Blind",
      description: "Remove blinds and brackets",
      price: 5.50,
      id: 42
    }, {
      name: "Electric",
      description: "Ligth switch or outlet double plate",
      price: 5.50,
      id: 43
    }, {
      name: "Lock",
      description: "Remove chain from main entrance door and frame",
      price: 5.50,
      id: 44
    }, {
      name: "Mirror",
      description: "Remove plastic framed mirror from door or wall",
      price: 5.50,
      id: 45
    }, {
      name: "Smoke Alarm",
      description: "Reinstall/Adjust",
      price: 5.50,
      id: 46
    }, {
      name: "Smoke Alarm",
      description: "Smoke alarm Battery",
      price: 5.50,
      id: 47
    }, {
      name: "Vents",
      description: "Adjust vent screen",
      price: 5.50,
      id: 48
    }, {
      name: "Window",
      description: "Remove window blinds and brakets",
      price: 5.50,
      id: 49
    }, {
      name: "Door",
      description: "Replace wood molding inside around door frame, top molding only",
      price: 6.60,
      id: 50
    }, {
      name: "Electric",
      description: "Regular outlet",
      price: 6.60,
      id: 51
    }, {
      name: "Cabinet",
      description: "Cabinet doors and drawers Individual Knob / Handles ",
      price: 7.70,
      id: 52
    }, {
      name: "Electric",
      description: "Regular Light switch",
      price: 8.25,
      id: 53
    }, {
      name: "Electric",
      description: "Decora outlets",
      price: 9.90,
      id: 54
    }, {
      name: "Electric",
      description: "Decora switch",
      price: 9.90,
      id: 55
    }, {
      name: "Cabinet",
      description: "Seal gaps inside the wall cabinet",
      price: 11.00,
      id: 56
    }, {
      name: "Light",
      description: "4' Fluorecent light bulb",
      price: 16.50,
      id: 57
    }, {
      name: "Wire",
      description: "Remove extra cable wires (Cable and phone wires)",
      price: 11.00,
      id: 58
    }, {
      name: "A/C",
      description: "Replace Central Air Conditioner Filter",
      price: 16.50,
      id: 59
    }, {
      name: "Door",
      description: "Replace wood molding inside around door frame, side molding only",
      price: 16.50,
      id: 60
    }, {
      name: "Window",
      description: "Adjust window loose frame",
      price: 16.50,
      id: 61
    }, {
      name: "Window",
      description: "Install window lock",
      price: 16.50,
      id: 62
    }, {
      name: "Cabinet",
      description: "New satin finish hinges pair, take off cabinet doors & install after painting of cabinets & doors",
      price: 17.88,
      id: 63
    }, {
      name: "Door",
      description: "Door knob",
      price: 20.90,
      id: 64
    }, {
      name: "Drawer",
      description: "Guide",
      price: 22.00,
      id: 65
    }, {
      name: "A/C",
      description: "Pig Tail on air conditioner / Reduce air conditioner wire",
      price: 27.50,
      id: 66
    }, {
      name: "A/C",
      description: "Reduce electric cord on Air Conditioner",
      price: 27.50,
      id: 67
    }, {
      name: "Ceiling",
      description: "Remove ceiling fan extension pipe",
      price: 27.50,
      id: 68
    }, {
      name: "Door",
      description: "Adjust sliding glass door",
      price: 27.50,
      id: 69
    }, {
      name: "Door",
      description: "Replacer portion of broken door frame up to 6",
      price: 27.50,
      id: 70
    }, {
      name: "Electric",
      description: "Remove exterior electric box & recess the box inside the wall",
      price: 27.50,
      id: 71
    }, {
      name: "Smoke",
      description: "Alarm	Smoke Alarm (existing wiring)",
      price: 27.50,
      id: 72
    }, {
      name: "Wall heater",
      description: "Clean up gas heater, remove cover, blow and vacumm, wipe clean of all debris and test upon completion",
      price: 30.80,
      id: 73
    }, {
      name: "Door",
      description: "New hinges pair rounded or square finished cut",
      price: 33.00,
      id: 74
    }, {
      name: "Door",
      description: "Cabinet door Cut / Trim",
      price: 33.00,
      id: 75
    }, {
      name: "Window",
      description: "New window screen",
      price: 33.00,
      id: 76
    }, {
      name: "Door",
      description: "Replace Threshold",
      price: 38.50,
      id: 77
    }, {
      name: "Door",
      description: "Replace wood moldings inside around door frame, sides and top",
      price: 38.50,
      id: 78
    }, {
      name: "Door",
      description: "Install or replace weather strip",
      price: 44.0,
      id: 79
    }, {
      name: "Light",
      description: "Dimmer",
      price: 39.60,
      id: 80
    }, {
      name: "Door",
      description: "New front door locks",
      price: 44.00,
      id: 81
    }, {
      name: "Light",
      description: "'6' LED Light fixture on existing can",
      price: 44.00,
      id: 82
    }, {
      name: "Switch",
      description: "Double Dimmer Switch",
      price: 55.00,
      id: 83
    }, {
      name: "A/C",
      description: "Install an electric outlet next to air conditioner",
      price: 55.00,
      id: 84
    }, {
      name: "Door",
      description: "New front door locks Kwikset longer latch",
      price: 55.00,
      id: 85
    }, {
      name: "Light",
      description: "New Electric Box",
      price: 55.00,
      id: 86
    }, {
      name: "Wall heater",
      description: "Digital Thermostat",
      price: 55.00,
      id: 87
    }, {
      name: "Smoke Alarm",
      description: "Smoke Alarm and CO2 Combo (existing wiring)",
      price: 71.50,
      id: 88
    }, {
      name: "Smoke Alarm",
      description: "Smoke Alarm (new wiring)",
      price: 72.60,
      id: 89
    }, {
      name: "Light",
      description: "Install Track light x 3 bulbs",
      price: 1.75,
      id: 90
    }, {
      name: "Light",
      description: "'6' LED Light (connection, can)",
      price: 104.50,
      id: 91
    }, {
      name: "Smoke",
      description: "Alarm	Smoke Alarm and CO2 Combo (new wiring including the box)",
      price: 124.30,
      id: 92
    }, {
      name: "A/C",
      description: "Install New Air Conditioner",
      price: 159.50,
      id: 93
    }, {
      name: "Wall heater",
      description: "Wall heater cover replace including 4 mounting brackets",
      price: 247.50,
      id: 94
    }, {
      name: "Ceiling",
      description: "Brush nickle Ceiling fan without extension pole (New installation: Electrical and bracket)",
      price: 275.00,
      id: 95
    }, {
      name: "Door",
      description: "Remove and replace outdor sliding door, install vinyl double pane (Cost+10%+,200.00)",
      price: 302.50,
      id: 96
    }, {
      name: "Ceiling",
      description: "Smooth ceiling in living room",
      price: 440.00,
      id: 97
    }, {
      name: "Wall heater",
      description: "Wall gas heater (25,000 btus) with digital thermostat",
      price: 770.00,
      id: 98
    }],
    "kitchen": [{
        name: "Door",
        description: "Adjust door  hinge",
        price: 0,
        id: 99
      }, {
        name: "Door",
        description: "Adjust door hinge",
        price: 0,
        id: 100
      },
      {
        name: "Light",
        description: "Dome light modern look Progress lighting Model # P350045-009 (Cost + 10%)",
        price: 0,
        id: 101
      },
      {
        name: "Light",
        description: "Dome light Antique look Green Matters Model # HD-3313 (Cost + 10% + )",
        price: 0,
        id: 102
      },
      {
        name: "Cabinet",
        description: "Caulking in gaps outside and inside Kitchen Cabinet x 1 (Parts + 10% + $5.00)",
        price: 0,
        id: 103
      },
      {
        name: "Cabinet",
        description: "Caulking in gaps outside and inside Kitchen all Cabinets (Parts + 10% + $25.00)",
        price: 0,
        id: 104
      },
      {
        name: "Cabinet",
        description: "Seal gaps around microwave, install wood moldings as needed (Parts+10%+$25.00)",
        price: 0,
        id: 105
      },
      {
        name: "Door",
        description: "Door stopper 1/2 moon",
        price: 0,
        id: 106
      },
      {
        name: "Door",
        description: "New back door",
        price: 0,
        id: 107
      },
      {
        name: "Door",
        description: "New back door",
        price: 0,
        id: 108
      },
      {
        name: "Light",
        description: "32 Brush Nickel / White Low Profile LED Ceiling Flushmount",
        price: 0,
        id: 109
      },
      {
        name: "Stove",
        description: "Stove burner (Cost+10%+$10.00)",
        price: 0,
        id: 110
      },
      {
        name: "Stove",
        description: "Stove grill (Cost+10%+$10.00)",
        price: 0,
        id: 111
      },
      {
        name: "Window",
        description: "Replace broken window glass (Cost + 10% + $30.00)",
        price: 0,
        id: 112
      },
      {
        name: "Cabinet",
        description: "Re-install separated cabinet door",
        price: 1.10,
        id: 113
      },
      {
        name: "Electric",
        description: "Ligth switch or outlet plate",
        price: 2.20,
        id: 114
      },
      {
        name: "Light",
        description: "Regular light bulbs",
        price: 2.20,
        id: 115
      },
      {
        name: "Cabinet",
        description: "Catch clip remove and install new",
        price: 4.40,
        id: 116
      },
      {
        name: "Door",
        description: "Cabinets doors Catch clip remove and install new",
        price: 4.40,
        id: 117
      },
      {
        name: "Door",
        description: "Door stopper solid stick",
        price: 4.68,
        id: 118
      },
      {
        name: "Blind",
        description: "Remove window blinds and brakets",
        price: 5.50,
        id: 119
      },
      {
        name: "Electric",
        description: "Ligth switch or outlet double plate",
        price: 5.50,
        id: 120
      },
      {
        name: "Sink",
        description: "Shot off valve Handle",
        price: 5.50,
        id: 121
      },
      {
        name: "Window",
        description: "Adjust window screen",
        price: 5.50,
        id: 122
      },
      {
        name: "Door",
        description: "Replace wood molding inside around door frame, top molding only",
        price: 6.60,
        id: 123
      },
      {
        name: "Electric",
        description: "Regular outlet",
        price: 6.60,
        id: 124
      },
      {
        name: "Cabinet",
        description: "Cabinet doors and drawers Individual Knob/Handles",
        price: 7.70,
        id: 125
      },
      {
        name: "Electric",
        description: "Regular Light switch",
        price: 8.25,
        id: 126
      },
      {
        name: "Drawer",
        description: "Adjust cabinet drawer",
        price: 8.80,
        id: 127
      },
      {
        name: "Electric",
        description: "Decora outlets",
        price: 9.90,
        id: 128
      },
      {
        name: "Electric",
        description: "Decora switch",
        price: 9.90,
        id: 129
      },
      {
        name: "Light",
        description: "4' Fluorecent light bulb",
        price: 13.20,
        id: 130
      },
      {
        name: "Door",
        description: "Adjust cabinet door",
        price: 11.00,
        id: 131
      },
      {
        name: "Door",
        description: "Seal pocket door",
        price: 12.10,
        id: 132
      },
      {
        name: "Faucet",
        description: "Faucet water supply line x 1",
        price: 13.20,
        id: 133
      },
      {
        name: "Door",
        description: "Replace wood molding inside around door frame, side molding only",
        price: 16.50,
        id: 134
      },
      {
        name: "Stove",
        description: "Install missing oven door handle",
        price: 16.50,
        id: 135
      },
      {
        name: "Cabinet",
        description: "New satin finish hinges pair, take off cabinet doors & install after painting of cabinets & doors",
        price: 17.88,
        id: 136
      },
      {
        name: "Cabinet",
        description: "Seal Cutting board opening from inside",
        price: 22.00,
        id: 137
      },
      {
        name: "Door",
        description: "Pocket door handle",
        price: 22.00,
        id: 138
      },
      {
        name: "Drawer",
        description: "Guide",
        price: 22.00,
        id: 139
      },
      {
        name: "Faucet",
        description: "Water supply line x 2",
        price: 22.00,
        id: 140
      },
      {
        name: "Sink",
        description: "Angle stop",
        price: 27.50,
        id: 141
      },
      {
        name: "Cabinet",
        description: "Iron board cabinet remove board and install shelves",
        price: 27.50,
        id: 142
      },
      {
        name: "Cabinet",
        description: "Remove paper from shelves inside cabinets",
        price: 27.50,
        id: 143
      },
      {
        name: "Counter top",
        description: "Replace cracked tile on counter top next to sink",
        price: 27.50,
        id: 144
      },
      {
        name: "Counter top",
        description: "Caulking Around Sink, Faucet and Counter",
        price: 27.50,
        id: 145
      },
      {
        name: "Door",
        description: "Repair pocket door, fix or repair rollers",
        price: 27.50,
        id: 146
      },
      {
        name: "Door",
        description: "Replacer portion of broken door frame up to 6",
        price: 27.50,
        id: 147
      },
      {
        name: "Electric",
        description: "Install electric box for light switch, outlet or alarm boxes inside the wall, per box",
        price: 27.50,
        id: 148
      },
      {
        name: "Cabinet",
        description: "Base Molding for Top of Cabinet",
        price: 33.00,
        id: 149
      },
      {
        name: "Counter top",
        description: "Seal gaps between granite counter tops and backsplash",
        price: 33.00,
        id: 150
      },
      {
        name: "Door",
        description: "New hinges pair rounded or square finished cut",
        price: 33.00,
        id: 151
      },
      {
        name: "Door",
        description: "Cabinet door Cut / Trim",
        price: 33.00,
        id: 152
      },
      {
        name: "Faucet",
        description: "Replace angle stop aka Shot off valve",
        price: 27.50,
        id: 153
      },
      {
        name: "Garbage",
        description: "Disposal	Repair/Unclog",
        price: 33.00,
        id: 154
      },
      {
        name: "Sink",
        description: "Replace angle stop aka Shot off valve",
        price: 27.50,
        id: 155
      },
      {
        name: "Sink",
        description: "Kitchen sink straigner x 1",
        price: 33.00,
        id: 156
      },
      {
        name: "Window",
        description: "New window screen",
        price: 33.00,
        id: 157
      },
      {
        name: "Dishwasher",
        description: "Angle stop",
        price: 35.20,
        id: 158
      },
      {
        name: "Door",
        description: "Replace wood moldings inside around door frame, sides and top",
        price: 38.50,
        id: 159
      },
      {
        name: "Appliance",
        description: "Dispose appliances ",
        price: 44.00,
        id: 160
      },
      {
        name: "Appliance",
        description: "Switch refrigerator door to open the other way",
        price: 44.00,
        id: 161
      },
      {
        name: "Door",
        description: "New back door locks",
        price: 44.00,
        id: 162
      },
      {
        name: "Door",
        description: "New back door locks",
        price: 44.00,
        id: 163
      },
      {
        name: "Floor",
        description: "Cove base around the bath floor, install 1/4 round vinyl molding in Kitchen",
        price: 44.00,
        id: 164
      },
      {
        name: "Light",
        description: "'6' LED Light fixture on existing can",
        price: 44.00,
        id: 165
      },
      {
        name: "Appliance",
        description: "Microwave replacement",
        price: 55.00,
        id: 166
      },
      {
        name: "Appliance",
        description: "Stove Installation Only",
        price: 55.00,
        id: 167
      },
      {
        name: "Cabinet",
        description: "Replace wood inside the cabinet under the sink",
        price: 55.00,
        id: 168
      },
      {
        name: "Cabinet",
        description: "Adjust all cabinet's doors and drawers to operate properly",
        price: 55.00,
        id: 169
      },
      {
        name: "Cabinet",
        description: "Base Cabinet and Side Panel Extension ",
        price: 55.00,
        id: 170
      },
      {
        name: "Counter top",
        description: "Clean up counter top tiles grout with muriatic acid and seal it",
        price: 55.00,
        id: 171
      },
      {
        name: "Door",
        description: "New back door locks Kwikset longer latch",
        price: 55.00,
        id: 172
      },
      {
        name: "Door",
        description: "Set (hinges, latch, removal, install, catch)",
        price: 55.00,
        id: 173
      },
      {
        name: "GFCI",
        description: "Relocate GFCI",
        price: 55.00,
        id: 174
      },
      {
        name: "GFCI",
        description: "Replace electric outlet and install GFCI",
        price: 55.00,
        id: 175
      },
      {
        name: "Appliance",
        description: "Microwave Exhaust Pipe/Vent Only",
        price: 60.50,
        id: 176
      },
      {
        name: "Appliance",
        description: "Stove Gas valve and flex ($35.00 parts + $25.00 labor)",
        price: 66.00,
        id: 177
      },
      {
        name: "Appliance",
        description: "Transfer appliances to a new location, spray exterior, inside and underneath turning unit on its back",
        price: 66.00,
        id: 178
      },
      {
        name: "Cabinets",
        description: "New cabinet labor to demo and install per cabinet",
        price: 71.50,
        id: 179
      },
      {
        name: "Appliance",
        description: "Microwave with Exhaust Pipe",
        price: 77.00,
        id: 180
      },
      {
        name: "Appliance",
        description: "Dishwasher replacement",
        price: 82.50,
        id: 181
      },
      {
        name: "Door",
        description: "Panel Door",
        price: 82.50,
        id: 182
      },
      {
        name: "Appliance",
        description: "Microwave Electrical Wiring, new outlet",
        price: 88.00,
        id: 183
      },
      {
        name: "Appliance",
        description: "Refrigerador new outlet",
        price: 88.00,
        id: 184
      },
      {
        name: "Appliance",
        description: "Stove Electrical Wiring, new outlet",
        price: 88.00,
        id: 185
      },
      {
        name: "Cabinets",
        description: "Only	New cabinet labor to demo and install per cabinet if work is only to do kitchen cabinets",
        price: 88.00,
        id: 186
      },
      {
        name: "Appliance",
        description: "Dishwasher angle stop",
        price: 35.20,
        id: 187
      },
      {
        name: "Appliance",
        description: "Dishwasher new installation on new cabinets",
        price: 155.10,
        id: 188
      },
      {
        name: "Garbage",
        description: "Disposal	InSink Serator 1/3 HP",
        price: 161.70,
        id: 189
      },
      {
        name: "Faucet",
        description: "Long Spout Faucet",
        price: 165.00,
        id: 190
      },
      {
        name: "Light",
        description: "4' Light fixture",
        price: 187.00,
        id: 191
      },
      {
        name: "Floor",
        description: "New water proof flooring (Normal size $200.00 to Big size $250.00)",
        price: 220.00,
        id: 192
      },
      {
        name: "Appliance",
        description: "Dishwasher new installation on old cabinets, including cut off, electric power, hook ups and materials",
        price: 253.00,
        id: 193
      },
      {
        name: "Counter",
        description: "Subway tiles 3 x 6 on walls behind the counter top",
        price: 330.00,
        id: 194
      },
      {
        name: "Sink",
        description: "Double Overmount, Stainless Steel 25''-33'' and Drain Kit",
        price: 330.00,
        id: 195
      },
      {
        name: "Counter top",
        description: "Remove counter top and install Granite 'Snow Flake' only black and white",
        price: 495.00,
        id: 196
      },
      {
        name: "Counter top",
        description: "Remove counter top and install Granite 'Snow Flake' only black and white",
        price: 605.00,
        id: 197
      },
      {
        name: "Floor",
        description: "Kitchen tile floor '4' x '12'",
        price: 660.00,
        id: 420
      },
      {
        name: "Cabinet (ON HOLD)",
        description: "Full Set of cabinets x 12",
        price: 35.00,
        id: 198
      },
      {
        name: "Cabinet",
        description: "Kitchen cabinets when doing make ready each (Labor $65 + materials + 10%)",
        price: 0,
        id: 199
      },
      {
        name: "Cabinet",
        description: "Kitchen cabinets when not doing make ready each (Labor $80 + materials + 10%)",
        price: 0,
        id: 200
      }
    ],
    "hallway": [{
        name: "Door",
        description: "Adjust door hinge",
        price: 0,
        id: 201
      },
      {
        name: "Door",
        description: "Door stopper 1/2 moon",
        price: 0,
        id: 202
      },
      {
        name: "Light",
        description: "Track lights x 3 bulbs (Cost + 9% + 10% + $25.00)",
        price: 0,
        id: 203
      },
      {
        name: "Windows",
        description: "Replace broken window glass (Cost + 10% + $30.00)",
        price: 0,
        id: 204
      },
      {
        name: "Closet",
        description: "Install rubbered stoppers on mirror doors",
        price: 1.10,
        id: 205
      },
      {
        name: "Electric",
        description: "Ligth switch or outlet plate",
        price: 2.20,
        id: 206
      },
      {
        name: "Light",
        description: "Regular light bulbs",
        price: 2.20,
        id: 207
      },
      {
        name: "Closet",
        description: "Replace regular light bulb",
        price: 2.48,
        id: 208
      },
      {
        name: "Light",
        description: "Special light bulb",
        price: 4.13,
        id: 209
      },
      {
        name: "Cabinet",
        description: "Catch clip remove and install new",
        price: 4.40,
        id: 210
      },
      {
        name: "Door",
        description: "Catch clip remove and install new",
        price: 4.40,
        id: 211
      },
      {
        name: "Door",
        description: "Door stopper solid stick",
        price: 4.68,
        id: 212
      },
      {
        name: "Electric",
        description: "Ligth switch or outlet double plate",
        price: 5.50,
        id: 213
      },
      {
        name: "Mirror",
        description: "Remove plastic framed mirror from door or wall",
        price: 5.50,
        id: 214
      },
      {
        name: "Smoke",
        description: "Alarm	Reinstall/Adjust",
        price: 5.50,
        id: 215
      },
      {
        name: "Smoke",
        description: "Alarm	Smoke alarm Battery",
        price: 5.50,
        id: 216
      },
      {
        name: "Door",
        description: "Replace wood molding inside around door frame, top molding only",
        price: 6.60,
        id: 217
      },
      {
        name: "Electric",
        description: "Regular outlet",
        price: 6.60,
        id: 218
      },
      {
        name: "Cabinet",
        description: "Cabinet doors and drawers Individual Knob/Handles",
        price: 7.70,
        id: 219
      },
      {
        name: "Electric",
        description: "Regular Light switch",
        price: 8.25,
        id: 220
      },
      {
        name: "Drawer",
        description: "Adjust cabinet drawer",
        price: 8.80,
        id: 221
      },
      {
        name: "Electric",
        description: "Decora outlets",
        price: 9.90,
        id: 222
      },
      {
        name: "Electric",
        description: "Decora switch",
        price: 9.90,
        id: 223
      },
      {
        name: "Light",
        description: "4' Fluorecent light bulb",
        price: 11.00,
        id: 224
      },
      {
        name: "Cabinet",
        description: "Seal gaps inside the wall cabinet",
        price: 11.00,
        id: 225
      },
      {
        name: "Closet",
        description: "Secure shelve inside closet",
        price: 11.00,
        id: 226
      },
      {
        name: "Door",
        description: "Adjust cabinet door",
        price: 11.00,
        id: 227
      },
      {
        name: "Heater",
        description: "Seal wall heater vent for heat to come out from one side of the heater",
        price: 11.00,
        id: 228
      },
      {
        name: "Door",
        description: "Seal pocket door",
        price: 12.10,
        id: 229
      },
      {
        name: "Closet",
        description: "Closet light fixture without chain, socket type, replace existing one",
        price: 16.50,
        id: 230
      },
      {
        name: "Closet",
        description: "Closet light fixture with chain, socket type, replace existing one",
        price: 16.50,
        id: 231
      },
      {
        name: "Door",
        description: "Replace wood molding inside around door frame, side molding only",
        price: 16.50,
        id: 232
      },
      {
        name: "Cabinet",
        description: "New satin finish hinges pair, take off cabinet doors & install after painting of cabinets & doors",
        price: 17.88,
        id: 233
      },
      {
        name: "Hinge",
        description: "New satin finish hinges pair, take off cabinet doors & install after painting of cabinets & doors",
        price: 17.88,
        id: 234
      },
      {
        name: "Door",
        description: "Door knob",
        price: 20.90,
        id: 235
      },
      {
        name: "Door",
        description: "Pocket door handle",
        price: 22.00,
        id: 236
      },
      {
        name: "Door",
        description: "Replace attic access wood",
        price: 22.00,
        id: 237
      },
      {
        name: "Drawer",
        description: "Guide",
        price: 22.00,
        id: 238
      },
      {
        name: "Door",
        description: "Repair pocket door, fix or repair rollers",
        price: 27.50,
        id: 239
      },
      {
        name: "Door",
        description: "Replacer portion of broken door frame up to 6''",
        price: 27.50,
        id: 240
      },
      {
        name: "Electric",
        description: "Install electric box for light switch, outlet or alarm boxes inside the wall, per box",
        price: 27.50,
        id: 241
      },
      {
        name: "Smoke",
        description: "Alarm	Smoke Alarm (existing wiring)",
        price: 27.50,
        id: 242
      },
      {
        name: "Door",
        description: "New hinges pair rounded or square finished cut",
        price: 33.00,
        id: 243
      },
      {
        name: "Door",
        description: "Cabinet door Cut / Trim",
        price: 33.00,
        id: 244
      },
      {
        name: "Door",
        description: "Replace wood moldings inside around door frame, sides and top",
        price: 38.50,
        id: 245
      },
      {
        name: "Light",
        description: "Dimmer",
        price: 39.60,
        id: 246
      },
      {
        name: "Door",
        description: "New back door locks",
        price: 44.00,
        id: 247
      },
      {
        name: "Light	6''",
        description: "LED Light fixture on existing can",
        price: 44.00,
        id: 248
      },
      {
        name: "Wall heater",
        description: "Digital Thermostat",
        price: 55.00,
        id: 249
      },
      {
        name: "Door",
        description: "New back door locks Kwikset longer latch",
        price: 55.00,
        id: 250
      },
      {
        name: "Smoke Alarm",
        description: "Smoke Alarm and CO2 Combo (existing wiring)",
        price: 71.50,
        id: 251
      },
      {
        name: "Smoke Alarm",
        description: "Smoke Alarm (new wiring)",
        price: 72.60,
        id: 252
      },
      {
        name: "Door",
        description: "Panel Door",
        price: 82.50,
        id: 253
      },
      {
        name: "Smoke Alarm",
        description: "Smoke Alarm and CO2 Combo (new wiring including the box) including the box)",
        price: 110.00,
        id: 254
      },
      {
        name: "Closet",
        description: "Install a 2nd Shelve and pole",
        price: 165.00,
        id: 255
      },
      {
        name: "Wall heater",
        description: "Wall heater cover replace including 4 mounting brackets",
        price: 247.50,
        id: 256
      }
    ],
    "entrance": [{
        name: "Ceiling",
        description: "Ceiling fan light glass cover (Parts + 10% + 3.00)",
        price: 1,
        id: 257
      },
      {
        name: "Window",
        description: "Replace broken window glass (Cost + 10% + 30.00)",
        price: 1,
        id: 258
      },
      {
        name: "Electric",
        description: "Decora plate",
        price: 2.20,
        id: 259
      },
      {
        name: "Electric",
        description: "Ligth switch or outlet plate",
        price: 2.20,
        id: 260
      },
      {
        name: "Electric",
        description: "Ligth switch or outlet double plate",
        price: 5.50,
        id: 261
      },
      {
        name: "Ligth",
        description: "Regular light bulbs",
        price: 2.20,
        id: 262
      },
      {
        name: "Closet",
        description: "Replace regular light bulb",
        price: 2.48,
        id: 263
      },
      {
        name: "Door",
        description: "Catch clip remove and install new",
        price: 4.40,
        id: 264
      },
      {
        name: "Cabinet",
        description: "Catch clip remove and install new",
        price: 4.40,
        id: 265
      },
      {
        name: "Door",
        description: "Door stopper solid stick",
        price: 4.68,
        id: 266
      },
      {
        name: "Blinds",
        description: "Remove blinds and brackets",
        price: 5.50,
        id: 267
      },
      {
        name: "Lock",
        description: "Remove chain from main entrance door and frame",
        price: 5.50,
        id: 268
      },
      {
        name: "Mirror",
        description: "Remove plastic framed mirror from door or wall",
        price: 5.50,
        id: 269
      },
      {
        name: "Smoke Alarm",
        description: "Reinstall/Adjust",
        price: 5.50,
        id: 270
      },
      {
        name: "Smoke Alarm",
        description: "Smoke alarm Battery",
        price: 5.50,
        id: 271
      },
      {
        name: "Vents",
        description: "Adjust vent screen",
        price: 5.50,
        id: 272
      },
      {
        name: "Window",
        description: "Remove window blinds and brakets",
        price: 5.50,
        id: 273
      },
      {
        name: "Door",
        description: "Replace wood molding inside around door frame, top molding only",
        price: 6.60,
        id: 273
      },
      {
        name: "Electric",
        description: "Regular outlet",
        price: 6.60,
        id: 274
      },
      {
        name: "Cabinet",
        description: "Cabinet doors and drawers Individual Knob/Handles",
        price: 7.70,
        id: 275
      },
      {
        name: "Electric",
        description: "Regular Light switch",
        price: 8.25,
        id: 276
      },
      {
        name: "Electric",
        description: "Decora outlets",
        price: 9.90,
        id: 277
      },
      {
        name: "Cabinet",
        description: "Seal gaps inside the wall cabinet",
        price: 11.00,
        id: 278
      },
      {
        name: "Wire",
        description: "Remove extra cable wires (Cable and phone wires)",
        price: 11.00,
        id: 279
      },
      {
        name: "Light",
        description: "4' Fluorecent light bulb",
        price: 16.50,
        id: 280
      },
      {
        name: "Door",
        description: "Door stopper 1/2 moon",
        price: 16.50,
        id: 281
      },
      {
        name: "A/C",
        description: "Replace Central Air Conditioner Filter",
        price: 16.50,
        id: 282
      },
      {
        name: "Door",
        description: "Replace wood molding inside around door frame, side molding only",
        price: 16.50,
        id: 283
      },
      {
        name: "Window",
        description: "Adjust window loose frame",
        price: 16.50,
        id: 284
      },
      {
        name: "Window",
        description: "Install window lock",
        price: 16.50,
        id: 285
      },
      {
        name: "Cabinet",
        description: "New satin finish hinges pair, take off cabinet doors & install after painting of cabinets & doors",
        price: 17.88,
        id: 286
      },
      {
        name: "Door",
        description: "Door knob",
        price: 20.90,
        id: 287
      },
      {
        name: "Drawer",
        description: "Guide",
        price: 22.00,
        id: 288
      },
      {
        name: "A/C",
        description: "Pig Tail on air conditioner / Reduce air conditioner wire",
        price: 27.50,
        id: 289
      },
      {
        name: "A/C",
        description: "Reduce electric cord on Air Conditioner",
        price: 27.50,
        id: 290
      },
      {
        name: "Ceiling",
        description: "Remove ceiling fan extension pipe",
        price: 27.50,
        id: 291
      },
      {
        name: "Door",
        description: "Adjust sliding glass door",
        price: 27.50,
        id: 292
      },
      {
        name: "Door",
        description: "Replacer portion of broken door frame up to 6''",
        price: 27.50,
        id: 293
      },
      {
        name: "Electric",
        description: "Remove exterior electric box & recess the box inside the wall",
        price: 27.50,
        id: 294
      },
      {
        name: "Smoke Alarm",
        description: "Smoke Alarm (existing wiring)",
        price: 27.50,
        id: 295
      },
      {
        name: "Wall heater",
        description: "Clean up gas heater, remove cover, blow and vacumm, wipe clean of all debris and test upon completion",
        price: 30.80,
        id: 296
      },
      {
        name: "Door",
        description: "New hinges pair rounded or square finished cut",
        price: 33.00,
        id: 297
      },
      {
        name: "Door",
        description: "Cabinet door Cut / Trim	",
        price: 33.00,
        id: 298
      },
      {
        name: "Window",
        description: "New window screen",
        price: 33.00,
        id: 299
      },
      {
        name: "Door",
        description: "Replace Threshold",
        price: 38.50,
        id: 300
      },
      {
        name: "Door",
        description: "Replace wood moldings inside around door frame, sides and top",
        price: 38.50,
        id: 301
      },
      {
        name: "Door",
        description: "Replace Threshold",
        price: 38.50,
        id: 302
      },
      {
        name: "Door",
        description: "Install or replace weather strip",
        price: 39.60,
        id: 303
      },
      {
        name: "Light",
        description: "Dimmer",
        price: 39.60,
        id: 304
      },
      {
        name: "Door",
        description: "New front door locks",
        price: 44.00,
        id: 305
      },
      {
        name: "Light",
        description: "6'' LED Light fixture on existing can",
        price: 44.00,
        id: 306
      },
      {
        name: "Switch",
        description: "Double Dimmer Switch",
        price: 55.00,
        id: 307
      },
      {
        name: "A/C",
        description: "Install an electric outlet next to air conditioner",
        price: 55.00,
        id: 308
      },
      {
        name: "Door",
        description: "New front door locks Kwikset longer latch",
        price: 55.00,
        id: 309
      },
      {
        name: "Light",
        description: "New Electric Box",
        price: 55.00,
        id: 310
      },
      {
        name: "Wall heater",
        description: "Digital Thermostat",
        price: 55.00,
        id: 311
      },
      {
        name: "Smoke Alarm",
        description: "Smoke Alarm and CO2 Combo (existing wiring)",
        price: 71.50,
        id: 312
      },
      {
        name: "Smoke Alarm",
        description: "Smoke Alarm (new wiring)",
        price: 72.60,
        id: 313
      },
      {
        name: "Light",
        description: "Install Track light x 3 bulbs",
        price: 101.75,
        id: 314
      },
      {
        name: "Light",
        description: "6'' LED Light (connection, can)",
        price: 104.50,
        id: 315
      },
      {
        name: "Smoke Alarm",
        description: "Smoke Alarm and CO2 Combo (new wiring including the box)",
        price: 124.30,
        id: 316
      },
      {
        name: "A/C",
        description: "Install New Air Conditioner",
        price: 159.50,
        id: 317
      },
      {
        name: "Door",
        description: "Replace front door",
        price: 242.00,
        id: 318
      },
      {
        name: "Wall heater",
        description: "Wall heater cover replace including 4 mounting brackets",
        price: 247.50,
        id: 319
      },
      {
        name: "Ceiling",
        description: "Brush nickle Ceiling fan without extension pole (New installation: Electrical and bracket)",
        price: 275.00,
        id: 320
      },
      {
        name: "Door",
        description: "Remove and replace outdor sliding door, install vinyl double pane (Cost+10%+200.00)",
        price: 302.50,
        id: 321
      },
      {
        name: "Ceiling",
        description: "Smooth ceiling in living room",
        price: 440.00,
        id: 192
      },
      {
        name: "Wall heater",
        description: "Wall gas heater (25,000 btus) with digital thermostat",
        price: 770.00,
        id: 322
      },
      {
        name: "Door",
        description: "Adjust door hinge",
        price: 0,
        id: 979
      },
      {
        name: "Door",
        description: "Repair front door",
        price: 0,
        id: 323
      }
    ],


    "guestBedroom": [{
        name: "Door",
        description: "Adjust door hinge",
        price: 0,
        id: 517
      },
      {
        name: "Door",
        description: "New back door",
        price: 0,
        id: 518
      },
      {
        name: "Ceilings",
        description: "Ceiling fan light glass cover (Parts + 10% + $3.00)",
        price: 0,
        id: 519
      },
      {
        name: "Doors",
        description: "Door stopper 1/2 moon",
        price: 0,
        id: 520
      },
      {
        name: "Windows",
        description: "Replace broken window glass (Cost + 10% + $30.00)",
        price: 0,
        id: 521
      },
      {
        name: "Closets",
        description: "Install rubbered stoppers on mirror doors",
        price: 1.10,
        id: 522
      },
      {
        name: "Electric",
        description: "Ligth switch or outlet plate",
        price: 2.20,
        id: 523
      },
      {
        name: "Lights",
        description: "Regular light bulbs",
        price: 2.20,
        id: 524
      },
      {
        name: "Cabinet",
        description: "Catch clip remove and install new",
        price: 4.40,
        id: 525
      },
      {
        name: "Doors",
        description: "Catch clip remove and install new",
        price: 4.40,
        id: 526
      },
      {
        name: "Doors",
        description: "Door stopper solid stick",
        price: 4.68,
        id: 527
      },
      {
        name: "Blinds",
        description: "Remove window blinds and brakets",
        price: 5.50,
        id: 528
      },
      {
        name: "Electric",
        description: "Ligth switch or outlet double plate",
        price: 5.50,
        id: 529
      },
      {
        name: "Mirrors",
        description: "Remove plastic framed mirror from door or wall",
        price: 5.50,
        id: 530
      },
      {
        name: "Smoke",
        description: "Alarm	Reinstall/Adjust",
        price: 5.50,
        id: 531
      },
      {
        name: "Smoke",
        description: "Alarm	Smoke alarm Battery",
        price: 5.50,
        id: 532
      },
      {
        name: "Doors",
        description: "Replace wood molding inside around door frame, top molding only",
        price: 6.60,
        id: 533
      },
      {
        name: "Electric",
        description: "Regular outlet",
        price: 6.60,
        id: 534
      },
      {
        name: "Cabinets",
        description: "Cabinet doors and drawers Individual Knob/Handles ",
        price: 7.70,
        id: 535
      },
      {
        name: "Electric",
        description: "Regular Light switch",
        price: 8.25,
        id: 536
      },
      {
        name: "Drawer",
        description: "Adjust cabinet drawer",
        price: 8.80,
        id: 537
      },
      {
        name: "Electric",
        description: "Decora outlets",
        price: 9.90,
        id: 538
      },
      {
        name: "Electric",
        description: "Decora switch",
        price: 9.90,
        id: 539
      },
      {
        name: "Light	4'",
        description: "Fluorecent light bulb",
        price: 11.00,
        id: 540
      },

      {
        name: "Cabinets",
        description: "Seal gaps inside the wall cabinet",
        price: 11.00,
        id: 541
      },
      {
        name: "Closets",
        description: "Re0install folding closet doors",
        price: 11.00,
        id: 542
      },
      {
        name: "Closets",
        description: "Secure shelve inside closet",
        price: 11.00,
        id: 543
      },
      {
        name: "Doors",
        description: "Adjust cabinet door",
        price: 11.00,
        id: 544
      },
      {
        name: "Heater",
        description: "Seal wall heater vent for heat to come out from one side of the heater",
        price: 11.00,
        id: 545
      },
      {
        name: "Lights",
        description: "Light switch",
        price: 11.00,
        id: 546
      },
      {
        name: "Lights",
        description: "Light switch",
        price: 11.00,
        id: 547
      },
      {
        name: "Ceilings",
        description: "Ceiling fan Chain switch x 1",
        price: 14.30,
        id: 548
      },
      {
        name: "Doors",
        description: "Replace wood molding inside around door frame, side molding only",
        price: 16.50,
        id: 549
      },
      {
        name: "Cabinets",
        description: "New satin finish hinges pair, take off cabinet doors & install after painting of cabinets & doors",
        price: 17.88,
        id: 550
      },
      {
        name: "Doors",
        description: "Door knob",
        price: 20.90,
        id: 551
      },
      {
        name: "Doors",
        description: "Replace attic access wood",
        price: 22.00,
        id: 552
      },
      {
        name: "Drawers",
        description: "Guide",
        price: 22.00,
        id: 553
      },
      {
        name: "Ceilings",
        description: "Remove ceiling fan extension pipe",
        price: 27.50,
        id: 554
      },
      {
        name: "Air Conditioner",
        description: "Pig Tail on air conditioner Reduce air conditioner wire",
        price: 27.50,
        id: 555
      },
      {
        name: "Doors",
        description: "Adjust sliding glass door",
        price: 27.50,
        id: 556
      },
      {
        name: "Doors",
        description: "Replacer portion of broken door frame up to 6",
        price: 27.50,
        id: 557
      },
      {
        name: "Electric",
        description: "Install electric box for light switch, outlet or alarm boxes inside the wall, per box",
        price: 27.50,
        id: 558
      },
      {
        name: "Smoke Alarm",
        description: "Smoke Alarm (existing wiring)",
        price: 27.50,
        id: 559
      },
      {
        name: "Doors",
        description: "New hinges pair rounded or square finished cut",
        price: 33.00,
        id: 560
      },
      {
        name: "Doors",
        description: "Cabinet door Cut / Trim",
        price: 33.00,
        id: 561
      },
      {
        name: "Windows",
        description: "New window screen",
        price: 33.00,
        id: 562
      },
      {
        name: "Doors",
        description: "Replace wood moldings inside around door frame, sides and top",
        price: 38.50,
        id: 563
      },
      {
        name: "Lights",
        description: "Dimmer",
        price: 39.60,
        id: 564
      },
      {
        name: "Doors",
        description: "New back door locks",
        price: 44.00,
        id: 565
      },
      {
        name: "Doors",
        description: "New back door locks",
        price: 44.00,
        id: 566
      },
      {
        name: "Lights	6",
        description: "LED Light fixture on existing can",
        price: 44.00,
        id: 567
      },
      {
        name: "Lights",
        description: "Double Dimmer Switch",
        price: 55.00,
        id: 568
      },
      {
        name: "Doors",
        description: "New back door locks Kwikset longer latch",
        price: 55.00,
        id: 569
      },
      {
        name: "Smoke Alarm",
        description: "Smoke Alarm (new wiring)",
        price: 72.60,
        id: 570
      },
      {
        name: "Doors",
        description: "Panel Door",
        price: 82.50,
        id: 571
      },
      {
        name: "Smoke Alarm",
        description: "Smoke Alarm and CO2 Combo (new wiring including the box)",
        price: 124.30,
        id: 572
      },
      {
        name: "A/C",
        description: "Install New Air Conditioner ",
        price: 159.50,
        id: 573
      },
      {
        name: "Ceilings",
        description: "Brush nickle Ceiling fan without extension pole ",
        price: 165.00,
        id: 574
      },
      {
        name: "Closet",
        description: "Install a 2nd Shelve and pole",
        price: 165.00,
        id: 575
      },
      {
        name: "Wall heater",
        description: "Wall heater cover replace including 4 mounting brackets",
        price: 247.50,
        id: 576
      },
      {
        name: "Closets",
        description: "Install 2nd shelve and pole inside closet",
        price: 247.50,
        id: 577
      },
      {
        name: "Closets",
        description: "2nd shelve and hanger",
        price: 247.50,
        id: 578
      },
      {
        name: "Ceilings",
        description: "Brush nickle Ceiling fan without extension pole (New installation: Electrical and bracket)",
        price: 275.00,
        id: 579
      },
      {
        name: "Doors",
        description: "Remove and replace outdor sliding door, install vinyl double pane (Cost+10%+$200.00)",
        price: 302.50,
        id: 580
      },
      {
        name: "Ceilings",
        description: "Smooth ceiling in bedoom",
        price: 330.00,
        id: 581
      }
    ],
    "laundry": [{
        name: "Door",
        description: "Adjust door hinge",
        price: 0,
        id: 582
      },
      {
        name: "Electric",
        description: "Ligth switch or outlet plate",
        price: 2.20,
        id: 583
      },
      {
        name: "Cabinet",
        description: "Catch clip remove and install new",
        price: 4.40,
        id: 584
      },
      {
        name: "Doors",
        description: "Door stopper solid stick",
        price: 4.68,
        id: 600
      },
      {
        name: "Electric",
        description: "Regular outlet",
        price: 6.60,
        id: 585
      },
      {
        name: "Electric",
        description: "Regular Light switch",
        price: 8.25,
        id: 586
      },
      {
        name: "Electric",
        description: "Decora outlets",
        price: 9.90,
        id: 587
      },
      {
        name: "Electric",
        description: "Decora switch",
        price: 9.90,
        id: 588
      },
      {
        name: "Light",
        description: "4' Fluorecent light bulb",
        price: 82.50,
        id: 589
      },
      {
        name: "Cabinet",
        description: "New satin finish hinges pair, take off cabinet doors & install after painting of cabinets & doors",
        price: 17.88,
        id: 590
      },
      {
        name: "GFCI",
        description: "Replace electric outlet and install GFCI",
        price: 55.00,
        id: 591
      },
      {
        name: "Doors",
        description: "Panel Door",
        price: 82.50,
        id: 592
      }
    ],
    "balcony": [{
        name: "Door",
        description: "Adjust door hinge	 ",
        price: 0,
        id: 593
      },
      {
        name: "Cabinet",
        description: "Catch clip remove and install new",
        price: 4.40,
        id: 594
      },
      {
        name: "Electric",
        description: "Regular outlet",
        price: 6.60,
        id: 595
      },
      {
        name: "Electric",
        description: "Regular Light switch",
        price: 8.25,
        id: 596
      },
      {
        name: "Electric",
        description: "Decora outlets",
        price: 9.90,
        id: 597
      },
      {
        name: "Electric",
        description: "Decora switch",
        price: 9.90,
        id: 598
      },
      {
        name: "Light	4'",
        description: "Fluorecent light bulb",
        price: 5.50,
        id: 599
      }
    ],
    "patio": [{
        name: "Door",
        decoration: "Adjust door hinge	",
        price: 0,
        id: 600
      },
      {
        name: "Extras",
        decoration: "Remove trash	",
        price: 0,
        id: 601
      },
      {
        name: "Cabinet",
        decoration: "Catch clip remove and install ne",
        price: 4.40,
        id: 602
      },
      {
        name: "Electric",
        decoration: "Regular outle",
        price: 6.60,
        id: 603
      },
      {
        name: "Electric",
        decoration: "Regular Light switc",
        price: 8.25,
        id: 604
      },
      {
        name: "Electric",
        decoration: "Decora outlet",
        price: 9.90,
        id: 605
      },
      {
        name: "Electric",
        decoration: "Decora switc",
        price: 9.90,
        id: 606
      },
      {
        name: "Light	4' Fluorecent light bul",
        price: 0,
        id: 607
      },
      {
        name: "Lights	Exterior lights glass cove",
        price: 11.00,
        id: 608
      },
      {
        name: "Plumbing	Repair a leak on the water hose valv",
        price: 27.50,
        id: 609
      }
    ],

    "masterBedroom": [{
        name: "Door",
        description: "Adjust door hinge",
        price: 0,
        id: 610
      },
      {
        name: "Doors",
        description: "New back door",
        price: 0,
        id: 611
      },
      {
        name: "Cabinets",
        description: "24'' Dark brown Vanity (price + 10% + $75 labor)",
        price: 0,
        id: 612
      },
      {
        name: "Cabinets",
        description: "30'' Dark brown Vanity (price + 10% + $75 labor)",
        price: 0,
        id: 613
      },
      {
        name: "Cabinets",
        description: "36'' Dark brown Vanity (price + 10% + $75 labor)",
        price: 0,
        id: 614
      },
      {
        name: "Ceilings",
        description: "Ceiling fan light glass cover (Parts + 10% + $3.00)",
        price: 0,
        id: 615
      },
      {
        name: "Doors",
        description: "Door stopper 1/2 moon",
        price: 0,
        id: 616
      },
      {
        name: "Windows",
        description: "Replace broken window glass (Cost + 10% + $30.00)",
        price: 0,
        id: 617
      },
      {
        name: "Closets",
        description: "Install rubbered stoppers on mirror doors",
        price: 1.10,
        id: 618
      },
      {
        name: "Electric",
        description: "Ligth switch or outlet plate",
        price: 2.20,
        id: 619
      },
      {
        name: "Lights",
        description: "Regular light bulbs",
        price: 2.20,
        id: 620
      },
      {
        name: "Cabinet",
        description: "Catch clip remove and install new",
        price: 4.40,
        id: 621
      },
      {
        name: "Doors",
        description: "Catch clip remove and install new",
        price: 4.40,
        id: 622
      },
      {
        name: "Doors",
        description: "Door stopper solid stick",
        price: 4.68,
        id: 623
      },
      {
        name: "Blinds",
        description: "Remove window blinds and brakets",
        price: 5.50,
        id: 624
      },
      {
        name: "Electric",
        description: "Ligth switch or outlet double plate",
        price: 5.50,
        id: 625
      },
      {
        name: "Mirrors",
        description: "Remove plastic framed mirror from door or wall",
        price: 5.50,
        id: 626
      },
      {
        name: "Smoke",
        description: "Alarm	Reinstall/Adjust",
        price: 5.50,
        id: 627
      },
      {
        name: "Smoke",
        description: "Alarm	Smoke alarm Battery",
        price: 5.50,
        id: 628
      },
      {
        name: "Doors",
        description: "Replace wood molding inside around door frame, top molding only",
        price: 6.60,
        id: 629
      },
      {
        name: "Electric",
        description: "Regular outlet",
        price: 6.60,
        id: 630
      },
      {
        name: "Cabinets",
        description: "Cabinet doors and drawers Individual Knob/Handles ",
        price: 7.70,
        id: 631
      },
      {
        name: "Electric",
        description: "Regular Light switch",
        price: 8.25,
        id: 632
      },
      {
        name: "Drawer",
        description: "Adjust cabinet drawer",
        price: 8.80,
        id: 633
      },
      {
        name: "Electric",
        description: "Decora outlets",
        price: 9.90,
        id: 634
      },
      {
        name: "Electric",
        description: "Decora switch",
        price: 9.90,
        id: 635
      },
      {
        name: "Light",
        description: "4' Fluorecent light bulb",
        price: 11.00,
        id: 636
      },
      {
        name: "Cabinets",
        description: "Seal gaps inside the wall cabinet",
        price: 11.00,
        id: 637
      },
      {
        name: "Closets",
        description: "Secure shelve inside closet",
        price: 11.00,
        id: 638
      },
      {
        name: "Closets",
        description: "Reinstall folding closet doors",
        price: 11.00,
        id: 639
      },
      {
        name: "Doors",
        description: "Adjust cabinet door",
        price: 11.00,
        id: 640
      },
      {
        name: "Heater",
        description: "Seal wall heater vent for heat to come out from one side of the heater",
        price: 11.00,
        id: 641
      },
      {
        name: "Lights",
        description: "Light switch",
        price: 11.00,
        id: 642
      },
      {
        name: "Ceilings",
        description: "Ceiling fan Chain switch x 1",
        price: 14.30,
        id: 643
      },
      {
        name: "Doors",
        description: "Replace wood molding inside around door frame, side molding only",
        price: 16.50,
        id: 644
      },
      {
        name: "Cabinets",
        description: "New satin finish hinges pair, take off cabinet doors & install after painting of cabinets & doors",
        price: 17.88,
        id: 645
      },
      {
        name: "Doors",
        description: "Replace attic access wood",
        price: 22.00,
        id: 646
      },
      {
        name: "Drawers",
        description: "Guide",
        price: 22.00,
        id: 647
      },
      {
        name: "Ceilings",
        description: "Remove ceiling fan extension pipe",
        price: 27.50,
        id: 648
      },
      {
        name: "Air Conditioner",
        description: "Pig Tail on air conditioner / Reduce air conditioner wire",
        price: 27.50,
        id: 649
      },
      {
        name: "Doors",
        description: "Adjust sliding glass door",
        price: 27.50,
        id: 650
      },
      {
        name: "Doors",
        description: "Replacer portion of broken door frame up to 6''",
        price: 27.50,
        id: 651
      },
      {
        name: "Electric",
        description: "Install electric box for light switch, outlet or alarm boxes inside the wall, per box",
        price: 27.50,
        id: 652
      },
      {
        name: "Smoke",
        description: "Alarm	Smoke Alarm (existing wiring)",
        price: 27.50,
        id: 653
      },
      {
        name: "Doors",
        description: "New hinges pair rounded or square finished cut",
        price: 33.00,
        id: 654
      },
      {
        name: "Doors",
        description: "Cabinet door Cut / Trim",
        price: 33.00,
        id: 654
      },
      {
        name: "Windows",
        description: "New window screen",
        price: 33.00,
        id: 655
      },
      {
        name: "Doors",
        description: "Replace wood moldings inside around door frame, sides and top",
        price: 38.50,
        id: 656
      },
      {
        name: "Lights",
        description: "Dimmer",
        price: 39.60,
        id: 657
      },
      {
        name: "Doors",
        description: "New back door locks",
        price: 44.00,
        id: 658
      },
      {
        name: "Doors",
        description: "New back door locks",
        price: 44.00,
        id: 659
      },
      {
        name: "Lights",
        description: "6'' LED Light fixture on existing can",
        price: 44.00,
        id: 660
      },
      {
        name: "Lights",
        description: "Double Dimmer Switch",
        price: 55.00,
        id: 661
      },
      {
        name: "Doors",
        description: "New back door locks Kwikset longer latch",
        price: 55.00,
        id: 662
      },
      {
        name: "Smoke",
        description: "Alarm	Smoke Alarm (new wiring)",
        price: 72.60,
        id: 663
      },
      {
        name: "Doors",
        description: "Panel Door",
        price: 82.50,
        id: 664
      },
      {
        name: "Smoke",
        description: "Alarm	Smoke Alarm and CO2 Combo (new wiring) including the box)",
        price: 110.00,
        id: 665
      },
      {
        name: "A/C",
        description: "Install New Air Conditioner ",
        price: 159.50,
        id: 666
      },
      {
        name: "Ceilings",
        description: "Brush nickle Ceiling fan without extension pole",
        price: 165.00,
        id: 667
      },
      {
        name: "Closet",
        description: "Install a 2nd Shelve and pole",
        price: 165.00,
        id: 668
      },
      {
        name: "Wall heater",
        description: "Wall heater cover replace including 4 mounting brackets",
        price: 247.50,
        id: 669
      },
      {
        name: "Closets",
        description: "2nd shelve and hanger",
        price: 247.50,
        id: 670
      },
      {
        name: "Ceilings",
        description: "Brush nickle Ceiling fan without extension pole (New installation: Electrical and bracket)",
        price: 275.00,
        id: 671
      },
      {
        name: "Doors",
        description: "Remove and replace outdor sliding door, install vinyl double pane (Cost+10%+$200.00)",
        price: 302.50,
        id: 672
      },
      {
        name: "Ceilings",
        description: "Smooth ceiling in bedoom",
        price: 330.00,
        id: 673
      }
    ],
    "extraBed": [{
        name: "Ceilings",
        description: "Ceiling fan light glass cover (Parts + 10% + $3.00)",
        price: 0,
        id: 979
      },
      {
        name: "Doors",
        description: "Door stopper 1/2 moon",
        price: 0,
        id: 980
      },
      {
        name: "Window",
        description: "Replace broken window glass (Cost + 10% + $30.00)",
        price: 0,
        id: 981
      },
      {
        name: "Closets",
        description: "Install rubbered stoppers on mirror doors",
        price: 1.1,
        id: 982
      },
      {
        name: "Electric",
        description: "Ligth switch or outlet plate",
        price: 2.2,
        id: 983
      },
      {
        name: "Lights",
        description: "Regular light bulbs",
        price: 2.2,
        id: 984
      },
      {
        name: "Cabinet",
        description: "Catch clip remove and install new",
        price: 4.4,
        id: 985
      },
      {
        name: "Doors",
        description: "Catch clip remove and install new",
        price: 4.4,
        id: 986
      },
      {
        name: "Doors",
        description: "Door stopper solid stick",
        price: 4.68,
        id: 987
      },
      {
        name: "Blinds",
        description: "Remove window blinds and brakets",
        price: 5.5,
        id: 988
      },
      {
        name: "Electric",
        description: "Ligth switch or outlet double plate",
        price: 5.5,
        id: 989
      },
      {
        name: "Mirrors",
        description: "Remove plastic framed mirror from door or wall",
        price: 5.5,
        id: 990
      },
      {
        name: "Smoke Alarm",
        description: "New battery",
        price: 5.5,
        id: 991
      },
      {
        name: "Smoke Alarm",
        description: "Reinstall/Adjust",
        price: 5.5,
        id: 992
      },
      {
        name: "Smoke Alarm",
        description: "Smoke alarm Battery",
        price: 5.5,
        id: 993
      },
      {
        name: "Doors",
        description: "Replace wood molding inside around door frame, top molding only",
        price: 6.6,
        id: 994
      },
      {
        name: "Electric",
        description: "Regular outlet",
        price: 6.6,
        id: 995
      },
      {
        name: "Cabinets",
        description: "Cabinet doors and drawers Individual Knob/Handles",
        price: 7.7,
        id: 996
      },
      {
        name: "Electric",
        description: "Regular Light switch",
        price: 8.25,
        id: 997
      },
      {
        name: "Drawer",
        description: "Adjust cabinet drawer",
        price: 8.8,
        id: 998
      },
      {
        name: "Electric",
        description: "Decora outlets",
        price: 9.9,
        id: 999
      },
      {
        name: "Electric",
        description: "Decora switch",
        price: 9.9,
        id: 1000
      },
      {
        name: "Light",
        description: "4' Fluorecent light bulb",
        price: 11,
        id: 1001
      },
      {
        name: "Cabinets",
        description: "Seal gaps inside the wall cabinet",
        price: 11,
        id: 1002
      },
      {
        name: "Closet",
        description: "Reinstall folding closet doors",
        price: 11,
        id: 1003
      },
      {
        name: "Closet",
        description: "Secure shelve inside closet",
        price: 11,
        id: 1004
      },
      {
        name: "Doors",
        description: "Adjust cabinet door",
        price: 11,
        id: 1005
      },
      {
        name: "Heater",
        description: "Seal wall heater vent for heat to come out from one side of the heater",
        price: 11,
        id: 1006
      },
      {
        name: "Lights",
        description: "Light switch",
        price: 11,
        id: 1007
      },
      {
        name: "Ceilings",
        description: "Ceiling fan Chain switch x 1",
        price: 14.3,
        id: 1008
      },
      {
        name: "Doors",
        description: "Replace wood molding inside around door frame, side molding only",
        price: 16.5,
        id: 1009
      },
      {
        name: "Cabinets",
        description: "New satin finish hinges pair, take off cabinet doors & install after painting of cabinets & doors",
        price: 17.88,
        id: 1010
      },
      {
        name: "Doors",
        description: "Replace attic access wood",
        price: 22,
        id: 1011
      },
      {
        name: "Drawers",
        description: "Guide",
        price: 22,
        id: 1012
      },
      {
        name: "Ceilings",
        description: "Remove ceiling fan extension pipe",
        price: 27.5,
        id: 1013
      },
      {
        name: "Air Conditioner",
        description: "Pig Tail on air conditioner / Reduce air conditioner wire",
        price: 27.5,
        id: 1014
      },
      {
        name: "Doors",
        description: "Replacer portion of broken door frame up to 6",
        price: 27.5,
        id: 1015
      },
      {
        name: "Electric",
        description: "Install electric box for light switch, outlet or alarm boxes inside the wall, per box",
        price: 27.5,
        id: 1016
      },
      {
        name: "Smoke Alarm",
        description: "Smoke Alarm (existing wiring)",
        price: 27.5,
        id: 1017
      },
      {
        name: "Doors",
        description: "New hinges pair rounded or square finished cut",
        price: 33,
        id: 1018
      },
      {
        name: "Doors",
        description: "Cabinet door Cut / Trim",
        price: 33,
        id: 1019
      },
      {
        name: "Window",
        description: "New window screen",
        price: 33,
        id: 1020
      },
      {
        name: "Doors",
        description: "Replace wood moldings inside around door frame, sides and top",
        price: 38.5,
        id: 1021
      },
      {
        name: "Lights",
        description: "Dimmer",
        price: 39.6,
        id: 1022
      },
      {
        name: "Doors",
        description: "New back door locks",
        price: 44,
        id: 1023
      },
      {
        name: "Lights",
        description: "Double Dimmer Switch",
        price: 55,
        id: 1024
      },
      {
        name: "Doors",
        description: "New back door locks Kwikset longer latch",
        price: 55,
        id: 1025
      },
      {
        name: "Smoke Alarm",
        description: "Smoke Alarm (new wiring)",
        price: 72.6,
        id: 1026
      },
      {
        name: "Doors",
        description: "Panel Door",
        price: 82.5,
        id: 1027
      },
      {
        name: "Smoke Alarm",
        description: "Smoke Alarm and CO2 Combo (new wiring including the box)",
        price: 124.3,
        id: 1028
      },
      {
        name: "A/C",
        description: "Install New Air Conditioner",
        price: 159.5,
        id: 1029
      },
      {
        name: "Ceilings",
        description: "Brush nickle Ceiling fan without extension pole",
        price: 165,
        id: 1030
      },
      {
        name: "Wall heater",
        description: "Wall heater cover replace including 4 mounting brackets",
        price: 247.5,
        id: 1031
      },
      {
        name: "Closets",
        description: "2nd shelve and hanger",
        price: 247.5,
        id: 1032
      },
      {
        name: "Ceilings",
        description: "Brush nickle Ceiling fan without extension pole (New installation: Electrical and bracket)",
        price: 275,
        id: 1033
      },
      {
        name: "Doors",
        description: "Remove and replace outdor sliding door, install vinyl double pane (Cost+10%+$200.00)",
        price: 302.5,
        id: 1034
      },
      {
        name: "Ceilings",
        description: "Smooth ceiling in bedoom",
        price: 330,
        id: 1035
      }
    ],
    "dinningArea": [{
        name: "Door",
        description: "Adjust door hinge",
        price: 0,
        id: 1037
      },
      {
        name: "Ceiling",
        description: "Ceiling fan light glass cover (Parts + 10% + $3.00)",
        price: 0,
        id: 1038
      },
      {
        name: "Window",
        description: "Replace broken window glass (Cost + 10% + $30.00)",
        price: 0,
        id: 1039
      },
      {
        name: "Electric",
        description: "Ligth switch or outlet plate",
        price: 2.20,
        id: 1040
      },
      {
        name: "Light",
        description: "Regular light bulbs",
        price: 2.20,
        id: 1041
      },
      {
        name: "Door",
        description: "Catch clip remove and install new remove and install a new one",
        price: 3.85,
        id: 1042
      },
      {
        name: "Cabinet",
        description: "Catch clip remove and install new",
        price: 4.40,
        id: 1043
      },
      {
        name: "Blinds",
        description: "Remove window blinds and brakets",
        price: 5.50,
        id: 1044
      },
      {
        name: "Electric",
        description: "Ligth switch or outlet double plate",
        price: 5.50,
        id: 1045
      },
      {
        name: "Window",
        description: "Remove window blinds and brakets",
        price: 5.50,
        id: 1046
      },
      {
        name: "Electric",
        description: "Regular outlet",
        price: 6.60,
        id: 1047
      },
      {
        name: "Cabinet",
        description: "Cabinet doors and drawers Individual Knob/Handles",
        price: 7.70,
        id: 1048
      },
      {
        name: "Electric",
        description: "Regular Light switch",
        price: 8.25,
        id: 1049
      },
      {
        name: "Electric",
        description: "Decora outlets",
        price: 9.90,
        id: 1050
      },
      {
        name: "Electric",
        description: "Decora switch",
        price: 9.90,
        id: 1051
      },
      {
        name: "Light",
        description: "4' Fluorecent light bulb",
        price: 27.50,
        id: 1052
      },
      {
        name: "Cabinet",
        description: "New satin finish hinges pair, take off cabinet doors & install after painting of cabinets & doors",
        price: 17.88,
        id: 1053
      },
      {
        name: "Drawer",
        description: "Guide",
        price: 22.00,
        id: 1054
      },
      {
        name: "Ceiling",
        description: "Remove ceiling fan extension pipe",
        price: 27.50,
        id: 1055
      },
      {
        name: "Air Conditioner",
        description: "Pig Tail on air conditioner / Reduce air conditioner wire",
        price: 27.50,
        id: 1056
      },
      {
        name: "Electric",
        description: "Install electric box for light switch, outlet or alarm boxes inside the wall, per box",
        price: 27.50,
        id: 1057
      },
      {
        name: "Door",
        description: "New hinges pair rounded or square finished cut",
        price: 33.00,
        id: 1058
      },
      {
        name: "Door",
        description: "Cabinet door Cut / Trim",
        price: 33.00,
        id: 1059
      },
      {
        name: "Window",
        description: "New window screen",
        price: 33.00,
        id: 1060
      },
      {
        name: "Light",
        description: "Dimmer",
        price: 39.60,
        id: 1061
      },
      {
        name: "Door",
        description: "New back door locks",
        price: 44.00,
        id: 1062
      },
      {
        name: "Wall heater",
        description: "Digital Thermostat",
        price: 55.00,
        id: 1063
      },
      {
        name: "Switch",
        description: "Double Dimmer Switch",
        price: 55.00,
        id: 1064
      },
      {
        name: "A/C",
        description: "Install an electric outlet next to air conditioner",
        price: 55.00,
        id: 1065
      },
      {
        name: "Door",
        description: "New back door locks Kwikset longer latch",
        price: 55.00,
        id: 1066
      },
      {
        name: "Door",
        description: "Panel Door",
        price: 82.50,
        id: 1067
      },
      {
        name: "A/C",
        description: "Install New Air Conditioner",
        price: 159.50,
        id: 1068
      },
      {
        name: "Ceiling",
        description: "Brush nickle Ceiling fan without extension pole",
        price: 165.00,
        id: 1069
      },
      {
        name: "Wall heater",
        description: "Wall heater cover replace including 4 mounting brackets",
        price: 247.50,
        id: 1070
      },
      {
        name: "Ceiling",
        description: "Brush nickle Ceiling fan without extension pole (New installation: Electrical and bracket)",
        price: 275.00,
        id: 1071
      },
      {
        name: "Door",
        description: "Remove and replace outdor sliding door, install vinyl double pane (Cost+10%+$200.00)",
        price: 302.50,
        id: 1072
      },
      {
        name: "Floor",
        description: "Dining tile floor",
        price: 440.00,
        id: 1073
      }
    ],
    "construction": [{
      name: "HVACThermostat",
      description: "Battery",
      price: 5.50,
      id: 1179
    }, {
      name: "HVACThermostat",
      description: "Analog",
      price: 27.50,
      id: 1180
    }, {
      name: "HVACWall",
      description: "Heater Vent (cut hole, install)",
      price: 44.00,
      id: 1181
    }, {
      name: "HVACWall",
      description: "Heater Clean and Paint Vent Cover",
      price: 49.50,
      id: 1182
    }, {
      name: "HVACThermostat",
      description: "Digital",
      price: 55.00,
      id: 1183
    }, {
      name: "HVACWall",
      description: "Heater Clean and Paint Wall Heater Cover",
      price: 71.50,
      id: 1184
    }, {
      name: "HVACBath",
      description: "Heater Duct / Ventilation",
      price: 88.00,
      id: 1185
    }, {
      name: "HVACBath",
      description: "Heater Electrical Wiring",
      price: 88.00,
      id: 1186
    }, {
      name: "HVACA/C",
      description: "Wall AC",
      price: 143.00,
      id: 1187
    }, {
      name: "HVACWall",
      description: "Heater Cover",
      price: 170.50,
      id: 1188
    }, {
      name: "HVACBath",
      description: "Heater Ceiling Heater Combo",
      price: 247.50,
      id: 1189
    }, {
      name: "HVACWall",
      description: "Heater Wall Furnace (25K with Thermostat )",
      price: 756.80,
      id: 1190
    }, {
      name: "LightBulb",
      description: "Special",
      price: 3.30,
      id: 1191
    }, {
      name: "LightBulb",
      description: "Regular",
      price: 11.00,
      id: 1192
    }, {
      name: "LightBulb",
      description: "4' Fluorescent",
      price: 11.00,
      id: 1193
    }, {
      name: "LightFixture",
      description: "Pull String",
      price: 11.00,
      id: 1194
    }, {
      name: "LightFixture",
      description: "4' Fluorescent",
      price: 11.00,
      id: 1195
    }, {
      name: "LightBulb",
      description: "6'' LED Recessed bulb",
      price: 12.10,
      id: 1196
    }, {
      name: "LightFixture",
      description: "Ceiling",
      price: 33.00,
      id: 1197
    }, {
      name: "LightFixture",
      description: "Flushmount",
      price: 33.00,
      id: 1198
    }, {
      name: "LightFixture",
      description: "Exterior",
      price: 55.00,
      id: 1199
    }, {
      name: "LightFixture",
      description: "Pendant",
      price: 71.50,
      id: 1200
    }, {
      name: "LightFixture",
      description: "Electrical Wiring",
      price: 88.00,
      id: 1201
    }, {
      name: "LightFixture",
      description: "2 Sconce",
      price: 104.50,
      id: 1202
    }, {
      name: "LightFixture",
      description: "6'' LED Light (connection, can)",
      price: 104.50,
      id: 1203
    }, {
      name: "LightFixture",
      description: "3 Sconce",
      price: 126.50,
      id: 1204
    }, {
      name: "MirrorWall",
      description: "Wall Mirror",
      price: 132.00,
      id: 1205
    }, {
      name: "PlumbingDrain",
      description: "Angle Stop",
      price: 27.50,
      id: 1206
    }, {
      name: "PlumbingDrain",
      description: "Line with U-Trap and Hook Up",
      price: 44.00,
      id: 120
    }, {
      name: "PlumbingDrain",
      description: "Water Hose",
      price: 44.00,
      id: 1208
    }, {
      name: "PlumbingDrain",
      description: "Replace Drain System",
      price: 55.00,
      id: 1209
    }, {
      name: "PlumbingLeak",
      description: "Repair leak, fix pipe (drywall, no paint)",
      price: 132.00,
      id: 1211
    }, {
      name: "ShowerDoor",
      description: "Clear Framed",
      price: 0,
      id: 1212
    }, {
      name: "ShowerDoor",
      description: "Clear Frameless",
      price: 0,
      id: 1213
    }, {
      name: "ShowerDoor",
      description: "Frosted Framed",
      price: 0,
      id: 1214
    }, {
      name: "ShowerCurtain",
      description: "Rings",
      price: 11.00,
      id: 1215
    }, {
      name: "ShowerShowerhead",
      description: "Flange",
      price: 11.00,
      id: 1216
    }, {
      name: "ShowerDoor",
      description: "Lubricrate Tracks/Wheels",
      price: 19.80,
      id: 1217
    }, {
      name: "ShowerCurtain",
      description: "Clear Liner",
      price: 22.00,
      id: 1218
    }, {
      name: "ShowerOther",
      description: "Caulking around Tubs and Shower",
      price: 27.50,
      id: 1219
    }, {
      name: "ShowerShowerhead",
      description: "Spout",
      price: 27.50,
      id: 1220
    }, {
      name: "ShowerShowerhead",
      description: "Regular (goes with shower door)",
      price: 27.50,
      id: 1221
    }, {
      name: "ShowerShowerhead",
      description: "Flat (goes with glass panel)",
      price: 33.00,
      id: 1222
    }, {
      name: "ShowerShowerhead",
      description: "Pipe - S Shape",
      price: 38.50,
      id: 1223
    }, {
      name: "ShowerCurtain",
      description: "Decorative",
      price: 49.50,
      id: 1224
    }, {
      name: "ShowerRod",
      description: "Straight with curtain and ring",
      price: 49.50,
      id: 1225
    }, {
      name: "ShowerShowerhead",
      description: "Pipe ( 90 with Glass Panel)",
      price: 49.50,
      id: 1226
    }, {
      name: "ShowerFaucet",
      description: "Open and Close Wall to Install Faucet",
      price: 77.00,
      id: 1227
    }, {
      name: "ShowerTile",
      description: "Regrout Shower Tile and Seal",
      price: 84.70,
      id: 1228
    }, {
      name: "ShowerDoor",
      description: "Glass Panel",
      price: 132.00,
      id: 1229
    }, {
      name: "ShowerFaucet",
      description: "Hot and Cold Water Line",
      price: 187.00,
      id: 1230
    }, {
      name: "ShowerDoor",
      description: "Standing Clear Frameless",
      price: 385.00,
      id: 1231
    }, {
      name: "ShowerTile",
      description: "Floor to Ceiling",
      price: 127.5,
      id: 1232
    }, {
      name: "SinkFaucet",
      description: "Reinstall/Adjust",
      price: 5.50,
      id: 1233
    }, {
      name: "SinkOther",
      description: "Caulking Around Sink, Faucet and Counter",
      price: 27.50,
      id: 1234
    }, {
      name: "SinkAccessories",
      description: "Strainer",
      price: 33.00,
      id: 1235
    }, {
      name: "SinkFaucet",
      description: "Pop-up Only",
      price: 49.50,
      id: 1236
    }, {
      name: "SinkFaucet",
      description: "Standard with Pop-up",
      price: 66.00,
      id: 1400,
    }, {
      name: "SinkFixture",
      description: "Pedestal",
      price: 4.50,
      id: 1400,
    }, {
      name: "SinkFaucet",
      description: "Long Spout",
      price: 65.00,
      id: 1400,
    }, {
      name: "SinkFixture",
      description: "Single Undermount, Stainless Steel 25''-33'' and drain kit",
      price: 75.00,
      id: 1400,
    }, {
      name: "SinkFixture",
      description: "Double Overmount, Stainless Steel 25'-33'' and Drain Kit",
      price: 30.00,
      id: 1400,
    }, {
      name: "ToiletAccessories",
      description: "Flange",
      price: 11.00,
      id: 1400,
    }, {
      name: "ToiletAccessories",
      description: "Hose",
      price: 16.50,
      id: 1400,
    }, {
      name: "ToiletAccessories",
      description: "Pump",
      price: 22.00,
      id: 1400,
    }, {
      name: "ToiletAccessories",
      description: "Seat",
      price: 28.60,
      id: 1400,
    }, {
      name: "ToiletAccessories",
      description: "Handle",
      price: 38.50,
      id: 1400,
    }, {
      name: "ToiletAccessories",
      description: "Reinstall and Wax Ring",
      price: 44.00,
      id: 1400,
    }, {
      name: "ToiletFixture",
      description: "Toilet",
      price: 65.00,
      id: 1400,
    }, {
      name: "TubsAccessories",
      description: "Drain Screen",
      price: 22.00,
      id: 1400,
    }, {
      name: "TubsJacuzzi",
      description: "Drain Pipe",
      price: 10.00,
      id: 1400,
    }, {
      name: "TubsJacuzzi",
      description: "Overflow",
      price: 43.00,
      id: 1400,
    }, {
      name: "TubsFaucet",
      description: "Single Handle, Chrome",
      price: 59.50,
      id: 1400,
    }, {
      name: "TubsOther",
      description: "Pick Up and Install",
      price: 65.00,
      id: 1400,
    }, {
      name: "TubsFaucet",
      description: "Single Handle, Brushed Nickel",
      price: 220.00,
      id: 1237,
    }, {
      name: "UtilitiesGas",
      description: "Flexible Hose",
      price: 49.50,
      id: 1238,
    }, {
      name: "UtilitiesGas",
      description: "Valve",
      price: 49.50,
      id: 1239
    }, {
      name: "WallOther",
      description: "Remove Wall and Damage Repair",
      price: 165.00,
      id: 1240,
    }, {
      name: "WallOther",
      description: "Make Wall between Tubs and Toilet",
      price: 275.00,
      id: 1241,
    }, {
      name: "Windowlinds",
      description: "Remove Track and Vane",
      price: 5.50,
      id: 1242,
    }, {
      name: "WindowLock",
      description: "Lock",
      price: 16.50,
      id: 1243,
    }, {
      name: "WindowScreen",
      description: "Recreen",
      price: 16.50,
      id: 150
    }, {
      name: "WindowScreen",
      description: "Repair",
      price: 33.00,
      id: 1244
    }, {
      name: "WindowScreen",
      description: "Window Screen",
      price: 33.00,
      id: 1245
    }, {
      name: "WindowWindow",
      description: "Adjust (sand, fix, caulk, reinstall, wheel)",
      price: 33.00,
      id: 140
    }, {
      name: "Caulking in gaps",
      description: "Outside and inside Kitchen Cabinets",
      price: 0,
      id: 1300
    }, {
      name: "Ceiling fan light",
      description: "glass cover(Parts + 10 % +$3 .00)",
      price: 0,
      id: 1246
    }, {
      name: "Shower doors",
      description: "Clear glass frameless",
      price: 0,
      id: 1247
    }, {
      name: "Shower doors",
      description: "frost glass framed ",
      price: 0,
      id: 1248
    }, {
      name: "Stove",
      description: "burner ",
      price: 0,
      id: 1249
    }, {
      name: "stove",
      description: "grill ",
      price: 0,
      id: 1250
    }, {
      name: "Remove plastic",
      description: "framed mirror from door or wall ",
      price: 5.50,
      id: 1251
    }, {
      name: "Re - install",
      description: "cabinet door ",
      price: 19.80,
      id: 1252
    }, {
      name: "Remove",
      description: "carpet from closet ",
      price: 22.00,
      id: 1254
    }, {
      name: "Replace",
      description: "attic access wood ",
      price: 22.00,
      id: 1255
    }, {
      name: "Tubs",
      description: "drain screen ",
      price: 22.00,
      id: 1256
    }, {
      name: "Pig",
      description: "Tail on air conditioner ",
      price: 27.50,
      id: 1257
    }, {
      name: "Cutting",
      description: "board",
      price: 33.00,
      id: 1258
    }, {
      name: "Repair",
      description: "broken door frame",
      price: 38.50,
      id: 1259
    }, {
      name: "Shower head",
      description: "'S' shape pipe",
      price: 38.50,
      id: 1260
    }, {
      name: "Shower head",
      description: "90 degrees pipe ",
      price: 38.50,
      id: 1400
    }, {
      name: "Install wood molding",
      description: "inside around door frame",
      price: 49.50,
      id: 1400
    }, {
      name: "Adjust air conditioner",
      description: "for water to leak outaide",
      price: 55.00,
      id: 1400
    }, {
      name: "Other",
      description: "Remove shower doors and frames, install them back after reglaze gets done",
      price: 55.00,
      id: 1600
    }, {
      name: "Other",
      description: "Secure wood cove base next to the door by the toilet and install new on wall by the Tubs",
      price: 55.00,
      id: 1600
    }, {
      name: "Other",
      description: "4'' Recessed LED (Connection, Can)",
      price: 99.00,
      id: 1600
    }, {
      name: "Other",
      description: "Run a new line from Jacuzzi circuit breaker board w/ new breaker + GFCI at Jacuzzi",
      price: 275.00,
      id: 1600
    }, {
      name: "Other",
      description: "Dining floor",
      price: 440.00,
      id: 1662
    }, {
      name: "Other",
      description: "Kitchen floor",
      price: 660.00,
      id: 1600
    }],
    "other": [
      {
        name: "OtherDoor",
        description: "Replace back door",
        price: 42.00,
        id: 1075,
      }, {
        name: "OtherTrash",
        description: "Remove trash from the unit",
        price: 2.50,
        id: 1076,
      }, {
        name: "AlarmSmoke",
        description: "Battery",
        price: 5.50,
        id: 1077,
      }, {
        name: "AlarmSmoke",
        description: "Reinstall/Adjust",
        price: 5.50,
        id: 1078,
      }, {
        name: "AlarmSmoke",
        description: "Smoke Alarm (existing wiring)",
        price: 27.50,
        id: 1079,
      },
      {
        name: "AlarmSmoke",
        description: "Smoke Alarm and CO2 Combo (existing wiring)",
        price: 71.50,
        id: 1080
      }, {
        name: "AlarmSmoke",
        description: "Smoke Alarm (new wiring)",
        price: 72.60,
        id: 1081
      }, {
        name: "AlarmSmoke",
        description: "Smoke Alarm and CO2 Combo (new wiring including the box)",
        price: 4.30,
        id: 1082
      }, {
        name: "AppliancesGarbageDisposal",
        description: "Repair/Unclog",
        price: 33.00,
        id: 1083
      }, {
        name: "AppliancesStove",
        description: "Flex",
        price: 49.50,
        id: 1084
      }, {
        name: "AppliancesStove",
        description: "Valve",
        price: 49.50,
        id: 1085
      }, {
        name: "AppliancesDishwasher",
        description: "Installation Only (existing wiring)",
        price: 55.00,
        id: 1086
      }, {
        name: "AppliancesMicrowave",
        description: "Exhaust Pipe/Vent Only",
        price: 55.00,
        id: 1087
      }, {
        name: "Appliances	Stove",
        description: "Installation Only",
        price: 55.00,
        id: 1088
      }, {
        name: "AppliancesMicrowave",
        description: "Microwave with Exhaust Pipe",
        price: 77.00,
        id: 1089
      }, {
        name: "AppliancesDishwasher",
        description: "Electrical Wiring",
        price: 88.00,
        id: 1090
      }, {
        name: "AppliancesMicrowave",
        description: "Electrical Wiring",
        price: 88.00,
        id: 1091
      }, {
        name: "AppliancesRefrigerator",
        description: "Electrical Wiring",
        price: 88.00,
        id: 1092
      }, {
        name: "AppliancesStove",
        description: "Electrical Wiring",
        price: 88.00,
        id: 1093
      }, {
        name: "AppliancesGarbage",
        description: "Disposal	InSink Serator 1/3 HP",
        price: 161.70,
        id: 1094
      }, {
        name: "AppliancesDishwasher",
        description: "Dishwasher with Accessories",
        price: 253.00,
        id: 1095
      }, {
        name: "Bath.AccessPaper",
        description: "Holder	Reinstall/Adjust",
        price: 5.50,
        id: 1096
      }, {
        name: "Bath.AccessTowel",
        description: "Bar	Reinstall/Adjust",
        price: 5.50,
        id: 1097
      }, {
        name: "Bath.AccessTowel",
        description: "Ring	Reinstall/Adjust",
        price: 5.50,
        id: 1098
      }, {
        name: "Bath.AccessSet",
        description: "Reinstall Paper Holder, Towel Bar and Ring",
        price: 5.78,
        id: 1099
      }, {
        name: "Bath.AccessPaper",
        description: "Holder	Regular",
        price: 11.00,
        id: 1100
      }, {
        name: "Bath.AccessTowel",
        description: "Bar	Regular",
        price: 11.00,
        id: 1101
      }, {
        name: "Bath.AccessTowel",
        description: "Ring	Towel Ring",
        price: 22.00,
        id: 1102
      }, {
        name: "Bath.AccessTowel",
        description: "Bar	Satin Finish",
        price: 49.50,
        id: 1103
      }, {
        name: "Bath.AccessSet",
        description: "Paper Holder, Towel Bar and Ring",
        price: 99.00,
        id: 1104
      }, {
        name: "CabinetFixture",
        description: "Full Set 12",
        price: 0,
        id: 1105
      }, {
        name: "CabinetVanity",
        description: "24'' Brown",
        price: 0,
        id: 1106
      }, {
        name: "CabinetVanity",
        description: "30'' Brown",
        price: 0,
        id: 1107
      }, {
        name: "CabinetVanity",
        description: "36'' Brown",
        price: 0,
        id: 1108
      }, {
        name: "CabinetDoor",
        description: "Catch clip remove and install new",
        price: 4.40,
        id: 1109
      }, {
        name: "CabinetFixture",
        description: "Reinstall/Adjust",
        price: 5.50,
        id: 1110
      }, {
        name: "CabinetMedicine",
        description: "Reinstall/Adjus",
        price: 5.50,
        id: 1111
      },
      {
        name: "CabinetShelves",
        description: "Reinstall/Adjust",
        price: 5.50,
        id: 1112
      }, {
        name: "CabinetKnob",
        description: "Knob/Handles",
        price: 7.70,
        id: 1113
      }, {
        name: "CabinetDoor",
        description: "Adjust",
        price: 11.00,
        id: 1114
      }, {
        name: "CabinetHinges",
        description: "Bathroom",
        price: 16.50,
        id: 1115
      }, {
        name: "CabinetHinges",
        description: "Hallway",
        price: 16.50,
        id: 1116
      }, {
        name: "CabinetHinges",
        description: "Kitchen",
        price: 16.50,
        id: 1117
      }, {
        name: "CabinetDrawer",
        description: "Guide",
        price: 22.00,
        id: 1118
      }, {
        name: "CabinetDoor",
        description: "Cut / Trim",
        price: 33.00,
        id: 1706
      }, {
        name: "CabinetFixture",
        description: "Base Molding for Top of Cabinet",
        price: 33.00,
        id: 1700
      }, {
        name: "CabinetMedicine",
        description: "Remove and Patch Drywall",
        price: 44.00,
        id: 1701
      }, {
        name: "CabinetOther",
        description: "Remove Iron board (patch drywall, no paint)",
        price: 44.00,
        id: 1702
      }, {
        name: "CabinetFixture",
        description: "Replace Water Damage - antifungal",
        price: 49.50,
        id: 1703
      }, {
        name: "CabinetDoor",
        description: "Set (hinges, latch, removal, install, catch)",
        price: 55.00,
        id: 1704
      }, {
        name: "CabinetFixture",
        description: "Base Cabinet and Side Panel Extension ",
        price: 55.00,
        id: 1705
      }, {
        name: "CabinetMedicine",
        description: "Framed (existing hole)",
        price: 84.70,
        id: 1663
      }, {
        name: "CabinetMedicine",
        description: "Framed (make a new hole)",
        price: 106.70,
        id: 1664
      }, {
        name: "ClosetMirror Door",
        description: "Framed",
        price: 0,
        id: 1665
      }, {
        name: "ClosetMirror Door",
        description: "Track",
        price: 0,
        id: 1666
      }, {
        name: "ClosetStopper",
        description: "Stick on Wall",
        price: 4.40,
        id: 1667
      }, {
        name: "ClosetMirror",
        description: "Door	Reinstall/Adjust",
        price: 5.50,
        id: 1668
      }, {
        name: "ClosetHinges",
        description: "Each",
        price: 16.50,
        id: 1669
      }, {
        name: "ClosetStopper",
        description: "Half Moon",
        price: 16.50,
        id: 1670
      }, {
        name: "ClosetKnob",
        description: "Knob/Handle",
        price: 22.00,
        id: 1671
      }, {
        name: "ClosetShelves",
        description: "Rod Hanger",
        price: 22.00,
        id: 1672
      }, {
        name: "ClosetMirror",
        description: "Door	Repair Track",
        price: 33.00,
        id: 1673
      }, {
        name: "ClosetDoor",
        description: "Panel",
        price: 77.00,
        id: 1674
      }, {
        name: "ClosetDoor",
        description: "Solid",
        price: 77.00,
        id: 1119
      }, {
        name: "ClosetMirror",
        description: "Door	Adjust and Cut",
        price: 110.00,
        id: 1120
      }, {
        name: "ClosetOther",
        description: "Close Closet Opening (mirror door, drywall, frame)",
        price: 165.00,
        id: 1121
      }, {
        name: "ClosetShelves",
        description: "Double Shelves with Hanger",
        price: 247.50,
        id: 1122
      }, {
        name: "CountertopOther",
        description: "Clean",
        price: 27.50,
        id: 1123
      }, {
        name: "CountertopFixture",
        description: "Built L-Shape Bar - wood frame on top and sides",
        price: 82.50,
        id: 1124
      }, {
        name: "CountertopOther",
        description: "Cut / Sink Hole (Each 2' x 8)",
        price: 88.00,
        id: 1125
      }, {
        name: "CountertopOther",
        description: "Regrout and seal",
        price: 110.00,
        id: 1126
      }, {
        name: "CountertopQuartz",
        description: "Regular (fabricate and install)",
        price: 495.00,
        id: 1127
      }, {
        name: "CountertopGranite",
        description: "White / Black (fabricate and install)",
        price: 495.00,
        id: 1128
      }, {
        name: "CountertopBacksplash",
        description: "Mosaic Tile",
        price: 569.80,
        id: 1129
      }, {
        name: "CountertopGranite",
        description: "Regular (fabricate and install)",
        price: 605.00,
        id: 1130
      }, {
        name: "DoorStopper",
        description: "Stick on Wall",
        price: 4.40,
        id: 1131
      }, {
        name: "DoorLock",
        description: "Striker Plate",
        price: 6.60,
        id: 1132
      }, {
        name: "DoorLock",
        description: "Create Hole",
        price: 11.00,
        id: 1133
      }, {
        name: "DoorScreen",
        description: "Regular",
        price: 11.00,
        id: 1134
      }, {
        name: "DoorStopper",
        description: "Half Moon",
        price: 16.50,
        id: 1135
      }, {
        name: "DoorAdd-ons",
        description: "Peep Hole",
        price: 22.00,
        id: 1136
      }, {
        name: "DoorKnob",
        description: "Interior/Room",
        price: 22.00,
        id: 1137
      }, {
        name: "DoorOther",
        description: "Patch",
        price: 22.00,
        id: 1138
      }, {
        name: "DoorAdd-ons",
        description: "Sweep",
        price: 33.00,
        id: 1139
      }, {
        name: "DoorHinges",
        description: "Set of 2",
        price: 33.00,
        id: 1140
      }, {
        name: "DoorKnob",
        description: "Guard",
        price: 33.00,
        id: 1141
      }, {
        name: "DoorOther",
        description: "Shave",
        price: 33.00,
        id: 1142
      }, {
        name: "DoorScreen",
        description: "Repair",
        price: 33.00,
        id: 1143
      }, {
        name: "DoorAdd-ons",
        description: "Threshold",
        price: 38.50,
        id: 1144
      }, {
        name: "DoorSliding",
        description: "Glass	Handle",
        price: 38.50,
        id: 1145
      }, {
        name: "DoorAdd-ons",
        description: "Weatherstrip",
        price: 39.60,
        id: 1146
      }, {
        name: "DoorAdd-ons",
        description: "Bell",
        price: 44.00,
        id: 1147
      }, {
        name: "DoorAdd-ons",
        description: "Kick Plate",
        price: 44.00,
        id: 1148
      }, {
        name: "DoorLock",
        description: "Front Door",
        price: 44.00,
        id: 1149
      }, {
        name: "DoorSliding",
        description: "Glass	Repair (clean, reinstall)",
        price: 49.50,
        id: 1150
      }, {
        name: "DoorLock",
        description: "Front Door - Kwikset",
        price: 55.00,
        id: 1151
      }, {
        name: "DoorScreen",
        description: "Mesh",
        price: 55.00,
        id: 1152
      }, {
        name: "DoorInterior",
        description: "Panel",
        price: 77.00,
        id: 1153
      }, {
        name: "DoorScreen",
        description: "Metal",
        price: 198.00,
        id: 1154
      }, {
        name: "DoorExterior",
        description: "Solid/Wood",
        price: 242,
        id: 1155
      }, {
        name: "ElectricalOutlet",
        description: "Plate - decora",
        price: 2.20,
        id: 1156
      }, {
        name: "ElectricalSwitch",
        description: "Plate - decora",
        price: 2.20,
        id: 1157
      }, {
        name: "ElectricalOutlet",
        description: "Decora",
        price: 8.80,
        id: 1158
      }, {
        name: "ElectricalJack",
        description: "Cable",
        price: 16.5,
        id: 1159
      }, {
        name: "ElectricalJack",
        description: "Phone",
        price: 16.5,
        id: 1160
      }, {
        name: "ElectricalSwitch",
        description: "3 way - decora",
        price: 22.00,
        id: 1161
      }, {
        name: "ElectricalSwitch",
        description: "Dual - decora",
        price: 22.00,
        id: 1162
      }, {
        name: "ElectricalSwitch",
        description: "Dimmer",
        price: 39.60,
        id: 1163
      }, {
        name: "ElectricalGFCI",
        description: "Relocate",
        price: 55.00,
        id: 1164
      }, {
        name: "ElectricalGFCI",
        description: "Replace (no wiring)",
        price: 55.00,
        id: 1165
      }, {
        name: "ElectricalOutlet",
        description: "Wiring next to AC",
        price: 55.00,
        id: 1166
      }, {
        name: "FanCeiling",
        description: "Regular Light Bulb",
        price: 2.20,
        id: 1167
      }, {
        name: "FanCeiling",
        description: "Special Light Bulb",
        price: 4.13,
        id: 1168
      }, {
        name: "FanCeiling",
        description: "Pull String",
        price: 11.00,
        id: 1169
      }, {
        name: "FanCeiling",
        description: "Control and switch",
        price: 33.00,
        id: 1170
      }, {
        name: "FanCeiling",
        description: "Brushed Nickel",
        price: 165.00,
        id: 1171
      }, {
        name: "FloorOther",
        description: "Transition",
        price: 33.00,
        id: 1172
      }, {
        name: "FloorTile",
        description: "Repair",
        price: 33.00,
        id: 1173
      }, {
        name: "FloorOther",
        description: "Base Molding",
        price: 44.00,
        id: 1174
      }, {
        name: "FloorOther",
        description: "Baseboard",
        price: 66.00,
        id: 1175
      }, {
        name: "FloorTile",
        description: "Regrout and seal",
        price: 110.00,
        id: 1176
      }, {
        name: "FloorTile",
        description: "Grout, sealer, baseboard (dining / bathroom area)",
        price: 440.00,
        id: 1177
      }, {
        name: "FloorTile",
        description: "Grout, sealer, baseboard (kitchen area)",
        price: 660.00,
        id: 1178
      }
    ]
  };

  $rootScope.pageTitle = "Login";
  $rootScope.items = [];
  $rootScope.itemsToBeReplaced = [];
  $rootScope.apartmentInfo = {
    buildingNum: "",
    apartmentNum: "",
    date: ""
  };


  $rootScope.$on("$locationChangeStart", function (event, next, current) {

    // rendering a new list of items
    let room = next.split("rooms")[1];
    switch (room) {

      case "":
        $rootScope.pageTitle = "Rooms Index";
        break;
      case "/:bathroom":
        $rootScope.items = $rootScope.allItems.masterBath;
        $rootScope.pageTitle = "Master Bathroom";
        setTimeout(reCheckBoxes, 1000);
        break;
      case "/:bathroom1":
        $rootScope.items = $rootScope.allItems.hallBath;
        $rootScope.pageTitle = "Hallway Bathroom 1";
        setTimeout(reCheckBoxes, 1000);
        break;
      case "/:bathroom2":
        $rootScope.items = $rootScope.allItems.hallwayBath;
        $rootScope.pageTitle = "Hallway Bathroom 2";
        setTimeout(reCheckBoxes, 1000);
        break;
      case "/:kitchen":
        $rootScope.items = $rootScope.allItems.kitchen;
        $rootScope.pageTitle = "Kitchen";
        setTimeout(reCheckBoxes, 1000);
        break;
      case "/:living":
        $rootScope.items = $rootScope.allItems.livingRoom;
        $rootScope.pageTitle = "Living Room";
        setTimeout(reCheckBoxes, 1000);
        break;
      case "/:bedroom":
        $rootScope.items = $rootScope.allItems.masterBedroom;
        $rootScope.pageTitle = "Master Bedroom";
        setTimeout(reCheckBoxes, 1000);
        break;
      case "/:bedroom1":
        $rootScope.items = $rootScope.allItems.guestBedroom;
        $rootScope.pageTitle = "Guest Bedroom";
        setTimeout(reCheckBoxes, 1000);
        break;
      case "/:bedroom2":
        $rootScope.items = $rootScope.allItems.extraBed;
        $rootScope.pageTitle = "Extra Bedroom";
        setTimeout(reCheckBoxes, 1000);
        break;
      case "/:hallway":
        $rootScope.items = $rootScope.allItems.hallway;
        $rootScope.pageTitle = "Hallway";
        setTimeout(reCheckBoxes, 1000);
        break;
      case "/:laundry":
        $rootScope.items = $rootScope.allItems.laundry;
        $rootScope.pageTitle = "Laundry";
        setTimeout(reCheckBoxes, 1000);
        break;
      case "/:patio":
        $rootScope.items = $rootScope.allItems.patio;
        $rootScope.pageTitle = "Patio";
        setTimeout(reCheckBoxes, 1000);
        break;
      case "/:entrance":
        $rootScope.items = $rootScope.allItems.entrance;
        $rootScope.pageTitle = "Entrance";
        setTimeout(reCheckBoxes, 1000);
        break;
      case "/:balcony":
        $rootScope.items = $rootScope.allItems.balcony;
        $rootScope.pageTitle = "Balcony";
        setTimeout(reCheckBoxes, 1000);
        break; 
      case "/:construction":
        $rootScope.items = $rootScope.allItems.construction;
        $rootScope.pageTitle = "Construction";
        setTimeout(reCheckBoxes, 1000);
        break;
      case "/:dinning":
        $rootScope.items = $rootScope.allItems.dinningArea;
        $rootScope.pageTitle = "Dinning Area";
        setTimeout(reCheckBoxes, 1000);
        break;
      case "/:other":
        $rootScope.items = $rootScope.allItems.other;
        $rootScope.pageTitle = "Other";
        setTimeout(reCheckBoxes, 1000);
        break;
      default:
        break;
    }
    // re-checking already checked checkboxes
    function reCheckBoxes() {
      let checkboxes = document.querySelectorAll("input[type='checkbox']");
      for (let i = 0; i < $rootScope.itemsToBeReplaced.length; i++) {
        if ($rootScope.itemsToBeReplaced[i].room === $rootScope.pageTitle) {
          let index = Number($rootScope.itemsToBeReplaced[i].index);
          // re-check items
          checkboxes[index].checked = true;
          // re-display textareas
          checkboxes[index].parentNode.parentNode.nextElementSibling.style.display = "table-row";
          if ($rootScope.itemsToBeReplaced[i].comment !== undefined) {
            checkboxes[index].parentNode.parentNode.nextElementSibling.children[0].children[0].value = $rootScope.itemsToBeReplaced[i].comment;
          } else {
            checkboxes[index].parentNode.parentNode.nextElementSibling.children[0].children[0].value = "Comment";
          }
          if ($rootScope.itemsToBeReplaced[i].quantity !== undefined) {
            checkboxes[index].parentNode.parentNode.nextElementSibling.children[1].children[0].value = $rootScope.itemsToBeReplaced[i].quantity;
          } else {
            checkboxes[index].parentNode.parentNode.nextElementSibling.children[1].children[0].value = 1;
          }
        }
      }
    }
  });
});