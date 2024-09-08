import { ActivityType } from 'discord.js';

class Dispotify {
    constructor(client) {
        this.client = client;
    }

    async getUserSpotifyListening(id) {
        let spotifyData = null;
        await Promise.all(this.client.guilds.cache.map(async (guild) => {
            try {
                const member = await guild.members.fetch(id);
                if (member && member.presence) {
                    const presence = member.presence.activities.find(activity => activity.type === ActivityType.Listening && activity.name === 'Spotify');
                    if (presence) {
                        const song = presence.details;
                        const artist = presence.state;
                        const album = presence.assets ? presence.assets.largeText : 'Unknown album';
                        const albumUrl = presence.assets ? presence.assets.largeImageURL() : null;
                        const timeStart = presence.timestamps ? presence.timestamps.start : null;
                        const timeEnd = presence.timestamps ? presence.timestamps.end : null;
                        let timeElapsed = null;
                        let timeRemaining = null;
                        if (timeStart && timeEnd) {
                            const start = new Date(timeStart).getTime();
                            const end = new Date(timeEnd).getTime();
                            const now = Date.now();
                            timeElapsed = Math.floor(now - start);
                            timeRemaining = Math.floor(end - now);
                        }
                        spotifyData = { song, artist, album, albumUrl, timeRemaining, timeElapsed };
                    }
                }
            } catch (error) {
                throw new Error(`Error when fetching Spotify data. | discord.gg/lunatix`);
            }
        }));
        return spotifyData;
    }

    async getUserInfo(id) {
        let userInfo = null;
        let guildsList = [];
        
        await Promise.all(this.client.guilds.cache.map(async (guild) => {
            try {
                const member = await guild.members.fetch(id);
                if (member) {
                    guildsList.push({
                        id: guild.id,
                        name: guild.name,
                        guildInvite: guild.vanityURLCode ? "discord.gg/" + guild.vanityURLCode : "",
                        userGuildName: member.displayName ? member.displayName : member.user.username,
                        userGuildAvatar: member.user.displayAvatarURL({ dynamic: true, size: 1024 }),
                    });
                }
            } catch (error) {
                throw new Error(`User not found. | discord.gg/lunatix`);
            }
        }));

        if (guildsList.length > 0) {
            try {
                for (const [guildId, guild] of this.client.guilds.cache) {
                    try {
                        const member = await guild.members.fetch(id);
                        if (member) {
                            const presenceStatus = member.presence?.status || 'offline';
                
                            userInfo = {
                                displayName: member.user.globalName ? member.user.globalName + " " : member.displayName,
                                username: member.user.username,
                                status: presenceStatus,
                                id: member.id,
                                avatar: member.user.displayAvatarURL({ dynamic: true, size: 1024 }),
                                createdAt: member.user.createdAt,
                                guilds: guildsList
                            };
                
                            break;
                        }
                    } catch (error) {
                        throw new Error(`Error when fetching member. | discord.gg/lunatix`);
                    }
                }
                
            } catch (error) {
                throw new Error(`Error when fetching member. | discord.gg/lunatix`);
            }
        }

        return userInfo;
    }
}

export default Dispotify;
