var elementsLvl = [];
var wallsLvl = [];

//LEVEL 0
elementsLvl[0] =
[
{type:"element",id:"target",top:255,left:285},
{type:"element",id:"dumbbot",top:120,left:180},
{type:"element",id:"player",top:105,left:360}
];

wallsLvl[0] =
[
{type:"wall",id:0,top:75, left:165},{type:"wall",id:1,top:75, left:180},{type:"wall",id:2,top:75, left:195},{type:"wall",id:3,top:75, left:210},{type:"wall",id:4,top:75, left:225},{type:"wall",id:5,top:75, left:240},{type:"wall",id:6,top:75, left:255},{type:"wall",id:7,top:75, left:270},{type:"wall",id:8,top:75, left:285},{type:"wall",id:9,top:75, left:300},{type:"wall",id:10,top:75, left:315},{type:"wall",id:11,top:75, left:330},{type:"wall",id:12,top:75, left:345},{type:"wall",id:13,top:75, left:360},{type:"wall",id:14,top:75, left:375},{type:"wall",id:15,top:75, left:390},{type:"wall",id:16,top:75, left:405},{type:"wall",id:17,top:75, left:420},{type:"wall",id:18,top:75, left:435},{type:"wall",id:19,top:75, left:450},{type:"wall",id:20,top:75, left:465},{type:"wall",id:21,top:75, left:480},{type:"wall",id:22,top:90, left:480},{type:"wall",id:23,top:105, left:480},{type:"wall",id:24,top:120, left:480},{type:"wall",id:25,top:135, left:480},{type:"wall",id:26,top:150, left:480},{type:"wall",id:27,top:165, left:480},{type:"wall",id:28,top:180, left:480},{type:"wall",id:29,top:195, left:480},{type:"wall",id:30,top:210, left:480},{type:"wall",id:31,top:225, left:480},{type:"wall",id:32,top:240, left:480},{type:"wall",id:33,top:255, left:480},{type:"wall",id:34,top:270, left:480},{type:"wall",id:35,top:285, left:480},{type:"wall",id:36,top:285, left:465},{type:"wall",id:37,top:285, left:450},{type:"wall",id:38,top:285, left:435},{type:"wall",id:39,top:285, left:420},{type:"wall",id:40,top:285, left:405},{type:"wall",id:41,top:285, left:390},{type:"wall",id:42,top:285, left:375},{type:"wall",id:43,top:285, left:360},{type:"wall",id:44,top:285, left:345},{type:"wall",id:45,top:285, left:330},{type:"wall",id:46,top:285, left:315},{type:"wall",id:47,top:285, left:300},{type:"wall",id:48,top:285, left:285},{type:"wall",id:49,top:285, left:270},{type:"wall",id:50,top:285, left:255},{type:"wall",id:51,top:285, left:240},{type:"wall",id:52,top:285, left:225},{type:"wall",id:53,top:285, left:210},{type:"wall",id:54,top:285, left:195},{type:"wall",id:55,top:285, left:180},{type:"wall",id:56,top:285, left:165},{type:"wall",id:57,top:270, left:165},{type:"wall",id:58,top:255, left:165},{type:"wall",id:59,top:240, left:165},{type:"wall",id:60,top:225, left:165},{type:"wall",id:61,top:210, left:165},{type:"wall",id:62,top:195, left:165},{type:"wall",id:63,top:180, left:165},{type:"wall",id:64,top:165, left:165},{type:"wall",id:65,top:150, left:165},{type:"wall",id:66,top:135, left:165},{type:"wall",id:67,top:120, left:165},{type:"wall",id:68,top:105, left:165},{type:"wall",id:69,top:90, left:165},{type:"wall",id:70,top:240, left:465},{type:"wall",id:71,top:240, left:450},{type:"wall",id:72,top:240, left:435},{type:"wall",id:73,top:240, left:420},{type:"wall",id:74,top:240, left:405},{type:"wall",id:75,top:240, left:390},{type:"wall",id:76,top:240, left:285},{type:"wall",id:77,top:240, left:270},{type:"wall",id:78,top:240, left:255},{type:"wall",id:79,top:240, left:240},{type:"wall",id:80,top:240, left:225},{type:"wall",id:81,top:240, left:210},{type:"wall",id:82,top:240, left:195},{type:"wall",id:83,top:240, left:180},{type:"wall",id:84,top:390, left:150},{type:"wall",id:85,top:375, left:150},{type:"wall",id:86,top:360, left:150},{type:"wall",id:87,top:345, left:150},{type:"wall",id:88,top:330, left:150},{type:"wall",id:89,top:330, left:165},{type:"wall",id:90,top:345, left:180},{type:"wall",id:91,top:360, left:195},{type:"wall",id:92,top:345, left:210},{type:"wall",id:93,top:330, left:225},{type:"wall",id:94,top:330, left:240},{type:"wall",id:95,top:345, left:240},{type:"wall",id:96,top:360, left:240},{type:"wall",id:97,top:375, left:240},{type:"wall",id:98,top:390, left:240},{type:"wall",id:99,top:345, left:270},{type:"wall",id:100,top:360, left:270},{type:"wall",id:101,top:375, left:270},{type:"wall",id:102,top:330, left:285},{type:"wall",id:103,top:330, left:300},{type:"wall",id:104,top:345, left:315},{type:"wall",id:105,top:360, left:315},{type:"wall",id:106,top:375, left:315},{type:"wall",id:107,top:390, left:285},{type:"wall",id:108,top:390, left:300},{type:"wall",id:109,top:330, left:345},{type:"wall",id:110,top:345, left:345},{type:"wall",id:111,top:360, left:345},{type:"wall",id:112,top:375, left:360},{type:"wall",id:113,top:390, left:375},{type:"wall",id:114,top:375, left:390},{type:"wall",id:115,top:360, left:405},{type:"wall",id:116,top:345, left:405},{type:"wall",id:117,top:330, left:405},{type:"wall",id:118,top:360, left:435},{type:"wall",id:119,top:330, left:435},{type:"wall",id:120,top:345, left:435},{type:"wall",id:121,top:375, left:435},{type:"wall",id:122,top:390, left:435},{type:"wall",id:123,top:390, left:450},{type:"wall",id:124,top:390, left:465},{type:"wall",id:125,top:360, left:450},{type:"wall",id:126,top:330, left:450},{type:"wall",id:127,top:330, left:465},{type:"wall",id:128,top:330, left:525},{type:"wall",id:129,top:345, left:525},{type:"wall",id:130,top:360, left:525},{type:"wall",id:131,top:375, left:525},{type:"wall",id:132,top:390, left:525},{type:"wall",id:133,top:390, left:540},{type:"wall",id:134,top:390, left:555},{type:"wall",id:135,top:375, left:555},{type:"wall",id:136,top:360, left:555},{type:"wall",id:137,top:345, left:555},{type:"wall",id:138,top:330, left:555},{type:"wall",id:139,top:330, left:585},{type:"wall",id:140,top:345, left:585},{type:"wall",id:141,top:360, left:585},{type:"wall",id:142,top:375, left:585},{type:"wall",id:143,top:390, left:585},{type:"wall",id:144,top:330, left:600},{type:"wall",id:145,top:330, left:615},{type:"wall",id:146,top:345, left:615},{type:"wall",id:147,top:360, left:615},{type:"wall",id:148,top:360, left:600},{type:"wall",id:149,top:330, left:660},{type:"wall",id:150,top:345, left:660},{type:"wall",id:151,top:360, left:660},{type:"wall",id:152,top:390, left:660},{type:"wall",id:153,top:120, left:195},{type:"wall",id:154,top:135, left:180},{type:"wall",id:155,top:135, left:195}
];


//LEVEL 1
elementsLvl[1] =[
    {"type":"element","id":"player","top":225,"left":375},
    {"type":"element","id":"dumbbot","top":90,"left":30},
    {"type":"element","id":"target","top":300,"left":405}
];


wallsLvl[1] =[
    {"type":"wall","id":0,"top":180,"left":345},{"type":"wall","id":1,"top":180,"left":330},{"type":"wall","id":2,"top":180,"left":315},{"type":"wall","id":3,"top":195,"left":315},{"type":"wall","id":4,"top":210,"left":315},{"type":"wall","id":5,"top":225,"left":315},{"type":"wall","id":6,"top":240,"left":315},{"type":"wall","id":7,"top":255,"left":315},{"type":"wall","id":8,"top":270,"left":315},{"type":"wall","id":9,"top":270,"left":330},{"type":"wall","id":10,"top":270,"left":345},{"type":"wall","id":11,"top":270,"left":360},{"type":"wall","id":12,"top":285,"left":360},{"type":"wall","id":13,"top":285,"left":375},{"type":"wall","id":14,"top":285,"left":390},{"type":"wall","id":15,"top":285,"left":405},{"type":"wall","id":16,"top":285,"left":420},{"type":"wall","id":17,"top":270,"left":420},{"type":"wall","id":18,"top":255,"left":420},{"type":"wall","id":19,"top":255,"left":435},{"type":"wall","id":20,"top":240,"left":435},{"type":"wall","id":21,"top":225,"left":435},{"type":"wall","id":22,"top":210,"left":435},{"type":"wall","id":23,"top":195,"left":435},{"type":"wall","id":24,"top":180,"left":435},{"type":"wall","id":25,"top":180,"left":420},{"type":"wall","id":26,"top":180,"left":405},{"type":"wall","id":27,"top":210,"left":255},{"type":"wall","id":28,"top":195,"left":255},{"type":"wall","id":29,"top":180,"left":255},{"type":"wall","id":30,"top":165,"left":255},{"type":"wall","id":31,"top":150,"left":255},{"type":"wall","id":32,"top":135,"left":255},{"type":"wall","id":33,"top":120,"left":255},{"type":"wall","id":34,"top":120,"left":270},{"type":"wall","id":35,"top":120,"left":285},{"type":"wall","id":36,"top":120,"left":300},{"type":"wall","id":37,"top":120,"left":315},{"type":"wall","id":38,"top":120,"left":330},{"type":"wall","id":39,"top":120,"left":345},{"type":"wall","id":40,"top":120,"left":360},{"type":"wall","id":41,"top":120,"left":375},{"type":"wall","id":42,"top":120,"left":390},{"type":"wall","id":43,"top":120,"left":405},{"type":"wall","id":44,"top":120,"left":420},{"type":"wall","id":45,"top":120,"left":435},{"type":"wall","id":46,"top":120,"left":450},{"type":"wall","id":47,"top":120,"left":465},{"type":"wall","id":48,"top":135,"left":465},{"type":"wall","id":49,"top":135,"left":480},{"type":"wall","id":50,"top":150,"left":480},{"type":"wall","id":51,"top":165,"left":480},{"type":"wall","id":52,"top":180,"left":480},{"type":"wall","id":53,"top":195,"left":480},{"type":"wall","id":54,"top":195,"left":495},{"type":"wall","id":55,"top":210,"left":495},{"type":"wall","id":56,"top":225,"left":495},{"type":"wall","id":57,"top":240,"left":495},{"type":"wall","id":58,"top":180,"left":210},{"type":"wall","id":59,"top":195,"left":210},{"type":"wall","id":60,"top":210,"left":210},{"type":"wall","id":61,"top":225,"left":210},{"type":"wall","id":62,"top":240,"left":210},{"type":"wall","id":63,"top":255,"left":210},{"type":"wall","id":64,"top":270,"left":210},{"type":"wall","id":65,"top":285,"left":210},{"type":"wall","id":66,"top":300,"left":210},{"type":"wall","id":67,"top":315,"left":210},{"type":"wall","id":68,"top":330,"left":210},{"type":"wall","id":69,"top":345,"left":210},{"type":"wall","id":70,"top":345,"left":225},{"type":"wall","id":71,"top":345,"left":240},{"type":"wall","id":72,"top":345,"left":255},{"type":"wall","id":73,"top":345,"left":270},{"type":"wall","id":74,"top":345,"left":285},{"type":"wall","id":75,"top":405,"left":285},{"type":"wall","id":76,"top":405,"left":300},{"type":"wall","id":77,"top":405,"left":315},{"type":"wall","id":78,"top":405,"left":330},{"type":"wall","id":79,"top":405,"left":345},{"type":"wall","id":80,"top":390,"left":345},{"type":"wall","id":81,"top":390,"left":360},{"type":"wall","id":82,"top":375,"left":360},{"type":"wall","id":83,"top":360,"left":360},{"type":"wall","id":84,"top":345,"left":360},{"type":"wall","id":85,"top":330,"left":360},{"type":"wall","id":86,"top":345,"left":435},{"type":"wall","id":87,"top":345,"left":450},{"type":"wall","id":88,"top":345,"left":465},{"type":"wall","id":89,"top":345,"left":480},{"type":"wall","id":90,"top":345,"left":495},{"type":"wall","id":91,"top":345,"left":510},{"type":"wall","id":92,"top":345,"left":525},{"type":"wall","id":93,"top":345,"left":540},{"type":"wall","id":94,"top":330,"left":540},{"type":"wall","id":95,"top":315,"left":540},{"type":"wall","id":96,"top":315,"left":555},{"type":"wall","id":97,"top":300,"left":555},{"type":"wall","id":98,"top":285,"left":555},{"type":"wall","id":99,"top":270,"left":555},{"type":"wall","id":100,"top":255,"left":555},{"type":"wall","id":101,"top":255,"left":570},{"type":"wall","id":102,"top":240,"left":570},{"type":"wall","id":103,"top":225,"left":570},{"type":"wall","id":104,"top":210,"left":570},{"type":"wall","id":105,"top":60,"left":450},{"type":"wall","id":106,"top":60,"left":465},{"type":"wall","id":107,"top":60,"left":480},{"type":"wall","id":108,"top":60,"left":495},{"type":"wall","id":109,"top":60,"left":510},{"type":"wall","id":110,"top":60,"left":525},{"type":"wall","id":111,"top":60,"left":540},{"type":"wall","id":112,"top":60,"left":555},{"type":"wall","id":113,"top":60,"left":570},{"type":"wall","id":114,"top":60,"left":585},{"type":"wall","id":115,"top":60,"left":600},{"type":"wall","id":116,"top":15,"left":600},{"type":"wall","id":117,"top":30,"left":600},{"type":"wall","id":118,"top":45,"left":600},{"type":"wall","id":119,"top":75,"left":600},{"type":"wall","id":120,"top":90,"left":600},{"type":"wall","id":121,"top":105,"left":600},{"type":"wall","id":122,"top":120,"left":600},{"type":"wall","id":123,"top":135,"left":600},{"type":"wall","id":124,"top":135,"left":615},{"type":"wall","id":125,"top":150,"left":630},{"type":"wall","id":126,"top":150,"left":645},{"type":"wall","id":127,"top":165,"left":645},{"type":"wall","id":128,"top":180,"left":645},{"type":"wall","id":129,"top":195,"left":645},{"type":"wall","id":130,"top":210,"left":645},{"type":"wall","id":131,"top":225,"left":645},{"type":"wall","id":132,"top":240,"left":645},{"type":"wall","id":133,"top":90,"left":615},{"type":"wall","id":134,"top":90,"left":630},{"type":"wall","id":135,"top":90,"left":645},{"type":"wall","id":136,"top":90,"left":660},{"type":"wall","id":137,"top":90,"left":675},{"type":"wall","id":138,"top":90,"left":690},{"type":"wall","id":139,"top":90,"left":705},{"type":"wall","id":140,"top":30,"left":720},{"type":"wall","id":141,"top":45,"left":720},{"type":"wall","id":142,"top":60,"left":720},{"type":"wall","id":143,"top":75,"left":720},{"type":"wall","id":144,"top":90,"left":720},{"type":"wall","id":145,"top":105,"left":720},{"type":"wall","id":146,"top":120,"left":720},{"type":"wall","id":147,"top":135,"left":720},{"type":"wall","id":148,"top":150,"left":720},{"type":"wall","id":149,"top":195,"left":165},{"type":"wall","id":150,"top":180,"left":165},{"type":"wall","id":151,"top":165,"left":165},{"type":"wall","id":152,"top":150,"left":165},{"type":"wall","id":153,"top":135,"left":165},{"type":"wall","id":154,"top":120,"left":165},{"type":"wall","id":155,"top":105,"left":165},{"type":"wall","id":156,"top":90,"left":165},{"type":"wall","id":157,"top":90,"left":180},{"type":"wall","id":158,"top":75,"left":180},{"type":"wall","id":159,"top":75,"left":195},{"type":"wall","id":160,"top":75,"left":210},{"type":"wall","id":161,"top":75,"left":225},{"type":"wall","id":162,"top":75,"left":240},{"type":"wall","id":163,"top":75,"left":255},{"type":"wall","id":164,"top":60,"left":255},{"type":"wall","id":165,"top":45,"left":255},{"type":"wall","id":166,"top":30,"left":255},{"type":"wall","id":167,"top":135,"left":150},{"type":"wall","id":168,"top":135,"left":135},{"type":"wall","id":169,"top":135,"left":120},{"type":"wall","id":170,"top":135,"left":105},{"type":"wall","id":171,"top":135,"left":90},{"type":"wall","id":172,"top":120,"left":90},{"type":"wall","id":173,"top":105,"left":90},{"type":"wall","id":174,"top":90,"left":90},{"type":"wall","id":175,"top":75,"left":90},{"type":"wall","id":176,"top":60,"left":90},{"type":"wall","id":177,"top":60,"left":75},{"type":"wall","id":178,"top":60,"left":60},{"type":"wall","id":179,"top":60,"left":45},{"type":"wall","id":180,"top":0,"left":135},{"type":"wall","id":181,"top":15,"left":135},{"type":"wall","id":182,"top":30,"left":135},{"type":"wall","id":183,"top":45,"left":135},{"type":"wall","id":184,"top":60,"left":135},{"type":"wall","id":185,"top":300,"left":195},{"type":"wall","id":186,"top":300,"left":180},{"type":"wall","id":187,"top":300,"left":165},{"type":"wall","id":188,"top":300,"left":150},{"type":"wall","id":189,"top":300,"left":135},{"type":"wall","id":190,"top":300,"left":120},{"type":"wall","id":191,"top":300,"left":105},{"type":"wall","id":192,"top":285,"left":105},{"type":"wall","id":193,"top":270,"left":105},{"type":"wall","id":194,"top":255,"left":105},{"type":"wall","id":195,"top":240,"left":105},{"type":"wall","id":196,"top":225,"left":105},{"type":"wall","id":197,"top":255,"left":90},{"type":"wall","id":198,"top":255,"left":75},{"type":"wall","id":199,"top":255,"left":60},{"type":"wall","id":200,"top":255,"left":45},{"type":"wall","id":201,"top":255,"left":30},{"type":"wall","id":202,"top":270,"left":60},{"type":"wall","id":203,"top":285,"left":60},{"type":"wall","id":204,"top":300,"left":60},{"type":"wall","id":205,"top":315,"left":60},{"type":"wall","id":206,"top":330,"left":60},{"type":"wall","id":207,"top":345,"left":60},{"type":"wall","id":208,"top":360,"left":60},{"type":"wall","id":209,"top":375,"left":60},{"type":"wall","id":210,"top":390,"left":60},{"type":"wall","id":211,"top":435,"left":180},{"type":"wall","id":212,"top":420,"left":180},{"type":"wall","id":213,"top":405,"left":180},{"type":"wall","id":214,"top":390,"left":180},{"type":"wall","id":215,"top":375,"left":180},{"type":"wall","id":216,"top":375,"left":165},{"type":"wall","id":217,"top":375,"left":150},{"type":"wall","id":218,"top":375,"left":135},{"type":"wall","id":219,"top":375,"left":120},{"type":"wall","id":220,"top":375,"left":495},{"type":"wall","id":221,"top":390,"left":495},{"type":"wall","id":222,"top":405,"left":495},{"type":"wall","id":223,"top":405,"left":510},{"type":"wall","id":224,"top":405,"left":525},{"type":"wall","id":225,"top":405,"left":540},{"type":"wall","id":226,"top":405,"left":555},{"type":"wall","id":227,"top":405,"left":570},{"type":"wall","id":228,"top":405,"left":585},{"type":"wall","id":229,"top":405,"left":600},{"type":"wall","id":230,"top":405,"left":615},{"type":"wall","id":231,"top":405,"left":630},{"type":"wall","id":232,"top":300,"left":645},{"type":"wall","id":233,"top":315,"left":645},{"type":"wall","id":234,"top":330,"left":645},{"type":"wall","id":235,"top":345,"left":645},{"type":"wall","id":236,"top":360,"left":645},{"type":"wall","id":237,"top":375,"left":645},{"type":"wall","id":238,"top":390,"left":645},{"type":"wall","id":239,"top":405,"left":645},{"type":"wall","id":240,"top":420,"left":645},{"type":"wall","id":241,"top":435,"left":645},{"type":"wall","id":242,"top":360,"left":660},{"type":"wall","id":243,"top":360,"left":675},{"type":"wall","id":244,"top":360,"left":690},{"type":"wall","id":245,"top":360,"left":705}
];


elementsLvl[2] =[
    {type:"element",id:"target",top:45,left:615},
    {type:"element",id:"dumbbot",top:240,left:345},
    {type:"element",id:"player",top:240,left:300}
];

wallsLvl[2] =[
    {type:"wall",id:0,top:30, left:30},{type:"wall",id:1,top:30, left:45},{type:"wall",id:2,top:30, left:60},{type:"wall",id:3,top:30, left:75},{type:"wall",id:4,top:30, left:90},{type:"wall",id:5,top:30, left:105},{type:"wall",id:6,top:30, left:120},{type:"wall",id:7,top:30, left:135},{type:"wall",id:8,top:30, left:150},{type:"wall",id:9,top:45, left:165},{type:"wall",id:10,top:45, left:210},{type:"wall",id:11,top:45, left:240},{type:"wall",id:12,top:45, left:255},{type:"wall",id:13,top:165, left:150},{type:"wall",id:14,top:165, left:135},{type:"wall",id:15,top:180, left:135},{type:"wall",id:16,top:195, left:120},{type:"wall",id:17,top:240, left:105},{type:"wall",id:18,top:270, left:75},{type:"wall",id:19,top:315, left:45},{type:"wall",id:20,top:330, left:60},{type:"wall",id:21,top:345, left:60},{type:"wall",id:22,top:345, left:75},{type:"wall",id:23,top:360, left:90},{type:"wall",id:24,top:285, left:255},{type:"wall",id:25,top:285, left:285},{type:"wall",id:26,top:270, left:345},{type:"wall",id:27,top:270, left:360},{type:"wall",id:28,top:330, left:390},{type:"wall",id:29,top:360, left:405},{type:"wall",id:30,top:390, left:405},{type:"wall",id:31,top:390, left:420},{type:"wall",id:32,top:390, left:435},{type:"wall",id:33,top:390, left:450},{type:"wall",id:34,top:375, left:480},{type:"wall",id:35,top:375, left:495},{type:"wall",id:36,top:375, left:270},{type:"wall",id:37,top:375, left:300},{type:"wall",id:38,top:375, left:330},{type:"wall",id:39,top:375, left:375},{type:"wall",id:40,top:150, left:480},{type:"wall",id:41,top:165, left:480},{type:"wall",id:42,top:195, left:495},{type:"wall",id:43,top:210, left:495},{type:"wall",id:44,top:225, left:495},{type:"wall",id:45,top:240, left:495},{type:"wall",id:46,top:285, left:495},{type:"wall",id:47,top:270, left:495},{type:"wall",id:48,top:180, left:495},{type:"wall",id:49,top:165, left:495},{type:"wall",id:50,top:150, left:495},{type:"wall",id:51,top:135, left:495},{type:"wall",id:52,top:45, left:585},{type:"wall",id:53,top:45, left:630},{type:"wall",id:54,top:45, left:660},{type:"wall",id:55,top:45, left:675},{type:"wall",id:56,top:60, left:675},{type:"wall",id:57,top:90, left:675},{type:"wall",id:58,top:120, left:675},{type:"wall",id:59,top:135, left:675},{type:"wall",id:60,top:150, left:675},{type:"wall",id:61,top:105, left:675},{type:"wall",id:62,top:75, left:675},{type:"wall",id:63,top:75, left:690},{type:"wall",id:64,top:45, left:645},{type:"wall",id:65,top:45, left:600},{type:"wall",id:66,top:60, left:390},{type:"wall",id:67,top:90, left:390},{type:"wall",id:68,top:120, left:390},{type:"wall",id:69,top:150, left:360},{type:"wall",id:70,top:165, left:315},{type:"wall",id:71,top:165, left:270},{type:"wall",id:72,top:165, left:255},{type:"wall",id:73,top:150, left:255},{type:"wall",id:74,top:105, left:270},{type:"wall",id:75,top:105, left:285},{type:"wall",id:76,top:105, left:300},{type:"wall",id:77,top:165, left:300},{type:"wall",id:78,top:165, left:330},{type:"wall",id:79,top:75, left:390},{type:"wall",id:80,top:105, left:390},{type:"wall",id:81,top:135, left:390},{type:"wall",id:82,top:150, left:390},{type:"wall",id:83,top:165, left:390},{type:"wall",id:84,top:180, left:390},{type:"wall",id:85,top:240, left:270},{type:"wall",id:86,top:240, left:285},{type:"wall",id:87,top:240, left:315},{type:"wall",id:88,top:240, left:330},{type:"wall",id:89,top:255, left:315},{type:"wall",id:90,top:270, left:315},{type:"wall",id:91,top:285, left:315},{type:"wall",id:92,top:300, left:315},{type:"wall",id:93,top:315, left:315},{type:"wall",id:94,top:330, left:315},{type:"wall",id:95,top:345, left:315},{type:"wall",id:96,top:360, left:315},{type:"wall",id:97,top:315, left:495},{type:"wall",id:98,top:315, left:525},{type:"wall",id:99,top:315, left:615},{type:"wall",id:100,top:315, left:660},{type:"wall",id:101,top:300, left:660},{type:"wall",id:102,top:270, left:660},{type:"wall",id:103,top:240, left:660},{type:"wall",id:104,top:150, left:585},{type:"wall",id:106,top:270, left:585},{type:"wall",id:107,top:405, left:570},{type:"wall",id:108,top:405, left:660},{type:"wall",id:109,top:405, left:705},{type:"wall",id:110,top:390, left:705},{type:"wall",id:111,top:375, left:705},{type:"wall",id:112,top:330, left:705},{type:"wall",id:113,top:315, left:705},{type:"wall",id:114,top:285, left:150},{type:"wall",id:115,top:375, left:150},{type:"wall",id:116,top:405, left:150},{type:"wall",id:117,top:420, left:150},{type:"wall",id:118,top:435, left:150},{type:"wall",id:119,top:435, left:135},{type:"wall",id:120,top:420, left:90},{type:"wall",id:121,top:420, left:105},{type:"wall",id:122,top:405, left:105},{type:"wall",id:123,top:105, left:30},{type:"wall",id:124,top:135, left:15},{type:"wall",id:125,top:180, left:15},{type:"wall",id:126,top:195, left:15},{type:"wall",id:127,top:210, left:45},{type:"wall",id:128,top:210, left:60},{type:"wall",id:129,top:45, left:420},{type:"wall",id:130,top:45, left:510},{type:"wall",id:131,top:45, left:525},{type:"wall",id:132,top:60, left:525},{type:"wall",id:133,top:90, left:525},{type:"wall",id:134,top:105, left:525},{type:"wall",id:134,top:420, left:510},{type:"wall",id:135,top:405, left:510},{type:"wall",id:136,top:15, left:615},{type:"wall",id:137,top:75, left:615}
];

elementsLvl[3] =
[
{type:"element",id:"dumbbot",top:420,left:15},
{type:"element",id:"player",top:420,left:720},
{type:"element",id:"target",top:210,left:375}
];

wallsLvl[3] =
[
{type:"wall",id:0,top:180, left:375},{type:"wall",id:1,top:180, left:390},{type:"wall",id:2,top:195, left:390},{type:"wall",id:3,top:195, left:405},{type:"wall",id:4,top:210, left:405},{type:"wall",id:5,top:225, left:405},{type:"wall",id:6,top:240, left:405},{type:"wall",id:7,top:240, left:390},{type:"wall",id:8,top:240, left:375},{type:"wall",id:9,top:240, left:360},{type:"wall",id:10,top:240, left:345},{type:"wall",id:11,top:225, left:345},{type:"wall",id:12,top:225, left:330},{type:"wall",id:13,top:210, left:330},{type:"wall",id:14,top:195, left:330},{type:"wall",id:15,top:180, left:330},{type:"wall",id:16,top:165, left:330},{type:"wall",id:17,top:165, left:345},{type:"wall",id:18,top:150, left:345},{type:"wall",id:19,top:150, left:360},{type:"wall",id:20,top:135, left:360},{type:"wall",id:21,top:135, left:375},{type:"wall",id:22,top:135, left:390},{type:"wall",id:23,top:135, left:405},{type:"wall",id:24,top:135, left:420},{type:"wall",id:25,top:150, left:420},{type:"wall",id:26,top:150, left:435},{type:"wall",id:27,top:165, left:435},{type:"wall",id:28,top:165, left:450},{type:"wall",id:29,top:180, left:450},{type:"wall",id:30,top:195, left:450},{type:"wall",id:31,top:195, left:465},{type:"wall",id:32,top:210, left:465},{type:"wall",id:33,top:225, left:465},{type:"wall",id:34,top:240, left:465},{type:"wall",id:35,top:240, left:450},{type:"wall",id:36,top:255, left:450},{type:"wall",id:37,top:270, left:450},{type:"wall",id:38,top:270, left:435},{type:"wall",id:39,top:285, left:435},{type:"wall",id:40,top:285, left:420},{type:"wall",id:41,top:300, left:420},{type:"wall",id:42,top:300, left:405},{type:"wall",id:43,top:300, left:390},{type:"wall",id:44,top:300, left:375},{type:"wall",id:45,top:300, left:360},{type:"wall",id:46,top:300, left:345},{type:"wall",id:47,top:300, left:330},{type:"wall",id:48,top:285, left:330},{type:"wall",id:49,top:285, left:315},{type:"wall",id:50,top:285, left:300},{type:"wall",id:51,top:270, left:300},{type:"wall",id:52,top:255, left:300},{type:"wall",id:53,top:255, left:285},{type:"wall",id:54,top:240, left:285},{type:"wall",id:55,top:225, left:285},{type:"wall",id:56,top:210, left:285},{type:"wall",id:57,top:195, left:285},{type:"wall",id:58,top:180, left:285},{type:"wall",id:59,top:165, left:285},{type:"wall",id:60,top:150, left:285},{type:"wall",id:61,top:135, left:285},{type:"wall",id:62,top:120, left:285},{type:"wall",id:63,top:120, left:300},{type:"wall",id:64,top:105, left:300},{type:"wall",id:65,top:105, left:315},{type:"wall",id:66,top:90, left:315},{type:"wall",id:67,top:90, left:330},{type:"wall",id:68,top:90, left:345},{type:"wall",id:69,top:90, left:360},{type:"wall",id:70,top:75, left:360},{type:"wall",id:71,top:75, left:375},{type:"wall",id:72,top:75, left:390},{type:"wall",id:73,top:75, left:405},{type:"wall",id:74,top:75, left:420},{type:"wall",id:75,top:75, left:435},{type:"wall",id:76,top:75, left:450},{type:"wall",id:77,top:90, left:450},{type:"wall",id:78,top:90, left:465},{type:"wall",id:79,top:90, left:480},{type:"wall",id:80,top:105, left:480},{type:"wall",id:81,top:105, left:495},{type:"wall",id:82,top:120, left:495},{type:"wall",id:83,top:135, left:495},{type:"wall",id:84,top:135, left:510},{type:"wall",id:85,top:150, left:510},{type:"wall",id:86,top:165, left:525},{type:"wall",id:87,top:180, left:525},{type:"wall",id:88,top:195, left:525},{type:"wall",id:89,top:210, left:525},{type:"wall",id:90,top:225, left:525},{type:"wall",id:91,top:240, left:525},{type:"wall",id:92,top:255, left:525},{type:"wall",id:93,top:270, left:525},{type:"wall",id:94,top:270, left:510},{type:"wall",id:95,top:285, left:510},{type:"wall",id:96,top:300, left:510},{type:"wall",id:97,top:300, left:495},{type:"wall",id:98,top:315, left:495},{type:"wall",id:99,top:315, left:480},{type:"wall",id:100,top:330, left:480},{type:"wall",id:101,top:330, left:465},{type:"wall",id:102,top:345, left:465},{type:"wall",id:103,top:345, left:450},{type:"wall",id:104,top:345, left:435},{type:"wall",id:105,top:345, left:420},{type:"wall",id:106,top:360, left:420},{type:"wall",id:107,top:360, left:405},{type:"wall",id:108,top:360, left:390},{type:"wall",id:109,top:360, left:375},{type:"wall",id:110,top:360, left:360},{type:"wall",id:111,top:360, left:345},{type:"wall",id:112,top:360, left:330},{type:"wall",id:113,top:360, left:315},{type:"wall",id:114,top:360, left:300},{type:"wall",id:115,top:360, left:285},{type:"wall",id:116,top:345, left:285},{type:"wall",id:117,top:345, left:270},{type:"wall",id:118,top:345, left:255},{type:"wall",id:119,top:330, left:255},{type:"wall",id:120,top:315, left:255},{type:"wall",id:121,top:315, left:240},{type:"wall",id:122,top:300, left:240},{type:"wall",id:123,top:300, left:225},{type:"wall",id:124,top:285, left:225},{type:"wall",id:125,top:270, left:225},{type:"wall",id:126,top:270, left:210},{type:"wall",id:127,top:255, left:210},{type:"wall",id:128,top:240, left:210},{type:"wall",id:129,top:225, left:210},{type:"wall",id:130,top:210, left:210},{type:"wall",id:131,top:195, left:210},{type:"wall",id:132,top:180, left:195},{type:"wall",id:133,top:165, left:195},{type:"wall",id:134,top:150, left:195},{type:"wall",id:135,top:150, left:210},{type:"wall",id:136,top:135, left:210},{type:"wall",id:137,top:120, left:210},{type:"wall",id:138,top:105, left:210},{type:"wall",id:139,top:105, left:225},{type:"wall",id:140,top:90, left:225},{type:"wall",id:141,top:75, left:225},{type:"wall",id:142,top:75, left:240},{type:"wall",id:143,top:60, left:240},{type:"wall",id:144,top:45, left:240},{type:"wall",id:145,top:45, left:255},{type:"wall",id:146,top:30, left:255},{type:"wall",id:147,top:30, left:270},{type:"wall",id:148,top:30, left:285},{type:"wall",id:149,top:30, left:300},{type:"wall",id:150,top:15, left:300},{type:"wall",id:151,top:15, left:315},{type:"wall",id:152,top:15, left:330},{type:"wall",id:153,top:15, left:345},{type:"wall",id:154,top:15, left:360},{type:"wall",id:155,top:15, left:375},{type:"wall",id:156,top:15, left:390},{type:"wall",id:157,top:15, left:405},{type:"wall",id:158,top:15, left:420},{type:"wall",id:159,top:15, left:435},{type:"wall",id:160,top:15, left:450},{type:"wall",id:161,top:15, left:465},{type:"wall",id:162,top:30, left:465},{type:"wall",id:163,top:30, left:480},{type:"wall",id:164,top:30, left:495},{type:"wall",id:165,top:30, left:510},{type:"wall",id:166,top:45, left:510},{type:"wall",id:167,top:45, left:525},{type:"wall",id:168,top:60, left:525},{type:"wall",id:169,top:60, left:540},{type:"wall",id:170,top:75, left:540},{type:"wall",id:171,top:75, left:555},{type:"wall",id:172,top:90, left:555},{type:"wall",id:173,top:90, left:570},{type:"wall",id:174,top:105, left:570},{type:"wall",id:175,top:105, left:585},{type:"wall",id:176,top:120, left:585},{type:"wall",id:177,top:135, left:585},{type:"wall",id:178,top:135, left:600},{type:"wall",id:179,top:150, left:600},{type:"wall",id:180,top:165, left:600},{type:"wall",id:181,top:180, left:600},{type:"wall",id:182,top:195, left:600},{type:"wall",id:183,top:210, left:600},{type:"wall",id:184,top:225, left:600},{type:"wall",id:185,top:240, left:600},{type:"wall",id:186,top:255, left:600},{type:"wall",id:187,top:270, left:600},{type:"wall",id:188,top:285, left:600},{type:"wall",id:189,top:300, left:600},{type:"wall",id:190,top:300, left:585},{type:"wall",id:191,top:315, left:585},{type:"wall",id:192,top:330, left:585},{type:"wall",id:193,top:345, left:585},{type:"wall",id:194,top:360, left:585},{type:"wall",id:195,top:360, left:570},{type:"wall",id:196,top:375, left:570},{type:"wall",id:197,top:375, left:555},{type:"wall",id:198,top:390, left:555},{type:"wall",id:199,top:390, left:540},{type:"wall",id:200,top:405, left:540},{type:"wall",id:201,top:405, left:525},{type:"wall",id:202,top:405, left:510},{type:"wall",id:203,top:405, left:495},{type:"wall",id:204,top:405, left:480},{type:"wall",id:205,top:420, left:480},{type:"wall",id:206,top:420, left:465},{type:"wall",id:207,top:420, left:450},{type:"wall",id:208,top:420, left:435},{type:"wall",id:209,top:420, left:420},{type:"wall",id:210,top:420, left:405},{type:"wall",id:211,top:420, left:390},{type:"wall",id:212,top:420, left:375},{type:"wall",id:213,top:420, left:360},{type:"wall",id:214,top:420, left:345},{type:"wall",id:215,top:420, left:330},{type:"wall",id:216,top:420, left:315},{type:"wall",id:217,top:420, left:300},{type:"wall",id:218,top:420, left:285},{type:"wall",id:219,top:420, left:270},{type:"wall",id:220,top:420, left:255},{type:"wall",id:221,top:420, left:240},{type:"wall",id:222,top:420, left:225},{type:"wall",id:223,top:405, left:225},{type:"wall",id:224,top:405, left:210},{type:"wall",id:225,top:405, left:195},{type:"wall",id:226,top:390, left:195},{type:"wall",id:227,top:390, left:180},{type:"wall",id:228,top:375, left:180},{type:"wall",id:229,top:360, left:180},{type:"wall",id:230,top:360, left:165},{type:"wall",id:231,top:345, left:165},{type:"wall",id:232,top:345, left:150},{type:"wall",id:233,top:330, left:150},{type:"wall",id:234,top:315, left:135},{type:"wall",id:235,top:300, left:135},{type:"wall",id:236,top:285, left:135},{type:"wall",id:237,top:270, left:135},{type:"wall",id:238,top:255, left:135},{type:"wall",id:239,top:255, left:120},{type:"wall",id:240,top:240, left:120},{type:"wall",id:241,top:225, left:120},{type:"wall",id:242,top:210, left:120},{type:"wall",id:243,top:195, left:120},{type:"wall",id:244,top:180, left:120},{type:"wall",id:245,top:165, left:120},{type:"wall",id:246,top:150, left:120},{type:"wall",id:247,top:135, left:120},{type:"wall",id:248,top:120, left:120},{type:"wall",id:249,top:120, left:135},{type:"wall",id:250,top:105, left:135},{type:"wall",id:251,top:90, left:135},{type:"wall",id:252,top:75, left:135},{type:"wall",id:253,top:75, left:150},{type:"wall",id:254,top:60, left:150},{type:"wall",id:255,top:60, left:165},{type:"wall",id:256,top:45, left:165},{type:"wall",id:257,top:45, left:180},{type:"wall",id:258,top:30, left:180}
];
