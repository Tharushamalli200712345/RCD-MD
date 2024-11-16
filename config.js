//RCD code
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUhPYXhrNFE5NlZ6MCtsY0tNd0dWY1lCdUZucUp1YnptYU5IWkk4N2YyQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaDdvenFTaTlybWNMc2s1d3Y3cDRXSHcyMTgzNmY5eWs5UzJSS0trWTZWZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvTW5CSE5sYlhPS3gvV3dPN0ZjSDNtRHFDV0tiOG03bE9PVXRPZ3p0QUU0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4OE1qcUJIKys2NnRRczdvc3pLYUovV2R4RzRQQXdQVFdoSE1Xbzdnc21NPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFEUEx5NWk3cVgxMFMvbVlVbmN1Sm1wbWdHQ0plWFJJM0ZQZ0NBZ1lmVkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJnVWVqNzg3Mkgwek4ybnhtRGhxZFVQVklRY0xibEhUc2IwUUVwZE9JU0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid01WNmpnQTJDOWl3Qm00OTRzY3VEWTlOWTJ2K29lQ09jOUlGTWRiQ01tYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVGF2SHozUWQ2TWtPL09obEh2M0Nsa1lhWndvWUQ4MkszTXdXTDRMR0IxST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZnSWNkandpZ2xiZW5HM3IrSGFzblR0ZW1ONXdmZWl6NUFPejZKNEpwaEtETlZlWlREaWZKeVFKZFpneE1Jcng0b3FJOHFrZ0l0a0xKcStJNFRaRWlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzAsImFkdlNlY3JldEtleSI6Ik11cmlUU08vY3hJZVJOeGovbmFwMWx3OVBySXhHUUloLzEwSElGR2FKMUE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MTY4NDY2MTZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMkY2QTg2REY4RjQ5OTk4Njk2MUU4NzhDOTMxQUM3OUMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMTc2MTkwOH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiVnpRYk54b0hUOG1tTEhVYnNyaklKQSIsInBob25lSWQiOiI1NTI2MjExYi1kNzJmLTRiYmMtYjA5Yy04YTM5YzdlMmU1NWMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTlFLQzlNOS9naVVYVFMwc3F1TDltM1JCdUZJPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhKUktmZXV2NjhpZEJZL05UcGpIeXhOTnd5Zz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiIzOEZTRzNYUCIsIm1lIjp7ImlkIjoiOTQ3MTY4NDY2MTY6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZCC77y577yi77yl77yyIPCdkLEg8J2Qk++8qO+8oe+8su+8te+8t++8oSDwnZCI77ykIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOTDE2WVFCRU9TdDRya0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIxTmdjTmEwOXc2aEhjSHRpN0VrOXFRM2RUWXV6WGtFMW5tNXlLbGU5K2dnPSIsImFjY291bnRTaWduYXR1cmUiOiJKdU5FRko1eHVaVU5wTGZseTJzSnVqK2p0NzI4dEtlWm5IeCtwSjY4ODRiYnUxN1JxdmlZajAyOElkK0Zaays2bUlJWHVJQXIxd1dJamhOY0pQMlNCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNnV3a3FzbVJpU0RLc1phQnE3M3VOSUlldk1RWXEyWE9vYjVmRjI3Mys5bFdXY1MzNDIwM3VzeklKeXZhZDJsYmhZWkNzTzFBNW5OcDNZM3o0K2s4alE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcxNjg0NjYxNjoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRUWUhEV3RQY09vUjNCN1l1eEpQYWtOM1UyTHMxNUJOWjV1Y2lwWHZmb0kifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzE3NjE5MDUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSlY3In0=";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "94716846616";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://i.postimg.cc/FssKzLK7/20240622-140407.jpg,https://i.postimg.cc/FssKzLK7/20240622-140407.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://i.postimg.cc/3wrf9ccK/IMG-20240804-WA0000.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || ".",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`RCD-MD`",
  author: process.env.PACK_AUTHER || "RCD-MD",
  packname: process.env.PACK_NAME || "RCD",
  botname: process.env.BOT_NAME || "RCD-MD",
  ownername: process.env.OWNER_NAME || "𝐂𝐘𝐁𝐄𝐑 𝐱 𝐓𝐇𝐀𝐑𝐔𝐖𝐀 𝐈𝐃",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u/161";
global.website = process.env.GURL || "https://chat.whatsapp.com/Cry8eSzZqW27t9H8uOcRIR";
global.devs = "94789958225";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 2;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "null";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
