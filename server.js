const express = require("express");
const { google } = require("googleapis");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET
  );
  const gmail = await google.gmail({
    version: "v1",
    auth: oauth2Client
  });
  let resp = await gmail.users.watch({
    userId: "sirgasheva17@gmail.com",
    requestBody: {
      topicName: "projects/little-leo-tadpoles/topics/tadpolesGmailTrigger"
    },
    labelIds: [
      "CATEGORY_UPDATES",
      "DRAFT",
      "CATEGORY_PROMOTIONS",
      "CATEGORY_SOCIAL",
      "CATEGORY_FORUMS",
      "TRASH",
      "CHAT",
      "SPAM"
    ],
    labelFilterAction: "include"
  });

  console.log("resp", resp);
  console.log("TEST", gmail);
  res.sendFile("/index.html", { root: __dirname });
});

app.post("/", async (req, res) => {
  const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET
  );
  const gmail = await google.gmail({
    version: "v3",
    auth: oauth2Client
  });
  let resp = await gmail.users.watch({
    userId: "sirgasheva17@gmail.com",
    requestBody: {
      topicName: "projects/little-leo-tadpoles/topics/tadpolesGmailTrigger"
    },
    labelIds: [
      "CATEGORY_UPDATES",
      "DRAFT",
      "CATEGORY_PROMOTIONS",
      "CATEGORY_SOCIAL",
      "CATEGORY_FORUMS",
      "TRASH",
      "CHAT",
      "SPAM"
    ],
    labelFilterAction: "include"
  });

  console.log(resp.data);
  console.log("REQ", req);

  return res.send("success");
});

app.post("/", async (req, res) => {
  const gmail = await google.gmail({
    version: "v1",
    auth: process.env.API_KEY
  });
  await gmail.users
    .watch({
      userId: "sdiperi17@gmail.com",
      requestBody: {
        topicName: "projects/little-leo-tadpoles/topics/tadpolesGmailTrigger"
      },
      labelIds: [
        "CATEGORY_UPDATES",
        "DRAFT",
        "CATEGORY_PROMOTIONS",
        "CATEGORY_SOCIAL",
        "CATEGORY_FORUMS",
        "TRASH",
        "CHAT",
        "SPAM"
      ],
      labelFilterAction: "exclude"
    })
    .then(function(res) {
      console.log("DATA1", res.data);
    })
    .catch(function(err) {
      console.log(err);
    });
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
