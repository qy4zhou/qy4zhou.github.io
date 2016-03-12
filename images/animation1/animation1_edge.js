/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'par1_grass',
                            type: 'image',
                            rect: ['0px', '0px', '720px', '522px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"par1_grass.jpg",'0px','0px']
                        },
                        {
                            id: 'par1_road2',
                            type: 'image',
                            rect: ['0px', '315px', '720px', '207px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"par1_road.png",'0px','0px']
                        },
                        {
                            id: 'par1_cloud2',
                            type: 'image',
                            rect: ['209px', '34px', '140px', '91px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"par1_cloud2.png",'0px','0px']
                        },
                        {
                            id: 'par1_cloud1',
                            type: 'image',
                            rect: ['463px', '97px', '220px', '85px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"par1_cloud1.png",'0px','0px']
                        },
                        {
                            id: 'par1_temple',
                            type: 'image',
                            rect: ['182px', '-314px', '355px', '282px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"par1_temple.png",'0px','0px']
                        },
                        {
                            id: 'par1_cloud3',
                            type: 'image',
                            rect: ['44px', '52px', '121px', '89px', 'auto', 'auto'],
                            overflow: 'visible',
                            fill: ["rgba(0,0,0,0)",im+"par1_cloud3.png",'0px','0px','100%','100%', 'no-repeat'],
                            transform: [[],['-8']]
                        },
                        {
                            id: 'par1_smoke1',
                            type: 'image',
                            rect: ['75px', '240px', '539px', '189px', 'auto', 'auto'],
                            overflow: 'visible',
                            opacity: '0.17886197560976',
                            fill: ["rgba(0,0,0,0)",im+"par1_smoke1.png",'0px','0px']
                        },
                        {
                            id: 'par1_smoke2',
                            type: 'image',
                            rect: ['75px', '245px', '519px', '179px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"par1_smoke2.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '720px', '522px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 685,
                    autoPlay: true,
                    data: [
                        [
                            "eid73",
                            "left",
                            500,
                            0,
                            "linear",
                            "${par1_smoke2}",
                            '75px',
                            '75px'
                        ],
                        [
                            "eid33",
                            "top",
                            0,
                            141,
                            "linear",
                            "${par1_temple}",
                            '-314px',
                            '74px'
                        ],
                        [
                            "eid57",
                            "opacity",
                            0,
                            214,
                            "linear",
                            "${par1_smoke2}",
                            '0.000000',
                            '0.08527418699187'
                        ],
                        [
                            "eid58",
                            "opacity",
                            214,
                            471,
                            "linear",
                            "${par1_smoke2}",
                            '0.08527418699187',
                            '0'
                        ],
                        [
                            "eid65",
                            "height",
                            500,
                            0,
                            "linear",
                            "${par1_smoke2}",
                            '179px',
                            '179px'
                        ],
                        [
                            "eid74",
                            "top",
                            500,
                            0,
                            "linear",
                            "${par1_smoke2}",
                            '245px',
                            '245px'
                        ],
                        [
                            "eid67",
                            "height",
                            330,
                            0,
                            "linear",
                            "${par1_smoke1}",
                            '189px',
                            '189px'
                        ],
                        [
                            "eid66",
                            "width",
                            500,
                            0,
                            "linear",
                            "${par1_smoke2}",
                            '519px',
                            '519px'
                        ],
                        [
                            "eid34",
                            "left",
                            0,
                            141,
                            "linear",
                            "${par1_temple}",
                            '182px',
                            '171px'
                        ],
                        [
                            "eid75",
                            "location",
                            330,
                            0,
                            "linear",
                            "${par1_smoke1}",
                            [[344.5, 334.5, 0, 0, 0, 0,0],[344.5, 334.5, 0, 0, 0, 0,0]]
                        ],
                        [
                            "eid69",
                            "height",
                            141,
                            0,
                            "linear",
                            "${par1_temple}",
                            '282px',
                            '282px'
                        ],
                        [
                            "eid53",
                            "opacity",
                            0,
                            325,
                            "linear",
                            "${par1_smoke1}",
                            '0.000000',
                            '0.17886197560976'
                        ],
                        [
                            "eid55",
                            "opacity",
                            325,
                            32,
                            "linear",
                            "${par1_smoke1}",
                            '0.178862',
                            '1'
                        ],
                        [
                            "eid78",
                            "opacity",
                            357,
                            328,
                            "linear",
                            "${par1_smoke1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid68",
                            "width",
                            330,
                            0,
                            "linear",
                            "${par1_smoke1}",
                            '539px',
                            '539px'
                        ],
                        [
                            "eid70",
                            "width",
                            141,
                            0,
                            "linear",
                            "${par1_temple}",
                            '355px',
                            '355px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("animation1_edgeActions.js");
})("EDGE-7068124");
