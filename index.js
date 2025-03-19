const express = require("express");
const path = require("path");

const app = express();
const Port = 3002;

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
        title: "Girlfriend",
        artist: "Ruger",
        file: "Ruger-Girlfriend.mp3",
        cover: "images/Ruger-The-Second-Wave-EP-Art.jpg",
        folder: "aryaStarr"
    },

    {
        title: "Ruger",
        artist: "Ruger",
        file: "Ruger-Ruger.mp3",
        cover: "images/Ruger-The-Second-Wave-EP-Art.jpg",
        folder: "aryaStarr"
    },

    {
        title: "Snapchat",
        artist: "Ruger",
        file: "Ruger-Snapchat.mp3",
        cover: "images/Ruger-Pandemic-Art.jpg",
        folder: "aryaStarr"
    }
];

// ✅ Serve Music API
app.get("/davido", (req, res) => {
    res.json(davido);
});

app.get("/ruger", (req, res) => {
    res.json(ruger);
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