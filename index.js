const express = require("express");
const path = require("path");

const app = express();
const Port = 3002;

//Artists API contents
let davido = [
    {
        title: "Fall",
        artist: "Davido",
        file: "Davido-Fall.mp3",
        cover: "images/davido.jpeg",
        folder: "davido"
    },

    {
        title: "Stand Strong",
        artist: "Davido ft The Samples",
        file: "Davido-Ft-The-Samples-Stand-Strong.mp3",
        cover: "images/Davido-Stand-Strong-Artwork.jpg",
        folder: "davido"
    },

    {
        title: "Sweet In The Middle",
        artist: "Davido ft Wurld, Naira Marley, Zlatan",
        file: "Davido-ft-Wurld-Naira-Marley-Zlatan-Sweet-In-The-Middle.mp3",
        cover: "images/Davido-A-Good-Time-album-Artwork.jpg",
        folder: "davido"
    },

    {
        title: "Champion Sound",
        artist: "Focalistic ft Davido",
        file: "Focalistic-Ft-Davido-Champion-Sound.mp3",
        cover: "images/timeless.jpeg",
        folder: "davido"
    },

    {
        title: "Story",
        artist: "Popcaan ft Davido",
        file: "Popcaan-Ft-Davido-Story.mp3",
        cover: "images/Popcaan-Ft-Davido-Story-art.jpg",
        folder: "davido"
    }
];

let ruger = [
    {
        title: "Asiwaju",
        artist: "Ruger",
        file: "Ruger-Asiwaju.mp3",
        cover: "images/Ruger-Asiwaju-artwork.jpg",
        folder: "ruger"
    },

    {
        title: "Dior",
        artist: "Ruger",
        file: "Ruger-Dior.mp3",
        cover: "images/Ruger-The-Second-Wave-EP-Art.jpg",
        folder: "ruger"
    },

    {
        title: "Girlfriend",
        artist: "Ruger",
        file: "Ruger-Girlfriend.mp3",
        cover: "images/Ruger-The-Second-Wave-EP-Art.jpg",
        folder: "ruger"
    },

    {
        title: "Ruger",
        artist: "Ruger",
        file: "Ruger-Ruger.mp3",
        cover: "images/Ruger-The-Second-Wave-EP-Art.jpg",
        folder: "ruger"
    },

    {
        title: "Snapchat",
        artist: "Ruger",
        file: "Ruger-Snapchat.mp3",
        cover: "images/Ruger-Pandemic-Art.jpg",
        folder: "ruger"
    }
];

let aryaStarr = [
    {
        title: "Ase",
        artist: "Arya Starr",
        file: "Arya-Starr-Ase.mp3",
        cover: "images/Ayra-Starr-Ase-Artwork.jpg",
        folder: "aryaStarr"
    },

    {
        title: "Bloody Samaritan",
        artist: "Arya Starr",
        file: "Arya-Starr-Bloody-Samaritan.mp3",
        cover: "images/Ayra-Starr-Bloody-Samaritan-Art.jpg",
        folder: "aryaStarr"
    },

    {
        title: "Vibes on Vibes",
        artist: "Arya Starr",
        file: "Ayra-Starr-I'm-Feeling-Vibes-on-Vibes.mp3",
        cover: "images/Ayra-Starr-Bloody-Samaritan-Art.jpg",
        folder: "aryaStarr"
    },

    {
        title: "Sability",
        artist: "Arya Starr",
        file: "Ayra-Starr-Sability.mp3",
        cover: "images/Ayra-Starr-Sability-Artwork.jpg",
        folder: "aryaStarr"
    },

    {
        title: "Love Don't Cost A Dime Re-up",
        artist: "Magixx ft Arya Starr",
        file: "Magixx-Ft-Ayra-Starr-Love-Don't-Cost-A-Dime-Remix.mp3",
        cover: "images/Magixx-Ft-Ayra-Starr-Love-Don't-Cost-A-Dime-Re-Up-Artwork.jpg",
        folder: "aryaStarr"
    }
];

let asake = [
    {
        title: "Amapiano",
        artist: "Asake ft Olamide",
        file: "Asake-Ft-Olamide-Amapiano.mp3",
        cover: "images/Asake-Ft-Olamide-Amapiano-Artwork.jpg",
        folder: "asake"
    },

    {
        title: "Omo Ope",
        artist: "Asake ft Olamide",
        file: "Asake-Ft-Olamide-Omo-Ope.mp3",
        cover: "images/Asake-Ft-Olamide-Omo-Ope-Artwork.jpg",
        folder: "asake"
    },

    {
        title: "Joha",
        artist: "Asake",
        file: "Asake-Joha.mp3",
        cover: "images/Asake-Mr-Money-With-The-Vibe-AlbumArtwork1.jpg",
        folder: "asake"
    },

    {
        title: "Peace Be Unto You-PBUY",
        artist: "Asake",
        file: "Asake-PBUY.mp3",
        cover: "images/Asake-Peace-Be-Unto-You-PBUY-Artwork.jpeg",
        folder: "asake"
    },

    {
        title: "Sunshine",
        artist: "Asake",
        file: "Asake-Sunshine.mp3",
        cover: "images/Asake-Work-Of-Art-AlbumArtwork1.jpg",
        folder: "asake"
    }
];

//Albums API Contents
let madeInLagos = [
    {
        title: "Ginger",
        artist: "Wizkid ft Burnaboy",
        file: "Wizkid-ft-Burna-Boy-Ginger.mp3",
        cover: "images/madeInLagos.jpeg",
        folder: "madeInLagos"
    },

    {
        title: "Blessed",
        artist: "Wizkid ft Damian Marley",
        file: "Wizkid-ft-Damian-Marley-Blessed.mp3",
        cover: "images/madeInLagos.jpeg",
        folder: "madeInLagos"
    },

    {
        title: "Piece of Me",
        artist: "Wizkid ft Ella Mai",
        file: "Wizkid-ft-Ella-Mai-Piece-of-Me.mp3",
        cover: "images/madeInLagos.jpeg",
        folder: "madeInLagos"
    },

    {
        title: "Smile",
        artist: "Wizkid ft HER",
        file: "Wizkid-ft-HER-Smile.mp3",
        cover: "images/madeInLagos.jpeg",
        folder: "madeInLagos"
    },

    {
        title: "Longtime",
        artist: "Wizkid ft Skepta",
        file: "Wizkid-ft-Skepta-Longtime.mp3",
        cover: "images/madeInLagos.jpeg",
        folder: "madeInLagos"
    },

    {
        title: "True Love",
        artist: "Wizkid ft Tay Iwar Projexx",
        file: "Wizkid-Ft-Tay-Iwar-Projexx-True-Love.mp3",
        cover: "images/madeInLagos.jpeg",
        folder: "madeInLagos"
    },

    {
        title: "Essence",
        artist: "Wizkid ft Tems",
        file: "Wizkid-ft-Tems-Essence.mp3",
        cover: "images/madeInLagos.jpeg",
        folder: "madeInLagos"
    },

    {
        title: "Grace",
        artist: "Wizkid",
        file: "Wizkid-Grace.mp3",
        cover: "images/madeInLagos.jpeg",
        folder: "madeInLagos"
    },

    {
        title: "Gyrate",
        artist: "Wizkid",
        file: "Wizkid-Gyrate.mp3",
        cover: "images/madeInLagos.jpeg",
        folder: "madeInLagos"
    },

    {
        title: "Mighty Wine",
        artist: "Wizkid",
        file: "Wizkid-Mighty-Wine.mp3",
        cover: "images/madeInLagos.jpeg",
        folder: "madeInLagos"
    },

    {
        title: "No Stress",
        artist: "Wizkid",
        file: "Wizkid-No-Stress.mp3",
        cover: "images/madeInLagos.jpeg",
        folder: "madeInLagos"
    },

    {
        title: "Reckless",
        artist: "Wizkid",
        file: "Wizkid-Reckless.mp3",
        cover: "images/madeInLagos.jpeg",
        folder: "madeInLagos"
    },

    {
        title: "Roma",
        artist: "Wizkid ft Terri",
        file: "Wizkid-Roma-ft-Terri.mp3",
        cover: "images/madeInLagos.jpeg",
        folder: "madeInLagos"
    },

    {
        title: "Sweet One",
        artist: "Wizkid",
        file: "Wizkid-Sweet-One.mp3",
        cover: "images/madeInLagos.jpeg",
        folder: "madeInLagos"
    }
];

let timeless = [
    {
        title: "Away",
        artist: "Davido",
        file: "Davido-Away.mp3",
        cover: "images/timeless.jpeg",
        folder: "timeless"
    },

    {
        title: "E Pain Me",
        artist: "Davido",
        file: "Davido-E-Pain-Me.mp3",
        cover: "images/timeless.jpeg",
        folder: "timeless"
    },

    {
        title: "Feel",
        artist: "Davido",
        file: "Davido-Feel.mp3",
        cover: "images/timeless.jpeg",
        folder: "timeless"
    },

    {
        title: "For The Road",
        artist: "Davido",
        file: "Davido-For-The-Road.mp3",
        cover: "images/timeless.jpeg",
        folder: "timeless"
    },

    {
        title: "BOP",
        artist: "Davido ft Dexta Daps",
        file: "Davido-Ft-Dexta-Daps-BOP.mp3",
        cover: "images/timeless.jpeg",
        folder: "timeless"
    },

    {
        title: "Kante",
        artist: "Davido ft Fave",
        file: "Davido-Ft-Fave-Kante.mp3",
        cover: "images/timeless.jpeg",
        folder: "timeless"
    },

    {
        title: "Champion Sound",
        artist: "Davido ft Focalistic",
        file: "Davido-Ft-Focalistic-Champion-Sound.mp3",
        cover: "images/timeless.jpeg",
        folder: "timeless"
    },

    {
        title: "Picasso",
        artist: "Davido ft Logo Olori",
        file: "Davido-Ft-Logo-Olori-Picasso.mp3",
        cover: "images/timeless.jpeg",
        folder: "timeless"
    },

    {
        title: "In The Garden",
        artist: "Davido ft Morravey",
        file: "Davido-Ft-Morravey-In-The-Garden.mp3",
        cover: "images/timeless.jpeg",
        folder: "timeless"
    },

    {
        title: "Keys",
        artist: "Davido ft Musa",
        file: "Davido-Ft-Musa-Keys.mp3",
        cover: "images/timeless.jpeg",
        folder: "timeless"
    },

    {
        title: "U - Juju",
        artist: "Davido ft Skepta",
        file: "Davido-Ft-Skepta-U-Juju.mp3",
        cover: "images/timeless.jpeg",
        folder: "timeless"
    },

    {
        title: "Na Money",
        artist: "Davido ft The Cavemen, Angelique Kidjo",
        file: "Davido-Ft-The-Cavemen-and-Angelique-Kidjo-Na-Money.mp3",
        cover: "images/timeless.jpeg",
        folder: "timeless"
    },

    {
        title: "Godfather",
        artist: "Davido",
        file: "Davido-Godfather.mp3",
        cover: "images/timeless.jpeg",
        folder: "timeless"
    },

    {
        title: "Legends Can Never Die-LCND",
        artist: "Davido",
        file: "Davido-LCND.mp3",
        cover: "images/timeless.jpeg",
        folder: "timeless"
    },

    {
        title: "No Competition",
        artist: "Davido ft Asake",
        file: "Davido-No-Competition-feat.Asake.mp3",
        cover: "images/timeless.jpeg",
        folder: "timeless"
    },

    {
        title: "Over Dem",
        artist: "Davido",
        file: "Davido-Over-Dem.mp3",
        cover: "images/timeless.jpeg",
        folder: "timeless"
    },

    {
        title: "Precision",
        artist: "Davido",
        file: "Davido-Precision.mp3",
        cover: "images/timeless.jpeg",
        folder: "timeless"
    }
];

// ✅ Serve Music API
app.get("/davido", (req, res) => {
    res.json(davido);
});

app.get("/ruger", (req, res) => {
    res.json(ruger);
});

app.get("/aryaStarr", (req, res) => {
    res.json(aryaStarr);
});

app.get("/asake", (req, res) => {
    res.json(asake);
});

app.get("/madeInLagos", (req, res) => {
    res.json(madeInLagos);
});

// ✅ Serve a specific song dynamically
app.get("/play/:artist/:song", (req, res) => {
    const { artist, song } = req.params;
    const songPath = path.join(__dirname, "music", artist, song);
    res.sendFile(songPath);
});

// ✅ Start the server
app.listen(Port, (err) => {
    if (err) {
        console.log("Server unable to run because it encountered a problem");
    } else {
        console.log(`✅ Server running on http://localhost:${Port}`);
        app.get('/', (req,res) => {
            res.send('Hello, World!')
        })
    }
});