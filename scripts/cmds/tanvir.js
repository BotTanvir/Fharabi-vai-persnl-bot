module.exports = {
 config: {
	 name: "tanvir",
	 version: "1.0",
	 author: "AceGun",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "Tanvir") {
 return message.reply({
 body: " 「❥︎----ღ᭄_ᴬˢˢᴬᴸᴬᴹᴼᴸᴬᴵᴷᵁᴹ ..\n❥︎----ღ᭄_  ᴮᴿᴼᵀᴴᴱᴿ❞࿐.🌴.\n𝐓𝐀𝐍𝐕𝐈𝐑 𝐀𝐇𝐌𝐄𝐃_🛑\n\n-𝐁𝐎𝐓 𝐎𝐖𝐍𝐄𝐑\n- 𝐓𝐀𝐍𝐕𝐈𝐑 𝐀𝐇𝐌𝐄𝐃(𝐃𝐈𝐏𝐓𝐎)」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/doMOOMF.mp4")
 });
 }
 }
}
