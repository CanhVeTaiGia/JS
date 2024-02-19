const songs = [
    {
        id: '1',
        songName:` Journey of a Lifetime <br>
        <div class="subtitle">Even Call</div>`,
        poster: "./src/assets/img/1.jpg",
    },
    {
        id: '2',
        songName:` A Well-Earned Celebration <br>
        <div class="subtitle">Even Call</div>`,
        poster: "./src/assets/img/2.jpg",
    },
    {
        id: '3',
        songName:`Departures <br>
        <div class="subtitle">Even Call</div>`,
        poster: "./src/assets/img/3.jpg",
    },
    {
        id: '4',
        songName:` Farewell, My Friend <br>
        <div class="subtitle">Even Call</div>`,
        poster: "./src/assets/img/4.jpg",
    },
    {
        id: '5',
        songName:` Fear Brought Me This Far <br>
        <div class="subtitle">Even Call</div>`,
        poster: "./src/assets/img/5.jpg",
    },
    {
        id: '6',
        songName:` Time Flows Ever Onward <br>
        <div class="subtitle">Even Call</div>`,
        poster: "./src/assets/img/6.jpg",
    },
    {
        id: '7',
        songName:` City Pop Fazuzan theme <br>
        <div class="subtitle">Sumes Music</div>`,
        poster: "./src/assets/img/7.jpg",
    },
    {
        id: '8',
        songName:` The End of One Journey <br>
        <div class="subtitle">Even Call</div>`,
        poster: "./src/assets/img/8.jpg",
    },
    {
        id: '9',
        songName:` For 1000 Years <br>
        <div class="subtitle">Even Call</div>`,
        poster: "./src/assets/img/9.jpg",
    },
    {
        id: '10',
        songName:` Grassy Turtles and Seed Rats <br>
        <div class="subtitle">Even Call</div>`,
        poster: "./src/assets/img/10.jpg",
    },
    {
        id: '11',
        songName:` One Last Adventure <br>
        <div class="subtitle">Even Call</div>`,
        poster: "./src/assets/img/11.jpg",
    },
    {
        id: '12',
        songName:` お兄ちゃんはおしまい オルゴール ver. <br>
        <div class="subtitle">Onimai</div>`,
        poster: "./src/assets/img/12.jpg",
    },
    {
        id: '13',
        songName:` お兄ちゃんはおしまい <br>
        <div class="subtitle">Onimai</div>`,
        poster: "./src/assets/img/13.jpg",
    },
    {
        id: '14',
        songName:` トキメキ <br>
        <div class="subtitle">Onimai</div>`,
        poster: "./src/assets/img/14.jpg",
    },
    {
        id: '15',
        songName:` ほっと一息 <br>
        <div class="subtitle">Even Call</div>`,
        poster: "./src/assets/img/15.jpg",
    },
    {
        id: '16',
        songName:` ほのぼの <br>
        <div class="subtitle">Sumes Music</div>`,
        poster: "./src/assets/img/16.jpg",
    },
    {
        id: '17',
        songName:` 何? <br>
        <div class="subtitle">Sumes Music</div>`,
        poster: "./src/assets/img/17.jpg",
    },
    {
        id: '18',
        songName:` Where the Blue-Moon Weed Grows <br>
        <div class="subtitle">Even Call</div>`,
        poster: "./src/assets/img/18.jpg",
    },
    {
        id: '19',
        songName:` Zoltraak <br>
        <div class="subtitle">Even Call</div>`,
        poster: "./src/assets/img/19.jpg",
    }
]

const artists = [
    {
        id: '1',
        name: 'TheFatRat',
        src: './src/assets/img/artists/a1.jpg',
    },
    {
        id:'2',
        name: 'TaylorSwift',
        src: './src/assets/img/artists/a2.jpg',
    },
    {
        id: '3',
        name: 'TobyKeith',
        src: './src/assets/img/artists/a3.jpg',
    },
    {
        id:'4',
        name: 'MorganWallen',
        src: './src/assets/img/artists/a4.png',
    },
    {
        id:'5',
        name: 'Drake',
        src: './src/assets/img/artists/a5.png',
    },
    {
        id: '6',
        name: 'LukeComb',
        src: './src/assets/img/artists/a6.jpg',
    },
    {
        id:'7',
        name: 'ZachBryan',
        src: './src/assets/img/artists/a7.png',
    },
    {
        id: '8',
        name: 'SZA',
        src: './src/assets/img/artists/a8.jpg',
    },
    {
        id:'9',
        name: 'TrazyChapman',
        src: './src/assets/img/artists/a9.png',
    },
    {
        id:'10',
        name: 'OliviaRodrigo',
        src: './src/assets/img/artists/a10.png',
    },
    {
        id: '11',
        name: 'ChrisStaplenton',
        src: './src/assets/img/artits/a11.jpg',
    },
    {
        id:'12',
        name: '21Savage',
        src: './src/assets/img/artists/a12.png',
    },
    {
        id: '13',
        name: 'NoahKahan',
        src: './src/assets/img/artits/a13.jpg',
    },
    {
        id:'14',
        name: 'ChrisStaplenton',
        src: './src/assets/img/artists/a14.png',
    },
    {
        id:'15',
        name: 'TravisScott',
        src: './src/assets/img/artists/a15.png',
    },
];

localStorage.setItem("songs", JSON.stringify(songs));
localStorage.setItem("artists", JSON.stringify(artists));