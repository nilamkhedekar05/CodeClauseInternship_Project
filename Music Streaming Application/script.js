$(".album-poster").on('click', function (e) {
    var dataSwitchId = $(this).attr('data-switch');
    ap.list.switch(dataSwitchId);
    ap.play();
    $("#aplayer").addClass('showPlayer');
});

const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: true,
    audio: [
        {
            name: 'Ashtami',
            artist: 'Adarsh Shinde',
            url: 'Songs/Ashtami.mp3',
            cover: 'Images/dharmveer.jpg'
        }, {
            name: 'Ram Sita Ram',
            artist: 'Sachet-Parampara, Ramajogayya',
            url: 'Songs/Ram Siya Ram.mp3',
            cover: 'Images/Ram.jpg'
        }, {
            name: 'Mi Hai Koli',
            artist: 'Bhushan Nsk',
            url: 'Songs/Mi Hai Koli.mp3',
            cover: 'Images/koli.jpg'
        }, {
            name: 'Bhetali Tu Punha',
            artist: 'Nikhil Modgi',
            url: 'Songs/Bhetali Tu Punha.mp3',
            cover: 'Images/Bhetali tu punha.jpg'
        }, {
            name: 'Jaguni Ghe Zara',
            artist: 'Harshavardhan Wavare',
            url: 'Songs/Jaguni Ghe Zara.mp3',
            cover: 'Images/welcome jindgi.jpg'
        }, {
            name: 'Chogada Tara Loveyatri',
            artist: 'Darshan Raval, Asees Kaur',
            url: 'Songs/Chogada Tara.mp3',
            cover: 'Images/loveyatri.jpg'
        }, {
            name: 'Pinga',
            artist: 'Shreya Ghoshal',
            url: 'Songs/Pinga.mp3',
            cover: 'Images/pinga.jpg'
        }, {
            name: 'Deva-Deva',
            artist: 'Amitabh Bhattacharya, Arijit Singh, Jonita Gandhi, Pritam',
            url: 'Songs/Deva-Deva - Brahmastra.mp3',
            cover: 'Images/Deva-Deva - Brahmastra.jpg'
        }, {
            name: 'Teri Chunnariya',
            artist: 'Kumar Sanu, Alka Yagnik',
            url: 'Songs/Teri Chunnariya.mp3',
            cover: 'Images/chunariya.jpg'
        }, {
            name: 'Ghagra',
            artist: 'Rekha Bhardwaj, Vishal Dadlani',
            url: 'Songs/Ghagra.mp3',
            cover: 'Images/Ghagara.jpg'
        }, {
            name: 'Kal Ho Naa Ho',
            artist: 'Sonu Nigam',
            url: 'Songs/Kal Ho Naa.mp3',
            cover: 'Images/kalhonaho.jpg'
        }, {
            name: 'Navrai Majhi',
            artist: 'Sunidhi Chauhan ',
            url: 'Songs/Navrai Majhi.mp3',
            cover: 'Images/Navrai.jpg'
        }, ]
});
