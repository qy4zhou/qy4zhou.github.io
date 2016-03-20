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
                            rect: ['0px', '309px', '720px', '213px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"par1_road.png",'0px','0px']
                        },
                        {
                            id: 'par1_cloud3',
                            type: 'image',
                            rect: ['42px', '26px', '149px', '107px', 'auto', 'auto'],
                            overflow: 'visible',
                            opacity: '0.7',
                            fill: ["rgba(0,0,0,0)",im+"par1_cloud3.png",'0px','0px','100%','100%', 'no-repeat'],
                            transform: [[],['-8']]
                        },
                        {
                            id: 'par1_cloud2',
                            type: 'image',
                            rect: ['209px', '34px', '165px', '107px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"par1_cloud2.png",'0px','0px']
                        },
                        {
                            id: 'par1_cloud1',
                            type: 'image',
                            rect: ['430px', '40px', '261px', '107px', 'auto', 'auto'],
                            opacity: '0.69918653658537',
                            fill: ["rgba(0,0,0,0)",im+"par1_cloud1.png",'0px','0px']
                        },
                        {
                            id: 'par1_temple',
                            type: 'image',
                            rect: ['172px', '64px', '355px', '282px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"par1_temple.png",'0px','0px']
                        },
                        {
                            id: 'par1_tree_front',
                            type: 'image',
                            rect: ['457px', '529px', '306px', '350px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"par1_tree_front.png",'0px','0px']
                        },
                        {
                            id: 'par1_monk3',
                            display: 'none',
                            type: 'image',
                            rect: ['519px', '302px', '20px', '42px', 'auto', 'auto'],
                            overflow: 'visible',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"par1_monk3.png",'0px','0px']
                        },
                        {
                            id: 'par1_smoke1',
                            display: 'none',
                            type: 'image',
                            rect: ['75px', '240px', '539px', '189px', 'auto', 'auto'],
                            overflow: 'visible',
                            opacity: '0.31707317073171',
                            fill: ["rgba(0,0,0,0)",im+"par1_smoke1.png",'0px','0px']
                        },
                        {
                            id: 'par1_monk1',
                            display: 'none',
                            type: 'image',
                            rect: ['123px', '327px', '57px', '46px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"par1_monk1.png",'0px','0px']
                        },
                        {
                            id: 'par1_smoke2',
                            display: 'none',
                            type: 'image',
                            rect: ['75px', '253px', '519px', '179px', 'auto', 'auto'],
                            opacity: '0.20325203252033',
                            fill: ["rgba(0,0,0,0)",im+"par1_smoke2.png",'0px','0px']
                        },
                        {
                            id: 'par1_tree_back',
                            type: 'image',
                            rect: ['4px', '541px', '180px', '179px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"par1_tree_back.png",'0px','0px']
                        },
                        {
                            id: 'par1_monk2',
                            display: 'none',
                            type: 'image',
                            rect: ['220px', '325px', '35px', '91px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"par1_monk2.png",'0px','0px']
                        },
                        {
                            id: 'par1_person3',
                            display: 'none',
                            type: 'image',
                            rect: ['529px', '531px', '43px', '189px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"par1_person.png",'0px','0px']
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
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid295",
                            "rotateZ",
                            1864,
                            34,
                            "linear",
                            "${par1_tree_front}",
                            '0deg',
                            '-4deg'
                        ],
                        [
                            "eid287",
                            "rotateZ",
                            1897,
                            66,
                            "linear",
                            "${par1_tree_front}",
                            '-4deg',
                            '0deg'
                        ],
                        [
                            "eid321",
                            "height",
                            3000,
                            0,
                            "linear",
                            "${par1_cloud1}",
                            '107px',
                            '107px'
                        ],
                        [
                            "eid340",
                            "top",
                            2500,
                            500,
                            "linear",
                            "${par1_person3}",
                            '531px',
                            '316px'
                        ],
                        [
                            "eid227",
                            "opacity",
                            1894,
                            36,
                            "linear",
                            "${par1_smoke2}",
                            '0.20325203252033',
                            '0.84010872899032'
                        ],
                        [
                            "eid230",
                            "opacity",
                            1930,
                            180,
                            "linear",
                            "${par1_smoke2}",
                            '0.84010872899032',
                            '1'
                        ],
                        [
                            "eid226",
                            "opacity",
                            2110,
                            390,
                            "linear",
                            "${par1_smoke2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid296",
                            "rotateZ",
                            1828,
                            66,
                            "linear",
                            "${par1_monk2}",
                            '0deg',
                            '-7deg'
                        ],
                        [
                            "eid279",
                            "rotateZ",
                            1894,
                            36,
                            "linear",
                            "${par1_monk2}",
                            '-7deg',
                            '0deg'
                        ],
                        [
                            "eid86",
                            "left",
                            1537,
                            357,
                            "linear",
                            "${par1_temple}",
                            '182px',
                            '172px'
                        ],
                        [
                            "eid294",
                            "rotateZ",
                            1894,
                            36,
                            "linear",
                            "${par1_tree_back}",
                            '0deg',
                            '5deg'
                        ],
                        [
                            "eid285",
                            "rotateZ",
                            1930,
                            70,
                            "linear",
                            "${par1_tree_back}",
                            '5deg',
                            '0deg'
                        ],
                        [
                            "eid206",
                            "opacity",
                            2064,
                            230,
                            "linear",
                            "${par1_smoke1}",
                            '0.3170729875564575',
                            '1'
                        ],
                        [
                            "eid224",
                            "opacity",
                            2294,
                            116,
                            "linear",
                            "${par1_smoke1}",
                            '1',
                            '0.78648648223257'
                        ],
                        [
                            "eid225",
                            "opacity",
                            2410,
                            90,
                            "linear",
                            "${par1_smoke1}",
                            '0.78648648223257',
                            '0'
                        ],
                        [
                            "eid336",
                            "height",
                            1500,
                            1500,
                            "linear",
                            "${par1_cloud2}",
                            '107px',
                            '117px'
                        ],
                        [
                            "eid147",
                            "opacity",
                            0,
                            1500,
                            "easeInOutExpo",
                            "${par1_cloud2}",
                            '1',
                            '0.69918699186992'
                        ],
                        [
                            "eid148",
                            "opacity",
                            1500,
                            1500,
                            "easeInOutExpo",
                            "${par1_cloud2}",
                            '0.699187',
                            '1'
                        ],
                        [
                            "eid297",
                            "rotateZ",
                            1860,
                            35,
                            "linear",
                            "${par1_monk1}",
                            '0deg',
                            '10deg'
                        ],
                        [
                            "eid276",
                            "rotateZ",
                            1895,
                            69,
                            "linear",
                            "${par1_monk1}",
                            '10deg',
                            '0deg'
                        ],
                        [
                            "eid318",
                            "height",
                            1500,
                            0,
                            "linear",
                            "${Stage}",
                            '522px',
                            '522px'
                        ],
                        [
                            "eid195",
                            "display",
                            0,
                            0,
                            "linear",
                            "${par1_monk1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid202",
                            "display",
                            624,
                            0,
                            "linear",
                            "${par1_monk1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid258",
                            "top",
                            1863,
                            34,
                            "linear",
                            "${par1_tree_front}",
                            '79px',
                            '74px'
                        ],
                        [
                            "eid262",
                            "top",
                            1897,
                            66,
                            "linear",
                            "${par1_tree_front}",
                            '74px',
                            '79px'
                        ],
                        [
                            "eid292",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${par1_tree_back}",
                            '1',
                            '1'
                        ],
                        [
                            "eid293",
                            "opacity",
                            380,
                            0,
                            "linear",
                            "${par1_tree_back}",
                            '1',
                            '1'
                        ],
                        [
                            "eid317",
                            "width",
                            1500,
                            0,
                            "linear",
                            "${Stage}",
                            '720px',
                            '720px'
                        ],
                        [
                            "eid324",
                            "left",
                            1500,
                            0,
                            "linear",
                            "${par1_cloud2}",
                            '209px',
                            '209px'
                        ],
                        [
                            "eid328",
                            "left",
                            3000,
                            0,
                            "linear",
                            "${par1_cloud2}",
                            '209px',
                            '209px'
                        ],
                        [
                            "eid33",
                            "top",
                            1537,
                            357,
                            "linear",
                            "${par1_temple}",
                            '-314px',
                            '64px'
                        ],
                        [
                            "eid291",
                            "opacity",
                            70,
                            0,
                            "linear",
                            "${par1_tree_front}",
                            '1',
                            '1'
                        ],
                        [
                            "eid338",
                            "width",
                            1500,
                            1500,
                            "linear",
                            "${par1_cloud2}",
                            '165px',
                            '180px'
                        ],
                        [
                            "eid150",
                            "opacity",
                            0,
                            3000,
                            "easeInOutExpo",
                            "${par1_cloud1}",
                            '0.699187',
                            '1'
                        ],
                        [
                            "eid288",
                            "top",
                            1828,
                            66,
                            "linear",
                            "${par1_monk2}",
                            '325px',
                            '330px'
                        ],
                        [
                            "eid243",
                            "top",
                            1894,
                            36,
                            "linear",
                            "${par1_monk2}",
                            '320px',
                            '330px'
                        ],
                        [
                            "eid320",
                            "top",
                            1500,
                            0,
                            "linear",
                            "${par1_cloud1}",
                            '40px',
                            '40px'
                        ],
                        [
                            "eid197",
                            "display",
                            70,
                            0,
                            "linear",
                            "${par1_monk3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid198",
                            "display",
                            1290,
                            0,
                            "linear",
                            "${par1_monk3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid242",
                            "top",
                            1894,
                            36,
                            "linear",
                            "${par1_tree_back}",
                            '188px',
                            '182px'
                        ],
                        [
                            "eid244",
                            "top",
                            1930,
                            70,
                            "linear",
                            "${par1_tree_back}",
                            '182px',
                            '188px'
                        ],
                        [
                            "eid322",
                            "left",
                            1500,
                            1500,
                            "linear",
                            "${par1_cloud1}",
                            '430px',
                            '413px'
                        ],
                        [
                            "eid323",
                            "width",
                            3000,
                            0,
                            "linear",
                            "${par1_cloud1}",
                            '261px',
                            '261px'
                        ],
                        [
                            "eid257",
                            "top",
                            1863,
                            34,
                            "linear",
                            "${par1_monk3}",
                            '302px',
                            '283px'
                        ],
                        [
                            "eid261",
                            "top",
                            1897,
                            66,
                            "linear",
                            "${par1_monk3}",
                            '283px',
                            '302px'
                        ],
                        [
                            "eid132",
                            "height",
                            0,
                            1500,
                            "easeInOutExpo",
                            "${par1_cloud3}",
                            '91px',
                            '90px'
                        ],
                        [
                            "eid137",
                            "height",
                            1500,
                            1500,
                            "easeInOutExpo",
                            "${par1_cloud3}",
                            '90px',
                            '107px'
                        ],
                        [
                            "eid311",
                            "display",
                            0,
                            0,
                            "linear",
                            "${par1_person3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid310",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${par1_person3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid131",
                            "location",
                            1500,
                            0,
                            "easeInOutExpo",
                            "${par1_cloud3}",
                            [[112.33, 75.84, 0, 0, 0, 0,0],[112.33, 75.84, 0, 0, 0, 0,0]]
                        ],
                        [
                            "eid135",
                            "location",
                            3000,
                            0,
                            "easeInOutExpo",
                            "${par1_cloud3}",
                            [[112.33, 75.84, 0, 0, 0, 0,0],[112.33, 75.84, 0, 0, 0, 0,0]]
                        ],
                        [
                            "eid142",
                            "opacity",
                            0,
                            3000,
                            "easeInOutExpo",
                            "${par1_cloud3}",
                            '0.7',
                            '1'
                        ],
                        [
                            "eid201",
                            "display",
                            0,
                            0,
                            "linear",
                            "${par1_monk2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid200",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${par1_monk2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid249",
                            "top",
                            1860,
                            35,
                            "linear",
                            "${par1_monk1}",
                            '327px',
                            '310px'
                        ],
                        [
                            "eid250",
                            "top",
                            1895,
                            69,
                            "linear",
                            "${par1_monk1}",
                            '310px',
                            '327px'
                        ],
                        [
                            "eid69",
                            "height",
                            1610,
                            0,
                            "linear",
                            "${par1_temple}",
                            '282px',
                            '282px'
                        ],
                        [
                            "eid70",
                            "width",
                            1894,
                            0,
                            "linear",
                            "${par1_temple}",
                            '355px',
                            '355px'
                        ],
                        [
                            "eid229",
                            "height",
                            1894,
                            0,
                            "linear",
                            "${par1_monk2}",
                            '91px',
                            '91px'
                        ],
                        [
                            "eid203",
                            "display",
                            0,
                            0,
                            "linear",
                            "${par1_smoke1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid204",
                            "display",
                            2064,
                            0,
                            "linear",
                            "${par1_smoke1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid312",
                            "left",
                            2500,
                            500,
                            "easeOutBack",
                            "${par1_person3}",
                            '529px',
                            '581px'
                        ],
                        [
                            "eid298",
                            "rotateZ",
                            1864,
                            34,
                            "linear",
                            "${par1_monk3}",
                            '0deg',
                            '9deg'
                        ],
                        [
                            "eid282",
                            "rotateZ",
                            1897,
                            66,
                            "linear",
                            "${par1_monk3}",
                            '9deg',
                            '0deg'
                        ],
                        [
                            "eid133",
                            "width",
                            0,
                            1500,
                            "easeInOutExpo",
                            "${par1_cloud3}",
                            '127px',
                            '130px'
                        ],
                        [
                            "eid138",
                            "width",
                            1500,
                            1500,
                            "easeInOutExpo",
                            "${par1_cloud3}",
                            '130px',
                            '149px'
                        ],
                        [
                            "eid337",
                            "top",
                            1500,
                            1500,
                            "linear",
                            "${par1_cloud2}",
                            '34px',
                            '24px'
                        ],
                        [
                            "eid207",
                            "display",
                            0,
                            0,
                            "linear",
                            "${par1_smoke2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid208",
                            "display",
                            1894,
                            0,
                            "linear",
                            "${par1_smoke2}",
                            'none',
                            'block'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("animation1_edgeActions.js");
})("EDGE-7068124");
