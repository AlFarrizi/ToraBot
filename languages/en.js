const language = {
    loadevent: "Loading player event",
    loadcmd: "Command loaded.",
    ready: "Connected successfully.",
    loadslash: "Application commands loaded successfully [/].",
    error1: "The bot token you provided is invalid or the bot application is not started!",
    error2: "Please set your bot token in token.js or in your .env file in your project directory.",
    loadclientevent: "Client event loaded.",
    embed1: "You must assign the <@&{djRole}> (DJ) role in your server to use this command. Users without this role cannot use it.",
    message1: "You are not connected to a voice channel. ❌",
    message2: "You are not in the same voice channel as me. ❌",
    message3: "Missing permission. ❌",
    msg4: "Something went wrong.",
    msg5: "No music is currently playing. ❌",
    msg6: "Currently playing music",
    msg7: "Please type the playlist name.",
    msg8: "Live stream track detected, no duration can be shown. 🕐",
    msg9: "Successfully. Data updated.",
    msg10: "You don’t have a playlist with this name. ❌",
    msg11: "Track already exists in this playlist. ❌",
    msg12: "Added to your playlist.",
    msg13: "You do not have a playlist with this name. ❌",
    msg14: "You already have a playlist with this name. ❌",
    msg15: "Playlist creation successful.",
    msg16: "Error occurred while loading playlist: ",
    msg17: "Playlist loaded successfully: ",
    msg18: "You don’t have a playlist saved with this name. ❌",
    msg19: "Currently playing: **{track?.title}** - Channel: **{queue?.connection.channel.name}**",
    msg20: "Queue ended. The bot has left the voice channel. Bye!",
    msg21: "Connection lost as I was disconnected from the voice channel. ❌",
    msg22: "There was a problem connecting to the voice channel. ❌ Is someone blocking me?",
    msg23: "No previous track found. ❌",
    msg24: "Now playing: **{queue.previousTracks[1].title}** ✅",
    msg25: "Bot Statistics",
    msg26: "Refresh",
    msg27: "**⏳ Queue Ended**",
    msg28: "**✅ Data Updated.**",
    msg29: "Queue is empty. ❌",
    msg30: "Queue has been cleared. 🗑️",
    msg31: "If you do not set a DJ role, you cannot use commands. ❌",
    msg32: "DJ role successfully set: **{data}**",
    msg33: "DJ role successfully deleted.",
    msg34: "DJ role is not set yet.",
    msg35: "Please enter a valid filter name. ❌\nValid filters: {filters}",
    msg36: "Could not find a filter with this name. ❌\nValid filters: {filters}",
    msg37: "Filter: **{filter}**, Status: **{status}**\n**Note**: If the music sounds distorted, please disable the filter.",
    msg38: "Currently playing music has been paused. ⏸️",
    msg39: "Music resumed. ▶️",
    msg40: "Music already paused. ❌",
    msg41: "Music is already playing. ❌",
    msg42: "Paused",
    msg43: "Resumed",
    msg44: "Queue",
    msg45: "Loop Queue",
    msg46: "Loop ended",
    msg47: "Playlist saved.",
    msg48: "Music skipped. ✅",
    msg49: "Ping Message",
    msg50: "Message Latency",
    msg51: "API Latency",
    msg52: "You have no saved playlists. ❌",
    msg53: "You don’t have permission to play this playlist. ❌",
    msg54: "You don’t have a playlist with this name. ❌",
    msg55: "You are not in a voice channel. ❌",
    msg56: "Creating playlist...",
    msg57: "**{interaction.member.id}** added track **{music_filter.length}** to the queue. ✅",
    msg58: "No playlist with this name. ❌",
    msg59: "Type a track name to search. ❌",
    msg60: "No search results found. ❌",
    msg61: "Loading music...",
    msg62: "Added to queue. ✅",
    msg63: "Queue is empty. ❌",
    msg64: "Server Music List",
    msg65: "Currently Playing",
    msg66: "Requested by",
    msg67: "Page",
    msg68: "Command cancelled.",
    msg69: "Server Music List - Ended. ✅",
    msg70: "Your command has timed out, use `/queue` to check the current queue.",
    msg71: "Something went wrong. ❌ Looks like you didn’t stop the music before.",
    msg72: "Next...",
    msg73: "Please enter a valid song name. ❌",
    msg74: "No search results found. ❌",
    msg75: "Music you’re looking for",
    msg76: "Search results for",
    msg77: "Cancelled music search. ✅",
    msg78: "Music search timed out. ❌",
    msg79: "Added to queue. ✅",
    msg80: "Stream ended. ❌",
    msg81: "Queue duration limit exceeded. ❌"
  };
  
  module.exports = language;
  