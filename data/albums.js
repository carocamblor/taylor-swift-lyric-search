let songs = require('./songs');


let albums = [
    {
        title: 'Midnights',
        date: 'October 21, 2022',
        songs: '13 + 7',
        img: 'midnights.jpg',
        id: 'midnights',
        songs: songs.findByAlbum('midnights')
    },
    {
        title: 'evermore',
        date: 'October 21, 2022',
        songs: '16 + 2',
        img: 'evermore.jpg',
        id: 'evermore',
        songs: songs.findByAlbum('evermore')
    },
    {
        title: 'folklore',
        date: 'October 21, 2022',
        songs: '15 + 1',
        img: 'folklore.jpg',
        id: 'folklore',
        songs: songs.findByAlbum('folklore')
    },
    {
        title: 'Lover',
        date: 'October 21, 2022',
        songs: '13 + 7',
        img: 'lover.jpg',
        id: 'lover',
        songs: songs.findByAlbum('lover')
    },
    {
        title: 'reputation',
        date: 'October 21, 2022',
        songs: '13 + 7',
        img: 'reputation.jpg',
        id: 'reputation',
        songs: songs.findByAlbum('reputation')
    },
    {
        title: '1989',
        date: 'October 21, 2022',
        songs: '13 + 7',
        img: '1989.jpg',
        id: '1989',
        songs: songs.findByAlbum('1989')
    },
    {
        title: "Red (Taylor's Version)",
        date: 'October 21, 2022',
        songs: '13 + 7',
        img: 'red.jpg',
        id: 'red',
        songs: songs.findByAlbum('red')
    },
    {
        title: 'Speak Now',
        date: 'October 21, 2022',
        songs: '13 + 7',
        img: 'speaknow.jpg',
        id: 'speaknow',
        songs: songs.findByAlbum('speaknow')
    },
    {
        title: "Fearless (Taylor's Version)",
        date: 'October 21, 2022',
        songs: '13 + 7',
        img: 'fearless.jpg',
        id: 'fearless',
        songs: songs.findByAlbum('fearless')
    },
    {
        title: 'Taylor Swift',
        date: 'October 21, 2022',
        songs: '13 + 7',
        img: 'debut.jpg',
        id: 'debut',
        songs: songs.findByAlbum('debut')
    },

]

module.exports = albums;