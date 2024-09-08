
<div style="text-align:center">
<img src="https://readme-typing-svg.demolab.com/?font=Inconsolata&weight=500&size=50&duration=4000&pause=300&color=A7A459&center=true&vCenter=true&multiline=true&repeat=false&random=false&width=1300&height=140&lines=Dispotify%201.0.3" width="100%" />
</div>

### ✨ Features:

- Get user's current Spotify listening activity.
- Get user info from Discord (display name, servers, avatar).

### 🖋️ Usage:
- Install module using `npm i dispotify`

```js
const discord = require('discord.js');
const Dispotify = require('dispotify');

const client = new discord.Client({
    intents: Object.keys(discord.GatewayIntentBits),
    partials: Object.keys(discord.Partials)
});

const dispotify = new Dispotify(client);

client.on("ready", async () => {
    const spotify = await dispotify.getUserSpotifyListening("123456789012345678");
    const userInfo = await dispotify.getUserInfo("123456789012345678");
    // 123456789012345678 is the user ID
    console.log(spotify, userInfo);
});

client.login("YOUR_DISCORD_BOT_TOKEN");
```

### 🛝 Examples:

- Data Examples:

### 🌎 Discord Data

```js 
{
  displayName: 'Lâsche',
  username: 'laschebest',
  id: '706521629181739018',
  avatar: 'https://cdn.discordapp.com/avatars/706521629181739018/55897ebe283b5c03a323fe5814724c33.webp?size=1024',
  createdAt: '2020-05-03T15:04:42.934Z',
  guilds: [
    {
      id: '1276930371509948437',
      name: 'Lunatix Development',
      guildInvite: 'https://discord.gg/lunatix', // Now works with vanity URL.
      userGuildName: 'Lâsche',
      userGuildAvatar: 'https://cdn.discordapp.com/avatars/706521629181739018/55897ebe283b5c03a323fe5814724c33.webp?size=1024'
    }
  ]
}
```

### 🎶 Spotify Data

```js
{
  song: 'Pofuduk',
  artist: 'Ezhel; Jugglerz',
  album: 'Pofuduk',
  albumUrl: 'https://i.scdn.co/image/ab67616d0000b273187cd86c8c5765ecec16e02f',
  timeRemaining: 121772, //ms
  timeElapsed: 21083 //ms
}
```

---

### Do not forget joining Lunatix Development. https://discord.gg/lunatix
