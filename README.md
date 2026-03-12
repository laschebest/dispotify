<div align="center">

# dispotify

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=24&pause=1000&color=1ED760&center=true&vCenter=true&width=700&lines=Get+Spotify+activity+from+Discord+users;Fetch+Discord+user+information;Simple+Discord.js+utility+module;Built+for+bot+developers" />

<br />

![Node.js](https://img.shields.io/badge/Node.js-111111?style=for-the-badge&logo=node.js&logoColor=339933)
![Discord.js](https://img.shields.io/badge/Discord.js-202225?style=for-the-badge&logo=discord&logoColor=5865F2)
![Spotify](https://img.shields.io/badge/Spotify-121212?style=for-the-badge&logo=spotify&logoColor=1ED760)

<br />

<img src="https://visitor-badge.laobi.icu/badge?page_id=laschebest.dispotify&left_text=visitors" />
<img src="https://img.shields.io/github/stars/laschebest/dispotify?style=flat-square&color=1ED760" />
<img src="https://img.shields.io/github/last-commit/laschebest/dispotify?style=flat-square&color=f59e0b" />

</div>

---

## ✦ About

**dispotify**, Discord bot geliştiricileri için hazırlanmış küçük bir yardımcı kütüphanedir.

Bir kullanıcının:

- Discord bilgilerini
- Spotify dinleme aktivitesini

kolayca çekebilmeni sağlar.

---

## ✦ Features

- kullanıcının **Spotify dinlediği şarkıyı alma**
- **Discord kullanıcı bilgilerini alma**
- guild bilgilerini çekme
- avatar ve display name verisi
- bot geliştiricileri için kolay kullanım

---

## ✦ Installation

```bash
npm install dispotify
````

---

## ✦ Usage

```js
const discord = require('discord.js');
const Dispotify = require('dispotify');

const client = new discord.Client({
  intents: Object.keys(discord.GatewayIntentBits),
  partials: Object.keys(discord.Partials)
});

const dispotify = new Dispotify(client);

client.on("ready", async () => {

  const spotify = await dispotify.getUserSpotifyListening("USER_ID");
  const userInfo = await dispotify.getUserInfo("USER_ID");

  console.log(spotify, userInfo);

});

client.login("YOUR_DISCORD_BOT_TOKEN");
```

---

## ✦ Example Data

### Discord Data

```js
{
 displayName: 'Lâsche',
 username: 'laschebest',
 id: '706521629181739018',
 avatar: 'https://cdn.discordapp.com/...'
}
```

### Spotify Data

```js
{
 song: 'Pofuduk',
 artist: 'Ezhel; Jugglerz',
 album: 'Pofuduk',
 albumUrl: 'https://i.scdn.co/image/...',
 timeRemaining: 121772,
 timeElapsed: 21083
}
```
