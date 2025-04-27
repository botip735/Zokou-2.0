const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID |Zokou-MD-WHATSAPP-BOT;;;=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia09qN0xyMkJyaDFTOThJbFlpTG9MbzA4WDB3SU5pdm5iVUhEZWV0ZW5XVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU5hTWV3eHpJbEFySFBxeEJWajA5K1JPSlhCM25RQVQxcTVGbXk2SEdnbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0UEVPcERXb1BjMkRJWkl1K0xkWnhYM05MeDBEZ0ZWdjBPeEgvM2FGZWtnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUKzhmSzJ0eG95cWR5TCtXNFhlQzV2Y3JBTTQrbk44Kzg4MUNaV3hpekJvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1FRzd1MmQzMFJMTDJlTjgrNzAwSDJUbHEwR2hIa0oxYWxpL2NxeklZRVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjV5M29odGxzT3BYOGUwTUl6RVJ1Wlg2Ri9JdDkvVlY5YWx0YStiWGNFemc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEROa0JQOHdENVVCbVI1U09DSUZ5Q01vd3J5M2ZhZEU2NzEvOXdnNE9Gbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVXV2b0tOMmUwa2FYS2tzbWwxa2lBVXpUZytmYU9qL1NhU2Z2VW04MlpCZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJEQUptVHpqUmdQNlp1SkxkUVpWakU2Qm9DYlE0RkJ2Q0VWN1Nybmw5WnlZeUVFQjI5Y3o1M2dFV0pDdUs2ZGkxMjhMTW5HOEIvR0pOUGd2MmthOGl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDMsImFkdlNlY3JldEtleSI6InFBaEl0aUV0NFNhTGFTUTVRby8wY0V2T1IwMW1mMWsxYmpueUJmREk2WUk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IlNLVEZFSFA3IiwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJRWc9PSJ9LCJtZSI6eyJpZCI6IjE4MDk4MTIxNTY0OjI2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdlJfwnZSv8J2UsvCdlLDwnZSxIPCdlKvwnZSsIPCdlKzwnZSr8J2UovCflqTwn42DIiwibGlkIjoiNTE0NzE0MjQ5ODczMzg6MjZAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNUG40ZjBPRVBUY3VjQUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJvRFg2U1lVcUZodFRzWklJWnhKaW1FZ1k4VVlhZkVtbEdhUmhXZUhTT3dFPSIsImFjY291bnRTaWduYXR1cmUiOiI4VHJBUnlZUTBzNTQ2dm9aQlNJOGxBV0dWbjNzYThUWUxLNEl2eFBCMno2U05HbnVKRzNwTzg1bjJVRmZUa0NNWmljekdJcWVMeDhrcW1rRXZDK09oQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoidlQ1d2F4SFFkbzJ0WGFUUExWMWhBRjFCTVNLU05RNTFHcDlhTTF1NTVBQjFIVXFhdVdVdU8vam9EMzl0ZEVSRXAwTWZmalpic0lpQjhvR1VoWTNUaGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxODA5ODEyMTU2NDoyNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhQTEra21GS2hZYlU3R1NDR2NTWXBoSUdQRkdHbnhKcFJta1lWbmgwanNCIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDU3NzYyNDYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUDVOIn0=| 'zokk',
     ETAT:process.env.ETAT,
    PREFIXE: process.env.PREFIXE,•
    NOM_OWNER: process.env.NOM_OWNER || "Zokou-Md",
    NUMERO_OWNER : process.env.18098121564,              
    LECTURE_AUTO_STATUS: process.env.LECTURE_AUTO_STATUS || "non",
    TELECHARGER_AUTO_STATUS: process.env.TELECHARGER_AUTO_STATUS || 'non',
    MODE: process.env.MODE_PUBLIC,
    PM_PERMIT: process.env.PM_PERMIT || 'non',
    BOT : process.env.NOM_BOT || 'Zokou_MD',
    URL : process.env.LIENS_MENU || 'https://static.animecorner.me/2023/08/op2.jpg',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    //GPT : process.env.OPENAI_API_KEY,
    DP : process.env.STARTING_BOT_MESSAGE || 'oui',
    ATD : process.env.ANTI_DELETE_MESSAGE || 'non',            
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
