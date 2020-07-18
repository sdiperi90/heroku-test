const express = require("express");
const { google } = require("googleapis");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  request = {
    labelIds: ["INBOX"],
    topicName: "projects/little-leo-tadpoles/topics/tadpolesGmailTrigger"
  };
  let test = await google.gmail
    .users()
    .watch((userId = "sirgasheva17@gmail.com"), (body = request))
    .execute();
  console.log("TEST!!!", test);

  //   const oauth2Client = new google.auth.OAuth2(
  //     process.env.CLIENT_ID,
  //     process.env.CLIENT_SECRET
  //   );

  //   const gmail = await google.gmail({
  //     version: "v1",
  //     auth: oauth2Client
  //   });

  //   let resp = await gmail.users.watch({
  //     userId: "sirgasheva17@gmail.com",
  //     requestBody: {
  //       topicName: "projects/little-leo-tadpoles/topics/tadpolesGmailTrigger"
  //     },
  //     labelIds: [
  //       "CATEGORY_UPDATES",
  //       "DRAFT",
  //       "CATEGORY_PROMOTIONS",
  //       "CATEGORY_SOCIAL",
  //       "CATEGORY_FORUMS",
  //       "TRASH",
  //       "CHAT",
  //       "SPAM"
  //     ],
  //     labelFilterAction: "include"
  //   });
  //   console.log("TEST1", resp);
  //   console.log("TEST2", gmail);
  res.sendFile("/index.html", { root: __dirname });
});

app.post("/", async (req, res) => {
  request = {
    labelIds: ["INBOX"],
    topicName: "projects/little-leo-tadpoles/topics/tadpolesGmailTrigger"
  };
  let test = await google.gmail
    .users()
    .watch((userId = "sirgasheva17@gmail.com"), (body = request))
    .execute();
  console.log("TEST!!!", test);
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
