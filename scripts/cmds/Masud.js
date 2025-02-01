const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
config: {
  name: "Masud",
  aurthor:"Tokodori",// Convert By Goatbot Tokodori 
   role: 0,
  shortDescription: " ",
  longDescription: "",
  category: "admin",
  guide: "{pn}"
},

  onStart: async function ({ api, event }) {
  try {
    const ownerInfo = {
      name: '𝐌𝐀𝐒𝐔𝐃 😂 ',
      gender: '𝐌𝐀𝐒𝐔𝐃 𝐀𝐋𝐎𝐌 😂',
      age: '𝐌 𝐅𝐎𝐑 𝐌𝐀𝐒𝐔𝐃 𝐕𝐀𝐈 ',
      height: ' 𝐆𝐀𝐍𝐆𝐒𝐓𝐄𝐑 𝐌𝐀𝐒𝐔𝐃',
      facebookLink: '𝐒𝐎𝐇𝐀𝐍 𝐕𝐀𝐈 😂😂',
      nick: '(𝐌𝐀𝐒𝐔𝐃 𝐀𝐋𝐎𝐌)'
    };

    const bold = 'https://i.imgur.com/Rhm75Rz.mp4'; // Replace with your Google Drive videoid link https://drive.google.com/uc?export=download&id=here put your video id

    const tmpFolderPath = path.join(__dirname, 'tmp');

    if (!fs.existsSync(tmpFolderPath)) {
      fs.mkdirSync(tmpFolderPath);
    }

    const videoResponse = await axios.get(bold, { responseType: 'arraybuffer' });
    const videoPath = path.join(tmpFolderPath, 'owner_video.mp4');

    fs.writeFileSync(videoPath, Buffer.from(videoResponse.data, 'binary'));

    const response = `●❯────────────────❮●\n

🚫__: ${ownerInfo.name}
🚫__: ${ownerInfo.gender}
🚫__: ${ownerInfo.age}
🚫__: ${ownerInfo.height}
🚫__: ${ownerInfo.facebookLink}
𝐍𝐢𝐜𝐤 𝐍𝐚𝐦𝐞 𝐨𝐟 𝐌𝐚𝐬𝐮𝐝: ${ownerInfo.nick}\n
●❯────────────────❮●`;


    await api.sendMessage({
      body: response,
      attachment: fs.createReadStream(videoPath)
    }, event.threadID, event.messageID);

    if (event.body.toLowerCase().includes('ownerinfo')) {
      api.setMessageReaction('🚀', event.messageID, (err) => {}, true);
    }
  } catch (error) {
    console.error('Error in ownerinfo command:', error);
    return api.sendMessage('An error occurred while processing the command.', event.threadID);
  }
},
};
