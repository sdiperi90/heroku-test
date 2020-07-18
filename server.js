const express = require("express");
const { google } = require("googleapis");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  console.log("TEST", google.gmail);
  res.sendFile("/index.html", { root: __dirname });
});

app.post("/", async (req, res) => {
  const gmail = await google.gmail({ version: "v1", auth });
  let resp = await gmail.users.watch({
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
  });

  console.log(resp.data);
  console.log("REQ", req);

  return res.send("success");
});

app.post("/", async (req, res) => {
  const gmail = await google.gmail({ version: "v1", auth: auth });
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
