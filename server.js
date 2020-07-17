const express = require("express");
const { google } = require("googleapis");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  console.log("TEST", google.gmail);
  res.sendFile("/index.html", { root: __dirname });
});

app.post("/", async (req, res) => {
  const resp = await google.gmail.users.watch({
    userId: "sirgasheva17@gmail.com",
    requestBody: {
      // Replace with `projects/${PROJECT_ID}/topics/${TOPIC_NAME}`
      topicName: `projects/little-leo-tadpoles/topics/tadpolesGmailTrigger`
    }
  });
  console.log(resp.data);
  console.log("REQ", req);

  return res.send("success");
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
